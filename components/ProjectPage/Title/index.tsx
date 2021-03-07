import styled, { DefaultTheme, StyledComponentBase } from 'styled-components';
import { media } from '../../../styles/theme';
import Description from './Description';
import Sup from './Sup';

interface TitleBlock extends StyledComponentBase<'h1', DefaultTheme> {
  Sup?: typeof Sup;
  Description?: typeof Description;
}
const Title: TitleBlock = styled.h1`
  font-style: normal;
  font-weight: 800;
  font-size: 2.2rem;
  line-height: 2.6rem;
  letter-spacing: -0.03em;
  color: #FFFFFF;
  margin-bottom: 4rem;
  ${media.mobile} {
    font-size: 1.6rem;
  }
`;

Title.Sup = Sup;
Title.Description = Description;

export default Title;
