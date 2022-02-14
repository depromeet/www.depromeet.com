import styled from 'styled-components';

import TextAnimation from '../../components/TextAnimation';
import Projects from '../../components/Projects';
import { media } from '../../styles/theme';
import { useRouter } from 'next/router';

export default function Section2() {
  const router = useRouter();

  const summary = [
    { title: '탄생한지', value: '6년' },
    { title: '누적 멤버 수', value: '800명 +' },
    { title: '런칭 앱', value: 'N개 +' },
  ];

  return (
    <>
      <Motion>
        <TextAnimation />
      </Motion>
      <Container>
        <FirstColumn>
          <Summary>
            {summary.map(({ title, value }) => (
              <SummaryTitle key={title}>
                {title}
                <SummaryValue>{value}</SummaryValue>
              </SummaryTitle>
            ))}
          </Summary>
        </FirstColumn>
        <SecondColumn>
          <CatchPhrase>
            <p>오직 디자이너와 프로그래머의</p>
            <p>
              <b>동반성장</b>을 위해서
            </p>
          </CatchPhrase>
          <Boxes>
            <Projects isMainPage />
            <모든프로젝트구경하기 onClick={() => router.push('/project')}>
              {'모든 프로젝트 구경하기 >'}
            </모든프로젝트구경하기>
          </Boxes>
        </SecondColumn>
      </Container>
    </>
  );
}

const Motion = styled.div`
  margin-top: 100px;
`;

const 모든프로젝트구경하기 = styled.button`
  width: 200px;
  height: 43px;

  color: #fff;
  background: linear-gradient(
    126.6deg,
    rgba(255, 255, 255, 0.16) 28.69%,
    rgba(255, 255, 255, 0) 100%
  );
  backdrop-filter: blur(135.254px);
  border-radius: 67.5px;

  font-size: 14px;
  margin-top: 42px;
`;

const Container = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: stretch;

  margin-top: 400px;

  ${media.mobile} {
    flex-direction: column;
    height: 411px;
    margin-top: 300px;
  }
`;

const FirstColumn = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
`;

const SecondColumn = styled.div`
  overflow-x: hidden;
  position: relative;
  align-items: flex-start;

  display: flex;
  flex-direction: column;
  flex: 1.8;

  padding-left: 11rem;

  ${media.mobile} {
    padding-left: 0;
    position: static;
  }
`;

const Summary = styled.div`
  display: flex;

  flex-direction: column;

  ${media.mobile} {
    width: 100%;
    position: absolute;
    top: 10rem;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-evenly;
  }
`;

const SummaryTitle = styled.div`
  font-size: 1.6rem;
  font-weight: 500;

  :not(:first-child) {
    margin-top: 9rem;
  }

  ${media.mobile} {
    display: flex;
    flex-direction: column-reverse;

    font-size: 14px;
    line-height: 16px;
    text-align: center;

    :not(:first-child) {
      margin-top: 0;
    }
  }
`;

const SummaryValue = styled.div`
  font-size: 5rem;
  font-weight: 800;
  line-height: 7.2rem;

  ${media.mobile} {
    font-size: 28px;
    line-height: 38px;
    margin-bottom: 8px;
  }
`;

const CatchPhrase = styled.div`
  width: 100%;
  font-weight: 300;
  font-size: 6rem;
  line-height: 8rem;

  ${media.mobile} {
    position: absolute;
    top: 0;

    text-align: center;
    font-size: 28px;
    font-weight: 300;
    line-height: 40px;
  }

  b {
    font-weight: 800;
  }
`;

const Boxes = styled.div`
  margin-top: 9.7rem;
  display: flex;
  flex-direction: column;
  align-self: stretch;
  overflow: hidden;
  width: 100%;
  ${media.mobile} {
    position: absolute;
    align-items: center;
    justify-content: center;
    top: 21.2rem;
    margin-top: 0;
  }
  &__button {
    position: relative;
    gap: 0.9rem;
    width: 20rem;
    height: 4.2rem;
    margin-top: 4.2rem;
    border-radius: 2.1rem;
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: ${({ theme }) => `0.1rem solid ${theme.color.green}`};
    color: ${({ theme }) => theme.color.green};
    &:hover {
      &:after {
        content: '';
        position: absolute;
        width: 20rem;
        height: 4.2rem;
        border-radius: 2.1rem;
        background-color: ${({ theme }) => theme.color.green};
        opacity: 0.3;
      }
    }

    ${media.mobile} {
      font-size: 1.2rem;
      line-height: 1.4rem;
    }
  }
`;
