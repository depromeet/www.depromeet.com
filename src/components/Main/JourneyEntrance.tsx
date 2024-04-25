import { css, SerializedStyles, Theme } from '@emotion/react';

import { LinkWrapper } from './LinkWrapper';
import { NarrowArrowIcon } from '../Icons';
import { Journey } from '../Journey';

interface JorneyEntranceProps {
  hasLinkButton: boolean;
  style?: SerializedStyles;
}

export function JourneyEntrance({ hasLinkButton, style }: JorneyEntranceProps) {
  return (
    <section css={[layoutCss, style]}>
      <Journey />
      {hasLinkButton && (
        <LinkWrapper href="/project" textColor="white" textHover={true}>
          ABOUT
          <span css={arrowImgContainerCss}>
            <NarrowArrowIcon direction="right" color="black" fill="black" />
          </span>
        </LinkWrapper>
      )}
    </section>
  );
}

const layoutCss = (theme: Theme) => css`
  padding: 120px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 80px;
  align-items: center;
  background-color: ${theme.colors.lightGray};
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
