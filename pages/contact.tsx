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
      <Background />
      {/* <DPM /> */}
      <RightSectionContainer>
        <Box />
      </RightSectionContainer>
      <Footer />
    </Container>
  </div>
);

const Container = styled.div`
  box-sizing: border-box;
  position: relative;

  width: 100%;
  height: 100vh;

  ${media.mobile} {
    justify-content: flex-start;
    flex-direction: column;

    padding-top: 50%;
  }
`;

const Background = styled.div`
  z-index: -1;
  position: absolute;
  width: 100%;
  height: 100vh;

  background: conic-gradient(
    from 180deg at 50% 50%,
    rgba(49, 107, 255, 0) 0deg,
    rgba(49, 107, 255, 0.6) 179.07deg,
    rgba(49, 107, 255, 0.8) 269.28deg,
    #316bff 360deg
  );
`;

const RightSectionContainer = styled.div`
  position: absolute;
  right: 0;
  width: 50%;
  height: 100%;

  display: flex;
  align-items: center;
`;

export default Contact;
