import React, { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { useDeviceContext } from 'common/hooks';
import { getContentGap } from 'pages/project/utils/position';

import { useProjectInfo } from '../../hooks';

type Props = {
  index: number;
  width: number;
  onPrev: () => void;
  onNext: () => void;
};

export default function ScrollController({ index, width, onPrev, onNext }: Props) {
  const device = useDeviceContext();
  const { length } = useProjectInfo();

  const [leftHover, setLeftHover] = useState(false);
  const [rightHover, setRightHover] = useState(false);

  return device === 'mobile' ? null : (
    <ForegroundIndicator
      onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      css={css`
        width: ${314 + getContentGap(width) * 9.5}px;
        left: -20px;
      `}
    >
      <ScrollIndicator
        onClick={onPrev}
        onMouseOver={() => setLeftHover(true)}
        onMouseOut={() => setLeftHover(false)}
        css={index === 0 && { visibility: 'hidden' }}
      >
        <img src={`/left-${leftHover ? `hover` : `default`}.svg`} alt="prev" css={{ cursor: 'pointer' }} />
      </ScrollIndicator>

      <ScrollIndicator
        onClick={onNext}
        onMouseOver={() => setRightHover(true)}
        onMouseOut={() => setRightHover(false)}
        css={index === length - 1 && { visibility: 'hidden' }}
      >
        <img src={`/right-${rightHover ? `hover` : `default`}.svg`} alt="next" css={{ cursor: 'pointer' }} />
      </ScrollIndicator>
    </ForegroundIndicator>
  );
}

const ForegroundIndicator = styled.div`
  overflow-x: visible;
  z-index: 2000;
  position: absolute;
  max-width: 1360px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ScrollIndicator = styled.div`
  width: 52px;
  height: 52px;
  background-color: transparent;
  border-radius: 50%;
`;
