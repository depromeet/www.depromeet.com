import styled from 'styled-components';
import { media } from '../../styles/theme';

const Copyright = styled.div`
  height: 4rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #141414;
  font-style: normal;
  font-weight: normal;
  font-size: 1.2rem;
  line-height: 1.5rem;
  font-family: Montserrat;
  color: #757575;
  ${media.mobile} {
    font-size: 1rem;
    line-height: 1.2rem;
  }
`;

export default Copyright;
