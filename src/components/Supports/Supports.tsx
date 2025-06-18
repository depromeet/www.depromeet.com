import { css } from '@emotion/react';

import { SUPPORTS } from '~/constant/supports';
import { useCheckWindowSize } from '~/hooks/useCheckWindowSize';
import { mediaQuery } from '~/styles/media';
import { theme } from '~/styles/theme';

import { SupportThumbnail } from './SupportThumbnail';

export const Supports = () => {
  const { isTargetSize: isMobileSize } = useCheckWindowSize('mobile');

  return (
    <div css={[layoutCss]}>
      <h1 css={introCss.headline()}>Sponsor</h1>
      <p css={introCss.description()}>
        디프만은 IT 비영리 단체로{isMobileSize && <br />} 후원을 통해 더 많은 교육 기회에 도움을
        받고 있습니다.
      </p>

      <ul css={supportContainerCss}>
        {SUPPORTS.map(support => (
          <SupportThumbnail key={support.title} {...support} />
        ))}
      </ul>
      <button
        css={supportButtonCss}
        onClick={() => {
          window.location.href = 'mailto:depromeet@gmail.com';
        }}
      >
        후원 문의하기
      </button>
    </div>
  );
};

const layoutCss = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  padding: 0 58px;

  ${mediaQuery('tablet')} {
    padding: 0 40px;
  }

  ${mediaQuery('mobile')} {
    padding: 0 24px;
  }
`;

const introCss = {
  headline: () => css`
    color: ${theme.colors.primary.darknavy};
    font-family: MartianMono;
    font-size: 42px;
    font-weight: 400;
    line-height: 109%; /* 45.78px */
    letter-spacing: -2.1px;
    text-align: left;

    ${mediaQuery('mobile')} {
      ${theme.typosV2.pretendard.bold28}
      line-height: 150%;
    }
  `,
  description: () => css`
    ${theme.typosV3.pretendard.sub1Semibold};
    color: ${theme.colors.primary.darknavy};
    line-height: 150%;
    margin-top: 8px;

    ${mediaQuery('mobile')} {
      ${theme.typosV3.pretendard.sub1Semibold}
    }
  `,
};

const supportContainerCss = css`
  display: grid;
  width: 100%;
  max-width: 880px;
  margin-top: 48px;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  justify-items: center;
  justify-content: center;
  justify-self: center;
  align-self: center;

  ${mediaQuery('tablet')} {
    margin-top: 60px;
  }

  ${mediaQuery('mobile')} {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 8px;
    column-gap: 0px;
    margin-top: 40px;
  }
`;

const supportButtonCss = css`
  ${theme.typosV3.pretendard.sub3Semibold};
  color: ${theme.colors.primary.darknavy};
  line-height: 150%;
  width: fit-content;
  padding: 14px 26px;
  margin: 0 auto;
  margin-top: 48px;

  border-radius: 10000px;
  border: 1px solid ${theme.colors.primary.blue};
  background: ${theme.colors.primary.gray};
  cursor: pointer;

  ${mediaQuery('mobile')} {
    ${theme.typosV3.pretendard.sub5Medium}
    padding: 8px 20px;
    margin-top: 40px;
  }
`;
