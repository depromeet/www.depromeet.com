import { PropsWithChildren } from 'react';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import { AnimatePresence, m } from 'framer-motion';

import { colors } from '~/styles/constants';
import { layoutCss } from '~/styles/css';

import { ANCHORS_HEIGHT, aseteriskVariants, NAVIGATION_ROUTES } from './constants';
import { ClickableLink } from '../Clickable';
import { AsteriskIcon } from '../icons/AsteriskIcon';
import { DepromeetIcon } from '../icons/DepromeetIcon';

export default function DesktopAnchorSection() {
  const { pathname } = useRouter();

  return (
    <section css={anchorSectionCss}>
      <div css={anchorWrapperCss}>
        <Anchor href="/">
          <DepromeetIcon />
        </Anchor>

        {NAVIGATION_ROUTES.map(route => (
          <Anchor key={route.path} href={route.path}>
            <span css={anchorContentCss}>
              <AnimatePresence initial={false}>
                {pathname.startsWith(route.path) && (
                  <m.span
                    css={currentRouteIconCss}
                    variants={aseteriskVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <AsteriskIcon width={14} height={14} />
                  </m.span>
                )}
              </AnimatePresence>
              {route.name}
            </span>
          </Anchor>
        ))}
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

const anchorContentCss = css`
  position: relative;
  display: flex;
  align-items: center;
`;

const currentRouteIconCss = css`
  position: absolute;
  /* width - gap */
  left: calc(-14px - 4px);
`;

interface AnchorProps {
  href: string;
}

function Anchor({ href, children }: PropsWithChildren<AnchorProps>) {
  return (
    <ClickableLink href={href} css={anchorCss}>
      {children}
    </ClickableLink>
  );
}

const anchorCss = css`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 600;
  font-size: 1.125rem;
`;
