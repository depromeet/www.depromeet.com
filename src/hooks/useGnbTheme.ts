import { useEffect, useState } from 'react';

/**
 * GNB가 입을 색 모드. **뒤에 깔린 배경**을 가리키는 이름이지 글자색이 아니다.
 * `light` = 밝은 배경 → 어두운 잉크(Figma `Mode=Default`),
 * `dark` = 어두운 배경 → 흰 잉크(Figma `Mode=Dark`).
 */
export type GnbTheme = 'light' | 'dark';

/** 섹션이 자기 배경을 알리는 속성. `<section data-gnb-theme="light">` 처럼 쓴다. */
export const GNB_THEME_ATTRIBUTE = 'data-gnb-theme';

/**
 * GNB 띠(높이 80px)의 세로 중앙. 로고·메뉴·CTA가 실제로 겹치는 높이라, 이 지점을
 * 지나는 섹션의 배경이 곧 GNB가 얹히는 배경이다.
 */
const PROBE_Y = 40;

const isGnbTheme = (value: string | null): value is GnbTheme =>
  value === 'light' || value === 'dark';

/**
 * GNB 뒤에 실제로 깔린 섹션을 따라 색 모드를 고른다.
 *
 * 라우트로 모드를 정하면 안 된다 — 한 페이지 안에서 배경이 번갈아 나오기 때문이다.
 * 소개(`/`)는 히어로·브랜딩·세션 프리뷰가 네이비고 Stats·프로젝트·FAQ·후원사가 밝으며,
 * 모집안내(`/recruit`)는 히어로·세션이 네이비고 인재상·모집일정이 밝다. 라우트 기준으로
 * 흰 잉크를 고정하면 밝은 섹션 위에서 로고와 메뉴가 배경에 묻힌다.
 *
 * 디자이너 확정: "화면 자체의 백그라운드가 화이트일 때만 디폴트 모드를 넣는다."
 *
 * `fallback`은 SSR과 마운트 직전에 쓰는 초기값이다(`_app`에 `getInitialProps`가 있어 모든
 * 페이지가 요청마다 SSR된다). 각 페이지 최상단 섹션의 배경과 같게 주면 첫 페인트가
 * 이미 정답이라 깜빡임이 없고, JS가 죽어도 최상단에서는 올바른 색이 남는다.
 */
export function useGnbTheme(fallback: GnbTheme): GnbTheme {
  const [theme, setTheme] = useState<GnbTheme>(fallback);

  useEffect(() => {
    let frame = 0;

    const resolve = () => {
      frame = 0;

      // 섹션끼리 겹치지 않으므로 탐침선에 걸리는 것은 최대 하나다. 문서 순서상 마지막
      // 일치를 쓰면 섹션이 중첩되더라도 가장 안쪽 것이 이긴다.
      let matched: GnbTheme | null = null;

      document.querySelectorAll<HTMLElement>(`[${GNB_THEME_ATTRIBUTE}]`).forEach(section => {
        const { top, bottom } = section.getBoundingClientRect();
        if (top > PROBE_Y || bottom <= PROBE_Y) return;

        const value = section.getAttribute(GNB_THEME_ATTRIBUTE);
        if (isGnbTheme(value)) matched = value;
      });

      // 섹션 사이 빈틈이나 배경을 선언하지 않은 페이지에서는 라우트 기본값으로 돌아간다.
      setTheme(matched ?? fallback);
    };

    const schedule = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(resolve);
    };

    resolve();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, [fallback]);

  return theme;
}
