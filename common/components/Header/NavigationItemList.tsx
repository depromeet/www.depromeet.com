import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Device } from 'common/contexts/device';
import { useDeviceContext } from 'common/hooks';
import { googleFormLink } from 'common/utils/misc';

import SocialLinkButtonList from './SocialLinkButtonList';
import NavigationItem from './NavigationItem';

type NavigationItem = {
  href: string;
  label: string;
};

type Props = {
  children: ({ items }: { items: NavigationItem[] }) => React.ReactNode;
  className?: string;
};

export default function NavigationItemList({ children, className }: Props) {
  const device = useDeviceContext();

  return (
    <NavigationItemContainer device={device} className={className}>
      <NavigationItemWrapper device={device}>{children?.({ items: NavigationReferences })}</NavigationItemWrapper>

      {device === 'mobile' && <NotifyContainer>디프만에 관심있으신가요?</NotifyContainer>}

      <GoogleFormRedirectButton device={device} onClick={() => window.open(googleFormLink)}>
        11기에서 만나기
      </GoogleFormRedirectButton>

      {device === 'mobile' && <SocialLinkButtonList />}
    </NavigationItemContainer>
  );
}

const NavigationReferences: NavigationItem[] = [
  {
    href: '/',
    label: 'about',
  },
  {
    href: '/project',
    label: 'project',
  },
  {
    href: '/member',
    label: 'member',
  },
  {
    href: '/contact',
    label: 'contact',
  },
];

const NavigationItemWrapper = styled.div<{ device: Device }>`
  display: flex;
  align-items: center;

  ${({ device }) =>
    device === 'mobile' &&
    css`
      flex: 1;
      flex-direction: column;
      justify-content: center;
    `}
`;

const NavigationItemContainer = styled.div<{ device: Device }>`
  display: flex;
  align-items: center;
  z-index: 1;

  ${({ device }) =>
    device === 'mobile' &&
    css`
      z-index: 1000;
      overflow-y: scroll;

      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;

      background: linear-gradient(330.23deg, rgba(49, 107, 255, 0.97) 20.68%, rgba(0, 0, 0, 0.97) 71.37%);
      opacity: 0.9;

      flex-direction: column;
      justify-content: flex-start;
      align-items: center;

      padding: 40px 24px;
    `}
`;

const NotifyContainer = styled.div`
  margin-bottom: 10px;

  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
`;

const GoogleFormRedirectButton = styled.div<{ device: Device }>`
  width: 145px;
  height: 38px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-left: 7px;
  border-radius: 27px;

  font-size: 14px;
  font-weight: 700;

  background-color: #38e3a8;
  color: #000;

  cursor: pointer;

  :hover {
    background-color: #31b98a;
  }

  ${({ device }) => device === 'mobile' && MobileButtonStyles}
`;

const MobileButtonStyles = css`
  width: 100%;
  height: 48px;
  min-height: 48px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;
  margin: 0 24px;
  border-radius: 10px;

  color: #0038ff;
  background-color: #fff;

  :hover {
    background-color: #c0c0c0;
  }
`;
