import styled from 'styled-components';

import { useDeviceContext } from '../../contexts/device';
import { DimmerDPMLogo } from '../../public';
import { media } from '../../styles/theme';
import { shareDepromeet, openApplySite } from '../../utils/misc';

export default function Section4() {
  const device = useDeviceContext();

  return (
    <Container>
      {device === 'mobile' && (
        <LogoWrapper>
          <DimmerDPMLogo />
        </LogoWrapper>
      )}
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

const LogoWrapper = styled.div`
  position: absolute;
  top: 0;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  margin-top: 37.6rem;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-bottom: 18.6rem;

  background: linear-gradient(180deg, rgba(61, 99, 241, 0) 0%, #3d63f2 100%);

  ${media.mobile} {
    margin-top: 19rem;
    padding-bottom: 200px;
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
  background: linear-gradient(
    126.6deg,
    rgba(255, 255, 255, 0.16) 28.69%,
    rgba(255, 255, 255, 0) 100%
  );
  backdrop-filter: blur(120px);

  border-radius: 10px;
  margin-top: 56px;

  font-size: 16px;
  font-weight: 700;

  color: #fff;

  border: none;

  ${media.mobile} {
    margin-top: 40px;
  }

  :hover {
    opacity: 0.7;
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
  margin-top: 22px;
  background: none;

  text-align: center;
  font-size: 16px;
  font-weight: 700;
  color: #fff;

  :hover {
    opacity: 0.7;
  }
`;
