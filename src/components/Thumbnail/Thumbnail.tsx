import Image from 'next/image';
import { css, Theme } from '@emotion/react';
import { m } from 'framer-motion';

import { ArrowIcon } from '~/components/Icons';
import { defaultFadeInVariants } from '~/constant/motion';
import { colors } from '~/styles/colors';
import { mediaQuery } from '~/styles/media';
import { theme } from '~/styles/theme';

export type Link = {
  type: 'Behance' | 'Github' | 'Web' | 'Android' | 'iOS' | 'APP' | 'MEDIUM';
  href: string;
};

type ThumbnailProps = {
  title: string;
  subTitle?: string;
  img: string;
  description?: string;
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
          <p css={subTitleCss}>{subTitle}</p>
          <p css={titleCss} dangerouslySetInnerHTML={{ __html: title as string }} />
        </div>
        <p css={descriptionCss} dangerouslySetInnerHTML={{ __html: description as string }} />
        {links && (
          <div css={linkContainerCss}>
            {links.map(link => (
              <span key={link.type} css={linkWrapperCss}>
                <a href={link.href} target="_blank" css={linkCss} rel="noreferrer">
                  {link.type}
                </a>
                {/* NOTE: 화살표 교체 필요 */}
                <span>
                  <ArrowIcon
                    direction={'right'}
                    color={colors.sub.lightMint}
                    width={16}
                    height={16}
                  />
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
  height: 220px;
  max-width: 312px;
  overflow: hidden;
  border-radius: 12px;

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
    filter: brightness(0.3);
  }
`;

const imageCss = css`
  object-fit: cover;
  object-position: center;
  border-radius: 12px;
`;

const contentsCss = css`
  display: flex;
  gap: 2px;
  padding: 24px;
  flex-direction: column;
  height: 100%;
  transition: opacity 0.3s ease;
  opacity: 0;

  &:hover {
    opacity: 1;
    backdrop-filter: blur(10px);
  }
`;

const linkContainerCss = css`
  margin-top: auto;
  display: flex;
  gap: 12px;
  align-items: center;
`;

const linkWrapperCss = css`
  display: flex;
  align-items: center;
`;

const linkCss = (theme: Theme) => css`
  position: relative;
  ${theme.typosV2.pretendard.semibold16}
  color: ${colors.sub.lightMint};
  margin-right: 2px;
  z-index: 10;
`;

const titleCss = css`
  position: relative;
  ${theme.typosV2.pretendard.semibold24}
  line-height: 150%;
  color: ${colors.grey['00']};
  z-index: 10;
  margin-top: 2px;
`;

const subTitleCss = css`
  position: relative;
  ${theme.typosV2.pretendard.medium14}
  line-height: 150%;
  color: ${colors.grey['00']};
  opacity: 46%;
  z-index: 10;
`;

const gradientCss = css`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 172px;
`;

const descriptionCss = css`
  ${theme.typosV2.pretendard.medium15}
  line-height: 150%;
  position: relative;
  color: ${colors.grey['00']};
  z-index: 10;
  white-space: pre-wrap;
`;
