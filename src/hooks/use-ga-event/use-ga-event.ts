interface GaEventProps {
  action: string;
  category?: string;
  label?: string;
  value?: string;
}

export default function useGaEvent() {
  const gaEvent = ({ action, category, label, value }: GaEventProps) => {
    if (typeof window.gtag === 'undefined') return;
    window.gtag('event', action, { event_category: category, event_label: label, value });
  };

  const recordApplyEvent = () => {
    gaEvent({ action: 'apply' });
  };
  return { gaEvent, recordApplyEvent };
}
