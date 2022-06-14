import styled from '@emotion/styled';

import { Person as Props } from '../utils/member';

export default function Person({ name, ...props }: Props) {
  console.log(props);
  return (
    <Container>
      <span>{name}</span>
    </Container>
  );
}

const Container = styled.div`
  width: 267px;
  height: 389px;

  background-color: blue;
`;
