import Image from 'next/image';
import { useState } from 'react';
import styled from '@emotion/styled';

import { Device } from 'common/contexts/device';
import { useDeviceContext } from 'common/hooks';

/**
 * @NOTE (@jonghopark95)
 * - 시간 관계 상 project 폴더에서 import 합니다.
 * - 추후 컴포넌트 hierarchy 를 위로 올려야 합니다.
 */
import { Carousel } from 'modules/project/components';
import { projects } from 'modules/project/utils/projects';

import { css } from '@emotion/react';

export default function ProjectList() {
  const device = useDeviceContext();
  const [currentProjectId, setCurrentProjectId] = useState(0);
  const [carouselOpen, setCarouselOpen] = useState(false);

  return (
    <>
      <Grid device={device}>
        {projects.map(({ order, title, icon }) => (
          <Item key={order} device={device}>
            <Image
              alt={title}
              src={`/projects/${icon}`}
              width="100%"
              height="100%"
              layout="responsive"
              onClick={() => {
                setCarouselOpen(true);
                setCurrentProjectId(order - 1);
              }}
            />
          </Item>
        ))}
      </Grid>

      <Carousel
        open={carouselOpen}
        data={projects}
        currentDataId={currentProjectId}
        onPrev={() => setCurrentProjectId((prevState) => prevState - 1)}
        onNext={() => setCurrentProjectId((prevState) => prevState + 1)}
        onClose={() => setCarouselOpen(false)}
      />
    </>
  );
}

const Grid = styled.div<{ device: Device }>`
  overflow-x: scroll;

  display: grid;
  grid-template-columns: repeat(${projects.length}, 1fr);
  gap: 0 24px;

  ${({ device }) =>
    device === 'mobile' &&
    css`
      width: 100%;

      grid-template-columns: repeat(${Math.ceil(projects.length / 2)}, 1fr);
      grid-template-rows: 1fr 1fr;
      gap: 24px;
    `}
`;

const Item = styled.div<{ device: Device }>`
  width: 170px;
  height: 170px;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }

  ${({ device }) =>
    device === 'mobile' &&
    css`
      width: 96px;
      height: 96px;
    `}
`;
