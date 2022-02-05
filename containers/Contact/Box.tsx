import styled from 'styled-components';

import { media } from '../../styles/theme';
import { Gmail, Kakao, DPM } from '../../public';
import { Device } from '../../contexts/device';

type Props = {
  device: Device;
};

export default function Box({ device }: Props) {
  const snsList = [
    {
      name: 'gmail',
      content: 'depromeet@gmail.com',
      logo: <Gmail />,
      onClick: () =>
        window.open('mailto:depromeet@gmail.com?subject=[홈페이지 문의] '),
    },
    {
      name: 'kakao plus friend',
      content: 'depromeet',
      logo: <Kakao />,
      onClick: () => window.open('http://pf.kakao.com/_xoxmcxed/chat'),
    },
  ];

  return (
    <Container>
      {device !== 'desktop' && (
        <DPMLogoWrapper>
          <DPM />
        </DPMLogoWrapper>
      )}
      <Title>
        <p>궁금한 것이 있거나</p>
        <p>문의 사항이 있으신가요?</p>
      </Title>
      <SubTitle>
        <p>디자인과 개발 관련된 일상적인 대화도</p>
        <p>언제든지 환영합니다.</p>
      </SubTitle>
      <SNS>
        {snsList.map(({ name, content, logo, onClick }) => (
          <SNSButton onClick={onClick} key={name}>
            <SNSLogo>{logo}</SNSLogo>
            <SNSName>{name}</SNSName>
            <SNSContent>{content}</SNSContent>
          </SNSButton>
        ))}
      </SNS>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: min(100%, 461px);
  padding: 0 10%;
  color: #fff;

  ${media.tablet} {
    text-align: center;
  }
`;

const DPMLogoWrapper = styled.div`
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
`;

const Title = styled.div`
  font-size: 36px;
  font-weight: 900;
  line-height: 140%;

  ${media.mobile} {
    text-align: center;
    font-size: 24px;
    line-height: 36px;
  }
`;

const SubTitle = styled.div`
  margin-top: 16px;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;

  ${media.mobile} {
    margin-top: 10px;
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    text-align: center;
  }
`;

const SNS = styled.div`
  border-radius: 20px;
  padding: 30px 20px;
  margin-top: 20px;

  backdrop-filter: blur(120px);
  background: linear-gradient(
    126.6deg,
    rgba(255, 255, 255, 0.16) 28.69%,
    rgba(255, 255, 255, 0) 100%
  );

  ${media.mobile} {
    margin-top: 20px;
    padding: 30px 20px;
    border-radius: 20px;
  }
`;

const SNSButton = styled.button`
  position: relative;

  display: flex;
  align-items: center;

  width: 100%;
  height: 40px;
  border-radius: 31px;

  color: #000;
  border: none;
  background-color: #fff;

  ${media.mobile} {
    box-sizing: border-box;
    padding: 1.2rem 2rem;
  }

  :hover {
    background-color: #c0c0c0;
  }

  & + & {
    margin-top: 20px;
  }
`;

const SNSLogo = styled.div`
  margin-left: 1.6rem;

  ${media.mobile} {
    margin-left: 0;
  }
`;

const SNSName = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  margin-left: 0.915rem;

  ${media.mobile} {
    font-weight: bold;
    line-height: 1.5rem;
  }
`;

const SNSContent = styled.div`
  position: absolute;
  right: 0;

  margin-right: 2.4rem;
  font-size: 1.4rem;
  font-weight: 500;
`;
