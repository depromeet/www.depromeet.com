import Link from 'next/link';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';

import { colors, mediaQuery } from '~/styles/constants';

interface Props {
  href: string;
  name: string;
}

export default function Anchor({ href, name }: Props) {
  const router = useRouter();

  return (
    <Link href={href} passHref>
      <a css={anchorCss(router.asPath, router.asPath.includes(href))}>{name}</a>
    </Link>
  );
}

const anchorCss = (path: string, isActive: boolean) => css`
  font-size: 16px;
  line-height: 118.75%;

  padding: 10px 20px;
  border-radius: 8px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${colors.gray9};
  }

  ${isActive ? activeAnchorCss : inactiveAnchorCss}
  ${(path === '/' || path === '/interview') && defaultAnchorCss}

  ${mediaQuery('xs')} {
    padding: 0;
  }
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
