import Link from 'next/link';
import { useRouter } from 'next/router';
import { css, Theme } from '@emotion/react';

import useIsInProgress from '~/hooks/useIsInProgress';

import { NarrowArrowIcon } from '../Icons';

export function ApplyBanner() {
  const { isInProgress } = useIsInProgress();
  const { pathname } = useRouter();
  const isApplyPage = pathname.startsWith('/apply');
  const is404 = pathname === '/404';

  return (
    <>
      {isInProgress && !isApplyPage && !is404 && (
        <section css={layoutCss}>
          <Link href="/apply" css={linkCss}>
            <p>디프만 15기 지원하기</p>
            <span css={arrowIconCss}>
              <NarrowArrowIcon direction="right" color="white" />
            </span>
          </Link>
        </section>
      )}
    </>
  );
}

const layoutCss = (theme: Theme) => css`
  z-index: 9999;
  position: sticky;
  bottom: 0;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.pink};
`;

const linkCss = (theme: Theme) => css`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;

  p {
    ${theme.typos.notosans.semibold20}
  }
`;

const arrowIconCss = css`
  width: 24px;
  height: 24px;
  border-radius: 400px;
  background-color: black;
`;
