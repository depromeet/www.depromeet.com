import Image from 'next/image';
import { css } from '@emotion/react';
import { m } from 'framer-motion';

import { ArrowIcon } from '~/components/Icons';
import { defaultFadeInVariants } from '~/constant/motion';
import { colors } from '~/styles/colors';
import { mediaQuery } from '~/styles/media';

export type Link = {
  type: 'Behance' | 'Github' | 'Web' | 'Android' | 'iOS';
  href: string;
};

type ThumbnailProps = {
  title: string;
  subTitle: string;
  img: string;
  description: string;
  links?: Link[];
};

export function Thumbnail({ title, subTitle, img, description, links }: ThumbnailProps) {
  return (
    <m.article
      css={articleCss}
      variants={defaultFadeInVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Image css={imageCss} src={img} alt={title} fill quality={100} />
      <div css={gradientCss} />
      <div css={contentsCss}>
        <div>
          <p css={titleCss}>{title}</p>
          <p css={subTitleCss}>{subTitle}</p>
        </div>
        <p css={descriptionCss} dangerouslySetInnerHTML={{ __html: description }} />
        {links && (
          <div css={linkContainerCss}>
            {links.map(link => (
              <span key={link.type} css={linkWrapperCss}>
                <a href={link.href} target="_blank" css={linkCss} rel="noreferrer">
                  {link.type}
                </a>
                <span>
                  <ArrowIcon direction={'right'} color={colors.mint} width={16} height={16} />
                </span>
              </span>
            ))}
          </div>
        )}
      </div>
    </m.article>
  );
}

const articleCss = css`
  position: relative;
  height: 208px;
  max-width: 312px;
  overflow: hidden;
  ${mediaQuery('tablet')} {
    max-width: 100%;
  }
  ${mediaQuery('mobile')} {
    max-width: 100%;
  }
  &:hover {
    cursor: pointer;
  }
  &:hover img {
    filter: blur(5px) brightness(0.4);
  }
`;

const imageCss = css`
  object-fit: cover;
  object-position: center;
`;

const contentsCss = css`
  display: flex;
  padding: 24px;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  transition: opacity 0.3s ease;
  opacity: 0;

  &:hover {
    opacity: 1;
  }
`;

const linkContainerCss = css`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const linkWrapperCss = css`
  display: flex;
  align-items: center;
`;

const linkCss = css`
  color: ${colors.mint};
  font-weight: 500;
  font-size: 1rem;
  line-height: 22px;
  letter-spacing: -0.16px;
  margin-right: 2px;
  z-index: 10;
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

const gradientCss = css`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 172px;
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
