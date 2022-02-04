import styled from 'styled-components';

import { media } from '../../styles/theme';
import { Gmail, Kakao, Instagram } from '../../public';

export default function Box() {
  const snsList = [
    {
      name: 'gmail',
      content: 'depromeet@gmail.com',
      logo: <Gmail />,
      onClick: () =>
        window.open('mailto:depromeet@gmail.com?subject=[홈페이지 문의] '),
    },
    {
      name: 'Kakao plus friend',
      content: 'depromeet',
      logo: <Kakao />,
      onClick: () => window.open('http://pf.kakao.com/_xoxmcxed/chat'),
    },
  ];

  return (
    <Container>
      <Title>
        궁금한 것이 있거나{'\n'}
        문의 사항이 있으신가요?
      </Title>
      <SubTitle>
        디자인과 개발 관련된 일상적인 대화도{'\n'}
        언제든지 환영합니다.
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
  white-space: pre-line;
  margin-left: 12.2rem;
  color: white;

  ${media.mobile} {
    margin: -5.5rem 0 0;
  }
`;

const SNSButton = styled.button`
  position: relative;

  display: flex;
  align-items: center;

  width: 40.1rem;
  height: 4rem;
  border-radius: 3.1rem;

  color: #000;
  background-color: #fff;

  ${media.mobile} {
    box-sizing: border-box;
    padding: 1.2rem 2rem;
    max-width: 29rem;
  }

  :hover {
    background-color: #c0c0c0;
  }
`;

const Title = styled.div`
  font-size: 3.6rem;
  font-weight: 800;
  margin-left: 3rem;
  line-height: 140%;

  ${media.mobile} {
    font-size: 2.4rem;
    line-height: 3.6rem;
    text-align: center;
    margin-left: 0;
  }
`;

const SubTitle = styled.div`
  font-size: 1.8rem;
  font-weight: 400;
  margin-top: 2.4rem;
  line-height: 30px;
  margin-left: 3rem;

  ${media.mobile} {
    margin-top: 1rem;
    margin-left: 0;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem;
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
