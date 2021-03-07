import styled from 'styled-components';
import { media } from '../../../styles/theme';

const Animation = styled.div`
  position: absolute;
  right: 10rem;
  top: 0;
  height: 100%;
  width: 18rem;
  box-sizing: border-box;
  aspect-ratio: 1/1;
  ${media.mobile} {
    right: 1.6rem;
    margin-top: 7rem;
    width: 8rem;
    height: 8rem;
    flex: 1;
  }
`;

export default Animation;
