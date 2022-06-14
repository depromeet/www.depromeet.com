import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Header, Layout, Footer } from 'common/components';
import { Device } from 'common/contexts/device';
import { usePassed } from 'common/hooks';

export default function Member() {
  const passed = usePassed({ y: 200 });

  return (
    <Layout header={<Header showBackground={passed} />} footer={<Footer />}>
      {(device) => (
        <>
          <Background />

          <Container device={device}>
            <Label device={device}>Depromeet Member</Label>
            <Title css={{ marginTop: device === 'mobile' ? 12 : 46 }} device={device}>
              <b>계속해서 이어지는</b>
              {`\n성장의 경험들`}
            </Title>
            <SubText css={{ marginTop: 20 }} device={device}>
              디프만은 지속적인 성장의 순환을 추구합니다. 디프만에서 성장을 경험하고 다시 나누고자 하는 사람들이
              <mark> 운영진으로 모여 성장을 순환시킵니다.</mark>
            </SubText>
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
  width: 1150px;
  min-height: 100vh;
  padding-top: 256px;
  margin: 0 auto;

  ${({ device }) =>
    device === 'mobile' &&
    css`
      width: 327px;
      padding-top: 112px;
    `}
`;

const Label = styled.label<{ device: Device }>`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;

  color: #fff;

  ${({ device }) =>
    device === 'mobile' &&
    css`
      font-size: 12px;
    `}
`;

const Title = styled.h1<{ device: Device }>`
  font-size: 60px;
  line-height: 80px;

  color: #fff;
  white-space: pre-wrap;

  b {
    font-weight: bold;
  }

  ${({ device }) =>
    device === 'mobile' &&
    css`
      font-size: 28px;
      line-height: 40px;
    `}
`;

const SubText = styled.h2<{ device: Device }>`
  width: 608px;

  font-weight: 400;
  font-size: 20px;
  line-height: 140%;

  color: #fff;
  opacity: 0.8;

  mark {
    background-color: unset;
    color: #38e3a8;
    opacity: 1;
    font-weight: bold;
  }

  ${({ device }) =>
    device === 'mobile' &&
    css`
      width: 276px;

      font-size: 14px;
    `}
`;
