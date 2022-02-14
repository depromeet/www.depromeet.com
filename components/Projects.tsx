import styled from 'styled-components';
import Image from 'next/image';
import { FC, useState, useCallback, useMemo } from 'react';
import ProjectDialog from './ProjectDialog';
import {
  calcRows,
  calcColumns,
  calcMaxHeight,
  calcMobileRows,
  calcMobileColumns,
  mobileIconSize,
  calcMobileRowHeight,
  calcMobileMaxHeight,
} from '../lib/projects_grid';
import { media } from '../styles/theme';
import { projects } from '../page-components/Project/projects';

interface ProjectsProps {
  isMainPage?: boolean;
}

const Projects: FC<ProjectsProps> = ({ isMainPage = false }) => {
  const [dialogVisible, setDialogVisible] = useState({
    visible: false,
    index: 0,
  });

  const showProjectDialog = useCallback(
    (projectId: number) => {
      setDialogVisible({ visible: true, index: projectId });
    },
    [setDialogVisible]
  );

  return (
    <>
      <Container isMainPage={isMainPage}>
        <LeftArrow>{/* <img src="/left-arrow.svg" /> */}</LeftArrow>
        <div className="wrapper no-scroll-bar">
          {projects.map((data) => (
            <ProjectSummary
              role="button"
              tabIndex={0}
              key={`projects-item-${data.order}`}
              onClick={() => showProjectDialog(data.order - 1)}
              isMainPage={isMainPage}
            >
              <div className="project--icon-wrapper">
                <Icon path={data.icon} />
                <Overlay role="button" />
              </div>
            </ProjectSummary>
          ))}
        </div>
        <ProjectDialog visible={dialogVisible} setVisible={setDialogVisible} />
      </Container>
    </>
  );
};

const Icon = ({ path }) => {
  return (
    <Image
      className="project--icon-wrapper project--icon"
      src={`/projects/${path}`}
      alt="service-icon"
      width="170px"
      height="170px"
    />
  );
};

const Container = styled.div<ProjectsProps>`
  width: 100%;
  position: relative;
  .wrapper {
    display: grid;
    grid-auto-flow: row;
    grid-template-rows: repeat(2, 218px);
    grid-template-columns: repeat(3, 364px);
    gap: 24px;
  }
`;

const ProjectSummary = styled.div<ProjectsProps>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-right: 2.4rem;
  margin-bottom: 3.2rem;
  flex-shrink: 0;
  :last-child {
    margin-right: 0;
  }
  .project {
    &--title {
      font-style: normal;
      font-weight: bold;
      font-size: 1.6rem;
      line-height: 2.3rem;
      text-align: center;
      letter-spacing: -0.03em;
      color: #ffffff;
      display: ${({ isMainPage }) => (isMainPage ? 'none' : 'block')};
    }
    &--icon-wrapper {
      width: 100%;
      height: 100%;
      position: relative;
      overflow: hidden;
    }
    &--icon {
      width: 100%;
      height: 100%;
    }
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: black;
  opacity: 0;
  ${ProjectSummary}:hover & {
    opacity: 0.2;
  }
`;

const LeftArrow = styled.button`
  position: absolute;
  top: 180px;
  left: -60px;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background-color: #fff;
  /* background: url('/left-arrow.svg') center no-repeat; */
  opacity: 0.2;
  border: none;
`;

export default Projects;
