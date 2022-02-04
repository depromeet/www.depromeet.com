import styled from 'styled-components';
import { Header, Footer } from '../components';
import StepLottie from '../components/StepLottie';
import Box from '../containers/Contact/Box';
import { DPM } from '../public';
import { media } from '../styles/theme';

const Contact = () => (
  <div>
    <Header />
    <Container>
      <DPM />
      <Box />
    </Container>
    <Footer />
  </div>
);

const Container = styled.div`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  ${media.mobile} {
    justify-content: flex-start;
    flex-direction: column;

    padding-top: 50%;
  }
`;

export default Contact;
