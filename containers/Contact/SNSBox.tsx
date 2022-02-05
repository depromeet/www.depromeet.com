import styled from 'styled-components';

import { Gmail, Kakao } from '../../public';
import { media } from '../../styles/theme';

export default function SNSBox() {
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
    <SNS>
      {snsList.map(({ name, content, logo, onClick }) => (
        <SNSButton onClick={onClick} key={name}>
          <SNSLogo>{logo}</SNSLogo>
          <SNSName>{name}</SNSName>
          <SNSContent>{content}</SNSContent>
        </SNSButton>
      ))}
    </SNS>
  );
}

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
