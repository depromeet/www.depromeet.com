import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Device, DeviceContextProvider } from 'common/contexts/device';
import { useDeviceContext } from 'common/hooks';

type Props = {
  children: (device: Device) => React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
};

function Content({ children }: Props) {
  const device = useDeviceContext();

  return <>{children(device)}</>;
}

export default function Layout({ children, header, footer }: Props) {
  return (
    <DeviceContextProvider>
      <Container
        css={css`
          -ms-overflow-style: none;
          scrollbar-width: none;
          position: relative;

          ::-webkit-scrollbar {
            display: none;
          }
        `}
      >
        {header}

        <Content children={children} />

        {footer}
      </Container>
    </DeviceContextProvider>
  );
}

const Container = styled.div`
  box-sizing: border-box;
  overflow: hidden scroll;
  position: relative;

  width: 100%;
  min-height: 100vh;
`;
