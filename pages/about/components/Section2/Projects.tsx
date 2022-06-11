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
  expanded?: boolean;
}

const Projects: FC<ProjectsProps> = ({
  isMainPage = false,
  expanded = false,
}) => {
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
      <Container isMainPage={isMainPage} expanded={expanded}>
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
              <div className="project--title">{isMainPage || data.title}</div>
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
  .wrapper {
    display: ${({ isMainPage }) => (isMainPage ? 'flex' : 'grid')};
    grid-auto-flow: row;
    grid-template-rows: repeat(
      ${({ isMainPage, expanded }) => calcRows(isMainPage, expanded)},
      minmax(17rem, ${({ isMainPage }) => (isMainPage ? '17rem' : '22rem')})
    );
    grid-template-columns: repeat(
      ${({ isMainPage }) => calcColumns(isMainPage)},
      minmax(17rem, 17rem)
    );
    overflow-y: hidden;
    overflow-x: ${({ isMainPage }) => (isMainPage ? 'scroll' : 'hidden')};
    max-height: ${({ isMainPage, expanded }) =>
      calcMaxHeight(isMainPage, expanded)};
    gap: ${({ isMainPage }) => (isMainPage ? 0 : '3.2rem 2.4rem')};

    ${media.mobile} {
      display: grid;
      gap: 2.4rem 2.4rem;
      grid-template-rows: repeat(
        ${({ isMainPage, expanded }) => calcMobileRows(isMainPage, expanded)},
        ${({ isMainPage }) => calcMobileRowHeight(isMainPage)}
      );
      grid-template-columns: repeat(
        ${() => calcMobileColumns()},
        ${mobileIconSize}
      );
      max-height: ${({ isMainPage, expanded }) =>
        calcMobileMaxHeight(isMainPage, expanded)};
      overflow-x: ${({ isMainPage }) => (isMainPage ? 'scroll' : 'hidden')};
      grid-auto-flow: ${({ isMainPage }) => (isMainPage ? 'column' : 'row')};
      padding-left: ${({ isMainPage }) => (isMainPage ? '2.4rem' : 0)};
    }
  }
`;

const ProjectSummary = styled.div<ProjectsProps>`
  width: 17rem;
  height: ${({ isMainPage }) => (isMainPage ? '17rem' : '22rem')};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-right: 2.4rem;
  margin-bottom: 3.2rem;
  flex-shrink: 0;
  :last-child {
    margin-right: 0;
  }
  ${media.mobile} {
    width: ${mobileIconSize};
    height: ${({ isMainPage }) => calcMobileRowHeight(isMainPage)};
    margin-right: 2rem;
    margin-bottom: 2.4rem;
    :last-child {
      margin-right: 0;
      margin-bottom: 0;
    }
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

      ${media.mobile} {
        font-size: 1.4rem;
        line-height: 1.7rem;
        font-weight: 600;
      }
    }
    &--icon-wrapper {
      width: 17rem;
      height: 17rem;
      border-radius: 2.4rem;
      margin-bottom: ${({ isMainPage }) => (isMainPage ? 0 : '2.4rem')};
      position: relative;
      overflow: hidden;
      ${media.mobile} {
        width: ${mobileIconSize};
        height: ${mobileIconSize};
        border-radius: 1.2rem;
        margin-bottom: ${({ isMainPage }) => (isMainPage ? 0 : '1.2rem')};
      }
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

export default Projects;
