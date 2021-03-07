import styled from 'styled-components';
import { media } from '../../../styles/theme';

const Sup = styled.sup`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.2rem;
  margin-left: 1rem;
  vertical-align: super;
  ${media.mobile} {
    font-size: 1rem;
  }
`;

export default Sup;
