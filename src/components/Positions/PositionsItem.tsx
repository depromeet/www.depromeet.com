import Image from 'next/image';
import { useRouter } from 'next/router';
import { css, Theme } from '@emotion/react';

import { ArrowIcon } from '~/components/Icons';
import { POSITION_BASE } from '~/constant/image';
import useIsInProgress from '~/hooks/useIsInProgress';
import { mediaQuery } from '~/styles/media';

type Position = 'aos' | 'design' | 'ios' | 'server' | 'web';

interface PositionsItemProps {
  type: Position;
  title: string;
  link: string;
}

export function PositionsItem({ type, title, link }: PositionsItemProps) {
  const { isInProgress } = useIsInProgress();

  const router = useRouter();

  const onClick = () => {
    if (isInProgress) {
      router.push(link);
    }
  };

  return (
    <div css={layoutCss}>
      <Image width={112} height={112} src={`${POSITION_BASE}/${type}.png`} alt={title} />
      <div>
        <h3 css={titleCss}>{title}</h3>
        <button onClick={onClick} disabled={!isInProgress} css={linkCss}>
          {/* <Link href={redirectLink} target="_blank" css={linkCss}> */}
          <span>지원하기</span>
          <ArrowIcon direction="right" css={theme => arrowIconCss(theme, !isInProgress)} />
          {/* </Link> */}
        </button>
      </div>
    </div>
  );
}

const layoutCss = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 36px 32px;
  background-color: ${theme.colors.black400};
  width: 306px;
  height: 272px;

  img {
    position: relative;
    left: -14px;
  }

  ${mediaQuery('tablet')} {
    width: 100%;
    height: 248px;
    padding: 24px 32px;
  }

  ${mediaQuery('mobile')} {
    padding: 8px 16px;
    height: 92px;
    flex-direction: row;
    gap: 16px;
    align-items: center;

    img {
      position: static;
      width: 76px;
      height: 76px;
    }
  }
`;

const titleCss = (theme: Theme) => css`
  ${theme.typos.decimal.body1};
  color: ${theme.colors.white};
  margin-top: 28px;

  ${mediaQuery('mobile')} {
    margin-top: 0;
    font-size: 16px;
  }
`;

const linkCss = (theme: Theme) => css`
  ${theme.typos.pretendard.body1};
  color: ${theme.colors.blue400};
  display: flex;
  align-items: center;
  margin-top: 8px;
  > svg {
    margin-left: 4px;
  }

  &:disabled {
    cursor: not-allowed;
    color: ${theme.colors.gray200};
  }

  ${mediaQuery('mobile')} {
    font-size: 14px;
  }
`;

const arrowIconCss = (theme: Theme, disabled: boolean) => css`
  width: 24px;
  height: 24px;

  > path {
    stroke: ${theme.colors.blue400};
    stroke-width: 4;
  }

  ${disabled &&
  css`
    > path {
      stroke: ${theme.colors.gray200};
    }
  `}
`;
