import styled from 'styled-components';
import { media } from '../../../styles/theme';

const Period = styled.div<{green?: boolean}>`
  font-weight: bold;
  font-size: 1.6rem;
  line-height: 1.9rem;
  text-align: center;
  display: inline-block;
  margin-left: 3.7rem;
  color: ${({ green = true, theme }) => (green ? theme.color.green : theme.color.blue)};
  ${media.mobile} {
    font-size: 1.2rem;
    line-height: 1.4rem;
  }
`;

export default Period;
