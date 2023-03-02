import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import { AnimatePresence, m } from 'framer-motion';

import useToggle from '~/hooks/use-toggle';
import { colors } from '~/styles/constants';
import { layoutCss } from '~/styles/css';

import { ANCHORS_HEIGHT } from './constants';
import HamburgerButton from './HamburgerButton';
import HamburgerContent from './HamburgerContent';
import { Route } from './type';

export default function MobileAnchorSection() {
  const [isOpen, toggleIsOpen] = useToggle();

  const { currentRoute, restRoutes } = useCurrentRoute();

  return (
    <>
      <m.section css={sectionCss} animate={isOpen ? 'open' : 'closed'}>
        <div css={wrapperCss}>
          <h1 css={titleCss}>{currentRoute.name}</h1>
          <HamburgerButton toggleIsOpen={toggleIsOpen} />
        </div>
      </m.section>

      <AnimatePresence>{isOpen && <HamburgerContent routes={restRoutes} />}</AnimatePresence>
    </>
  );
}

const sectionCss = css`
  height: ${ANCHORS_HEIGHT}px;
  background: rgba(240, 240, 241, 0.6);
  backdrop-filter: blur(25px);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-bottom: 1px solid ${colors.black};
`;

const wrapperCss = css`
  ${layoutCss};
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  flex-shrink: 0;
`;

const titleCss = css`
  font-weight: 600;
  font-size: 1.125rem;
`;

const NAVIGATION_ROUTES: readonly Route[] = [
  { name: 'DEPROMEET', path: '/' },
  { name: '디프만 A TO Z', path: '/about' },
  { name: '지난 프로젝트', path: '/project' },
  { name: '문의하기', path: '/contact' },
  { name: '13기 모집 안내', path: '/recruit' },
];

function findRouteByPathname(pathname: string) {
  const route =
    NAVIGATION_ROUTES.find(eachRoute => eachRoute.path.startsWith(pathname)) ??
    NAVIGATION_ROUTES[0];

  return route;
}

function getExcludeRoutes(excludeRoute: Route) {
  return NAVIGATION_ROUTES.filter(route => route.path !== excludeRoute.path);
}

function useCurrentRoute() {
  const router = useRouter();
  const [currentRoute, setCurrentRoute] = useState<Route>(findRouteByPathname(router.pathname));
  const [restRoutes, setRestRoutes] = useState<Route[]>(getExcludeRoutes(currentRoute));

  useEffect(() => {
    function onRouteChange(path: string) {
      const nextRoute = findRouteByPathname(path);
      setCurrentRoute(nextRoute);
      setRestRoutes(getExcludeRoutes(nextRoute));
    }

    router.events.on('routeChangeComplete', onRouteChange);

    return () => router.events.off('routeChangeComplete', onRouteChange);
  }, [router.events]);

  return { currentRoute, restRoutes };
}
