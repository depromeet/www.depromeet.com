import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Header, Layout, Footer } from 'common/components';
import { Device } from 'common/contexts/device';
import { usePassed } from 'common/hooks';

import { Schedule, ProjectListDesktopView, ProjectListMobileView } from './components';

export default function Project() {
  const passed = usePassed({ y: 200 });

  return (
    <Layout header={<Header showBackground={passed} />} footer={<Footer />}>
      {(device) => (
        <>
          <Background />

          <Container device={device}>
            <div>
              <Catchphrase device={device}>
                <p>서비스 런칭부터 개선까지</p>
                <p>
                  <strong css={{ fontWeight: device === 'mobile' ? 800 : 'bold' }}>경험에 성장을 더합니다.</strong>
                </p>
              </Catchphrase>

              {device === 'mobile' ? <ProjectListMobileView /> : <ProjectListDesktopView />}

              <Schedule />
            </div>
          </Container>
        </>
      )}
    </Layout>
  );
}

const Background = styled.div`
  z-index: -1;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;

  background: linear-gradient(150.23deg, rgba(49, 107, 255, 0.97) 5.68%, rgba(0, 0, 0, 0.97) 31.37%);
`;

const Container = styled.div<{ device: Device }>`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: transparent;
  margin: 240px 0 340px 0;
  padding: 0 24px;

  ${({ device }) =>
    device === 'mobile' &&
    css`
      box-sizing: border-box;

      margin: 240px 0 240px 0;
      width: 100%;
    `}
`;

const Catchphrase = styled.h1<{ device: Device }>`
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 56px;
  letter-spacing: -0.3px;
  color: #fff;

  margin-bottom: 78px;

  ${({ device }) =>
    device === 'mobile' &&
    css`
      font-weight: 300;
      font-size: 28px;
      line-height: 40px;
      margin-bottom: 48px;
    `}
`;
