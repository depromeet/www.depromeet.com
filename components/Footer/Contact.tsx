import styled, { DefaultTheme, StyledComponentBase } from 'styled-components';
import { media } from '../../styles/theme';
import Logo from './Logo';

interface ContactBlock extends StyledComponentBase<'div', DefaultTheme> {
  Logo?: typeof Logo;
}

const Contact:ContactBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 16rem;
  box-sizing: border-box;

  ${media.mobile} {
    padding: 2.8rem 2.4rem;
    height: 9.6rem;

  }
`;

Contact.Logo = Logo;

export default Contact;
