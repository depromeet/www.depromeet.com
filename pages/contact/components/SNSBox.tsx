import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Device, useDeviceContext } from 'contexts/device';

import { Gmail, Instagram, Kakao } from '../images';

export default function SNSBox() {
  const device = useDeviceContext();

  return (
    <SNS device={device}>
      {snsList.map(({ name, content, logo, onClick }) => (
        <SNSButton key={name} onClick={onClick} device={device}>
          <SNSLogo device={device}>{logo}</SNSLogo>
          <SNSName device={device}>{name}</SNSName>
          <SNSContent>{content}</SNSContent>
        </SNSButton>
      ))}
    </SNS>
  );
}

const snsList = [
  {
    name: 'gmail',
    content: 'depromeet@gmail.com',
    logo: <Gmail />,
    onClick: () => window.open('mailto:depromeet@gmail.com?subject=[홈페이지 문의] '),
  },
  {
    name: 'kakao plus friend',
    content: 'depromeet',
    logo: <Kakao />,
    onClick: () => window.open('http://pf.kakao.com/_xoxmcxed/chat'),
  },
  {
    name: 'instagram',
    content: '@depromeet',
    logo: <Instagram />,
    onClick: () => window.open('https://www.instagram.com/depromeet/?hl=ko'),
  },
];

const SNS = styled.div<{ device: Device }>`
  border-radius: 20px;
  padding: 30px 20px;
  margin-top: 20px;

  backdrop-filter: blur(120px);
  background: linear-gradient(126.6deg, rgba(255, 255, 255, 0.16) 28.69%, rgba(255, 255, 255, 0) 100%);

  ${({ device }) =>
    device === 'mobile' &&
    css`
      margin-top: 20px;
      padding: 30px 20px;
      border-radius: 20px;
    `}
`;

const SNSButton = styled.button<{ device: Device }>`
  position: relative;

  display: flex;
  align-items: center;

  width: 100%;
  height: 40px;
  border-radius: 31px;

  color: #000;
  border: none;
  background-color: #fff;

  :hover {
    background-color: #c0c0c0;
  }

  & + & {
    margin-top: 20px;
  }

  ${({ device }) =>
    device === 'mobile' &&
    css`
      box-sizing: border-box;
      padding: 12px 20px;
    `}
`;

const SNSLogo = styled.div<{ device: Device }>`
  margin-left: 16px;

  ${({ device }) =>
    device === 'mobile' &&
    css`
      margin-left: 0;
    `}
`;

const SNSName = styled.div<{ device: Device }>`
  margin-left: 9px;

  font-size: 12px;
  font-weight: 700;

  ${({ device }) =>
    device === 'mobile' &&
    css`
      font-weight: bold;
      line-height: 15px;
    `}
`;

const SNSContent = styled.div`
  position: absolute;
  right: 0;

  margin-right: 24px;

  font-size: 14px;
  font-weight: 500;
`;
