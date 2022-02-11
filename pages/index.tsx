import styled from 'styled-components';

import { Header, Footer } from '../components';

import Section1 from '../page-components/Index/Section1';
import Section2 from '../page-components/Index/Section2';
import Section3 from '../page-components/Index/Section3';
import Section4 from '../page-components/Index/Section4';
import { DeviceContextProvider } from '../contexts/device';

const Index = () => (
  <DeviceContextProvider>
    <div className="no-scroll-bar" style={{ overflowX: 'scroll' }}>
      <Header />
      <Containers>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </Containers>
      <Footer />
    </div>
  </DeviceContextProvider>
);

const Containers = styled.div`
  color: #fff;

  width: 100%;
  overflow-x: hidden;
  position: relative;
`;

export default Index;
