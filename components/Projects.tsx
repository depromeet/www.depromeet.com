/* eslint-disable react/no-array-index-key */
import styled from 'styled-components';
import {
  FC, useState, useCallback, useMemo,
} from 'react';
import ProjectDialog from './ProjectDialog';
import {
  calcRows, calcColumns, calcMaxHeight,
  calcMobileRows, calcMobileColumns, mobileIconSize, calcMobileRowHeight,
} from '../lib/projects_grid';
import projectsData from '../resources/data/projects';
import { media } from '../styles/theme';

interface ProjectsProps {
  isMainPage?: boolean;
  expanded?: boolean;
}

const Projects: FC<ProjectsProps> = ({ isMainPage = false, expanded = false }) => {
  const [dialogVisible, setDialogVisible] = useState({ visible: false, index: 0 });
  const showProjectDialog = useCallback((projectId: number) => {
    setDialogVisible({ visible: true, index: projectId });
  }, [setDialogVisible]);

  console.log(`visible: ${dialogVisible.visible}`);
  return (
    <>
      <Container
        isMainPage={isMainPage}
        expanded={expanded}
        className="no-scroll-bar"
      >
        {
          projectsData.map((data, index) => (
            <ProjectSummary
              role="button"
              tabIndex={0}
              key={`projects-item-${index}`}
              onClick={() => showProjectDialog(index)}
              isMainPage={isMainPage}
            >
              <div className="project--icon-wrapper">
                <Icon data={data} />
                <Overlay
                  role="button"
                />
              </div>
              <div
                className="project--title"
              >
                {isMainPage || data.title}
              </div>
            </ProjectSummary>
          ))
        }
        <ProjectDialog visible={dialogVisible} setVisible={setDialogVisible} />
      </Container>
    </>
  );
};

const Icon = ({ data }) => {
  if (typeof data.icon === 'string') {
    return (
      <img
        className="project--icon-wrapper project--icon"
        src={data.icon}
        loading="lazy"
        alt={`${data.title}-icon`}
        style={{
          objectFit: 'scale-down',
        }}
      />
    );
  }
  return <MemoizedIcon data={data} />;
};
const MemoizedIcon = ({ data }) => {
  const ProjectIcon = useMemo(() => data.icon(), [data]);
  return <ProjectIcon className="project--icon" />;
};

const Container = styled.div<ProjectsProps>`
  display: grid;
  grid-auto-flow: row;
  grid-template-rows: repeat(${({ isMainPage, expanded }) => calcRows(isMainPage, expanded)}, minmax(17rem, ${({ isMainPage }) => (isMainPage ? '17rem' : '22rem')}));
  grid-template-columns: repeat(${({ isMainPage }) => calcColumns(isMainPage)}, minmax(17rem, 17rem));
  gap: 3.2rem 2.4rem;
  overflow-x: hidden;
  overflow-y: ${({ isMainPage }) => (isMainPage ? 'scroll' : 'hidden')};
  max-height: ${({ isMainPage, expanded }) => calcMaxHeight(isMainPage, expanded)};
  width: 100%;

  ${media.mobile} {
    gap: 2.4rem 2rem;
    grid-template-rows: repeat(${({ isMainPage, expanded }) => calcMobileRows(isMainPage, expanded)}, ${({ isMainPage }) => calcMobileRowHeight(isMainPage)});
    grid-template-columns: repeat(${() => calcMobileColumns()}, ${mobileIconSize});
  }
`;

const ProjectSummary = styled.div<ProjectsProps>`
  width: 17rem;
  height: ${({ isMainPage }) => (isMainPage ? '17rem' : '22rem')};
  display: grid;
  overflow: hidden;
  ${media.mobile} {
    width: ${mobileIconSize};
    height: ${({ isMainPage }) => calcMobileRowHeight(isMainPage)}
  }
  .project {
    &--title {
      font-style: normal;
      font-weight: bold;
      font-size: 1.6rem;
      line-height: 2.3rem;
      text-align: center;
      letter-spacing: -0.03em;
      color: #FFFFFF;
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
  background: black ;
  opacity: 0;
  ${ProjectSummary}:hover & {
    opacity: 0.2;
  }
`;

export default Projects;
