import Image from 'next/image';
import Link from 'next/link';
import { css } from '@emotion/react';
import { m } from 'framer-motion';

import { defaultFadeInVariants } from '~/constant/motion';
import { colors } from '~/styles/colors';
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

export function SupportThumbnail({ title, subTitle, img, description, link }: ThumbnailProps) {
  return (
    <Link href={link} css={linkCss}>
      <m.article
        css={articleCss}
        variants={defaultFadeInVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Image css={imageCss} src={img} alt={title} fill quality={100} />
        <div css={contentsCss}>
          <div>
            <p css={titleCss}>{title}</p>
            <p css={subTitleCss}>{subTitle}</p>
          </div>
          {description && (
            <p css={descriptionCss} dangerouslySetInnerHTML={{ __html: description }} />
          )}
        </div>
      </m.article>
    </Link>
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

const linkCss = css`
  width: 100%;
  height: 100%;
`;

const articleCss = css`
  position: relative;
  height: 208px;
  padding: 24px;
  width: 100%;
  overflow: hidden;
  background-color: black;

  &:hover {
    cursor: pointer;
  }
  &:hover img {
    filter: blur(5px) brightness(0.4);
  }
  &:hover > div {
    opacity: 1;
  }

  ${mediaQuery('mobile')} {
    max-width: 450px;
    padding: 18px;
    height: 180px;
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

const contentsCss = css`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-evenly;
  transition: opacity 0.3s ease;
  opacity: 0;
`;

const titleCss = css`
  position: relative;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 30px;
  color: ${colors.white};
  z-index: 10;
`;

const subTitleCss = css`
  position: relative;
  font-weight: 500;
  font-size: 1rem;
  line-height: 22px;
  color: ${colors.gray100};
  z-index: 10;
`;

const descriptionCss = css`
  position: relative;
  font-weight: 500;
  font-size: 1rem;
  line-height: 22px;
  color: ${colors.white};
  z-index: 10;
  letter-spacing: -0.16px;
  white-space: pre-wrap;
`;
