import { css } from '@emotion/react';

import { NOTION_RECRUIT_PATH } from '~/constants/common';
import { colors } from '~/styles/constants';

import { RECRUTING_BANNER_HEIGHT } from './constants';
import { ClickableLink } from '../Clickable';
import { ArrowIcon } from '../icons';

export default function RecrutingBanner() {
  return (
    <section css={wrapperCss}>
      <ClickableLink
        href={NOTION_RECRUIT_PATH}
        target="_blank"
        rel="noopener noreferrer"
        css={linkCss}
      >
        디프만 13기 바로 지원하기 <ArrowIcon />
      </ClickableLink>
    </section>
  );
}

const wrapperCss = css`
  position: relative;
  height: ${RECRUTING_BANNER_HEIGHT}px;
  background-color: ${colors.black};
  color: ${colors.white};

  z-index: 9998;
`;

const linkCss = css`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 9px;
`;
