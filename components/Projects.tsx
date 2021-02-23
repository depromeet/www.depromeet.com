/* eslint-disable react/no-array-index-key */
import styled from 'styled-components';
import {
  FC, useState, useCallback, useMemo,
} from 'react';
import projectsData from '../resources/data/projects';
import ProjectDialog from './ProjectDialog';
import { calcRows, calcColumns, calcMaxHeight } from '../lib/projects_grid';

interface ProjectsProps {
  isMainPage?: boolean;
  expanded?: boolean;
}

const Projects: FC<ProjectsProps> = ({ isMainPage = false, expanded = false }) => {
  const [visible, setVisible] = useState({ visible: false, index: 0 });
  const showProjectDialog = useCallback((projectId: number) => {
    setVisible({ visible: true, index: projectId });
  }, [setVisible]);

  return (
    <>
      <Container isMainPage={isMainPage} expanded={expanded}>
        {
          projectsData.map((data, index) => (
            <ProjectSummary
              role="button"
              tabIndex={0}
              key={`projects-item-${index}`}
              onClick={() => showProjectDialog(index)}
            >
              <div className="project--icon-wrapper">
                <Icon data={data} />
                <Overlay />
              </div>
              <div className="project--title">{data.title}</div>
            </ProjectSummary>
          ))
        }
        <ProjectDialog visible={visible} setVisible={setVisible} />
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
  grid-template-rows: repeat(${({ isMainPage, expanded }) => calcRows(isMainPage, expanded)}, minmax(17rem, 21rem));
  grid-template-columns: repeat(${({ isMainPage }) => calcColumns(isMainPage)}, minmax(17rem, 17rem));
  gap: 3.2rem 2.4rem;
  overflow: hidden;
  max-height: ${({ isMainPage, expanded }) => calcMaxHeight(isMainPage, expanded)};
`;

const ProjectSummary = styled.div<ProjectsProps>`
  width: 17rem;
  height: ${({ isMainPage }) => (isMainPage === true ? '17rem' : '21rem')};
  display: grid;
  overflow-y: hidden;
  .project {
    &--title {
      font-family: Apple SD Gothic Neo;
      font-style: normal;
      font-weight: 800;
      font-size: 1.6rem;
      line-height: 1.9rem;
      text-align: center;
      letter-spacing: -0.03em;
      color: #FFFFFF;
      display: ${({ isMainPage }) => (isMainPage === true ? 'none' : 'block')}
    }
    &--icon-wrapper {
      width: 17rem;
      height: 17rem;
      border-radius: 2.4rem;
      margin-bottom: 2.4rem;
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
  left: 0;
  width: 100%;
  height: 100%;
  background: black ;
  opacity: 0;
  ${ProjectSummary}:hover & {
    opacity: 0.2;
  }
`;

export default Projects;
