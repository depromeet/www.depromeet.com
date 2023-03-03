import { PropsWithChildren } from 'react';
import Link from 'next/link';
import { css } from '@emotion/react';

import { colors } from '~/styles/constants';
import { layoutCss } from '~/styles/css';

import { ANCHORS_HEIGHT } from './constants';

export default function DesktopAnchorSection() {
  return (
    <section css={anchorSectionCss}>
      <div css={anchorWrapperCss}>
        <Anchor href="/">디프만 로고</Anchor>
        <Anchor href="/about">디프만 A TO Z</Anchor>
        <Anchor href="/project">지난 프로젝트</Anchor>
        <Anchor href="/contact">문의하기</Anchor>
        <Anchor href="/recruit">13기 모집 안내</Anchor>
      </div>
    </section>
  );
}

const anchorSectionCss = css`
  height: ${ANCHORS_HEIGHT}px;
  background: rgba(240, 240, 241, 0.6);
  backdrop-filter: blur(25px);

  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom: 1px solid ${colors.black};
`;

const anchorWrapperCss = css`
  ${layoutCss};

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

interface AnchorProps {
  href: string;
}

function Anchor({ href, children }: PropsWithChildren<AnchorProps>) {
  return (
    <Link href={href} css={anchorCss}>
      {children}
    </Link>
  );
}

const anchorCss = css`
  font-weight: 600;
  font-size: 1.125rem;
`;
