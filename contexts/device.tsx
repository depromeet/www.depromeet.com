import {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
  useEffect,
} from 'react';

type Device = 'desktop' | 'tablet' | 'mobile';

const DeviceContext = createContext<Device>('desktop');

export const DeviceContextProvider = ({ children }: PropsWithChildren<{}>) => {
  const [device, setDevice] = useState<Device>('desktop');

  const handleResize = () =>
    setDevice(
      window.innerWidth > 768
        ? 'desktop'
        : window.innerWidth > 576
        ? 'tablet'
        : 'mobile'
    );

  useEffect(() => {
    if (typeof window !== 'undefined') {
      handleResize();

      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <DeviceContext.Provider value={device}>{children}</DeviceContext.Provider>
  );
};

export const useDeviceContext = () => useContext(DeviceContext);
