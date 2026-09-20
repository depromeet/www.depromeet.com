/**
 * KST(Asia/Seoul) 기준 날짜 표시 유틸.
 *
 * 규칙 (docs/19th/migration-plan.md §0.5)
 * - 시각은 `+09:00` ISO 문자열, 달력 날짜는 `'YYYY-MM-DD'`(KST 자정으로 해석)로 저장한다.
 * - 모든 종료 시각은 **exclusive**다. 화면에 보여줄 때만 `displayEnd()`로 1ms 당긴다.
 * - `Date#getDay`·`toLocaleDateString`을 직접 쓰지 않는다. 실행 환경 타임존이 KST가 아니면
 *   요일이 하루 밀린다(미주 지역 사용자·CI).
 *
 * 이 모듈은 `utils/utils.ts`·`constant/common.ts`를 import하지 않는다(둘은 서로 순환 import 중).
 */

const TIME_ZONE = 'Asia/Seoul';
const KST_OFFSET_MS = 9 * 60 * 60 * 1000;

/** `'YYYY-MM-DD'`(KST 자정) 또는 `'+09:00'` ISO 문자열 */
export type DateInput = string;

export type DateFormat =
  /** `10.02` */
  | 'dot'
  /** `10 . 02 (금)` */
  | 'step'
  /** `2026.10.02(금)` */
  | 'period'
  /** `목요일` */
  | 'weekdayLong';

const DATE_ONLY_PATTERN = /^(\d{4})-(\d{1,2})-(\d{1,2})$/;

const numericFormatter = new Intl.DateTimeFormat('ko-KR', {
  timeZone: TIME_ZONE,
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
});

const weekdayShortFormatter = new Intl.DateTimeFormat('ko-KR', {
  timeZone: TIME_ZONE,
  weekday: 'short',
});

const weekdayLongFormatter = new Intl.DateTimeFormat('ko-KR', {
  timeZone: TIME_ZONE,
  weekday: 'long',
});

function toDate(input: DateInput): Date {
  // `2026-10-2`처럼 0을 채우지 않은 값도 KST 자정으로 해석한다. 그냥 넘기면
  // `new Date('2026-10-2')`가 **실행 환경 타임존**으로 파싱돼 날짜가 하루 밀린다.
  const dateOnly = DATE_ONLY_PATTERN.exec(input);
  const normalized = dateOnly
    ? `${dateOnly[1]}-${dateOnly[2].padStart(2, '0')}-${dateOnly[3].padStart(
        2,
        '0'
      )}T00:00:00+09:00`
    : input;

  const date = new Date(normalized);

  if (Number.isNaN(date.getTime())) {
    throw new Error(`[utils/date] 유효하지 않은 날짜 입력입니다: ${input}`);
  }

  return date;
}

function getNumericParts(date: Date) {
  const parts = numericFormatter.formatToParts(date);
  const pick = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find(part => part.type === type)?.value ?? '';

  return { year: pick('year'), month: pick('month'), day: pick('day') };
}

/**
 * ICU 버전에 따라 standalone 요일이 `금` 또는 `(금)`으로 나오는 차이를 흡수한다.
 */
function getWeekday(date: Date, width: 'short' | 'long') {
  const formatter = width === 'short' ? weekdayShortFormatter : weekdayLongFormatter;
  return formatter.format(date).replace(/[^가-힣]/g, '');
}

/**
 * KST 기준 날짜 구성요소. 명명된 포맷으로 만들 수 없는 문구
 * (`10월 8일`, `2026.10.02 - 10.08` 등)를 조립할 때 쓴다.
 *
 * @example
 * const { month, day } = getKoreanDateParts('2026-10-08');
 * `${Number(month)}월 ${Number(day)}일`; // '10월 8일'
 */
export function getKoreanDateParts(input: DateInput) {
  const date = toDate(input);

  return {
    ...getNumericParts(date),
    weekdayShort: getWeekday(date, 'short'),
    weekdayLong: getWeekday(date, 'long'),
  };
}

/**
 * KST 기준으로 날짜를 표시 문자열로 변환한다.
 *
 * @example
 * formatKoreanDate('2026-10-02T00:00:00+09:00', 'step'); // '10 . 02 (금)'
 * formatKoreanDate('2027-01-02', 'dot'); // '01.02'
 */
export function formatKoreanDate(input: DateInput, format: DateFormat): string {
  const date = toDate(input);

  if (format === 'weekdayLong') {
    return getWeekday(date, 'long');
  }

  const { year, month, day } = getNumericParts(date);

  switch (format) {
    case 'dot':
      return `${month}.${day}`;
    case 'step':
      return `${month} . ${day} (${getWeekday(date, 'short')})`;
    case 'period':
      return `${year}.${month}.${day}(${getWeekday(date, 'short')})`;
  }
}

/**
 * exclusive 종료 시각을 화면 표시용 시각(1ms 이전)으로 바꾼다.
 *
 * @example
 * displayEnd('2026-10-09T00:00:00+09:00'); // '2026-10-08T23:59:59.999+09:00'
 */
export function displayEnd(exclusiveEnd: DateInput): string {
  const lastMoment = new Date(toDate(exclusiveEnd).getTime() - 1 + KST_OFFSET_MS);
  return `${lastMoment.toISOString().replace('Z', '')}+09:00`;
}
