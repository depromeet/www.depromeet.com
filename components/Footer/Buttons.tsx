import styled, { DefaultTheme, StyledComponentBase } from 'styled-components';
import { media } from '../../styles/theme';

type ButtonsBlock =
  StyledComponentBase<'div', DefaultTheme> & { Button?: typeof Button };

const Buttons: ButtonsBlock = styled.div`
  display: flex;
`;

const Button = styled.a.attrs({
  role: 'button',
  tabIndex: 0,
  target: '_blank',
  rel: 'noreferrer',
})`
  display: flex;
  background: #2b2b2b;
  border-radius: 50%;
  height: 4.8rem;
  width: 4.8rem;
  text-decoration: none;
  margin-left: 2.4rem;
  align-items: center;
  justify-content: center;

  ${media.mobile} {
    width: 4rem;
    height: 4rem;
    margin-left: 1.6rem;
  }
`;

Buttons.Button = Button;

export default Buttons;
