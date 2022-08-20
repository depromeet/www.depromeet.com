import Image from 'next/image';
import Link from 'next/link';
import { css } from '@emotion/react';
import { motion } from 'framer-motion';

import { defaultFadeInUpVariants } from '~/constants/motions';
import useMediaQuery from '~/hooks/use-media-query';
import { colors, mediaQuery } from '~/styles/constants';

import { ICON_POISION_PATH, PositionType, POSTION_DISPLAY_NAME } from '../constants';

type Size = 'sm' | 'lg';

export function Card({ positionType, size = 'lg' }: { positionType: PositionType; size?: Size }) {
  const isMobile = useMediaQuery('xs');
  const href = `/recruit/${positionType.toLowerCase()}`;

  const getSize = () => {
    return size === 'lg' && !isMobile ? 'lg' : 'sm';
  };

  return (
    <Link href={href}>
      <motion.section css={cardCss(getSize())} variants={defaultFadeInUpVariants}>
        <div css={cardTitleCss}>
          {getSize() === 'sm' && (
            <Image
              width={isMobile ? 22 : 32}
              height={isMobile ? 22 : 32}
              src={ICON_POISION_PATH[positionType]}
              alt="category-icon"
            />
          )}
          <h3 css={cardHeadingCss}>{POSTION_DISPLAY_NAME[positionType]}</h3>
        </div>
        <div css={cardLinkCss}>{getSize() === 'lg' && '자세히 보기'}&gt;</div>
      </motion.section>
    </Link>
  );
}

const cardCss = (size: Size) => css`
  display: flex;
  flex-direction: ${size === 'lg' ? 'column' : 'row'};
  justify-content: space-between;
  align-items: ${size === 'lg' ? 'flex-start' : 'center'};
  padding: 30px;
  height: ${size === 'lg' ? '220px' : '120px'};
  width: ${size === 'lg' ? '332px' : '100%'};
  background: ${colors.gray9};
  border-radius: 16px;

  :hover {
    background: ${colors.primary};
  }

  ${mediaQuery('xs')} {
    height: 67px;
  }
`;

const cardTitleCss = css`
  display: flex;
  align-items: center;

  gap: 20px;
`;

const cardHeadingCss = css`
  font-weight: 600;
  font-size: 2rem;
  line-height: 120%;
  color: ${colors.white};

  ${mediaQuery('xs')} {
    font-size: 1.286rem;
  }
`;

const cardLinkCss = css`
  text-align: right;
`;
