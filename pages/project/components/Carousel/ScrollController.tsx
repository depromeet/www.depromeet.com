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
        width: ${width > 1360 ? 314 + getContentGap(width) * 9.5 : width}px;
        left: ${width > 1360 ? -20 : (800 - width) / 2}px;
      `}
    >
      <ScrollIndicator
        onClick={onPrev}
        onMouseOver={() => setLeftHover(true)}
        onMouseOut={() => setLeftHover(false)}
        css={index === 0 && { visibility: 'hidden' }}
      >
        <img src={`/ic_left_${leftHover ? `hover` : `default`}.svg`} alt="prev" css={{ cursor: 'pointer' }} />
      </ScrollIndicator>

      <span
        css={css`
          width: ${width > 1360 ? 748 : width - 104}px;
          height: 0px;
        `}
      />

      <ScrollIndicator
        onClick={onNext}
        onMouseOver={() => setRightHover(true)}
        onMouseOut={() => setRightHover(false)}
        css={index === length - 1 && { visibility: 'hidden' }}
      >
        <img src={`/ic_right_${rightHover ? `hover` : `default`}.svg`} alt="next" css={{ cursor: 'pointer' }} />
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
  justify-content: center;
`;

const ScrollIndicator = styled.image`
  width: 52px;
  height: 52px;
  background-color: transparent;
  border-radius: 50%;
`;
