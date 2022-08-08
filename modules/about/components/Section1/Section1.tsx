import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { Device } from "common/contexts/device";
import { useDeviceContext } from "common/hooks";

export default function Section1() {
  const device = useDeviceContext();

  return (
    <>
      <Background>
        <Rotate />
        <Gradient />
      </Background>

      <Content>
        <Title device={device}>
          DEPROMEET
          <br />
          2022.08.22
        </Title>
        <Subtitle device={device}>
          디프만 12기 멤버 모집이 시작됩니다.
          <br />곧 만나요!
        </Subtitle>

        {device === "mobile" && (
          <Summary>
            <div>우리는 단순한 IT동아리가 아닙니다.</div>
            <div>서비스 런칭부터 개선까지</div>
            <div>
              <strong css={{ color: "#38e3a8", fontWeight: "bold" }}>
                경험에 성장을 더하는 모임
              </strong>
              입니다.
            </div>
          </Summary>
        )}
      </Content>
    </>
  );
}

const Background = styled.div`
  position: absolute;

  overflow: hidden;
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Rotate = styled.div`
  position: absolute;
  width: 4200px;
  height: 4200px;

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

const Gradient = styled.div`
  position: absolute;
  bottom: -10px;

  width: 100%;
  height: 50vh;
  background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
`;

const Content = styled.div`
  position: relative;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1<{ device: Device }>`
  line-height: 150%;
  font-size: min(200px, 3vw);
  font-family: Gmarket Sans;
  text-align: center;
  margin-bottom: 12px;

  ${({ device }) =>
    device === "mobile" &&
    css`
      font-size: 32px;
    `}
`;

const Subtitle = styled.h2<{ device: Device }>`
  text-align: center;
  font-size: min(100px, 1.5vw);
  line-height: 150%;

  ${({ device }) =>
    device === "mobile" &&
    css`
      line-height: 28px;
      font-size: 15px;
    `}
`;

const Summary = styled.summary`
  z-index: 1;

  margin-top: 173px;
  font-size: 18px;
  line-height: 31px;
  text-align: center;
`;
