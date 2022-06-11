import { createContext, useContext, useState, useEffect } from 'react';

export type Device = 'desktop' | 'tablet' | 'mobile';

type Props = {
  children: React.ReactNode;
};

export const DeviceContextProvider = ({ children }: Props) => {
  const [device, setDevice] = useState<Device>('desktop');

  const handleResize = () =>
    setDevice(window.innerWidth > 768 ? 'desktop' : window.innerWidth > 576 ? 'tablet' : 'mobile');

  useEffect(() => {
    if (window != null) {
      handleResize();

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return <DeviceContext.Provider value={device}>{children}</DeviceContext.Provider>;
};

const DeviceContext = createContext<Device>('desktop');

export const useDeviceContext = () => useContext(DeviceContext);
