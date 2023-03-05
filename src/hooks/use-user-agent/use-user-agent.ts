import { useContext, useState } from 'react';

import { UserAgentContext } from './user-agent-context';
import useEffectOnce from '../use-effect-once';

export const useUserAgent = () => {
  const userAgent = useContext(UserAgentContext);
  const [isMobileAgent, setIsMobileAgent] = useState(/iPhone|iPod|iPad|Android/i.test(userAgent));

  useEffectOnce(() => {
    if (navigator.maxTouchPoints > 1) {
      setIsMobileAgent(true);
    }
  });

  if (userAgent === undefined) {
    throw new Error('useUserAgent should be used within UserAgentContext.Provider');
  }

  return { userAgent, isMobileAgent };
};
