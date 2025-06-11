import Image from 'next/image';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';

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
  const { progressState } = useIsInProgress();
  const { action, label, isDisabled } = getPathToRecruit(router, progressState);

  return (
    <section css={containerCss}>
      <div css={text.wrapperCss}>
        <p css={text.subCss}>생각을 현실로, 열정을 성취로.</p>
        <h1 css={text.titleCss}>
          디프만과 함께 성장 할 <br /> 16기 디퍼를 모집합니다
        </h1>
        <button css={buttonCss} onClick={action} disabled={isDisabled}>
          {label}
        </button>
        <Image
          width={!isMobileSize ? 1051 : 440}
          height={!isMobileSize ? 326 : 136}
          src={'/images/16th/intro/recruit/objet.svg'}
          alt={'16기 디퍼 모집을 위한 오브제'}
          css={objetCss}
        />
      </div>
    </section>
  );
};

const containerCss = css`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0 414px 0;
  ${sectionBg};

  overflow: hidden;

  ${mediaQuery('mobile')} {
    padding: 80px 0 248px 0;
  }
`;

const text = {
  wrapperCss: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 12px;
    color: white;
  `,
  subCss: css`
    ${theme.typosV2.pretendard.semibold24};
    color: ${theme.colors.pink};
    line-height: 150%;

    ${mediaQuery('mobile')} {
      ${theme.typosV2.pretendard.semibold18};
      line-height: 150%;
    }
  `,

  titleCss: css`
    ${theme.typosV2.pretendard.bold44};
    line-height: 150%;
    margin: 16px 0 48px 0;

    ${mediaQuery('mobile')} {
      ${theme.typosV2.pretendard.bold28};
      line-height: 150%;
    }
  `,
};

const buttonCss = () => css`
  ${theme.typosV2.pretendard.semibold20};
  color: ${theme.colors.grey['900']};
  padding: 12px 36px;
  border-radius: 300px;
  background: white;

  display: flex;
  align-items: center;
  justify-content: center;

  &:disabled {
    background: ${colors.grey[300]};
    color: ${colors.grey[500]};
  }
`;

const objetCss = () => css`
  position: absolute;
  bottom: -20px;
`;
