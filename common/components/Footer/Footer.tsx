import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { Device } from 'common/contexts/device';
import { useDeviceContext } from 'common/hooks';

import { Logo, FacebookLogo, InstagramLogo, MediumLogo } from '../../assets';

export default function Footer() {
  const device = useDeviceContext();

  return (
    <Container>
      <ContentWrapper device={device}>
        <Logo />

        <div css={{ display: 'flex' }}>
          {socialMediaList.map(({ href, logo }) => (
            <Button key={href} href={href} target="_blank" rel="noreferrer" device={device}>
              {logo}
            </Button>
          ))}
        </div>
      </ContentWrapper>

      <CopyrightWrapper device={device}>
        <small>Depromeet. All rights reserved.</small>
      </CopyrightWrapper>
    </Container>
  );
}

const socialMediaList = [
  {
    href: 'https://depromeet.medium.com/',
    logo: <MediumLogo />,
  },
  {
    href: 'https://www.facebook.com/depromeet/',
    logo: <FacebookLogo />,
  },
  {
    href: 'https://www.instagram.com/depromeet/',
    logo: <InstagramLogo />,
  },
];

const Container = styled.footer`
  box-sizing: border-box;
  width: 100%;

  position: absolute;
  bottom: 0;

  background: transparent;
`;

const ContentWrapper = styled.div<{ device: Device }>`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 160px;
  width: 75%;
  margin: 0 auto;

  ${({ device }) =>
    device === 'mobile' &&
    css`
      height: 96px;
    `}
`;

const Button = styled.a<{ device: Device }>`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  height: 48px;
  width: 48px;
  margin: 0 0 0 24px;

  background-color: #2b2b2b;
  text-decoration: none;

  ${({ device }) =>
    device === 'mobile' &&
    css`
      width: 40px;
      height: 40px;
      margin: 0 12px 0 0;
    `}
`;

const CopyrightWrapper = styled.div<{ device: Device }>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 40px;

  background-color: #141414;
  color: #757575;

  font-size: 12px;
  line-height: 15px;

  ${({ device }) =>
    device === 'mobile' &&
    css`
      font-size: 10px;
      line-height: 12px;
    `}
`;
