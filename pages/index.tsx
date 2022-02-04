import styled from 'styled-components';
import Image from 'next/image';

import { Header, Footer } from '../components';
import { openApplySite } from '../components/Header';
import StoryBox from '../components/StoryBox';
import Section1 from '../containers/Section1';
import Section2 from '../containers/Section2';
import { stories } from '../resources/data/reviews';
import { media } from '../styles/theme';

const Index = () => (
  <div className="no-scroll-bar" style={{ overflowX: 'scroll' }}>
    <Header />
    <Containers>
      <Section1 />
      <Section2 />
      <Container3 />
      <Container4 />
      <Background>
        <BackgroundImage />
        <BackgroundImage forMobile />
      </Background>
    </Containers>
    <Footer />
  </div>
);

const Container3 = () => (
  <Cont3>
    <div className="title">
      <div>이전 기수들의</div>
      <span className="title__bold">생생한</span> 활동 후기
    </div>
    <div className="story-boxes no-scroll-bar">
      {stories.map((story, idx) => (
        <StoryBox key={idx.toString()} story={story} />
      ))}
    </div>
  </Cont3>
);

const emptyCallback = () => {};
const Container4 = () => (
  <Cont4>
    <div className="title">
      <div>디프만의</div>
      <span className="title__bold">열한 번째 이야기</span>를 함께
      <div>만들어가고 싶다면</div>
      <div className="small">
        COVID-19확산으로 인해 온라인 모임을 지향하고 있습니다.
      </div>
    </div>
    <div onClick={openApplySite} className="gradientBtn">
      11기에서 만나기
    </div>
    <div
      className="greenBtn"
      role="button"
      tabIndex={0}
      onClick={shareDepromeet}
      onKeyDown={emptyCallback}
    >
      지인에게 공유하기
    </div>
  </Cont4>
);

const BackgroundImage = ({ forMobile = false }) => (
  <div className={`bg-image ${forMobile ? 'mobile__only' : 'mobile__none'}`}>
    <Image
      className="bg-image--image"
      src={'/background.svg'}
      alt="9th background"
      layout="fill"
      objectFit="cover"
      loading="lazy"
    />
  </div>
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
      const result = await navigator.permissions.query({
        name: 'clipboard-write' as PermissionName,
      });
      if (result.state === 'granted' || result.state === 'prompt') {
        navigator.clipboard
          .writeText('디프만 10번째 이야기 - www.depromeet.com')
          .then(
            () => {
              // eslint-disable-next-line no-alert
              alert('클립보드로 주소가 복사되었습니다.');
            },
            () => {
              console.log('Failed to copy to clipboard');
            }
          );
      }
    }
  } catch (err) {
    console.log(err);
  }
};

const Containers = styled.div`
  color: white;
  /* margin: 8rem auto 0; */
  width: 100%;
  overflow-x: hidden;
  position: relative;
  .logo {
    font-size: 32px;
    font-family: Gmarket Sans;
    line-height: 150%;
  }

  .title {
    font-size: 6rem;
    line-height: 7.6rem;
    font-weight: 300;
    letter-spacing: -0.03em;

    ${media.mobile} {
      word-break: keep-all;
      font-weight: 500;
      font-size: 1.6rem;
      line-height: 3.4rem;
    }

    &--main {
      ${media.mobile} {
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 3rem;
      }
    }

    &__bold {
      font-weight: 700;
    }
  }
`;

const Cont3 = styled.div`
  display: flex;
  margin-top: 13.8rem;
  flex-direction: column;
  align-items: center;
  text-align: center;
  ${media.mobile} {
    margin-top: 10rem;
  }

  .title {
    font-size: 6rem;
    line-height: 8rem;
    letter-spacing: -0.03em;
    &__bold {
    }
    ${media.mobile} {
      font-size: 2.8rem;
      font-weight: 300;
      line-height: 4rem;
    }
  }

  .story-boxes {
    ${media.mobile} {
      width: 100%;
      display: flex;
      overflow-x: scroll;
    }
  }
`;

const Cont4 = styled.div`
  display: flex;
  margin-top: 37.6rem;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-bottom: 18.6rem;

  ${media.mobile} {
    margin-top: 19rem;
    padding-bottom: 7rem;
  }

  .title {
    font-size: 6rem;
    line-height: 8rem;
    ${media.mobile} {
      font-size: 2.8rem;
      line-height: 4rem;
      font-weight: 300;
    }
    &__bold {
      font-weight: 700;
    }
  }

  .small {
    font-size: 1.8rem;
    line-height: 2.6rem;
    font-weight: 500;
    text-transform: uppercase;
    margin-top: 3.2rem;
    ${media.mobile} {
      margin-top: 2rem;
      font-size: 1.2rem;
      line-height: 2rem;
      font-weight: 400;
      opacity: 0.8;
    }
  }
  .gradientBtn {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36.3rem;
    height: 5.4rem;
    background: ${({ theme }) => theme.color.green};
    font-size: 1.6rem;
    font-weight: 700;
    border-radius: 1rem;
    margin-top: 5.6rem;
    color: ${({ theme }) => theme.color.black};

    ${media.mobile} {
      margin: 4rem 4rem 0;
      font-size: 1.5rem;
      width: 100%;
      max-width: 36.3rem;
    }
    :hover {
      background: ${({ theme }) => theme.color.hover_green};
    }
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

    ${media.mobile} {
      margin: 1.6rem 4rem 0;
      font-size: 1.5rem;
      width: 100%;
      max-width: 36.3rem;
    }

    :hover {
      &:after {
        content: '';
        position: absolute;
        width: 36.3rem;
        height: 5.4rem;
        border-radius: 1rem;
        background-color: ${({ theme }) => theme.color.green};
        opacity: 0.3;
      }
    }
  }
`;

const Background = styled.div`
  position: absolute;
  bottom: 54rem;
  left: 0;
  right: 0;
  height: 32rem;
  z-index: -1;
  display: flex;
  justify-content: center;
  ${media.mobile} {
    height: 14rem;
    bottom: 35rem;
  }
  .bg-image {
    position: relative;
    width: 290rem;
    margin-left: 8rem;
    flex-shrink: 0;
    :first-child {
      margin-left: 0;
    }

    &.mobile__only {
      margin-left: 0;
    }
  }
`;

export default Index;
