import Image from 'next/image';
import styled from 'styled-components';

import { projects } from './projects';

export default function ProjectListMobileView() {
  console.log();

  return (
    <Container>
      {projects.slice(0, 9).map(({ order, 서비스명, images }) => (
        <Item key={order}>
          <Image
            src={`/projects/icons/${images}`}
            alt="service-icon"
            width="50%"
            height="50%"
          />
          <div>{서비스명}</div>
        </Item>
      ))}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 300px;
  background-color: red;
  display: grid;
  gap: 20px 24px;

  grid-template-columns: repeat(3, 1fr);
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
`;
