import styled from 'styled-components';

import { media } from '../../styles/theme';
import { useDeviceContext } from '../../contexts/device';

export default function Section1() {
  const device = useDeviceContext();

  return (
    <>
      <Wrapper>
        <RotateBackground />
      </Wrapper>
      <Container>
        <div>
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
        <Gradient />
      </Container>
    </>
  );
}

const Gradient = styled.div`
  position: absolute;
  bottom: 0px;

  width: 100%;
  height: 50vh;
  background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
`;

const Wrapper = styled.div`
  position: absolute;

  overflow: hidden;
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const RotateBackground = styled.div`
  position: absolute;
  width: 10000px;
  height: 10000px;

  background-image: conic-gradient(
    from 90deg at 50% 50%,
    rgba(49, 107, 255, 0) 0deg,
    rgba(49, 107, 255, 0.6) 179.07deg,
    rgba(49, 107, 255, 0.8) 269.28deg,
    #316bff 360deg
  );

  animation: 20s rotate linear infinite;
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const Container = styled.div`
  position: relative;
  box-sizing: border-box;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
`;

const Logo = styled.p`
  font-size: min(200px, 3vw);
  font-family: Gmarket Sans;
  line-height: 150%;

  ${media.mobile} {
    font-size: 32px;
  }
`;

const Subtitle = styled.p`
  font-size: min(100px, 1.5vw);
  line-height: 111px;

  ${media.mobile} {
    font-size: 15px;
    line-height: 58px;
  }
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.color.green};

  ${media.mobile} {
    font-weight: 700;
  }
`;

const Description = styled.div`
  margin-top: 173px;
  font-size: 18px;
  line-height: 31px;
  z-index: 1;
`;

const Line = styled.span<{
  break?: boolean;
}>`
  display: ${(props) => (props.break ? 'block' : 'none')};
`;
