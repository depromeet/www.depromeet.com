import Image from 'next/image';
import { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { Device } from 'common/contexts/device';
import { useDeviceContext } from 'common/hooks';

import { Down } from '../assets';
import ProjectProvider from '../context/project';
import { projects } from '../utils/projects';

import { ProjectDialog } from '.';

export default function ProjectList() {
  const device = useDeviceContext();

  const [page, setPage] = useState(0);
  const [currentOpenDialog, setCurrentOpenDialog] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <Container>
      <Title device={device}>
        모든 작업물<sup>{projects.length}</sup>
      </Title>

      <Grid>
        {projects
          .slice(page * perPage, (page + 1) * perPage) //
          .map(({ thumbnail }, index) => (
            <Image
              key={index}
              src={`/projects/${thumbnail}`}
              width="100%"
              height={218}
              onClick={() => {
                setDialogOpen(true);
                setCurrentOpenDialog(index);
              }}
              css={{ cursor: 'pointer' }}
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

      <ProjectProvider id={currentOpenDialog} length={projects.length}>
        {dialogOpen && (
          <ProjectDialog
            onClose={() => setDialogOpen(false)}
            onPrev={() => setCurrentOpenDialog((prevState) => prevState - 1)}
            onNext={() => setCurrentOpenDialog((prevState) => prevState + 1)}
          />
        )}
      </ProjectProvider>
    </Container>
  );
}

const perPage = 6;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 118px;
`;

const Title = styled.h3<{ device: Device }>`
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;

  letter-spacing: -0.3px;
  color: #fff;
  margin-bottom: 40px;

  ${({ device }) =>
    device === 'mobile' &&
    css`
      font-size: 16px;
    `}

  sup {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 12px;

    vertical-align: super;
    margin-left: 10px;

    ${({ device }) =>
      device === 'mobile' &&
      css`
        font-size: 10px;
      `}
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
