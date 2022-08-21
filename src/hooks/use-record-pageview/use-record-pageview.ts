import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { GA_ID, IS_PRODUCTION } from '~/constants/common';

export default function useRecordPageview() {
  const router = useRouter();

  useEffect(() => {
    const recordPageview = (url: string) => {
      gaPageview(url);
    };

    if (IS_PRODUCTION) router.events.on('routeChangeComplete', recordPageview);
    return () => {
      if (IS_PRODUCTION) router.events.off('routeChangeComplete', recordPageview);
    };
  }, [router.events]);
}

declare global {
  interface Window {
    gtag: (param1: string, param2: string | undefined, param3: object) => void;
  }
}

function gaPageview(url: string) {
  if (typeof window.gtag === 'undefined') return;
  window.gtag('config', GA_ID, { page_path: url });
}
