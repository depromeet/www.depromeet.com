import { css, Theme } from '@emotion/react';

import { ArrowIcon } from '~/components/Icons';

interface FAQProps {
  isOpen: boolean;
  title: string;
  description: string;
}

export function FAQ({ isOpen, title, description }: FAQProps) {
  return (
    <div>
      <div>
        <h3 css={titleCss}>{title}</h3>
        <ArrowIcon direction={isOpen ? 'up' : 'down'} />
      </div>
      <div>
        <p>{description}</p>
      </div>
    </div>
  );
}

const titleCss = (theme: Theme) => css`
  color: ${theme.colors.black800};
  text-align: center;
  ${theme.typos.pretendard.subTitle2}
`;
