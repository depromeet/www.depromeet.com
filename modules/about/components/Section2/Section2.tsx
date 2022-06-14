import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { Device } from 'common/contexts/device';
import { useDeviceContext } from 'common/hooks';

import AnimatedText from './AnimatedText';
import ProjectList from './ProjectList';
import Summary from './Summary';

export default function Section2() {
  const device = useDeviceContext();

  const { push } = useRouter();

  return (
    <>
      <div css={{ marginTop: '100px' }}>
        <AnimatedText />
      </div>

      <Container device={device}>
        <LeftColumn>
          <Summary />
        </LeftColumn>

        <RightColumn device={device}>
          <CatchPhrase device={device}>
            <p>오직 디자이너와 프로그래머의</p>
            <p>
              <b css={{ fontWeight: 800 }}>동반성장</b>을 위해서
            </p>
          </CatchPhrase>

          <Boxes device={device}>
            <ProjectList />

            <Button onClick={() => push('/project')}>{'모든 프로젝트 구경하기 >'}</Button>
          </Boxes>
        </RightColumn>
      </Container>
    </>
  );
}

const Container = styled.div<{ device: Device }>`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: stretch;

  margin-top: 400px;

  ${({ device }) =>
    device === 'mobile' &&
    css`
      flex-direction: column;
      height: 411px;
      margin-top: 300px;
    `}
`;

const LeftColumn = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
`;

const RightColumn = styled.div<{ device: Device }>`
  overflow-x: hidden;
  position: relative;
  align-items: flex-start;

  display: flex;
  flex-direction: column;
  flex: 1.8;

  padding-left: 11rem;

  ${({ device }) =>
    device === 'mobile' &&
    css`
      padding-left: 0;
      position: static;
    `}
`;

const CatchPhrase = styled.div<{ device: Device }>`
  width: 100%;
  font-weight: 300;
  font-size: 60px;
  line-height: 80px;

  ${({ device }) =>
    device === 'mobile' &&
    css`
      position: absolute;
      top: 0;

      text-align: center;
      font-size: 28px;
      font-weight: 300;
      line-height: 40px;
    `}
`;

const Boxes = styled.div<{ device: Device }>`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-self: stretch;

  width: 100%;
  margin-top: 97px;

  ${({ device }) =>
    device === 'mobile' &&
    css`
      box-sizing: border-box;
      position: absolute;
      top: 212px;

      align-items: center;
      justify-content: center;

      padding: 0 0 0 24px;
      margin-top: 0;
    `}
`;

const Button = styled.button`
  width: 200px;
  height: 43px;

  color: #fff;
  background: #191919;
  backdrop-filter: blur(135.254px);
  border-radius: 67.5px;
  border: none;

  font-size: 14px;
  margin-top: 42px;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;
