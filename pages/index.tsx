import styled from 'styled-components';
import Link from 'next/link';
import { Header, Footer } from '../components';
import { openApplySite } from '../components/Header';
import Projects from '../components/Projects';
import StoryBox from '../components/StoryBox';
import { stories } from '../resources/data/reviews';
import TextAnimation from '../components/TextAnimation';

const Index = () => (
  <div
    className="no-scroll-bar"
    style={{ overflowX: 'scroll' }}
  >
    <Header />
    <Containers>
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
    </Containers>
    <Footer />
  </div>
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
      서비스 런칭부터 개선까지{' '}
      <span className="info__green">경험에 성장을 더하는 모임</span>입니다.
    </div>
    <div className="motion">
      <TextAnimation />
    </div>
  </Cont1>
);

const Container2 = () => (
  <Cont2>
    <div className="column-left">
      <div className="summary">
        <div className="summary__title">탄생한지</div>
        <div className="summary__value">5년</div>
        <div className="summary__title">누적 멤버 수</div>
        <div className="summary__value">400명 +</div>
        <div className="summary__title">런칭 앱</div>
        <div className="summary__value">N개 +</div>
      </div>
    </div>
    <div className="column-right">
      <div className="title">
        <div>오직 디자이너와 프로그래머의</div>
        <span className="title__bold">동반성장</span>을 위해서
      </div>
      <div className="boxes">
        <Projects isMainPage />
        <Link href="/project">
          <div className="boxes__button" role="button">
            모든 프로젝트 구경하기 {'>'}
          </div>
        </Link>
      </div>
    </div>
  </Cont2>
);

const Container3 = () => (
  <Cont3>
    <div className="title">
      <div>지금까지 우리들의</div>
      <span className="title__bold">프로덕트</span> 이야기
    </div>
    {stories.map((story, idx) => (
      <StoryBox key={idx.toString()} story={story} />
    ))}
  </Cont3>
);

const emptyCallback = () => {};
const Container4 = () => (
  <Cont4>
    <div className="title">
      <div>Depromeet의</div>
      <span className="title__bold">아홉 번째 이야기</span>를
      <div>만들어가고 싶다면</div>
      <div className="small">
        Depromeet 9기는 COVID-19확산으로 인해 온라인 모임을 지향하고 있습니다.
      </div>
    </div>
    <div
      className="gradientBtn"
      role="button"
      tabIndex={0}
      onClick={openApplySite}
      onKeyDown={emptyCallback}
    >
      9기에서 만나기
    </div>
    <div
      className="greenBtn"
      role="button"
      tabIndex={0}
      onKeyDown={emptyCallback}
      onClick={shareDepromeet}
    >
      지인에게 공유하기
    </div>
  </Cont4>
);

const shareData = {
  title: '디프만',
  text: 'Depromeet의 아홉 번째 이야기',
  url: 'https://depromeet.com',
};
const shareDepromeet = async () => {
  try {
    if (navigator.share) {
      await navigator.share(shareData);
    } else {
      // eslint-disable-next-line no-undef
      const result = await navigator.permissions.query({ name: 'clipboard-write' as PermissionName });
      if (result.state === 'granted' || result.state === 'prompt') {
        navigator.clipboard.writeText('디프만 9번째 이야기 - www.depromeet.com').then(() => {
          // eslint-disable-next-line no-alert
          alert('클립보드로 주소가 복사되었습니다.');
        }, () => {
          console.log('Failed to copy to clipboard');
        });
      }
    }
  } catch (err) {
    console.log(err);
  }
};

const Containers = styled.div`
  color: white;
  margin: 8rem auto 0;
  /* width: 114rem; */
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
  align-items: center;
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
    margin-top: 17.6rem;
    display: relative;
  }
`;

const Cont2 = styled.div`
  display: flex;
  margin-top: 31.6rem;
  justify-content: center;
  align-items: stretch;
  position: relative;


  .column-left {
    flex: 1;
    display: flex;
    justify-content: flex-end;
  }
  .summary {
    display: flex;
    flex-direction: column;
    /* flex-shrink: 0; */
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
  .column-right {
    flex: 1.8;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    overflow-x: hidden;
    /* margin-left: 11rem; */
    padding-left: 11rem;
  }

  .boxes {
    margin-top: 9.7rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: stretch;
    width: 100%;
    &__button {
      width: 20rem;
      height: 4.2rem;
      margin-top: 4.2rem;
      border-radius: 2.7rem;
      font-size: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border: ${({ theme }) => `0.1rem solid ${theme.color.green}`};
      color: ${({ theme }) => theme.color.green};
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
    height: 5.4rem;
    text-align: center;
    font-size: 1.6rem;
    font-weight: 700;
    border: ${({ theme }) => `0.1rem solid ${theme.color.green}`};
    color: ${({ theme }) => theme.color.green};
    border-radius: 1rem;
    margin-top: 2.2rem;
  }
`;

export default Index;
