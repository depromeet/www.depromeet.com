import styled from 'styled-components';

import TextAnimation from '../components/TextAnimation';
import { media } from '../styles/theme';
import { useDeviceContext } from '../contexts/device';

export default function Section1() {
  const device = useDeviceContext();

  console.log(device);
  return (
    <>
      <RotateBackground />
      <Container>
        <div className="title">
          <Logo>DEPROMEET</Logo>
          <Subtitle>디자이너와 프로그래머가 만났을 때</Subtitle>
        </div>
        {device === 'mobile' && (
          <Description>
            <Line break>우리는 단순한 IT동아리가 아닙니다.</Line>
            <Line break>서비스 런칭부터 개선까지</Line>
            <Line break>
              <Highlight>경험에 성장을 더하는 모임</Highlight> 입니다.
            </Line>
          </Description>
        )}
        <Motion>
          <TextAnimation />
        </Motion>
      </Container>
    </>
  );
}

const Container = styled.div`
  box-sizing: border-box;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;

  padding-top: 395px;

  ${media.mobile} {
    padding-top: 172px;
  }
`;

const Title = styled.div`
  font-size: 100px;
`;

const Logo = styled.p`
  font-size: 100px;
  font-family: Gmarket Sans;
  line-height: 150%;

  ${media.mobile} {
    font-size: 32px;
  }
`;

const Subtitle = styled.p`
  font-size: 50px;
  line-height: 111px;

  ${media.mobile} {
    font-size: 15px;
    line-height: 58px;
  }
`;

const RotateBackground = styled.div`
  z-index: -1;
  position: absolute;
  width: 100%;
  height: 100vh;

  transform: rotate(-180deg);
  background: conic-gradient(
    from 270deg at 50% 50%,
    rgba(49, 107, 255, 0) 0deg,
    rgba(49, 107, 255, 0.6) 179.07deg,
    rgba(49, 107, 255, 0.8) 269.28deg,
    #316bff 360deg
  );
`;

const Description = styled.div`
  margin-top: 4.8rem;
  font-size: 2.4rem;
  line-height: 4.1rem;
  font-weight: 400;

  ${media.mobile} {
    margin-top: 173px;
    font-size: 18px;
    line-height: 31px;
  }
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.color.green};

  ${media.mobile} {
    font-size: 1.9rem;
    font-weight: 700;
  }
`;

const Line = styled.span<{
  break?: boolean;
}>`
  display: ${(props) => (props.break ? 'block' : 'none')};
`;

const Motion = styled.div`
  display: relative;
  margin-top: 17.6rem;

  ${media.mobile} {
    margin-top: 173px;
  }
`;
