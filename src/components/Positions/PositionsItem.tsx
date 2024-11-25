import { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { css, Theme } from '@emotion/react';
import { m } from 'framer-motion';

import { Icon } from '~/components/Icon/Icon';
import { POSITION_BASE } from '~/constant/image';
import { defaultFadeInVariants } from '~/constant/motion';
import { getColorByPosition, Position } from '~/constant/position';
import useIsInProgress from '~/hooks/useIsInProgress';
import { mediaQuery } from '~/styles/media';
import { theme } from '~/styles/theme';

interface PositionsItemProps {
  type: Position;
  title: string;
  keyword: string[];
  link: string;
  description: string[];
}

export function PositionsItem({ type, title, link, description, keyword }: PositionsItemProps) {
  const { isInProgress } = useIsInProgress();

  return (
    <m.article
      css={articleCss}
      variants={defaultFadeInVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div css={theme => layoutCss(theme, type)}>
        <div css={imgContainerCss} id={'initialContainer'}>
          <Image
            width={166}
            height={73}
            src={`${POSITION_BASE}/${type}.svg`}
            alt={title}
            id={'default'}
          />
          <span css={positionDescriptionCss}> {keyword.join(' · ')} </span>
          <div css={applyBtnCss}>
            <span> 지원하기 </span>
            <Icon icon={'ic_arrow_black'} size={24} direction={'right'} />
          </div>
        </div>
      </div>
      <div css={contentsCss}>
        <div>
          <Image
            width={142}
            height={54}
            src={`${POSITION_BASE}/${type}_hover.svg`}
            alt={title}
            id={'default'}
            style={{
              height: '54px',
              width: 'auto',
            }}
          />
          <div css={descriptionCss}>
            {description.map((comment, idx) => (
              <p key={idx}>{comment}</p>
            ))}
          </div>
        </div>
        {
          <div css={linkContainerCss}>
            <Link css={linkCss} href={link} target="_blank">
              {link && isInProgress ? (
                '지원 마감'
              ) : (
                <Fragment>
                  지원하기
                  <Icon icon={'ic_arrow_white'} size={20} direction={'right'} />
                </Fragment>
              )}
            </Link>
          </div>
        }
      </div>
    </m.article>
  );
}

const articleCss = css`
  position: relative;
  width: 306px;
  height: 336px;
  overflow: hidden;
  border-radius: 20px;

  ${mediaQuery('tablet')} {
    max-width: 100%;
  }
  ${mediaQuery('mobile')} {
    max-width: 100%;
    width: 100%;
  }
  &:hover {
    cursor: pointer;
  }
  &:hover {
    #initialContainer {
      filter: blur(6px) brightness(0.7);
    }
  }
`;

const contentsCss = css`
  position: absolute;
  left: 0;
  top: 0;
  width: 306px;
  height: 336px;
  display: flex;
  padding: 30px 28px;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  transition: opacity 0.3s ease;
  opacity: 0;

  &:hover {
    background: rgba(79, 101, 133, 0.7);
    backdrop-filter: blur(15px);
    opacity: 1;
  }
`;

const layoutCss = (theme: Theme, position: string) => css`
  background-color: ${getColorByPosition(theme, position)};
  width: 306px;
  height: 336px;

  ${mediaQuery('mobile')} {
    width: 100%;
  }
`;

const applyBtnCss = () => css`
  ${theme.typosV2.pretendard.semibold20};
  display: flex;
  align-items: center;
  column-gap: 8px;
  margin-top: auto;
`;

const descriptionCss = (theme: Theme) => css`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  > p {
    color: white;
    ${theme.typosV2.pretendard.medium15}
  }
`;

const linkContainerCss = css`
  display: flex;
  justify-content: flex-start;
`;

const linkCss = (theme: Theme) => css`
  display: flex;
  gap: 5px;
  align-items: center;
  color: white;
  ${theme.typosV2.pretendard.semibold18}
`;

const imgContainerCss = css`
  position: relative;

  display: flex;
  flex-direction: column;
  row-gap: 24px;

  width: 306px;
  height: 336px;
  padding: 40px 32px;
`;

const positionDescriptionCss = css`
  display: block;
  ${theme.typosV2.pretendard.medium13}
`;
