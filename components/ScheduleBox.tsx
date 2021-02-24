import styled from 'styled-components';
import { ReactNode, FC } from 'react';
import StepLottie, { LottieProps } from './StepLottie';
import { media } from '../styles/theme';

interface ScheduleProps {
  detail: {
    duration: string;
    desc: ReactNode;
    lottie: LottieProps ;
  };
  index: number;
}

const ScheduleBox: FC<ScheduleProps> = ({ detail, index }) => (
  <Container>
    <div className="title">
      <div className="title--step">STEP {index + 1}</div>
      <div className="title--duration title--duration__green">{detail.duration}</div>
    </div>
    <div className="detail">
      <div className="desc">
        {detail.desc}
      </div>
      <div className="motion">
        <div className="motion--img">
          <StepLottie lottie={detail.lottie} />
        </div>
      </div>
    </div>
  </Container>
);

const Container = styled.div`
  width: 114rem;
  height: 26rem;
  background: #131313;
  border-radius: 3.2rem;
  padding: 4rem 4.8rem;
  box-sizing: border-box;
  position: relative;

  ${media.mobile} {
    width: 32.7rem;
    height: 18rem;
    padding: 2.2rem 2.2rem;
  }

  .title {
    display: flex;
    align-items: center;
    ${media.mobile} {
      justify-content: space-between;
    }
    &--step {
      font-family: Montserrat;
      font-weight: 800;
      font-size: 2.6rem;
      line-height: 3.2rem;
      letter-spacing: -0.02em;
      text-transform: uppercase;
      color: #FFFFFF;
      display: inline-block;

      ${media.mobile} {
        font-size: 2rem;
        line-height: 2.4rem;
      }
    }
    &--duration {
      font-weight: bold;
      font-size: 1.6rem;
      line-height: 1.9rem;
      text-align: center;
      display: inline-block;
      margin-left: 3.7rem;
      &__green {
        color: ${({ theme }) => theme.color.green};
      }
      &__blue {
        color: ${({ theme }) => theme.color.blue};
      }
      ${media.mobile} {
        font-size: 1.2rem;
        line-height: 1.4rem;
      }
    }
  }
  .detail {
    ${media.mobile} {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .desc {
      font-weight: bold;
      font-size: 3.6rem;
      line-height: 4.8rem;
      text-transform: uppercase;
      color: #FFFFFF;
      margin-top: 2.4rem;
      word-break: keep-all;
      ${media.mobile} {
        width: 17rem;
        font-size: 2rem;
        line-height: 2.8rem;
        padding-right: 2rem;
        align-self: flex-start;
      }
    }
    .motion {
      position: absolute;
      right: 10rem;
      top: 0;
      height: 100%;
      width: 18rem;
      box-sizing: border-box;
      aspect-ratio: 1/1;
      ${media.mobile} {
        right: 1.6rem;
        margin-top: 7rem;
        width: 8rem;
        height: 8rem;
        flex: 1;
      }
      &--img {
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
      }
    }
  }
`;

export default ScheduleBox;
