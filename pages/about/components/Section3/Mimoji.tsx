import Image from 'next/image';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { Device, useDeviceContext } from 'contexts/device';

type Props = {
  job: string;
  color: string;
  order: number;
  src: string;
};

export default function Mimoji({ job, color, order, src }: Props) {
  const device = useDeviceContext();

  return (
    <Container device={device} order={order} css={{ color }}>
      <Background device={device} css={{ backgroundColor: color }} />

      <JobContainer device={device} order={order}>
        {job}
      </JobContainer>

      <Positioner device={device} order={order}>
        <ImageWrapper device={device}>
          <Image src={src} alt={src} layout="fill" loading="lazy" objectFit="contain" />
        </ImageWrapper>
      </Positioner>
    </Container>
  );
}

const Container = styled.div<{ order: number; device: Device }>`
  position: relative;
  width: 267px;
  height: 282px;

  display: flex;
  justify-content: center;
  align-items: center;

  text-transform: uppercase;
  background: transparent;

  ${({ device }) =>
    device === 'mobile' &&
    css`
      z-index: 2;
      position: absolute;
      top: -60px;

      width: 160px;
      height: 120px;
    `}
`;

const Background = styled.div<{ device: Device }>`
  width: 190px;
  height: 190px;
  border-radius: 50%;

  ${({ device }) =>
    device === 'mobile' &&
    css`
      width: 104px;
      height: 104px;
    `}
`;

const JobContainer = styled.div<{ order: number; device: Device }>`
  z-index: 1;
  position: absolute;

  top: ${({ order }) => (order % 2 === 0 ? '69px' : '65px')};
  left: ${({ order }) => (order % 2 === 0 ? '1px' : '127px')};

  display: flex;
  justify-content: center;
  align-items: center;

  font-style: normal;
  font-weight: bold;
  font-size: 16px;

  line-height: 20px;
  background-color: #fff;
  border-radius: 76.5px;

  padding: 12px 24px;

  transform: ${({ order }) => (order % 2 === 0 ? 'rotate(2.3deg)' : 'rotate(-4.63deg)')};

  ${({ device, order }) =>
    device === 'mobile' &&
    css`
      z-index: 3;

      top: unset;
      left: unset;
      bottom: 3px;

      font-weight: bold;
      font-size: 14px;
      line-height: 17px;

      padding: 7.4px 16.5px;

      transform: ${order % 2 === 0 ? 'rotate(-5.16deg)' : 'rotate(5.16deg)'};
    `}
`;

const Positioner = styled.div<{ order: number; device: Device }>`
  z-index: 2;
  position: absolute;

  right: ${({ order }) => (order % 2 === 0 ? '17px' : '76px')};
  bottom: 30px;

  ${({ device, order }) =>
    device === 'mobile' &&
    css`
      z-index: 1000;

      top: ${order % 2 === 0 ? '-10px' : '-20px'};
      left: 0;
      right: 0;
      bottom: 0;

      display: flex;
      justify-content: center;
      align-items: center;
    `}
`;

const ImageWrapper = styled.div<{ device: Device }>`
  position: relative;
  width: 177px;
  height: 177px;

  ${({ device }) =>
    device === 'mobile' &&
    css`
      width: 96px;
      height: 96px;
    `}
`;
