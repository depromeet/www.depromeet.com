import { useState } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Link from 'next/link';

import { Device } from 'common/contexts/device';
import { useDeviceContext } from 'common/hooks';

import NavigationItem from './NavigationItem';
import NavigationItemList from './NavigationItemList';

import { Logo } from '../../assets';

type Props = {
  showBackground?: boolean;
};

export default function Header({ showBackground = false }: Props) {
  const device = useDeviceContext();

  const [isNavItemListOpen, setIsNavItemListOpen] = useState(false);

  return (
    <Container device={device} css={{ zIndex: 1001, backgroundColor: showBackground ? '#000' : 'transparent' }}>
      <Link href="/">
        <LogoWrapper device={device}>
          <Logo />
        </LogoWrapper>
      </Link>

      {device === 'mobile' && (
        <MenuIconWraper>
          <MenuIcon onClick={() => setIsNavItemListOpen((prevState) => !prevState)}>
            <img src={isNavItemListOpen ? '/ic_x.svg' : 'ic_menu.svg'} alt="menu button" />
          </MenuIcon>
        </MenuIconWraper>
      )}

      <NavigationItemList
        css={css`
          && {
            display: ${device !== 'mobile' ? 'flex' : isNavItemListOpen ? 'flex' : 'none'};
          }
        `}
      >
        {({ items }) =>
          items.map((item) => (
            <NavigationItem
              key={item.label}
              onClick={() => setIsNavItemListOpen(false)}
              onKeyPress={() => setIsNavItemListOpen(false)}
              {...item}
            />
          ))
        }
      </NavigationItemList>
    </Container>
  );
}

const LogoWrapper = styled.button<{ device: Device }>`
  all: unset;
  z-index: inherit;
  cursor: pointer;

  ${({ device }) =>
    device === 'mobile' &&
    css`
      svg {
        width: 80px;
        height: 40px;
      }
    `}
`;

const MenuIcon = styled.button`
  all: unset;
  cursor: pointer;

  width: 40px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-shrink: 0;
`;

const Container = styled.div<{ device: Device }>`
  box-sizing: border-box;

  width: 100%;
  height: 80px;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  color: #fff;

  display: flex;
  justify-content: space-around;
  align-items: center;

  transition: background-color 0.3s ease-in-out;

  ${({ device }) =>
    device === 'mobile' &&
    css`
      height: 72px;
      padding: 28px 24px;

      justify-content: space-between;
    `}
`;

const MenuIconWraper = styled.div`
  z-index: inherit;

  display: flex;
  align-items: center;
`;
