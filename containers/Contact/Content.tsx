import styled from 'styled-components';
import { Device, useDeviceContext } from '../../contexts/device';

import { media } from '../../styles/theme';

type Props = {
  children: (device: Device) => JSX.Element;
};

export default function Content({ children }: Props) {
  const device = useDeviceContext();

  return <Container>{children(device)}</Container>;
}

const Container = styled.div`
  box-sizing: border-box;
  position: relative;

  width: 100%;
  height: 100vh;
`;
