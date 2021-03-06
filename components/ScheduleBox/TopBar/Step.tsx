import styled from 'styled-components';
import { media } from '../../../styles/theme';

const Goal = styled.div`
  font-family: Montserrat;
  font-weight: 800;
  font-size: 2.6rem;
  line-height: 3.2rem;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  color: #FFFFFF;
  display: inline-block;

  ${media.mobile} {
    font-size: 2rem;
    line-height: 2.4rem;
  }
`;
export default Goal;
