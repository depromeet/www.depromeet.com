import dynamic from 'next/dynamic';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import Contact from './Contact';
import Copyright from './Copyright';
import Buttons from './Buttons';

type FooterProps = PropsWithChildren<{className: string}>;

const footer = ({ className } : FooterProps) => {
  const InstagramLogo = dynamic(() => import('../../resources/images/ic_sns_instagram.svg'));
  const FacebookLogo = dynamic(() => import('../../resources/images/ic_sns_facebook.svg'));
  const MediumLogo = dynamic(() => import('../../resources/images/ic_sns_medium.svg'));
  return (
    <footer className={className}>
      <Contact>
        <Contact.Logo
          src="/logo_footer.svg"
          alt="footer logo"
          loading="lazy"
        />
        <Buttons>
          <Buttons.Button href="https://depromeet.medium.com/">
            <MediumLogo />
          </Buttons.Button>
          <Buttons.Button href="https://www.facebook.com/depromeet/">
            <FacebookLogo />
          </Buttons.Button>
          <Buttons.Button href="https://www.instagram.com/depromeet/">
            <InstagramLogo />
          </Buttons.Button>
        </Buttons>
      </Contact>
      <Copyright>
        <small>Depromeet. All rights reserved.</small>
      </Copyright>
    </footer>
  );
};

export default styled(footer)`
  background-color: #0c0c0c;
  border: 1px solid #000000;
  box-sizing: border-box;
  width: 100%;
`;
