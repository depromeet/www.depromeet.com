import styled from 'styled-components';
import { media } from '../../styles/theme';

const Box = styled.div`
  width: 114rem;
  height: 26rem;
  background: #131313;
  border-radius: 3.2rem;
  padding: 4rem 4.8rem;
  box-sizing: border-box;
  position: relative;

  ${media.mobile} {
    width: 32.7rem;
    height: 18rem;
    padding: 2.2rem 2.2rem;
    border-radius: 2rem;
  }
`;

export default Box;
