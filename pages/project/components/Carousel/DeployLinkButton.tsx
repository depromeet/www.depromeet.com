import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Device } from 'common/contexts/device';
import { useDeviceContext } from 'common/hooks';

type Props = {
  label: string;
  content: React.ReactNode;
  link: string;
};

export default function DeployLinkButton({ label, content, link }: Props) {
  const device = useDeviceContext();

  return (
    <Button device={device} onClick={() => window.open(link)}>
      <Content>{content}</Content>
      {label}
    </Button>
  );
}

const Button = styled.button<{ device: Device }>`
  border: none;
  box-sizing: border-box;
  max-width: 172px;
  height: 48px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 500;
  font-size: 12px;
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  line-height: 20px;

  border-radius: 12px;
  background-color: #000;
  color: #fff;
  word-break: keep-all;

  ${({ device }) =>
    device === 'mobile' &&
    css`
      box-sizing: border-box;

      flex: 1;
      min-width: 10px;
      max-width: 100%;
      height: 40px;

      margin-right: 12px;
      padding: 12px 0;
      border-radius: 6px;

      :last-child {
        margin-right: 0;
      }
    `};
`;

const Content = styled.div`
  margin-right: 10px;
  width: 20px;
  height: 20px;
`;
