import Image from 'next/image';
import { css } from '@emotion/react';

import { ORGANIZER_IMAGES } from '~/constants/images';
import { colors, radius } from '~/styles/constants';

import type { Organizer } from './source';

interface Props extends Organizer {}

export default function OrganizerCard({
  imageKey,
  name,
  position,
  behance,
  linkedin,
  github,
  web,
}: Props) {
  return (
    <article css={articleCss}>
      <Image
        src={ORGANIZER_IMAGES[imageKey]}
        alt={name}
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        blurDataURL={ORGANIZER_IMAGES[imageKey]}
      />
      <div css={infoWrapperCss}>
        <h4>{name}</h4>
        <h5>{position}</h5>
      </div>
    </article>
  );
}

const articleCss = css`
  position: relative;
  width: 240px;
  height: 324px;
  border-radius: ${radius.md};
  overflow: hidden;
`;

const infoWrapperCss = css`
  position: absolute;
  bottom: 0;
  left: 0;

  width: 100%;
  height: 80px;
  background-color: ${colors.gray9};
`;
