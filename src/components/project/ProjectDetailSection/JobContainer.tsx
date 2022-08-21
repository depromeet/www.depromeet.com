import React from 'react';
import { css } from '@emotion/react';

import { colors } from '~/styles/constants';

const memberTextFilter = (members: string[]) => {
  return members.reduce((result, member) => {
    return `${result}, ${member}`;
  });
};

interface Props {
  job: 'Design' | 'FrontEnd' | 'Backend';
  member: string[];
}

export default function JobContainer({ job, member }: Props) {
  return (
    <div css={JobContainerCss}>
      <div css={jobCss}>{job}</div>
      <div css={memberCss}>{memberTextFilter(member)}</div>
    </div>
  );
}

const JobContainerCss = css`
  display: flex;
  margin-bottom: 12px;
`;

const jobCss = css`
  min-width: 105px;
  font-weight: 400;
  color: ${colors.gray2};
`;

const memberCss = css`
  font-weight: 500;
  color: ${colors.gray4};
  white-space: nowrap;
`;
