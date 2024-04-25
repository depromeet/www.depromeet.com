import Image from 'next/image';
import Link from 'next/link';
import { css } from '@emotion/react';

import { theme } from '~/styles/theme';

export function LinkButton({ color, text, href }: { color: string; text: string; href: string }) {
  const arrowSrc = `/images/main/${color === 'black' ? '' : 'white-'}arrow.svg`;

  return (
    <Link css={linkCss({ color })} href={href}>
      {text}
      <span css={arrowImgContainerCss({ color: color === 'black' ? 'white' : 'black' })}>
        <Image src={arrowSrc} width={15} height={15} alt={`${text} 버튼`} />
      </span>
    </Link>
  );
}

const linkCss = ({ color }: { color: string }) => css`
  padding: 16px, 40px, 16px, 48px;
  width: 205px;
  height: 62px;
  display: flex;
  gap: 8px;
  ${theme.typosV2.pretendard.regular20};
  color: ${color === 'black' ? 'white' : 'black'};
  background-color: ${color};
  border-radius: 400px;
  justify-content: center;
  align-items: center;
`;

const arrowImgContainerCss = ({ color }: { color: string }) => css`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 400px;
  background-color: ${color};
`;
