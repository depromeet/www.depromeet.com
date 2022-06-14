import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Device } from 'common/contexts/device';
import { Header, Layout, Footer } from 'common/components';

import { Box } from './components';

export default function Contact() {
  return (
    <Layout header={<Header />} footer={<Footer />}>
      {(device) => (
        <>
          {device === 'desktop' && <Background />}

          <RightSectionContainer device={device}>
            <Box />
          </RightSectionContainer>
        </>
      )}
    </Layout>
  );
}

const Background = styled.div`
  z-index: -1;
  position: absolute;
  width: 100%;
  height: 100vh;

  background: conic-gradient(
    from 180deg at 50% 50%,
    rgba(49, 107, 255, 0) 0deg,
    rgba(49, 107, 255, 0.6) 179.07deg,
    rgba(49, 107, 255, 0.8) 269.28deg,
    #316bff 360deg
  );
`;

const RightSectionContainer = styled.div<{ device: Device }>`
  display: flex;
  align-items: center;

  position: absolute;
  right: 0;

  width: 50%;
  height: 100%;

  ${({ device }) =>
    device !== 'desktop' &&
    css`
      width: 100%;
      justify-content: center;
    `}
`;
