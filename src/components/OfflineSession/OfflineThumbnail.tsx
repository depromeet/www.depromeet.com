import Image from 'next/image';
import { css, Theme } from '@emotion/react';
import { m, Variants } from 'framer-motion';

import { useCheckWindowSize } from '~/hooks/useCheckWindowSize';
import useToggle from '~/hooks/useToggle';
import { colors } from '~/styles/colors';
import { mediaQuery } from '~/styles/media';
import { theme } from '~/styles/theme';

import { ArrowIcon } from '../Icons';

export type Link = {
  type: 'Behance' | 'Github' | 'Web' | 'App';
  href: string;
};

type ThumbnailProps = {
  title: string;
  subTitle: string;
  img: string;
  description: string;
  titleTextColor: string;
  links?: Link[];
  showInfoDefault?: boolean;
  backgroundShow?: boolean;
};

const defaultEasing = [0.6, -0.05, 0.01, 0.99];

export function OfflineThumbnail({
  title,
  subTitle,
  img,
  description,
  titleTextColor,
  links,
  showInfoDefault = false,
  backgroundShow = false,
}: ThumbnailProps) {
  const { isTargetSize: isMobileSize } = useCheckWindowSize('mobile');
  const [isOpen, toggleIsOpen] = useToggle(false);

  const onMobileClick = () => {
    if (!isMobileSize) return;
    toggleIsOpen();
  };

  return (
    <m.article
      css={articleCss}
      initial="default"
      whileHover="hover"
      animate={isMobileSize && isOpen ? 'hover' : 'default'}
      onClick={onMobileClick}
      variants={
        backgroundShow
          ? {
              ...articleVariants,
              default: {
                background: 'linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.75) 100%)',
              },
            }
          : articleVariants
      }
    >
      <m.div css={imageCss} variants={imageVariants}>
        <Image src={img} alt={title} fill quality={100} />
      </m.div>
      <m.div css={contentsCss}>
        <m.div>
          <m.p
            css={titleCss(titleTextColor)}
            variants={showInfoDefault ? { ...textVariants, default: { opacity: 1 } } : textVariants}
          >
            {title}
          </m.p>
          <m.p
            css={subTitleCss}
            variants={
              showInfoDefault
                ? { ...textVariants, default: { opacity: 1 }, hover: { color: 'white' } }
                : textVariants
            }
          >
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
      <Image src={img} alt={title} fill />
    </m.article>
  );
}

const articleCss = css`
  position: relative;
  width: 100%;
  height: 208px;
  padding: 24px;
  overflow: hidden;
  ${mediaQuery('mobile')} {
    padding: 14px;
    height: 158px;
  }
  &:hover {
    cursor: pointer;
  }
`;

const imageCss = css`
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  object-position: center;
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

const titleCss = (color: string) => css`
  ${theme.typos.bebas.regular40}
  position: relative;
  color: ${color};
  z-index: 10;
  ${mediaQuery('mobile')} {
    font-size: 1rem;
  }
`;

const subTitleCss = (theme: Theme) => css`
  ${theme.typos.notosans.semibold20}
  position: relative;
  color: black;
  z-index: 10;
  ${mediaQuery('mobile')} {
    font-size: 0.8rem;
    margin-top: -5px;
  }
`;

const descriptionCss = css`
  position: relative;
  font-weight: 500;
  font-size: 1rem;
  line-height: 22px;
  color: white;
  z-index: 10;
  letter-spacing: -0.16px;
  white-space: pre-wrap;
  ${mediaQuery('mobile')} {
    line-height: 20px;
    font-size: 0.75rem;
  }
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
  default: { backgroundColor: 'transparent' },
  hover: {
    backgroundColor: 'black',
    transition: {
      duration: 0.3,
      ease: defaultEasing,
    },
  },
};

const imageVariants: Variants = {
  default: {
    background: 'white',
  },
  hover: {
    background: 'rgba(19, 28, 40, 0.70)',
    backdropFilter: 'blur(7.198952674865723px)',
    transition: {
      duration: 0.3,
      ease: defaultEasing,
    },
  },
};
