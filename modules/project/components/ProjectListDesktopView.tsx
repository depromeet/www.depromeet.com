import Image from 'next/image';
import { useState } from 'react';
import styled from '@emotion/styled';

import { Down } from '../assets';
import { projects } from '../utils/projects';

import Carousel from './Carousel';

export default function ProjectList() {
  const [page, setPage] = useState(0);
  const [currentProjectId, setCurrentProjectId] = useState(0);
  const [carouselOpen, setCarouselOpen] = useState(false);

  return (
    <Container>
      <Title>
        모든 작업물<sup>{projects.length}</sup>
      </Title>

      <Grid>
        {projects
          .slice(page * perPage, (page + 1) * perPage) //
          .map(({ title, thumbnail, order }) => (
            <Image
              key={order}
              alt={title}
              src={`/projects/${thumbnail}`}
              width="100%"
              height={218}
              css={{ cursor: 'pointer' }}
              onClick={() => {
                setCarouselOpen(true);
                setCurrentProjectId(order - 1);
              }}
            />
          ))}

        {page > 0 && (
          <LeftButton onClick={() => setPage((prev) => prev - 1)}>
            <Down />
          </LeftButton>
        )}

        {page < projects.length / perPage - 1 && (
          <RightButton onClick={() => setPage((prev) => prev + 1)}>
            <Down />
          </RightButton>
        )}
      </Grid>

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

const perPage = 6;

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;

  letter-spacing: -0.3px;
  color: #fff;
  margin-bottom: 40px;

  sup {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 12px;

    vertical-align: super;
    margin-left: 10px;
  }
`;

const Grid = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 24px 29.5px;
`;

const LeftButton = styled.div`
  position: absolute;
  top: 50%;
  left: -70px;

  transform: translateY(-50%);
  cursor: pointer;
`;

const RightButton = styled(LeftButton)`
  left: 0;
  right: -70px;

  transform: translateY(-50%) rotate(180deg);
`;
