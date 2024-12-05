import { useRouter } from 'next/router';
import { css } from '@emotion/react';

import { SUPPORTS } from '~/constant/supports';
import { useCheckWindowSize } from '~/hooks/useCheckWindowSize';
import { mediaQuery } from '~/styles/media';
import { theme } from '~/styles/theme';

import { SupportThumbnail } from './SupportThumbnail';

export const Supports = () => {
  const { isTargetSize: isMobileSize } = useCheckWindowSize('mobile');
  const { pathname } = useRouter();
  const isAboutPage = pathname === '/about';

  return (
    <div css={[layoutCss]}>
      <h1 css={introCss.headline(isAboutPage)}>후원사</h1>
      <p css={introCss.description(isAboutPage)}>
        디프만은 IT 비영리 단체로 후원을 통해 {isMobileSize && <br />}더 많은 교육 기회에 도움을
        받고 있습니다.
      </p>

      <ul css={supportContainerCss}>
        {SUPPORTS.map(support => (
          <SupportThumbnail key={support.title} {...support} />
        ))}
      </ul>
    </div>
  );
};

const layoutCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: ${theme.colors.black};
`;

const introCss = {
  headline: (isAboutPage = false) => css`
    line-height: 150%;
    ${isAboutPage ? theme.typosV2.pretendard.bold32 : theme.typosV2.pretendard.bold44}
    color: ${theme.colors.white};

    ${mediaQuery('mobile')} {
      ${theme.typosV2.pretendard.bold28}
      line-height: 150%;
    }
  `,
  description: (isAboutPage = false) => css`
    ${isAboutPage ? theme.typosV2.pretendard.semibold18 : theme.typosV2.pretendard.semibold20}
    line-height: 150%;
    margin-top: 24px;
    text-align: center;
    color: ${theme.colors.white};

    ${mediaQuery('mobile')} {
      ${theme.typosV2.pretendard.semibold18}
    }
  `,
};

const supportContainerCss = css`
  margin-top: 88px;
  display: grid;
  width: 100%;
  max-width: 880px;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 20px;
  column-gap: 20px;
  justify-items: center;
  justify-content: center;

  ${mediaQuery('tablet')} {
    grid-template-columns: repeat(2, 1fr);
    max-width: 580px;
  }

  ${mediaQuery('mobile')} {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 8px;
    column-gap: 0px;
    padding: 0 20px;
  }
`;
