import styled from 'styled-components';
import { Header } from '../components';
import SmallBox from '../components/SmallBox';
import StoryBox from '../components/StoryBox';
import { stories } from '../public/data';

const Index = () => (
  <>
    <Header />
    <Containers>
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
    </Containers>
  </>
);

const Container1 = () => (
  <Cont1>
    <div className="title">
      <div>그리던 프로덕트를 만들 시간</div>
      <span className="title__bold">디자이너</span>와{' '}
      <span className="title__bold">프로그래머</span>가{' '}
      <span className="title__bold">만났을 때</span>
    </div>
    <div className="info">
      <div>우리는 단순한 IT동아리가 아닙니다.</div>
      서비스 런칭부터 개선까지 <span className="info__green">경험에 성장을 더하는 모임</span>입니다.
    </div>
    <div className="motion">
      모션 들어갈 곳
    </div>
  </Cont1>
);

const Container2 = () => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <Cont2>
      <div className="summary">
        <div className="summary__title">탄생한지</div>
        <div className="summary__value">5년</div>
        <div className="summary__title">누적 멤버 수</div>
        <div className="summary__value">400명 +</div>
        <div className="summary__title">런칭 앱</div>
        <div className="summary__value">N개 +</div>
      </div>
      <div style={{ position: 'relative', marginLeft: '10rem' }}>
        <div className="title">
          <div>오직 디자이너와 프로그래머의</div>
          <span className="title__bold">동반성장</span>을 위해서
        </div>
        <div className="boxes">
          <div className="boxes__wrapper">
            <SmallBox />
            <SmallBox />
            <SmallBox />
            <SmallBox />
            <SmallBox />
            <SmallBox />
            <SmallBox />
            <SmallBox />
            <SmallBox />
            <SmallBox />
          </div>
          <div className="boxes__button" role="button">
            모든 프로젝트 구경하기 {'>'}
          </div>
        </div>
      </div>
    </Cont2>
  </div>

);

const Container3 = () => (
  <Cont3>
    <div className="title">
      <div>지금까지 우리들의</div>
      <span className="title__bold">프로덕트</span> 이야기
    </div>
    {stories.map((story, idx) => <StoryBox key={idx.toString()} story={story} />)}
  </Cont3>
);

const Container4 = () => (
  <Cont4>
    <div className="title">
      <div>Depromeet의</div>
      <span className="title__bold">아홉 번째 이야기</span>를
      <div>만들어가고 싶다면</div>
      <div className="small">Depromeet 9기는 COVID-19확산으로 인해 온라인 모임을 지향하고 있습니다.</div>
    </div>
    <div className="gradientBtn" role="button">9기에서 만나기</div>
    <div className="greenBtn" role="button">지인에게 공유하기</div>
  </Cont4>
);

const Containers = styled.div`
  color: white;
  margin-top: 8rem;
  .title {
    font-size: 6rem;
    line-height: 8.8rem;
    font-weight: 300;
    &__bold {
      font-weight: 800;
    }
  }
`;

const Cont1 = styled.div`
  display: flex;
  margin-top: 13.8rem;
  flex-direction: column;
  text-align: center;
  .info {
    margin-top: 10rem;
    font-size: 2.4rem;
    line-height: 4.4rem;
    font-weight: 400;
    &__green {
      color: ${({ theme }) => theme.color.green};
      font-weight: 700;
    }
  }
  .motion {
    height: 30rem;
    background-color: gray;
    margin-top: 17.6rem;
  }
`;

const Cont2 = styled.div`
  display: flex;
  margin-top: 31.6rem;
  /* width: 100%; */
  .summary {
    display: flex;
    flex-direction: column;
    &__title {
      font-size: 1.6rem;
      font-weight: 500;
      letter-spacing: -0.03em;
      line-height: 3rem;
      :not(:first-child) {
        margin-top: 9rem;
      }
    }
    &__value {
      font-size: 5rem;
      font-weight: 800;
      line-height: 6rem;
    }
  }
  .boxes {
    margin-top: 9.7rem;
    height: 25.4rem;
    &__wrapper {
      position: absolute;
      display: flex;
    }
    &__button {
      position: absolute;
      bottom :0;
      right: 0;
      border-radius: 2.7rem;
      font-size: 1.5rem;
      padding: 1.2rem 2.4rem;
      border: ${({ theme }) => `0.1rem solid ${theme.color.green}`};
      color: ${({ theme }) => theme.color.green}
    }
  }
`;

const Cont3 = styled.div`
  display: flex;
  margin-top: 13.8rem;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Cont4 = styled.div`
  display: flex;
  margin-top: 37.6rem;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-bottom: 18.6rem;
  .small {
    font-size: 1.8rem;
    font-weight: 700;
  }
  .gradientBtn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36.3rem;
    height: 5.4rem;
    background: ${({ theme }) => theme.color.gradient};
    font-size: 1.6rem;
    font-weight: 700;
    border-radius: 1rem;
    margin-top: 2.2rem;
  }
  .greenBtn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36.3rem;
    height: 5.4rem;    text-align: center;
    font-size: 1.6rem;
    font-weight: 700;
    border: ${({ theme }) => `0.1rem solid ${theme.color.green}`};
    color: ${({ theme }) => theme.color.green};
    border-radius: 1rem;
    margin-top: 2.2rem;
  }
`;

export default Index;
