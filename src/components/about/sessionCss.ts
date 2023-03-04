import { css } from '@emotion/react';

import { colors } from '~/styles/constants';

export const weekHeadingCss = css`
  display: flex;
  align-items: center;
  gap: 4px;

  margin-bottom: 26px;

  & > i {
    font-family: 'Helvetica';
    font-style: italic;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    margin-left: 2px;
    padding-top: 3px;
  }
`;

export const weekCircleSpanCss = css`
  min-width: 29px;
  padding-top: 1px;
  padding-left: 7px;
  padding-right: 7px;
  height: 29px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  background-color: ${colors.black};
  color: ${colors.gray100};

  font-family: 'Helvetica';
  font-style: italic;
  font-weight: 400;
  font-size: 1.25rem;
  letter-spacing: 3px;
`;
