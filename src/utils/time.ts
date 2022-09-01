export const DAY_TO_SECONDS = 86400;
export const HOUR_TO_SECONDS = 3600;
export const MINUTE_TO_SECONDS = 60;

export const DAY_TO_HOUR = 24;
export const HOUR_TO_MINUTE = 60;

/**
 *
 * @param tiemSeconds tiemSeconds는 milliseconds / 1000를 의미합니다.
 * @return 받은 초를 통해서 day로 계산해서 반환합니다.
 */
export function getDayByTimeSeconds(tiemSeconds: number) {
  return Math.floor(tiemSeconds / DAY_TO_SECONDS);
}

/**
 *
 * @param tiemSeconds tiemSeconds는 milliseconds / 1000를 의미합니다.
 * @return 받은 초를 통해서 시간 계산해서 반환합니다.
 */
export function getHourByTimeSeconds(tiemSeconds: number) {
  return Math.floor((tiemSeconds / HOUR_TO_SECONDS) % DAY_TO_HOUR);
}

/**
 *
 * @param tiemSeconds tiemSeconds는 milliseconds / 1000를 의미합니다.
 * @return 받은 초를 통해서 분 계산해서 반환합니다.
 */
export function getMinuteByTimeSeconds(tiemSeconds: number) {
  return Math.floor((tiemSeconds / MINUTE_TO_SECONDS) % HOUR_TO_MINUTE);
}

/**
 *
 * @param tiemSeconds tiemSeconds는 milliseconds / 1000를 의미합니다.
 * @return 받은 초를 통해서 초 계산해서 반환합니다.
 */
export function getSecondsByTimeSeconds(tiemSeconds: number) {
  return Math.floor(tiemSeconds % MINUTE_TO_SECONDS);
}

/**
 *
 * @param time day, hour, min, sec
 * @return day, hour, min, sec을 각각 DD, hh, mm, ss 형태로 반환해줍니다.
 */
export function getTimeStringFormater(time: number) {
  return time >= 10 ? `${time}` : `0${time}`;
}

/**
 *
 * @returns hh:mm:ss 형태로 반환합니다.
 */
export function getTimerString(hour: number, min: number, sec: number) {
  const hourString = getTimeStringFormater(hour);
  const minString = getTimeStringFormater(min);
  const secString = getTimeStringFormater(sec);

  return `${hourString}:${minString}:${secString}`;
}
