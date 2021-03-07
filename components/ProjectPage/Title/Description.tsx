import styled from 'styled-components';
import { media } from '../../../styles/theme';

const Description = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 1.4rem;
  line-height: 2rem;
  text-transform: uppercase;
  color: #FFFFFF;
  margin-left: 2.4rem;
  vertical-align: center;
  ${media.mobile} {
    display: none;
  }
`;

export default Description;
