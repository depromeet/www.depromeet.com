import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { Device } from 'common/contexts/device';
import { useDeviceContext } from 'common/hooks';

import Quote from './Quote';
import { quotes } from './quotes';

export default function Section3() {
  const device = useDeviceContext();

  return (
    <Container>
      <Title device={device}>
        <p>지금까지 우리들의</p>
        <p>
          <b>프로덕트</b> 이야기
        </p>
      </Title>

      <Wrapper device={device}>
        {quotes.map((quote, index) => (
          <Quote key={index} quote={quote} order={index} />
        ))}
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
  margin-top: 178px;
`;

const Title = styled.div<{ device: Device }>`
  font-size: 60px;
  line-height: 80px;

  b {
    font-weight: 800;
  }

  ${({ device }) =>
    device === 'mobile' &&
    css`
      font-size: 28px;
      font-weight: 300;
      line-height: 40px;
    `}
`;

const Wrapper = styled.div<{ device: Device }>`
  ${({ device }) =>
    device === 'mobile' &&
    css`
      overflow-x: scroll;
      display: flex;
      width: 100%;
    `}
`;
