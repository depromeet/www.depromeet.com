export function formatSingleDigit(number: number) {
  if (number < 0 || !Number.isInteger(number)) {
    throw new Error('잘못된 입력입니다. 양수 정수만 처리 가능합니다.');
  }

  if (number < 10) {
    return '0' + number;
  }

  return number.toString();
}
