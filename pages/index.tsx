import styled from 'styled-components';
import Image from 'next/image';

import { Header, Footer } from '../components';

import Section1 from '../containers/Section1';
import Section2 from '../containers/Section2';
import Section3 from '../containers/Section3';
import Section4 from '../containers/Section4';

import { media } from '../styles/theme';

const Index = () => (
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
  .logo {
    font-size: 32px;
    font-family: Gmarket Sans;
    line-height: 150%;
  }

  .title {
    font-size: 6rem;
    line-height: 7.6rem;
    font-weight: 300;
    letter-spacing: -0.03em;

    ${media.mobile} {
      word-break: keep-all;
      font-weight: 500;
      font-size: 1.6rem;
      line-height: 3.4rem;
    }

    &--main {
      ${media.mobile} {
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 3rem;
      }
    }

    &__bold {
      font-weight: 700;
    }
  }
`;

export default Index;
