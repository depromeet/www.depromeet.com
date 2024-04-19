import { css, Theme } from '@emotion/react';

import { mediaQuery } from '~/styles/media';
import { formatSingleDigit } from '~/utils/format';

interface QualificationItemProps {
  index: number;
  description: string;
}

export function QualificationItem({ index, description }: QualificationItemProps) {
  return (
    <div css={layoutCss}>
      <h3 css={indexCss}>{formatSingleDigit(index)}</h3>
      <p css={descriptionCss}>{description}</p>
    </div>
  );
}

const layoutCss = css`
  padding: 48px 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: white;

  ${mediaQuery('tablet')} {
    padding: 48px 38px;
  }
  ${mediaQuery('mobile')} {
    padding: 16px;
  }
`;

const indexCss = (theme: Theme) => css`
  ${theme.typos.bebas.regular32};
  color: ${theme.colors.pink};

  ${mediaQuery('mobile')} {
    ${theme.typos.bebas.regular24};
  }
`;

const descriptionCss = (theme: Theme) => css`
  ${theme.typos.notosans.semibold16};
  color: black;

  ${mediaQuery('mobile')} {
    ${theme.typos.notosans.regular14};
  }
`;
