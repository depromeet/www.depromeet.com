import { PropsWithChildren } from 'react';
import Image from 'next/image';
import { css } from '@emotion/react';
import { motion } from 'framer-motion';

import { BehanceIcon, GithubIcon, LinkedinIcon, WebIcon } from '~/components/common/icons';
import { ORGANIZER_IMAGES } from '~/constants/images';
import { defaultFadeInUpVariants } from '~/constants/motions';
import { colors, mediaQuery, radius } from '~/styles/constants';

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
    <motion.article css={articleCss} variants={defaultFadeInUpVariants}>
      <div css={imageWrapperCss}>
        <Image
          src={ORGANIZER_IMAGES[imageKey]}
          alt={name}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={ORGANIZER_IMAGES[imageKey]}
        />
      </div>

      <div css={infoWrapperCss}>
        <h4 css={nameCss}>{name}</h4>
        <h5 css={positionCss}>{position}</h5>
      </div>

      <div css={overlayWrapperCss}>
        {behance && (
          <IconAnchor href={behance}>
            <BehanceIcon width={22} height={22} />
          </IconAnchor>
        )}
        {linkedin && (
          <IconAnchor href={linkedin}>
            <LinkedinIcon width={20} height={20} />
          </IconAnchor>
        )}
        {github && (
          <IconAnchor href={github}>
            <GithubIcon width={22} height={22} />
          </IconAnchor>
        )}
        {web && (
          <IconAnchor href={web}>
            <WebIcon width={22} height={22} />
          </IconAnchor>
        )}
      </div>
    </motion.article>
  );
}

const articleCss = css`
  position: relative;
  width: calc(25% - 2.5rem);
  height: 324px;
  border-radius: ${radius.md};
  overflow: hidden;

  ${mediaQuery('xs')} {
    width: calc(50% - 7.5px);
    height: 243px;
  }
`;

const imageWrapperCss = css`
  position: relative;
  width: 100%;
  height: calc(324px - 80px);

  ${mediaQuery('xs')} {
    height: calc(243px - 80px);
  }
`;

const infoWrapperCss = css`
  width: 100%;
  height: 80px;
  padding: 0 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: ${colors.gray9};
`;

const nameCss = css`
  font-size: 16px;
  font-weight: 600;
  line-height: 140%;

  margin-bottom: 4px;
`;

const positionCss = css`
  font-size: 13px;
  font-weight: 500;
  line-height: 140%;

  color: ${colors.gray4};
`;

const overlayWrapperCss = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;

  z-index: 1000;
  backdrop-filter: blur(8px);
  opacity: 0;

  transition: opacity 0.3s;

  &:hover {
    opacity: 1;
  }

  ${mediaQuery('xs')} {
    gap: 0.5rem;
  }
`;

interface IconAnchorProps {
  href: string;
}

function IconAnchor({ href, children }: PropsWithChildren<IconAnchorProps>) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" css={iconAnchorCss}>
      {children}
    </a>
  );
}

const iconAnchorCss = css`
  width: 2.25rem;
  height: 2.25rem;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
`;
