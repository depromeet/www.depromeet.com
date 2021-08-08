import styled from 'styled-components';
import { Header, Footer } from '../components';
import StepLottie from '../components/StepLottie';
import { Gmail, Kakao, Meet, Memoji, T } from '../public';
import { stepA, stepC } from '../resources/lottie';
import { media } from '../styles/theme';

const Contact = () => (
  <div>
    <Header />
    <Container>
      <div className="svg">
        <div className="svg__meet">
          <Meet />
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
            onClick={() =>
              window.open('mailto:depromeet@gmail.com?subject=[홈페이지 문의] ')
            }
          >
            <div className="box__sns__logo">
              <Gmail />
            </div>
            <div className="box__sns__name">gmail</div>
            <div className="box__sns__content">depromeet@gmail.com</div>
          </WhiteBox>
          <WhiteBox
            style={{ marginTop: '1.6rem' }}
            role="button"
            tabIndex={0}
            onClick={() => window.open('http://pf.kakao.com/_xoxmcxed/chat')}
          >
            <div className="box__sns__logo">
              <Kakao />
            </div>
            <div className="box__sns__name">Kakao plus friend</div>
            <div className="box__sns__content">depromeet</div>
          </WhiteBox>
        </div>
      </div>
      <div className="mobile__only spacer" />
    </Container>
    <Footer />
  </div>
);

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: -20.2rem;
  padding-bottom: 20.2rem;
  box-sizing: border-box;
  ${media.mobile} {
    flex-direction: column;
    margin-bottom: 0;
    padding-bottom: 0;
    margin-top: 9rem;
    box-sizing: content-box;
    justify-content: flex-start;

    .spacer {
      min-height: 9rem;
      width: 10rem;
    }
  }
  .svg {
    position: relative;
    ${media.mobile} {
      opacity: 0.3;
      z-index: -10;
      transform: scale(0.925);
    }
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
      right: 7.8rem;
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
      right: -2rem;
      z-index: 2;
    }
  }
  .box {
    margin-left: 12.2rem;
    color: white;
    white-space: pre-line;
    ${media.mobile} {
      margin: -5.5rem 0 0;
    }
    &__title {
      font-size: 3.6rem;
      font-weight: 800;
      margin-left: 3rem;
      line-height: 140%;
      ${media.mobile} {
        font-size: 2.4rem;
        line-height: 3.6rem;
        text-align: center;
        margin-left: 0;
      }
    }
    &__sub {
      font-size: 1.8rem;
      font-weight: 400;
      margin-top: 2.4rem;
      line-height: 30px;
      margin-left: 3rem;
      ${media.mobile} {
        margin-top: 1rem;
        margin-left: 0;
        font-size: 1.4rem;
        font-weight: 500;
        line-height: 2.4rem;
        text-align: center;
      }
    }
    &__sns {
      background: #181818;
      border-radius: 3.2rem;
      padding: 3rem;
      margin-top: 2.6rem;
      ${media.mobile} {
        margin: 2rem 0;
        padding: 3rem 2rem;
        border-radius: 2rem;
        box-sizing: border-box;
      }
      &__logo {
        margin-left: 1.6rem;
        ${media.mobile} {
          margin-left: 0;
        }
      }
      &__name {
        font-size: 1.2rem;
        font-weight: 700;
        margin-left: 0.915rem;
        ${media.mobile} {
          font-weight: bold;
          line-height: 1.5rem;
        }
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
  :hover {
    background-color: #c0c0c0;
  }
  ${media.mobile} {
    box-sizing: border-box;
    padding: 1.2rem 2rem;
    max-width: 29rem;
  }
`;

export default Contact;
