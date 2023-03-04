import { css } from '@emotion/react';

import { colors, mediaQuery } from '~/styles/constants';
import { layoutCss } from '~/styles/css';

import { ClickableLink } from '../common/Clickable';
import { ArrowIcon } from '../common/icons';

export default function ChannelSection() {
  return (
    <section css={sectionCss}>
      <article css={headingArticleCss}>
        <h1 css={headingCss}>
          디프만에 대해
          <br />
          궁금한 게 있으신가요?
        </h1>
      </article>

      <article css={channelArticleCss}>
        <p css={channelParagraphCss}>카카오톡 채널 @depromeet로 물어보세요!</p>
        <p css={[channelParagraphCss, lastChannelParagraphCss]}>
          비즈니스 문의는{' '}
          <ClickableLink href="" css={businessAnchorCss}>
            여기로
          </ClickableLink>
        </p>

        <div css={channelWrapperCss}>
          <span>KAKAO PLUS FRIEND</span>
          <ClickableLink href="" css={channelAnchorCss}>
            @depromeet
            <ArrowIcon
              direction="right"
              color={colors.black}
              width={24}
              height={24}
              className="icon"
            />
          </ClickableLink>
        </div>

        <div css={channelWrapperCss}>
          <span>GMAIL</span>
          <ClickableLink href="" css={channelAnchorCss}>
            depromeet@gmail.com
            <ArrowIcon
              direction="right"
              color={colors.black}
              width={24}
              height={24}
              className="icon"
            />
          </ClickableLink>
        </div>
      </article>
    </section>
  );
}

const sectionCss = css`
  ${layoutCss};
  width: 100%;
  padding-top: 154px;

  display: flex;

  margin-bottom: 248px;

  ${mediaQuery('xs')} {
    padding-top: 80px;

    flex-direction: column;

    margin-bottom: 133px;
  }
`;

const headingArticleCss = css`
  /* NOTE : 486 / 1200 */
  width: 40%;
  flex-shrink: 0;

  ${mediaQuery('xs')} {
    width: 100%;

    margin-bottom: 20px;
  }
`;

const headingCss = css`
  font-weight: 600;
  font-size: 2.25rem;
  line-height: 2.6875rem;

  ${mediaQuery('xs')} {
    font-size: 24px;
    line-height: 29px;
  }
`;

const channelArticleCss = css`
  width: 100%;
`;

const channelParagraphCss = css`
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1.8125rem;
  margin-bottom: 13px;

  ${mediaQuery('xs')} {
    font-size: 16px;
    line-height: 19px;
  }
`;

const lastChannelParagraphCss = css`
  margin-bottom: 80px;
`;

const businessAnchorCss = css`
  color: ${colors.point};
  text-decoration: underline;
`;

const channelWrapperCss = css`
  position: relative;
  height: 55px;
  padding-left: 24px;
  padding-right: 40px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1.8125rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    background-color: ${colors.background};
    z-index: -1;
    border-top: solid 1px ${colors.black};
    border-bottom: solid 1px ${colors.black};
  }

  &:hover {
    color: ${colors.white};

    &::before {
      background-color: ${colors.black};
    }

    & .icon * {
      stroke: ${colors.white};
    }
  }

  ${mediaQuery('xs')} {
    padding: 0;

    font-size: 16px;
    line-height: 140%;

    &::before {
      left: -20px;
    }
  }
`;

const channelAnchorCss = css`
  display: flex;
  align-items: center;
  gap: 0.625rem;
`;
