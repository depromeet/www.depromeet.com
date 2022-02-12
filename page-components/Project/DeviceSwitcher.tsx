import { Device, useDeviceContext } from '../../contexts/device';

type Props = {
  children: ({ device }: { device: Device }) => JSX.Element;
};

export default function DeviceContainer({ children }: Props) {
  const device = useDeviceContext();

  return <>{children({ device })}</>;
}
