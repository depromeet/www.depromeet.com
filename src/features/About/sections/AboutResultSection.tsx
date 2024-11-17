import { css, SerializedStyles, Theme } from '@emotion/react';

import { NarrowArrowIcon } from '~/components/Icons';
import { LinkWrapper } from '~/components/Main/LinkWrapper';

import { Result } from '../components/Result';

interface AbountResultSection {
  hasLinkButton?: boolean;
  style?: SerializedStyles;
}

export const AboutResultSection = ({ hasLinkButton, style }: AbountResultSection) => {
  return (
    <section css={[layoutCss, style]}>
      <Result />

      {/* NOTE: 개발 예정 */}
      {hasLinkButton && (
        <LinkWrapper href="/about" textColor="white" textHover={true}>
          디프만 소개 보기
          <span css={arrowImgContainerCss}>
            <NarrowArrowIcon direction="right" color="black" fill="black" />
          </span>
        </LinkWrapper>
      )}
    </section>
  );
};

const layoutCss = (theme: Theme) => css`
  padding: 120px 0 134px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 80px;
  align-items: center;
  background-color: ${theme.colors.white};
`;

const arrowImgContainerCss = css`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 400px;
  background-color: white;
`;
