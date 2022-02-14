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
  const [page, setPage] = useState(0);
  const PROJECTS_PER_PAGE = 6;

  return (
    <>
      <Container isMainPage={isMainPage}>
        {page > 0 && (
          <LeftArrow
            style={{ cursor: 'pointer' }}
            src={`/ic_left_default.svg`}
            alt="go to next project"
            onClick={() => setPage((prev) => prev - 1)}
          />
        )}
        {page < projects.length / PROJECTS_PER_PAGE - 1 && (
          <RightArrow
            style={{ cursor: 'pointer' }}
            src={`/ic_right_default.svg`}
            alt="go to next project"
            onClick={() => setPage((prev) => prev + 1)}
          />
        )}
        <div className="wrapper no-scroll-bar">
          {projects
            .slice(PROJECTS_PER_PAGE * page, PROJECTS_PER_PAGE * (page + 1))
            .map(({ order, title, image }) => (
              <ProjectSummary
                role="button"
                tabIndex={0}
                key={`projects-item-${order}`}
                onClick={() => showProjectDialog(order - 1)}
                isMainPage={isMainPage}
              >
                <div className="project--icon-wrapper">
                  <Image
                    className="project--icon-wrapper project--icon"
                    src={`/projects/${image}`}
                    loading="lazy"
                    alt={`${title}-icon`}
                    layout="fill"
                  />
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

const Icon = ({ 서비스명, imageFileName }) => {
  return (
    <Image
      className="project--icon-wrapper project--icon"
      src={`/projects/icons/${imageFileName}`}
      loading="lazy"
      alt={`${서비스명}-icon`}
      layout="fill"
    />
  );
};
const MemoizedIcon = ({ data }) => {
  const ProjectIcon = useMemo(() => data.icon(), [data]);
  return <ProjectIcon className="project--icon" />;
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

const LeftArrow = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: -70px;
  cursor: pointer;
`;

const RightArrow = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: -70px;
  cursor: pointer;
`;

export default Projects;
