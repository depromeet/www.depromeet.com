import Image from 'next/image';
import { useState } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Device } from 'common/contexts/device';
import { useDeviceContext } from 'common/hooks';

import { Github, Behance, LinkedIn, Homepage } from '../assets';
import { Person as Props } from '../utils/member';

export default function Person({ name, depromeetPosition, jobPosition, photoLink, link }: Props) {
  const device = useDeviceContext();
  const [hover, setHover] = useState(false);

  return (
    <Container onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <ImageWrapper device={device}>
        <Image src={photoLink} layout="fill" objectFit="cover" css={{ borderRadius: '10px 10px 0 0' }} />
      </ImageWrapper>

      <Info device={device}>
        <Name device={device}>
          {name}
          {depromeetPosition && `(${depromeetPosition})`}
        </Name>

        <Position css={{ marginTop: device === 'mobile' ? 6 : 12 }} device={device}>
          {jobPosition}
        </Position>
      </Info>

      {hover && (
        <Backdrop device={device}>
          {link?.behance != null && <Behance onClick={() => window.open(link.behance)} />}
          {link?.github != null && <Github onClick={() => window.open(link.github)} />}
          {link?.linkedIn != null && <LinkedIn onClick={() => window.open(link.linkedIn)} />}
          {link?.homepage != null && <Homepage onClick={() => window.open(link.homepage)} />}
        </Backdrop>
      )}
    </Container>
  );
}

const ImageWrapper = styled.div<{ device: Device }>`
  position: relative;
  width: 100%;
  height: 277px;
  border-radius: 10px;

  ${({ device }) =>
    device === 'mobile' &&
    css`
      height: 156px;
    `}
`;

const Container = styled.div`
  position: relative;
  background-color: #242424;
  border-radius: 10px;
`;

const Info = styled.section<{ device: Device }>`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 31px 20px;

  ${({ device }) =>
    device === 'mobile' &&
    css`
      padding: 15px 15px;
    `}
`;

const Name = styled.span<{ device: Device }>`
  font-size: 20px;
  font-weight: bold;
  color: #fff;

  ${({ device }) =>
    device === 'mobile' &&
    css`
      font-size: 14px;
    `}
`;

const Position = styled.span<{ device: Device }>`
  display: block;
  font-size: 16px;
  color: #8c8c8c;

  ${({ device }) =>
    device === 'mobile' &&
    css`
      font-size: 12px;
    `}
`;

const Backdrop = styled.div<{ device: Device }>`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 14px;

  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);

  svg {
    cursor: pointer;
  }

  ${({ device }) =>
    device === 'mobile' &&
    css`
      border-radius: 5px;

      svg {
        width: 36px;
        height: 36px;
      }
    `}
`;
