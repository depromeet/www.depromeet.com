import Image from 'next/image';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';

import { BlogRulerDecoration } from '~/features/Blog/sections/BlogRulerDecoration';
import { useCheckWindowSize } from '~/hooks/useCheckWindowSize';
import useIsInProgress from '~/hooks/useIsInProgress';
import { sectionBg } from '~/styles/background';
import { colors } from '~/styles/colors';
import { mediaQuery } from '~/styles/media';
import { theme } from '~/styles/theme';
import { getPathToRecruit } from '~/utils/utils';

/**
 * * Main 페이지 지원하기 section
 * TODO: 링크 이벤트 연결하기
 */
export const MainRecruitSection = () => {
  const router = useRouter();
  const { isTargetSize: isMobileSize } = useCheckWindowSize('mobile');
  const { isTargetSize: isTabletSize } = useCheckWindowSize('mobile');
  const { progressState } = useIsInProgress();
  const { action, label } = getPathToRecruit(router, progressState);

  const getImage = () => {
    if (isMobileSize) {
      return '/images/17th/objet-mobile.png';
    }

    if (isTabletSize) {
      return '/images/17th/objet-tablet.png';
    }

    return '/images/17th/objet-pc.png';
  };

  return (
    <section css={containerCss}>
      <div css={text.wrapperCss}>
        <p css={text.subCss}>두려움을 용기로, 상상을 도전으로</p>
        <h1 css={text.titleCss}>
          디프만과 함께 성장할 <br /> 17기 디퍼를 모집합니다
        </h1>
        <button css={buttonCss} onClick={action}>
          {label}
        </button>
        <div css={imageWrapperCss}>
          <Image fill src={getImage()} alt={'17기 디퍼 모집을 위한 오브제'} />
        </div>
      </div>
      <BlogRulerDecoration />
    </section>
  );
};

const containerCss = css`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0;
  ${sectionBg};

  overflow: hidden;

  ${mediaQuery('mobile')} {
    padding: 60px 0;
  }
`;

const text = {
  wrapperCss: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 8px;
    color: white;

    ${mediaQuery('tablet')} {
      padding: 0 40px;
    }

    ${mediaQuery('mobile')} {
      padding: 0 16px;
    }
  `,
  subCss: css`
    ${theme.typosV3.pretendard.sub1Semibold};
    color: ${theme.colors.primary.blue};
    line-height: 150%;

    ${mediaQuery('tablet')} {
      ${theme.typosV3.pretendard.sub2Semibold};
    }

    ${mediaQuery('mobile')} {
      ${theme.typosV3.pretendard.sub3Semibold};
    }
  `,

  titleCss: css`
    ${theme.typosV3.pretendard.head1};
    color: ${theme.colors.primary.darknavy};

    ${mediaQuery('tablet')} {
      font-size: 28px;
      letter-spacing: 0.28px;
    }

    ${mediaQuery('mobile')} {
      ${theme.typosV3.pretendard.head6};
    }
  `,
};

const buttonCss = () => css`
  ${theme.typosV3.pretendard.sub3Semibold};
  padding: 14px 26px;
  margin: 48px 0;
  border-radius: 300px;
  color: white;
  background: ${theme.colors.primary.darknavy};

  display: flex;
  align-items: center;
  justify-content: center;

  &:disabled {
    background: ${colors.grey[300]};
    color: ${colors.grey[500]};
  }

  ${mediaQuery('tablet')} {
    margin: 40px 0;
  }
`;

const imageWrapperCss = css`
  position: relative;
  width: calc(100vw - 80px);
  aspect-ratio: 1020 / 375;

  ${mediaQuery('tablet')} {
    width: calc(140vw);
  }
`;
