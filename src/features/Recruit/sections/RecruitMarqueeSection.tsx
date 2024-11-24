import Image from 'next/image';
import { css } from '@emotion/react';
import Marquee from 'react-fast-marquee';

export const RecruitMarqueeSection = () => {
  const MARQUEE_SIZE = { width: 392, height: 26 };
  const MARQUEE_DEPROMEET = '/images/16th/recruit/marquee_depromeet.svg';
  const MARQUEE_RECRUIT = '/images/16th/recruit/marquee_recruit.svg';

  return (
    <Marquee>
      <section css={containerCss}>
        <Image
          src={MARQUEE_DEPROMEET}
          alt={'디프만 현수막 로고'}
          width={MARQUEE_SIZE.width}
          height={MARQUEE_SIZE.height}
        />
        <Image
          src={MARQUEE_RECRUIT}
          alt={'디프만 현수막 로고'}
          width={MARQUEE_SIZE.width}
          height={MARQUEE_SIZE.height}
        />
        <Image
          src={MARQUEE_DEPROMEET}
          alt={'디프만 현수막 로고'}
          width={MARQUEE_SIZE.width}
          height={MARQUEE_SIZE.height}
        />
        <Image
          src={MARQUEE_RECRUIT}
          alt={'디프만 현수막 로고'}
          width={MARQUEE_SIZE.width}
          height={MARQUEE_SIZE.height}
        />
      </section>
    </Marquee>
  );
};

const containerCss = () => css`
  padding: 26px 0;
  color: white;
  width: 100%;
  display: flex;
  column-gap: 110px;
`;
