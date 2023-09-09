import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { GA_ID, IS_PRODUCTION } from '~/constant/common';

export const useRecordPageView = () => {
  const router = useRouter();

  useEffect(() => {
    const recordPageView = (url: string) => {
      gaPageView(url);
    };

    if (IS_PRODUCTION) router.events.on('routeChangeComplete', recordPageView);
    return () => {
      if (IS_PRODUCTION) router.events.off('routeChangeComplete', recordPageView);
    };
  }, [router.events]);
};

declare global {
  interface Window {
    gtag: (param1: string, param2: string | undefined, param3: object) => void;
  }
}

function gaPageView(url: string) {
  if (typeof window.gtag === 'undefined') return;
  window.gtag('config', GA_ID, { page_path: url });
}
