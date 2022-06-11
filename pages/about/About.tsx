import styled from 'styled-components';

import { Header, Layout, Footer } from 'common/components';

import { Section1, Section2, Section3 } from './components';

// import TransparentHeader from '../components/TransparentHeader';

export default function About() {
  return (
    <Layout header={<Header />} footer={<Footer />}>
      {() => (
        <Containers>
          <Section1 />
          <Section2 />
          <Section3 />
          {/* <Section4 /> */}
        </Containers>
      )}
    </Layout>
    //   <div className="no-scroll-bar" style={{ overflowX: 'scroll' }}>
    //     <TransparentHeader changeHeaderBgHeight={950} />
    //     <Containers>
    //       <Section1 />
    //       <Section2 />
    //       <Section3 />
    //       <Section4 />
    //     </Containers>
    //     <Footer />
    //   </div>
    // </DeviceContextProvider>
  );
}

const Containers = styled.div`
  color: #fff;

  width: 100%;
  position: relative;
`;
