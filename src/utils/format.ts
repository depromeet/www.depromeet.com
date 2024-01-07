export function formatSingleDigit(number: number) {
  if (number < 0) {
    return number.toString();
  }

  if (!Number.isInteger(number)) {
    return number.toString();
  }

  if (number < 10) {
    return '0' + number;
  }

  return number.toString();
}
