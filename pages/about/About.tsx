import styled from '@emotion/styled';

import { Header, Layout, Footer } from 'common/components';
import { usePassed } from 'hooks';

import { Section1, Section2, Section3, Section4 } from './components';

export default function About() {
  const passed = usePassed({ y: 950 });

  return (
    <Layout header={<Header showBackground={passed} />} footer={<Footer />}>
      {() => (
        <Containers>
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
        </Containers>
      )}
    </Layout>
  );
}

const Containers = styled.div`
  color: #fff;

  width: 100%;
  position: relative;
`;
