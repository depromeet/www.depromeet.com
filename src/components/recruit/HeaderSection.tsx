import Image from 'next/image';
import { css } from '@emotion/react';

import useIsInProgress from '~/hooks/use-is-in-progress';
import { colors, mediaQuery } from '~/styles/constants';

import { BigArrowIcon } from '../home/BigArrowIcon';

export default function HeaderSection() {
  const { remainDay, isInProgress } = useIsInProgress();

  return (
    <section css={headerCss}>
      <div css={headImageWrapperCss}>
        <div css={headingCss}>
          {isInProgress ? (
            <>
              <h1>서류 접수 마감까지</h1>
              <em>
                <h2>D-{remainDay === 0 ? 'Day' : remainDay}</h2>
              </em>
            </>
          ) : (
            <h1>서류 접수 마감</h1>
          )}
        </div>

        <Image
          fill
          src="/images/recruit/home.webp"
          alt={'리쿠르트 홈 아이콘 이미지'}
          placeholder="blur"
          blurDataURL="/images/recruit/home.webp"
          priority
          quality={100}
        />
      </div>
      <BigArrowIcon css={iconCss} width={36} height={36} />
    </section>
  );
}

const headerCss = css`
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 780px;

  ${mediaQuery('xs')} {
    height: 650px;
  }
`;

const headingCss = css`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);

  text-align: center;

  font-weight: 600;
  font-size: 40px;
  color: ${colors.black};
  line-height: 48px;
  letter-spacing: -1px;
`;

const headImageWrapperCss = css`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  /* width: calc(770.79 / 1440 * 100%); */
  height: calc(488.97 / 720 * 100%);

  width: 770.79px;
  /* max-width: 1920px; */
  min-height: 488.97px;
`;

const iconCss = css`
  position: absolute;
  bottom: 120px;

  ${mediaQuery('xs')} {
    bottom: 107px;
  }
`;
