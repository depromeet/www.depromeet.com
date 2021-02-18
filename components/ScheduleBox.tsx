import styled from 'styled-components';
import Image from 'next/image';

const Container = styled.div`
  width: 114rem;
  height: 26rem;
  background: #131313;
  border-radius: 3.2rem;
  font-family: Apple SD Gothic Neo;
  padding: 4rem 4.8rem;
  box-sizing: border-box;
  position: relative;
  .title {
    display: flex;
    align-items: center;
    &--step {
      font-family: Montserrat;
      font-weight: 800;
      font-size: 2.6rem;
      line-height: 3.2rem;
      letter-spacing: -0.02em;
      text-transform: uppercase;
      color: #FFFFFF;
      display: inline-block;
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
    }
  }
  .desc {
    font-weight: bold;
    font-size: 3.6rem;
    line-height: 4.8rem;
    text-transform: uppercase;
    color: #FFFFFF;
    margin-top: 2.4rem;
  }
  .motion {
    position: absolute;
    right: 10rem;
    top: 0;
    height: 100%;
    box-sizing: border-box;
    aspect-ratio: 1/1;
    padding-top: 4rem;
    padding-bottom: 4rem;
    &--img {
      position: relative;
      height: 100%
    }
  }
`;

const ScheduleBox = () => (
  <Container>
    <div className="title">
      <div className="title--step">STEP 1</div>
      <div className="title--duration title--duration__green">1~4 weeks</div>
    </div>
    <div className="desc">
      팀 선별, 아이디어 도출,<br />
      MVP도출, 스타일 가이드 제작
    </div>
    <div className="motion">
      <div className="motion--img">
        <Image
          src="/motion_example.svg"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  </Container>
);
export default ScheduleBox;
