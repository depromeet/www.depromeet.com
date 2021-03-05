import Header from './Header';
import { useHandleHeaderTransparencyOnScroll } from '../lib/header_utils';

const TransparentableHeader = () => {
  const isTransparent = useHandleHeaderTransparencyOnScroll();
  return (
    <Header
      isTransparent={isTransparent}
    />
  );
};

export default TransparentableHeader;
