import styled from 'styled-components';

import { media } from '../styles/theme';
import { shareDepromeet, openApplySite } from '../utils/misc';

export default function Section4() {
  return (
    <Container>
      <Title>
        <p>디프만의</p>
        <b>열한 번째 이야기</b>를 함께
        <p>만들어가고 싶다면</p>
        <SmallTest>
          COVID-19확산으로 인해 온라인 모임을 지향하고 있습니다.
        </SmallTest>
      </Title>
      <ApplyButton onClick={openApplySite}>11기에서 만나기</ApplyButton>
      <ShareButton onClick={shareDepromeet}>지인에게 공유하기</ShareButton>
    </Container>
  );
}

const Container = styled.div`
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
`;

const Title = styled.div`
  font-size: 6rem;
  line-height: 8rem;

  ${media.mobile} {
    font-size: 2.8rem;
    line-height: 4rem;
    font-weight: 300;
  }

  b {
    font-weight: 700;
  }
`;

const SmallTest = styled.small`
  text-transform: uppercase;
  font-size: 1.8rem;
  line-height: 2.6rem;
  font-weight: 500;
  margin-top: 3.2rem;

  ${media.mobile} {
    margin-top: 20px;
    font-size: 12px;
    font-weight: 200;
  }
`;

const ApplyButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 36.3rem;
  height: 5.4rem;
  background: ${({ theme }) => theme.color.green};
  border-radius: 10px;
  margin-top: 5.6rem;

  font-size: 16px;
  font-weight: 700;

  color: #fff;

  border: none;
  cursor: pointer;

  ${media.mobile} {
    margin-top: 40px;

    backdrop-filter: blur(120px);
    background: linear-gradient(
      126.6deg,
      rgba(255, 255, 255, 0.16) 28.69%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  :hover {
    background: ${({ theme }) => theme.color.hover_green};
  }
`;

const ShareButton = styled.button`
  width: 36.3rem;
  height: 5.4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #fff;
  border-radius: 10px;
  margin-top: 2.2rem;
  background: none;

  text-align: center;
  font-size: 1.6rem;
  font-weight: 700;
  color: #fff;

  cursor: pointer;

  :hover {
    opacity: 0.9;
  }
`;
