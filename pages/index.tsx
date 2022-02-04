import styled from 'styled-components';
import Image from 'next/image';

import { Header, Footer } from '../components';

import Section1 from '../containers/Index/Section1';
import Section2 from '../containers/Index/Section2';
import Section3 from '../containers/Index/Section3';
import Section4 from '../containers/Index/Section4';
import { DeviceContextProvider } from '../contexts/device';

import { media } from '../styles/theme';

const Index = () => (
  <DeviceContextProvider>
    <div className="no-scroll-bar" style={{ overflowX: 'scroll' }}>
      <Header />
      <Containers>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        {/* <Background>
        <BackgroundImage />
        <BackgroundImage forMobile />
      </Background> */}
      </Containers>
      <Footer />
    </div>
  </DeviceContextProvider>
);

const Background = styled.div`
  z-index: -1;

  position: absolute;
  bottom: 54rem;
  left: 0;
  right: 0;
  height: 32rem;
  display: flex;
  justify-content: center;

  ${media.mobile} {
    height: 90vh;
    bottom: 0;
  }

  .bg-image {
    position: relative;
    width: 290rem;
    margin-left: 8rem;
    flex-shrink: 0;
    :first-child {
      margin-left: 0;
    }

    &.mobile__only {
      margin-left: 0;
    }
  }
`;

const BackgroundImage = ({ forMobile = false }) => (
  <div className={`bg-image ${forMobile ? 'mobile__only' : 'mobile__none'}`}>
    <Image
      className="bg-image--image"
      src={'/bottom-background.svg'}
      alt="11th background"
      layout="fill"
      objectFit="contain"
      loading="lazy"
    />
  </div>
);

const Containers = styled.div`
  color: white;

  width: 100%;
  overflow-x: hidden;
  position: relative;
`;

export default Index;
