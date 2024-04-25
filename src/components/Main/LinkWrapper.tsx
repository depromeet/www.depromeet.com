import { PropsWithChildren } from 'react';
import Link from 'next/link';
import { css, Theme } from '@emotion/react';

interface LinkWrapperProps extends PropsWithChildren {
  href: string;
  backgroundColor?: string;
  backgroundHover?: boolean;
  textColor?: string;
  textHover?: boolean;
}

interface LinkCssProps {
  backgroundColor: string;
  backgroundHover: boolean;
  textColor: string;
  textHover: boolean;
}

export function LinkWrapper({
  href,
  backgroundColor = 'black',
  backgroundHover = false,
  textColor = 'black',
  textHover = false,
  children,
}: LinkWrapperProps) {
  return (
    <Link
      css={theme => linkCss(theme, { backgroundColor, backgroundHover, textColor, textHover })}
      href={href}
    >
      {children}
    </Link>
  );
}

const linkCss = (
  theme: Theme,
  { backgroundColor, backgroundHover, textColor, textHover }: LinkCssProps
) => css`
  padding: 16px, 40px, 16px, 48px;
  width: 205px;
  height: 62px;
  display: flex;
  gap: 8px;
  ${theme.typosV2.pretendard.regular20};
  border-radius: 400px;
  justify-content: center;
  align-items: center;

  background-color: ${backgroundColor};
  color: ${textColor};

  &:hover {
    ${backgroundHover ? `background-color: ${theme.colors.pink};` : ''}
    ${textHover ? `color: ${theme.colors.pink};` : ''}
  }

  &:hover svg {
    fill: ${backgroundHover ? `${theme.colors.pink}` : ''};
  }
  &:hover span {
    background-color: ${textHover ? `${theme.colors.pink}` : ''};
  }
`;
