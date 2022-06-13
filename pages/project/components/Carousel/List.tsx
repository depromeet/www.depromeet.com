import React, { forwardRef, useLayoutEffect } from 'react';
import { FixedSizeList } from 'react-window';
import { css } from '@emotion/react';

import { useDeviceContext } from 'common/hooks';
import { useProjectInfo } from 'pages/project/hooks';

import { projects } from '../../utils/projects';
import { calcItemCenterPosition, calcRealListWidth } from '../../utils/position';

import Card from './Card';

type Props = React.PropsWithRef<OwnProps>;

type OwnProps = {
  width: number;
  onPrev: () => void;
  onNext: () => void;
};

export default forwardRef(function List({ width, onPrev, onNext }: Props, ref: React.Ref<FixedSizeList>) {
  const device = useDeviceContext();
  const { id } = useProjectInfo();

  useLayoutEffect(() => {
    if (ref != null && 'current' in ref) {
      ref.current?.scrollTo(calcItemCenterPosition(id, width));
    }
  }, [ref, id, width]);

  return (
    <FixedSizeList
      ref={ref}
      layout="horizontal"
      width={width}
      height={device === 'mobile' ? 650 : 840}
      itemSize={device === 'mobile' ? 314 : 800}
      itemData={projects}
      itemCount={projects.length}
      innerElementType={forwardRef(({ style, ...rest }, ref) => (
        <div
          ref={ref}
          css={css`
            height: 100%;
            width: ${calcRealListWidth(width, style.width)}px;
          `}
          {...rest}
        />
      ))}
      style={{
        overflowX: device === 'mobile' ? 'scroll' : 'hidden',
        overflowY: 'hidden',
      }}
      css={css`
        -ms-overflow-style: none;
        scrollbar-width: none;
        position: relative;

        ::-webkit-scrollbar {
          display: none;
        }
      `}
    >
      {(props) => <Card project={projects[props.index]} width={width} onPrev={onPrev} onNext={onNext} {...props} />}
    </FixedSizeList>
  );
});
