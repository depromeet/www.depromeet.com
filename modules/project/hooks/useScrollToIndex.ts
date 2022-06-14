import { useDeviceContext } from 'common/hooks';
import { useLayoutEffect } from 'react';
import { FixedSizeList } from 'react-window';

export default function useScrollToIndex(scrollRef: React.MutableRefObject<FixedSizeList>, index: number) {
  const device = useDeviceContext();

  const contentWidth = device === 'mobile' ? 650 : 840;
  const contentGap = device === 'mobile' ? 314 : 800;

  const xOffset = index * (contentWidth + contentGap);

  useLayoutEffect(() => {
    if (scrollRef.current != null) {
      scrollRef.current.scrollTo(xOffset);
    }
  }, [scrollRef, xOffset]);
}
