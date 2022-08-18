import Link from 'next/link';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';

import { colors } from '~/styles/constants';
import { layoutCss } from '~/styles/css';

interface Route {
  name: string;
  path: string;
}

const ROUTES: Route[] = [
  { name: '프로젝트', path: '/project' },
  { name: '문의하기', path: '/contact' },
  { name: '리쿠르트', path: '/recruit' },
];

export default function NavigationBar() {
  const router = useRouter();

  console.log(router.asPath);

  return (
    <nav css={navCss}>
      <div css={wrapperCss}>
        <div>
          <Link href="/">디프만 로고</Link>
        </div>

        <div css={anchorWrapperCss}>
          {ROUTES.map(route => (
            <Link key={route.name} href={route.path}>
              <a css={anchorCss(router.asPath, router.asPath.includes(route.path))}>{route.name}</a>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

const navCss = css`
  width: 100%;
  height: 60px;
`;

const wrapperCss = css`
  ${layoutCss}
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const anchorWrapperCss = css`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 2.5rem;
`;

const anchorCss = (path: string, isActive: boolean) => css`
  font-size: 1rem;
  line-height: 118.75%;

  padding: 10px 20px;
  border-radius: 8px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${colors.gray9};
  }

  ${isActive ? activeAnchorCss : inactiveAnchorCss}
  ${(path === '/' || path === '/interview') && defaultAnchorCss}
`;

const defaultAnchorCss = css`
  color: ${colors.white};
`;

const activeAnchorCss = css`
  font-weight: 700;
`;

const inactiveAnchorCss = css`
  color: ${colors.gray2};
`;
