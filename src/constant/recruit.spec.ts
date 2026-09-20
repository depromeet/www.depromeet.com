import { describe, expect, it } from 'vitest';

import { RECRUIT } from '~/constant/recruit';

const DAY_MS = 24 * 60 * 60 * 1000;
const at = (value: string) =>
  new Date(/^\d{4}-\d{2}-\d{2}$/.test(value) ? `${value}T00:00:00+09:00` : value).getTime();

/** T1-c (docs/19th/migration-plan.md §8.1) — 설정값 정합성 */
describe('constant/recruit — 설정 정합성', () => {
  it('🟢 positions의 id가 중복되지 않는다.', () => {
    const ids = RECRUIT.positions.map(position => position.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('🟢 positions 순서가 시안(Design·Android·iOS·Web·Server)과 같다.', () => {
    expect(RECRUIT.positions.map(position => position.id)).toEqual([
      'design',
      'android',
      'ios',
      'web',
      'server',
    ]);
  });

  it('🟢 sessions가 17주이고, 날짜가 오름차순 7일 간격이다.', () => {
    expect(RECRUIT.sessions).toHaveLength(17);

    RECRUIT.sessions.slice(1).forEach((session, index) => {
      expect(at(session.date) - at(RECRUIT.sessions[index].date)).toBe(7 * DAY_MS);
    });
  });

  it('🟢 첫 단계(서류 발표)는 서류 접수 마감 이후에 온다.', () => {
    expect(at(RECRUIT.steps[0].start)).toBeGreaterThanOrEqual(at(RECRUIT.applyWindow.end));
  });

  it('🟢 모든 end가 start보다 뒤에 있다.', () => {
    expect(at(RECRUIT.applyWindow.end)).toBeGreaterThan(at(RECRUIT.applyWindow.start));

    RECRUIT.steps.forEach(step => {
      if (step.end) expect(at(step.end)).toBeGreaterThan(at(step.start));
    });
  });

  it('🟢 단계가 시간순으로 정렬되어 있다.', () => {
    RECRUIT.steps.slice(1).forEach((step, index) => {
      expect(at(step.start)).toBeGreaterThan(at(RECRUIT.steps[index].start));
    });
  });

  it('🟢 정규 세션은 서류 마감 이후에 시작한다.', () => {
    expect(at(RECRUIT.sessions[0].date)).toBeGreaterThan(at(RECRUIT.applyWindow.end));
  });

  /**
   * `utils/date.ts`는 `2026-10-2`처럼 0을 채우지 않은 값도 받아주지만(방어), 설정에는
   * 넣지 않는다. 위 `at()`을 비롯해 달력 날짜를 문자열로 비교하는 코드가 전부 깨진다.
   */
  it('🟢 달력 날짜는 모두 0을 채운 YYYY-MM-DD 형식이다.', () => {
    const calendarDates = [
      ...RECRUIT.sessions.map(session => session.date),
      ...RECRUIT.steps.flatMap(step => [step.start, step.end]),
    ].filter((value): value is string => typeof value === 'string' && !value.includes('T'));

    expect(calendarDates.length).toBeGreaterThan(0);
    calendarDates.forEach(value => expect(value).toMatch(/^\d{4}-\d{2}-\d{2}$/));
  });

  it('🟢 소개 페이지용 목록(sessionPreview·sponsors)이 비어 있지 않고 id/이름이 유일하다.', () => {
    expect(RECRUIT.sessionPreview.length).toBeGreaterThan(0);
    expect(RECRUIT.sponsors.length).toBeGreaterThan(0);

    const previewIds = RECRUIT.sessionPreview.map(item => item.id);
    expect(new Set(previewIds).size).toBe(previewIds.length);

    const sponsorNames = RECRUIT.sponsors.map(item => item.name);
    expect(new Set(sponsorNames).size).toBe(sponsorNames.length);
  });

  it('🟢 이미지 경로는 모두 /images/ 로 시작한다.', () => {
    [
      ...RECRUIT.sessionPreview.map(item => item.image),
      ...RECRUIT.sponsors.map(item => item.logo),
      ...RECRUIT.positions.map(item => item.image),
    ].forEach(path => expect(path).toMatch(/^\/images\//));
  });

  it('🟢 시각 값은 +09:00 오프셋을 명시한다.', () => {
    [RECRUIT.applyWindow.start, RECRUIT.applyWindow.end].forEach(value =>
      expect(value).toMatch(/\+09:00$/)
    );
  });
});

/**
 * FAQ 문구는 날짜를 설정에서 파생해 조립한다(§15.6).
 * 운영진이 확정한 문장과 글자 단위로 같은지 고정해 둔다.
 */
describe('constant/recruit — FAQ 확정 문구', () => {
  const answerOf = (question: string) =>
    RECRUIT.faq.find(item => item.question === question)?.answer;

  it('🟢 지원 결과 안내 날짜가 10월 8일 마감 / 10월 12일 발표다.', () => {
    expect(answerOf('지원 결과는 언제, 어디서 확인 가능한가요?')).toBe(
      '지원 결과는 10월 8일 서류 지원 마감 후, 10월 12일 중으로 결과 메일이 발송될 예정입니다.'
    );
  });

  it('🟢 인터뷰 일정이 10월 17일(토) ~ 10월 18일(일)이다.', () => {
    expect(answerOf('인터뷰는 언제 진행되나요?')).toBe(
      '인터뷰는 10월 17일(토) ~ 10월 18일(일) 이틀간 10시 ~ 17시 중으로 진행될 예정입니다.'
    );
  });

  it('🟢 최종 결과 발송일이 10월 22일(목)이다.', () => {
    expect(answerOf('최종 결과는 언제 받아볼 수 있나요?')).toBe(
      '인터뷰 내용을 꼼꼼히 확인한 후, 10월 22일(목)에 차례로 발송될 예정입니다.'
    );
  });

  it('🟢 활동 기간이 10월 31일(토) OT ~ 2027년 2월 20일이다.', () => {
    expect(answerOf('활동 기간은 어떻게 되나요?')).toBe(
      '디프만 19기는 10월 31일(토) OT를 시작으로 17주 동안 진행되며, 마지막 세션은 2027년 2월 20일에 종료됩니다.'
    );
  });

  it('🟢 팀 수가 7개다.', () => {
    expect(answerOf('디프만 19기의 팀 구성이 궁금해요')).toContain('총 7개의 팀');
  });

  it('🟢 활동비 문구는 18기 그대로 유지한다.', () => {
    expect(answerOf('활동비는 얼마인가요?')).toBe(
      '활동비는 회비와 보증금으로 이루어져 있으며 아직 논의중에 있습니다.'
    );
  });

  it('🟢 FAQ 어디에도 이전 기수 표기가 남아 있지 않다.', () => {
    RECRUIT.faq.forEach(item => {
      expect(`${item.question} ${item.answer}`).not.toMatch(/1[0-8]기/);
    });
  });
});
