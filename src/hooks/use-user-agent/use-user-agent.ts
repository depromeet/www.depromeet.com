import { useContext } from 'react';

import { UserAgentContext } from './user-agent-context';

export const useUserAgent = () => {
  const userAgent = useContext(UserAgentContext);
  const isMobileAgent = /iPhone|iPod|Android/i.test(userAgent);

  if (userAgent === undefined) {
    throw new Error('useUserAgent should be used within UserAgentContext.Provider');
  }

  return { userAgent, isMobileAgent };
};
