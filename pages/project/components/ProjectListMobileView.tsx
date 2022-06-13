import Image from 'next/image';
import { useState } from 'react';
import styled from '@emotion/styled';

import { BelowArrow } from '../assets';
import { projects } from '../utils/projects';

import Carousel from './Carousel';

export default function ProjectList() {
  const [fold, setFold] = useState(false);
  const [currentProjectId, setCurrentProjectId] = useState(0);
  const [carouselOpen, setCarouselOpen] = useState(false);

  return (
    <Container>
      <Title>
        모든 작업물
        <small>{projects.length}</small>
      </Title>

      <Grid>
        {projects
          .slice(0, fold ? projects.length : 9) //
          .map(({ order, title, icon }, index) => (
            <Item key={order}>
              <Image
                alt={title}
                src={`/projects/${icon}`}
                width="100%"
                height="100%"
                onClick={() => {
                  setCarouselOpen(true);
                  setCurrentProjectId(index);
                }}
              />
              <span>{title}</span>
            </Item>
          ))}
      </Grid>

      <Button onClick={() => setFold((prevState) => !prevState)} fold={fold}>
        <span>{fold ? '접기' : '더보기'}</span>
        <BelowArrow />
      </Button>

      <Carousel
        open={carouselOpen}
        data={projects}
        currentDataId={currentProjectId}
        onPrev={() => setCurrentProjectId((prevState) => prevState - 1)}
        onNext={() => setCurrentProjectId((prevState) => prevState + 1)}
        onClose={() => setCarouselOpen(false)}
      />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  margin-bottom: 56px;
`;

const Title = styled.p`
  width: fit-content;
  position: relative;

  font-weight: 800;
  font-size: 16px;

  color: #fff;
  margin-bottom: 20px;

  small {
    position: absolute;
    right: -14px;
    top: -1px;
    font-size: 8px;
  }
`;

const Grid = styled.div`
  width: 100%;

  display: grid;
  gap: 20px 24px;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 30px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    margin-top: 12px;

    font-weight: 600;
    font-size: 14px;

    color: #fff;
  }
`;

const Button = styled.div<{ fold: boolean }>`
  width: 90px;
  height: 38px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid #00ff94;
  border-radius: 27px;
  margin: 0 auto;

  font-size: 12px;
  font-weight: bold;
  color: #00ff94;
  background-color: #000;
  cursor: pointer;

  span {
    margin-right: 6px;
  }

  svg {
    transform: ${({ fold: more }) => more && `rotate(180deg)`};
  }
`;
