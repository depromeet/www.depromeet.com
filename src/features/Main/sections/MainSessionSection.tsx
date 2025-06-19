import React, { useEffect, useRef, useState } from 'react';
import { css } from '@emotion/react';

import { SESSIONS } from '~/constant/session';
import { sectionBg } from '~/styles/background';
import { colors } from '~/styles/colors';
import { mediaQuery } from '~/styles/media';
import { pxToRem } from '~/styles/style.utils';
import { theme } from '~/styles/theme';

import SessionCard from '../components/SessionCard';

export const MainSessionSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isScrollable, setScrollable] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setScrollable(entry.isIntersecting); // true or false 자동 전환
      },
      {
        threshold: 0.9,
        root: null,
      }
    );

    const sectionEl = sectionRef.current;
    if (sectionEl) observer.observe(sectionEl);

    return () => {
      if (sectionEl) observer.unobserve(sectionEl);
    };
  }, []);

  // 📌 휠 이벤트로 세로 스크롤 → 가로 스크롤 전환
  useEffect(() => {
    const sectionEl = sectionRef.current;
    const scrollEl = scrollRef.current;
    if (!sectionEl || !scrollEl || !isScrollable) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      scrollEl.scrollLeft += e.deltaY;

      const maxScrollLeft = scrollEl.scrollWidth - scrollEl.clientWidth;
      const isAtEnd = scrollEl.scrollLeft >= maxScrollLeft - 4;
      const isAtStart = scrollEl.scrollLeft <= 4;

      // 아래로 스크롤 → 끝나면 세로 스크롤 허용
      if (e.deltaY > 0 && isAtEnd) {
        setScrollable(false);
      }

      // 위로 스크롤 → 처음이면 세로 스크롤 허용
      if (e.deltaY < 0 && isAtStart) {
        setScrollable(false);
      }
    };

    sectionEl.addEventListener('wheel', handleWheel, { passive: false });
    return () => sectionEl.removeEventListener('wheel', handleWheel);
  }, [isScrollable]);

  useEffect(() => {
    if (isScrollable) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isScrollable]);

  return (
    <section ref={sectionRef} css={scrollSectionCss(isScrollable)}>
      <div css={wrapperCss}>
        <div css={text.wrapperCss}>
          <h1 css={text.titleCss}>17th Session</h1>
          <p css={text.subCss}>{`17주간의 성장과 도전의 모험 중 \n주요 세션입니다`}</p>
        </div>
      </div>
      <div css={cardWrapperCss} ref={scrollRef}>
        {SESSIONS.map((session, index) => (
          <div key={session.title}>
            <SessionCard
              src={session.image}
              title={session.title}
              description={session.description}
              ps={session.ps ?? ''}
              index={index}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

const scrollSectionCss = (isScrollable: boolean) => css`
  position: ${isScrollable ? 'sticky' : 'relative'};
  top: 0;
  ${sectionBg}

  height: 100dvh;
  /* height: 100dvh; */

  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 60px;
  padding: 120px 0;

  ${mediaQuery('mobile')} {
    gap: 40px;
  }
`;

const wrapperCss = css`
  margin-left: 58px;
  display: flex;
  flex-direction: column;

  gap: 12px;
  max-width: 1110px;
  margin: 0 auto;
  width: 100%;

  ${mediaQuery('mobile')} {
    /* margin: 0 24px; */
    gap: 8px;
  }
`;
const text = {
  wrapperCss: css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 12px;

    width: 100%;
    max-width: 1110px;
    padding-left: 58px;

    ${mediaQuery('tablet')} {
      margin: 0;
      padding-left: 40px;
    }
    ${mediaQuery('mobile')} {
      margin: 0 0 -24px 0;
      padding-left: 24px;
      gap: 8px;
    }
  `,

  titleCss: css`
    ${theme.typosV3.MartianMono.head3};
    font-size: 42px;
    font-weight: 400;
    line-height: 109%;
    letter-spacing: -2.1px;
    text-align: start;

    z-index: 100;

    ${mediaQuery('mobile')} {
      ${theme.typosV3.MartianMono.head3};
      font-size: ${pxToRem(26)};
      letter-spacing: -1px;
    }
  `,
  subCss: css`
    ${theme.typosV3.pretendard.sub1Semibold};
    text-align: start;
    z-index: 100;
    color: ${colors.grey[900]};

    ${mediaQuery('mobile')} {
      ${theme.typosV3.pretendard.body3Medium};
      white-space: pre-wrap;
    }
  `,
};

const cardWrapperCss = css`
  position: relative;

  display: flex;
  gap: 50px;
  overflow-x: auto;

  width: 100vw;
  height: auto;
  min-height: 497px;

  padding: 0 calc(50% - 219px);

  z-index: 50;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  ${mediaQuery('tablet')} {
    max-width: 960px;
    padding-left: calc(50% - 200px);
    padding-right: calc(50% - 200px);
    gap: 36px;
  }
  ${mediaQuery('mobile')} {
    padding: 10px calc(50% - 139px);
    gap: 24px;
  }
`;

// const cardItemCss = css`
//   flex-shrink: 0;
//   scroll-snap-align: start;
//   min-width: 300px;

//   ${mediaQuery('mobile')} {
//     min-width: 240px;
//   }
// `;
