import { css, Interpolation, Theme } from '@emotion/react';

import { NOTION_RECRUIT_PATH } from '~/constants/common';
import useIsInProgress from '~/hooks/use-is-in-progress';
import { RecruitState } from '~/hooks/use-is-in-progress/use-is-in-progress';
import { colors, mediaQuery } from '~/styles/constants';
import { section36HeadingCss, sectionSmallCss } from '~/styles/css';

import { ClickableLink } from '../Clickable';

interface Props {
  wrapperCss?: Interpolation<Theme>;
}

const applyMessageObj: Record<RecruitState, { h1: string; button: string }> = {
  PREVIOUS: {
    h1: '14기는 아직 준비중',
    button: '모집 예정',
  },
  IN_PROGRESS: {
    h1: '이제 여러분 차례예요! \n디프만 13기 멤버가 되고 싶다면',
    button: '바로 지원하기',
  },
  FINISH: {
    h1: '이제 여러분 차례예요! \n디프만 13기 멤버가 되고 싶다면',
    button: '모집 마감',
  },
};

export default function ApplySection({ wrapperCss }: Props) {
  const { isInProgress, progressState } = useIsInProgress();
  const applyMessage = applyMessageObj[progressState];

  return (
    <section css={[sectionCss, wrapperCss]}>
      <small css={smallCss}>APPLY</small>
      <h2 css={headingCss}>{applyMessage.h1}</h2>

      {isInProgress ? (
        <ClickableLink
          css={linkCss}
          href={NOTION_RECRUIT_PATH}
          target="_blank"
          rel="noopener noreferrer"
        >
          {applyMessage.button}
        </ClickableLink>
      ) : (
        <button css={disabledButtonCss}>{applyMessage.button}</button>
      )}
    </section>
  );
}

const sectionCss = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const smallCss = css`
  ${sectionSmallCss};
  margin-bottom: 10px;
`;

const headingCss = css`
  ${section36HeadingCss};
  margin-bottom: 60px;

  ${mediaQuery('xs')} {
    margin-bottom: 36px;
  }
`;

const linkCss = css`
  border-radius: 2px;
  padding: 16px 98px;
  background-color: ${colors.black};

  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: ${colors.gray100};

  ${mediaQuery('xs')} {
    padding: 18px 60px;
    font-size: 16px;
    line-height: 19px;
  }
`;

const disabledButtonCss = css`
  border-radius: 2px;
  padding: 16px 98px;
  background-color: ${colors.gray500};

  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: ${colors.white};

  ${mediaQuery('xs')} {
    padding: 18px 60px;
    font-size: 16px;
    line-height: 19px;
  }
`;
