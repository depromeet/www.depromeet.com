import { ComponentProps } from 'react';
import Image from 'next/image';
import { css } from '@emotion/react';
import { m, Variants } from 'framer-motion';

import { defaultEasing } from '~/constants/motions';
import useMediaQuery from '~/hooks/use-media-query';
import useToggle from '~/hooks/use-toggle';
import { colors } from '~/styles/constants';

import { Organizer } from './constants';
import { ClickableLink } from '../common/Clickable';
import { BehanceIcon, GithubIcon, LinkedinIcon, WebIcon } from '../common/icons';

export default function OrganizerCard({
  name,
  position,
  src,
  behance,
  linkedin,
  github,
  web,
}: Organizer) {
  const isMobile = useMediaQuery('xs');
  const [isOpen, toggleIsOpen] = useToggle(false);

  const onMobileClick = () => {
    if (!isMobile) return;
    toggleIsOpen();
  };

  return (
    <m.article
      css={articleCss}
      onClick={onMobileClick}
      initial="default"
      whileHover="hover"
      animate={isOpen ? 'hover' : 'default'}
    >
      <Image css={imageCss} src={src} alt={name} fill placeholder="blur" blurDataURL={src} />
      <h3 css={nameCss}>{name}</h3>
      <h4 css={positionCss}>{position}</h4>

      <m.div css={overlayCss} variants={overlayVariants}>
        <m.div variants={hoverStaggerVariants}>
          <m.span css={asteriskSpanCss}>*</m.span>
          <m.p css={paragraphCss} variants={paragraphVariants}>
            IF YOU
          </m.p>
          <m.p css={paragraphCss} variants={paragraphVariants}>
            WISH TO KNOW
          </m.p>
          <m.p css={paragraphCss} variants={paragraphVariants}>
            MORE
          </m.p>
        </m.div>

        <m.div css={linkWrapperCss} variants={linkStaggerVariants}>
          {behance && (
            <MotionClickableLink href={behance}>
              <BehanceIcon />
            </MotionClickableLink>
          )}

          {linkedin && (
            <MotionClickableLink href={linkedin}>
              <LinkedinIcon />
            </MotionClickableLink>
          )}

          {github && (
            <MotionClickableLink href={github}>
              <GithubIcon />
            </MotionClickableLink>
          )}

          {web && (
            <MotionClickableLink href={web}>
              <WebIcon />
            </MotionClickableLink>
          )}
        </m.div>
      </m.div>
    </m.article>
  );
}

const articleCss = css`
  position: relative;
  width: 282px;
  height: 348px;
  border-top: solid 1px ${colors.black};
  padding: 24px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: ${colors.white};
`;

const imageCss = css`
  object-fit: cover;
  z-index: -1;
`;

const nameCss = css`
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.75rem;
  margin-bottom: 4px;
`;

const positionCss = css`
  font-weight: 500;
  font-size: 1rem;
  line-height: 140%;
`;

const overlayCss = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding-top: 24px;
  padding-left: 24px;
  padding-bottom: 20px;
  padding-right: 24px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${colors.black};
`;

const overlayVariants: Variants = {
  default: {
    opacity: 0,
    transition: { duration: 0.6, ease: defaultEasing },
  },
  hover: {
    opacity: 1,
    transition: { duration: 0.6, ease: defaultEasing, staggerChildren: 0.75 },
  },
};

const hoverStaggerVariants: Variants = {
  hover: {
    transition: { staggerChildren: 0.5 },
  },
};

const linkStaggerVariants: Variants = {
  hover: {
    transition: { delay: 3, staggerChildren: 0.5 },
  },
};

const asteriskSpanCss = css`
  font-weight: 500;
  font-size: 26px;
  line-height: 31px;
  color: ${colors.point};

  margin-bottom: 24px;
`;

const paragraphCss = css`
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.5rem;
`;

const paragraphVariants: Variants = {
  default: {
    opacity: 0,
    transition: { duration: 0.6, ease: defaultEasing },
  },
  hover: {
    opacity: 1,
    transition: { duration: 0.6, ease: defaultEasing },
  },
};

const linkWrapperCss = css`
  display: flex;
  gap: 18px;
`;

function MotionClickableLink({ href, children, ...props }: ComponentProps<typeof ClickableLink>) {
  return (
    <m.span variants={linkVariants}>
      <ClickableLink css={linkCss} href={href} {...props}>
        {children}
      </ClickableLink>
    </m.span>
  );
}

const linkCss = css`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const linkVariants: Variants = {
  default: {
    opacity: 0,
    y: 10,
    transition: { duration: 0.6, ease: defaultEasing },
  },
  hover: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: defaultEasing },
  },
};
