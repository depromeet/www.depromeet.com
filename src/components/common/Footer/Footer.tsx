import { PropsWithChildren } from 'react';
import { css } from '@emotion/react';
import { motion } from 'framer-motion';

import {
  DEPROMEET_BEHANCE,
  DEPROMEET_EMAIL,
  DEPROMEET_FACEBOOK,
  DEPROMEET_GITHUB,
  DEPROMEET_INSTAGRAM,
  DEPROMEET_MEDIUM,
} from '~/constants/common/depromeet';
import { colors, mediaQuery } from '~/styles/constants';

import {
  BehanceIcon,
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  MailIcon,
  MediumIcon,
} from '../icons';

export default function Footer() {
  const date = new Date();

  return (
    <footer>
      <section css={linkSectionCss}>
        <div css={logoWrapperCss}>디프만 로고</div>
        <div css={linkWrapperCss}>
          <MotionAnchor href={`mailto:${DEPROMEET_EMAIL}`}>
            <MailIcon width={22} height={22} />
          </MotionAnchor>

          <MotionAnchor href={DEPROMEET_FACEBOOK}>
            <FacebookIcon width={22} height={22} />
          </MotionAnchor>

          <MotionAnchor href={DEPROMEET_INSTAGRAM}>
            <InstagramIcon width={20} height={20} />
          </MotionAnchor>

          <MotionAnchor href={DEPROMEET_GITHUB}>
            <GithubIcon width={22} height={22} />
          </MotionAnchor>

          <MotionAnchor href={DEPROMEET_BEHANCE}>
            <BehanceIcon width={22} height={22} />
          </MotionAnchor>

          <MotionAnchor href={DEPROMEET_MEDIUM}>
            <MediumIcon width={19} height={19} />
          </MotionAnchor>
        </div>
      </section>

      <section css={copyRightSectionCss}>
        <span css={copyRightCss}>&copy; {date.getFullYear()} Depromeet. All rights reserved.</span>
      </section>
    </footer>
  );
}

const linkSectionCss = css`
  width: 100%;
  height: 272px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const logoWrapperCss = css`
  margin-bottom: 30px;

  ${mediaQuery('xs')} {
    margin-bottom: 28px;
  }
`;

const linkWrapperCss = css`
  display: flex;
  gap: 1.25rem;

  ${mediaQuery('xs')} {
    width: 184px;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const copyRightSectionCss = css`
  width: 100%;
  height: 50px;
  background-color: ${colors.gray9};

  display: flex;
  justify-content: center;
  align-items: center;
`;

const copyRightCss = css`
  display: block;
  font-size: 0.875rem;
  color: ${colors.gray4};
`;

interface MotionAnchorProps {
  href: string;
}

function MotionAnchor({ children, href }: PropsWithChildren<MotionAnchorProps>) {
  return (
    <motion.a
      css={motionAnchorCss}
      whileHover={{ backgroundColor: colors.gray8 }}
      whileTap={{ scale: 0.9 }}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </motion.a>
  );
}

const motionAnchorCss = css`
  width: 3rem;
  height: 3rem;

  border-radius: 50%;
  background-color: ${colors.gray9};

  display: flex;
  justify-content: center;
  align-items: center;
`;
