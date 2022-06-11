import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Device } from 'common/contexts/device';
import { useDeviceContext } from 'common/hooks';

export default function Summary() {
  const device = useDeviceContext();

  return (
    <Container device={device}>
      {summary.map(({ title, value }) => (
        <Title key={title} device={device}>
          {title}
          <Value device={device}>{value}</Value>
        </Title>
      ))}
    </Container>
  );
}

const summary = [
  { title: '탄생한지', value: '6년' },
  { title: '누적 멤버 수', value: '800명 +' },
  { title: '런칭 앱', value: 'N개 +' },
  { title: '이전 기수 \n런칭 성공률', value: '100%' },
];

const Container = styled.summary<{ device: Device }>`
  display: flex;
  flex-direction: column;

  ${({ device }) =>
    device === 'mobile' &&
    css`
      position: absolute;
      top: 100px;

      flex-direction: row;
      align-items: flex-start;
      justify-content: space-evenly;
      width: 100%;
    `}
`;

const Title = styled.div<{ device: Device }>`
  font-size: 16px;
  font-weight: 500;

  :not(:first-of-type) {
    margin-top: 90px;
  }

  ${({ device }) =>
    device === 'mobile' &&
    css`
      display: flex;
      flex-direction: column-reverse;
      white-space: pre-wrap;

      font-size: 14px;
      line-height: 18px;
      text-align: center;

      :not(:first-of-type) {
        margin-top: 0;
      }
    `}
`;

const Value = styled.div<{ device: Device }>`
  font-size: 50px;
  font-weight: 800;
  line-height: 72px;

  ${({ device }) =>
    device === 'mobile' &&
    css`
      font-size: 28px;
      line-height: 38px;
      margin-bottom: 8px;
    `}
`;
