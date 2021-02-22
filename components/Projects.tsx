/* eslint-disable react/no-array-index-key */
import styled from 'styled-components';
import { FC, useState, useCallback } from 'react';
import projects from '../resources/data/projects';
import ProjectDialog from './ProjectDialog';

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
          projects.map((data, index) => {
            const ProjectIcon = data.icon();
            return (
              <ProjectSummary
                role="button"
                tabIndex={0}
                key={`projects-item-${index}`}
                onClick={() => showProjectDialog(index)}
              >
                <div className="project--icon-wrapper">
                  <ProjectIcon className="project--icon" />
                  <Overlay />
                </div>
                <div className="project--title">{data.title}</div>
              </ProjectSummary>
            );
          })
        }
        <ProjectDialog visible={visible} setVisible={setVisible} />
      </Container>
    </>
  );
};

const maxColumns = 6;
const Container = styled.div<ProjectsProps>`
  display: grid;
  grid-auto-flow: row;
  grid-template-rows: repeat(${({ isMainPage }) => (isMainPage === true ? 1 : 'auto-fill')}, minmax(17rem, 21rem));
  grid-template-columns: repeat(${({ isMainPage }) => (isMainPage === true ? 'auto-fill' : maxColumns)}, minmax(17rem, 17rem));
  gap: 3.2rem 2.4rem;
  overflow: hidden;
  max-height: ${({ isMainPage, expanded }) => (isMainPage === true ? '17rem' : (expanded === true ? '100%' : '45.2rem'))};
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
