import styled from 'styled-components';
import { Header, Footer } from '../components';
import StepLottie from '../components/StepLottie';
import {
  Gmail, Kakao, Meet, Memoji, T,
} from '../public';
import { stepA, stepC } from '../resources/lottie';

const Contact = () => (
  <div>
    <Header />
    <Container>
      <div style={{
        marginBottom: '12rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      >
        <div className="svg">
          <div className="svg__meet">
            <Meet />
          </div>
          <div className="svg__t">
            <T />
          </div>
          <div className="svg__memoji">
            <Memoji />
          </div>
          <div className="svg__stepC">
            <StepLottie lottie={stepC} />
          </div>
          <div className="svg__stepA">
            <StepLottie lottie={stepA} />
          </div>
        </div>
        <div className="box">
          <div className="box__title">
            궁금한 것이 있거나{'\n'}
            문의 사항이 있으신가요?
          </div>
          <div className="box__sub">
            디자인과 개발 관련된 일상적인 대화도{'\n'}
            언제든지 환영합니다.
          </div>
          <div className="box__sns">
            <WhiteBox
              role="button"
              tabIndex={0}
              onClick={
                () => window.open('mailto:depromeet@gmail.com?subject=[홈페이지 문의] ')
              }
            >
              <div className="box__sns__logo"><Gmail /></div>
              <div className="box__sns__name">gmail</div>
              <div className="box__sns__content">depromeet@gmail.com</div>
            </WhiteBox>
            <WhiteBox
              style={{ marginTop: '1.6rem' }}
              role="button"
              tabIndex={0}
              onClick={
                () => window.open('http://pf.kakao.com/_xoxmcxed/chat')
              }
            >
              <div className="box__sns__logo"><Kakao /></div>
              <div className="box__sns__name">Kakao plus friend</div>
              <div className="box__sns__content">depromeet</div>
            </WhiteBox>
          </div>
        </div>
      </div>
    </Container>
    <div style={{
      position: 'fixed', width: '100%', bottom: 0,
    }}
    >
      <Footer />
    </div>
  </div>
);

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .svg {
    position: relative;
    &__meet {
      position: relative;
      z-index: 1;
    }
    &__t {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 3;
    }
    &__memoji {
      position: absolute;
      bottom: 1.6rem;
      right: 1.8rem;
      z-index: 2;
    }
    &__stepC {
      position: absolute;
      width: 15rem;
      top: 7.5rem;
      left: -11rem;
    }
    &__stepA {
      position: absolute;
      width: 15rem;
      top: -5rem;
      right: 2rem;
      z-index: 2;
    }
  }
  .box {
    margin-left: 12.2rem;
    color: white;
    white-space: pre-line;
    &__title {
      font-size: 3.6rem;
      font-weight: 800;
      margin-left: 3rem;
      line-height: 140%;
    }
    &__sub {
      font-size: 1.8rem;
      font-weight: 400;
      margin-top: 2.4rem;
      line-height: 30px;
      margin-left: 3rem;
    }
    &__sns {
      background: #181818;
      border-radius: 3.2rem;
      padding: 3rem;
      margin-top: 2.6rem;
      &__logo {
        margin-left: 1.6rem;
      }
      &__name {
        font-size: 1.2rem;
        font-weight: 700;
        margin-left: 0.915rem;
      }
      &__content {
        position: absolute;
        right: 0;
        margin-right: 2.4rem;
        font-size: 1.4rem;
        font-weight: 500;
      }
    }
  }
`;

const WhiteBox = styled.div`
  position: relative;
  width: 40.1rem;
  height: 4rem;
  background-color: white;
  border-radius: 3.1rem;
  display: flex;
  align-items: center;
  color: black;
  font-family: Montserrat;
`;

export default Contact;
