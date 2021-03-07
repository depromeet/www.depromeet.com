import styled from 'styled-components';
import { media } from '../../../styles/theme';

const Description = styled.div`
  font-weight: bold;
  font-size: 3.6rem;
  line-height: 4.8rem;
  text-transform: uppercase;
  color: #FFFFFF;
  margin-top: 2.4rem;
  word-break: keep-all;
  flex: 1;
  ${media.mobile} {
    flex: none;
    width: 17rem;
    font-size: 2rem;
    line-height: 2.8rem;
    padding-right: 2rem;
    align-self: flex-start;
  }
`;
export default Description;
