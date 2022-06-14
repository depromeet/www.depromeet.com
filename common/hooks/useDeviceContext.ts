import { useContext } from 'react';

import { DeviceContext } from 'common/contexts/device';

export default function useDeviceContext() {
  return useContext(DeviceContext);
}
