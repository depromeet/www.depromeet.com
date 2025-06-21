import Image from 'next/image';
import Link from 'next/link';
import { css } from '@emotion/react';
import { m } from 'framer-motion';

import { defaultFadeInVariants } from '~/constant/motion';
import { mediaQuery } from '~/styles/media';

export type Link = {
  type: 'Behance' | 'Github' | 'Web' | 'App';
  href: string;
};

type ThumbnailProps = {
  title: string;
  subTitle: string;
  img: string;
  description?: string;
  link: string;
};

export function SupportThumbnail({ title, img, link }: ThumbnailProps) {
  return (
    <m.article
      css={articleCss}
      variants={defaultFadeInVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Link href={link} target="_blank">
        <Image
          css={imageCss}
          src={img}
          alt={title}
          fill
          style={{
            objectFit: 'contain',
          }}
        />
      </Link>
    </m.article>
  );
}

SupportThumbnail.OnlyImage = function OnlyImage({
  title,
  img,
}: Pick<ThumbnailProps, 'title' | 'img'>) {
  return (
    <div css={imageArticleCss}>
      <Image css={imageCss} src={img} alt={title} fill quality={100} />
    </div>
  );
};

const articleCss = css`
  position: relative;
  max-width: 280px;
  width: 100%;
  height: 120px;
  padding: 24px;
  overflow: hidden;
  cursor: pointer;

  ${mediaQuery('mobile')} {
    max-width: 100%;
    padding: 18px;
    height: auto;
    aspect-ratio: 152/96;
  }
`;

const imageArticleCss = css`
  position: relative;
  height: 208px;
  width: 312px;
`;

const imageCss = css`
  object-fit: cover;
  object-position: center;
`;
