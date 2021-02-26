import React, { FC, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import { media } from '../styles/theme';
import { socials } from '../resources/data/socials';

const Logo = dynamic(() => import('../public/gnb_logo.svg'));

interface BackgroundTransparentProps {
  isTransparent?: boolean;
}
const applyFor9th = 'https://forms.gle/MVr4auDmerieZZR27?fbclid=IwAR3vamHZfGNvWtQ5bHKRE7swLKHFGsHeSy0wUde_bdoate-veAqlLJeM3kI';

export const openApplySite = () => window.open(applyFor9th);
const Header: FC<BackgroundTransparentProps> = ({ isTransparent = false }) => {
  const [visible, setVisible] = useState(false);
  return (
    <Container isTransparent={isTransparent}>
      <div role="button" tabIndex={0} className="logo">
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <div className="mobile__only menu-icon">
        <img
          src="/invitation.svg"
          alt="9th invitation"
          loading="lazy"
          style={{
            width: '8.8rem',
            height: '2.6rem',
            display: visible ? 'none' : 'block',
          }}
        />
        <MenuButton isVisible={visible} setVisible={setVisible} />
      </div>
      <ButtonContainer visible={visible} className="no-scroll-bar">
        <div className="mobile-wrapper">
          <RouterBtn routerName="about" path="/" setVisible={setVisible} />
          <RouterBtn routerName="project" path="/project" setVisible={setVisible} />
          <RouterBtn routerName="contact" path="/contact" setVisible={setVisible} />
        </div>
        <div className="mobile__only invitation">
          Depromeet에서 같이 성장... 어때요?
        </div>
        <Button
          role="button"
          tabIndex={0}
          onClick={openApplySite}
        >
          9기에서 만나기
        </Button>
        <div className="mobile__only socials">
          {
            socials.map((v) => (
              <SocialButton
                href={v.href}
                name={v.name}
                key={`social-button-${v.name}`}
              />
            ))
          }
        </div>
      </ButtonContainer>
    </Container>
  );
};

const RouterBtn = ({ routerName, path, setVisible }) => {
  const router = useRouter();
  const pathname = useRouter().pathname;

  const handleRouting = () => {
    setVisible(false);
    router.push(path);
  };

  return (
    <RouterButton
      role="button"
      onClick={handleRouting}
      onKeyPress={handleRouting}
      tabIndex={0}
      isSame={path === pathname}
    >
      {routerName.toUpperCase()}
      {path === pathname && <Underline />}
    </RouterButton>
  );
};

const SocialButton = ({ name, href }) => {
  const openSocial = () => { window.open(href); };
  return (
    <Social
      role="button"
      onClick={openSocial}
      tabIndex={0}
    >
      {name}
    </Social>
  );
};

const MenuButton = ({ isVisible, setVisible }) => {
  const changeMenuState = () => {
    setVisible((visible) => !visible);
  };

  return (
    <MenuIcon
      role="button"
      tabIndex={0}
      onClick={changeMenuState}
    >
      <img
        src={isVisible ? '/ic_x.svg' : 'ic_menu.svg'}
        alt="menu button"
        loading="lazy"
      />
    </MenuIcon>
  );
};

const Container = styled.div<BackgroundTransparentProps>`
  position: fixed;
  background-color: ${({ isTransparent }) => (isTransparent ? 'transparent' : 'black')};
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 8rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  z-index: 10;

  ${media.mobile} {
    padding: 2.8rem 2.4rem;
    height: 7.2rem;
    justify-content: space-between;
  }
  .mobile__only {
    display: none;
    ${media.mobile} {
      display: block;
    }
  }

  .logo {
    ${media.mobile} {
      z-index: 1001;
      svg { 
        width: 8rem;
        height: 4rem;
      }
    }
  }

  .menu-icon {
    ${media.mobile} {
      z-index: 1001;
      display: flex;
      align-items: center;
    }
  }


  .invitation {
    ${media.mobile} {
      font-size: 1.4rem;
      line-height: 2rem;
      font-weight: 500;
      margin-bottom: 1rem;
    }
  }
`;

const ButtonContainer = styled.div<{visible: boolean}>`
  display: flex;
  align-items: center;
  z-index: 1;
  ${media.mobile} {
    display: ${({ visible }) => (visible ? 'flex' : 'none')};
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #0038ff;
    opacity: 0.97;

    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 7rem 2.4rem 0;
    overflow-y: scroll;
    z-index: 1000;
  }

  .mobile-wrapper {
    display: flex;
    align-items: center;

    ${media.mobile} {
      flex-direction: column;
      flex: 1;
      justify-content: center;
    }
  }

  .socials {
    display: none;
    ${media.mobile} {
      width: 100%;
      margin-top: 3.2rem;
      display: flex;
      justify-content: space-around;
      margin-bottom: 4rem;
    }
  }
`;

const Button = styled.div`
  width: auto;
  font-size: 1.4rem;
  font-weight: 800;
  padding: 1.2rem 2.4rem;
  background-color: ${({ theme }) => theme.color.blue};
  border-radius: 2.7rem;
  margin-left: 0.7rem;
  :hover {
    background-color: #0013BA;
  }

  ${media.mobile} {
    background-color: white;
    border-radius: 1rem;
    width: 100%;
    height: 4.8rem;
    padding: 0;
    margin: 0 2.4rem;
    color: #0038ff;
    display: flex;
    align-items: center;
    justify-content: center;

    :hover {
      background-color: #c0c0c0;
    }
  }
`;

const RouterButton = styled.div<{isSame: boolean}>`
  position: relative;
  font-family: Montserrat;
  margin-right: 3.4rem;
  font-size: 1.4rem;
  font-weight: ${({ isSame }) => (isSame ? 800 : 500)};
  :hover {
    color: #c0c0c0;
  }


  ${media.mobile} {
    font-size: 4rem;
    line-height: 4rem;
    font-weight: bold;
    margin-right: 0;
    margin-top: 6.7rem;
    :first-child {
      margin-top: 0;
    }
    :hover {
      color: white;
    }
  }
`;

const Underline = styled.div`
  cursor: default;
  position: absolute;
  width: 100%;
  height: 0.2rem;
  background-color: white;
  margin-top: 0.8rem;

  ${media.mobile} {
    display: none;
  }
`;

const Social = styled.div`
  font-family: Montserrat;
  font-size: 1.2rem;
  line-height: 2rem;
  font-weight: bold;
  text-align: center;
`;

const MenuIcon = styled.div`
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

export default Header;
