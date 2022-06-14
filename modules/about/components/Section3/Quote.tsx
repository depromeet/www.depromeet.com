import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Device } from 'common/contexts/device';
import { useDeviceContext } from 'common/hooks';

import Mimoji from './Mimoji';
import { Quote as QuoteType } from './quotes';

type Props = {
  quote: QuoteType;
  order: number;
};

export default function Quote({ quote, order }: Props) {
  const device = useDeviceContext();

  return (
    <Container device={device} css={order % 2 === 0 && { flexDirection: 'row-reverse' }}>
      <Bubble color={quote.color} device={device}>
        <Story
          device={device}
          css={css`
            b {
              color: ${quote.color};
            }
          `}
        >
          {quote.sentence}
          <Author device={device} css={{ color: quote.color }}>
            {quote.author}
          </Author>
        </Story>
      </Bubble>

      <Mimoji job={quote.job} color={quote.color} order={order} src={quote.mimoji} />
    </Container>
  );
}

const Container = styled.div<{ device: Device }>`
  position: relative;
  margin-top: 76px;

  display: flex;
  align-items: center;

  ${({ device }) =>
    device === 'mobile' &&
    css`
      margin-left: 24px;
      margin-top: 90px;
      justify-content: center;
      align-items: stretch;

      :last-child {
        margin-right: 24px;
      }
    `}
`;

const Bubble = styled.div<{ color: string; device: Device }>`
  position: relative;
  width: 835px;
  height: 242px;

  background-color: #191919;
  border-radius: 32px;
  font-size: 16px;
  font-weight: 500;
  line-height: 30px;

  ${({ device }) =>
    device === 'mobile' &&
    css`
      box-sizing: border-box;
      background: linear-gradient(180deg, #212121 0%, rgba(33, 33, 33, 0) 100%);
      width: 260px;
      height: 100%;

      margin: 0;
      padding: 0 20px 20px;
      border-radius: 24px;
    `}
`;

const Story = styled.div<{ device: Device }>`
  margin: 40px;

  white-space: pre-line;
  text-align: start;

  ${({ device }) =>
    device === 'mobile' &&
    css`
      overflow-y: scroll;

      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      flex: 1;

      margin: 90px 0 0;
      font-size: 14px;
      line-height: 26px;
    `}
`;

const Author = styled.div<{ device: Device }>`
  font-size: 14px;
  line-height: 10px;
  margin-top: 16px;

  ${({ device }) =>
    device === 'mobile' &&
    css`
      margin-bottom: 10px;
    `}
`;
