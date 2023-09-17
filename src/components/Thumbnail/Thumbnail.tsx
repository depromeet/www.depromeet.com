import Image from 'next/image';
import { css } from '@emotion/react';
import { m, Variants } from 'framer-motion';

import { ArrowIcon } from '~/components/Icons';
import { colors } from '~/styles/colors';

export type Link = {
  type: 'Behance' | 'Github' | 'Web' | 'App';
  href: string;
};

type ThumbnailProps = {
  title: string;
  subTitle: string;
  img: string;
  description: string;
  links?: Link[];
};

const defaultEasing = [0.6, -0.05, 0.01, 0.99];

export function Thumbnail({ title, subTitle, img, description, links }: ThumbnailProps) {
  return (
    <m.article
      css={articleCss}
      initial="default"
      whileHover="hover"
      animate="default"
      variants={articleVariants}
    >
      <m.div css={imageCss} variants={imageVariants}>
        <Image src={img} alt={title} fill quality={100} />
      </m.div>
      <m.div css={contentsCss}>
        <m.div>
          <m.p css={titleCss} variants={textVariants}>
            {title}
          </m.p>
          <m.p css={subTitleCss} variants={textVariants}>
            {subTitle}
          </m.p>
        </m.div>
        <m.p
          css={descriptionCss}
          variants={textVariants}
          dangerouslySetInnerHTML={{ __html: description }}
        />
        {links && (
          <m.div css={linkContainerCss}>
            {links.map(link => (
              <m.span key={link.type} css={linkWrapperCss}>
                <m.a href={link.href} css={linkCss} variants={textVariants}>
                  {link.type}
                </m.a>
                <m.span variants={textVariants}>
                  <ArrowIcon direction={'right'} color={colors.blue400} width={16} height={16} />
                </m.span>
              </m.span>
            ))}
          </m.div>
        )}
      </m.div>
    </m.article>
  );
}

const articleCss = css`
  position: relative;
  width: 312px;
  height: 208px;
  padding: 24px;
`;

const imageCss = css`
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  z-index: -1;
  width: 100%;
  height: 100%;
`;

const contentsCss = css`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
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
  color: ${colors.blue400};
  font-weight: 500;
  font-size: 1rem;
  line-height: 22px;
  letter-spacing: -0.16px;
  margin-right: 2px;
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

const textVariants: Variants = {
  default: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: defaultEasing,
    },
  },
};

const articleVariants: Variants = {
  default: { background: 'transparent' },
  hover: {
    transition: {
      duration: 0.3,
      ease: defaultEasing,
    },
  },
};

const imageVariants: Variants = {
  default: {
    filter: 'blur(0px)',
  },
  hover: {
    filter: 'blur(7px) brightness(0.3)',
    transition: {
      duration: 0.3,
      ease: defaultEasing,
    },
  },
};
