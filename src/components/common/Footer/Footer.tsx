import Link from 'next/link';
import { css } from '@emotion/react';

import {
  DEPROMEET_BEHANCE,
  DEPROMEET_EMAIL,
  DEPROMEET_FACEBOOK,
  DEPROMEET_GITHUB,
  DEPROMEET_INSTAGRAM,
  DEPROMEET_MEDIUM,
} from '~/constants/common';
import { colors } from '~/styles/constants';
import { layoutCss } from '~/styles/css';

export default function Footer() {
  const date = new Date();

  return (
    <footer css={footerCss}>
      <section css={anchorSectionCss}>
        <Anchor text="E-MAIL" href={`mailto:${DEPROMEET_EMAIL}`} />
        <Anchor text="FACEBOOK" href={DEPROMEET_FACEBOOK} />
        <Anchor text="INSTAGRAM" href={DEPROMEET_INSTAGRAM} />
        <Anchor text="BEHANCE" href={DEPROMEET_BEHANCE} />
        <Anchor text="GITHUB" href={DEPROMEET_GITHUB} />
        <Anchor text="MEDIUM" href={DEPROMEET_MEDIUM} />
      </section>
      <span css={copyRightCss}>&copy; {date.getFullYear()} DEPROMEET. ALL RIGHTS RESERVED.</span>
    </footer>
  );
}

const footerCss = css`
  ${layoutCss}
  height: 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
`;

const anchorSectionCss = css`
  display: flex;
  gap: 3.25rem;
`;

const copyRightCss = css`
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 140%;
  color: ${colors.gray500};
`;

interface AnchorProps {
  text: string;
  href: string;
}

function Anchor({ text, href }: AnchorProps) {
  return (
    <Link href={href} css={anchorCss} target="_blank" rel="noopener noreferrer">
      {text}
    </Link>
  );
}

const anchorCss = css`
  font-weight: 600;
  font-size: 14px;
  line-height: 140%;

  letter-spacing: -0.3px;
`;
