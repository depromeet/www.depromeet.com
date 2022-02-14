import { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import ProjectDialog from '../../components/ProjectDialog';
import { PageMoveButton } from '../../public';
import { media } from '../../styles/theme';

import { projects } from './projects';

export default function ProjectList() {
  const [page, setPage] = useState(0);

  const PROJECTS_PER_PAGE = 6;

  const [dialogVisible, setDialogVisible] = useState({
    visible: false,
    index: 0,
  });

  const showProjectDialog = (projectId: number) => {
    setDialogVisible({ visible: true, index: projectId });
  };

  return (
    <ProjectSection>
      <Title>
        모든 작업물<sup>{projects.length}</sup>
      </Title>

      <ProjectImageWrapper>
        {page > 0 && (
          <LeftButton onClick={() => setPage((prev) => prev - 1)}>
            <PageMoveButton />
          </LeftButton>
        )}
        {page < projects.length / PROJECTS_PER_PAGE - 1 && (
          <RightButton onClick={() => setPage((prev) => prev + 1)}>
            <PageMoveButton />
          </RightButton>
        )}
        {projects
          .slice(PROJECTS_PER_PAGE * page, PROJECTS_PER_PAGE * (page + 1))
          .map(({ order, thumbnail }) => (
            <Image
              key={thumbnail}
              src={`/projects/${thumbnail}`}
              width="100%"
              height="218px"
              loading="lazy"
              onClick={() => showProjectDialog(order - 1)}
            />
          ))}
      </ProjectImageWrapper>
      <ProjectDialog visible={dialogVisible} setVisible={setDialogVisible} />
    </ProjectSection>
  );
}

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

const ProjectImageWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 24px 29.5px;
`;

const ProjectSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 11.8rem;
  .button {
    border-radius: 2.7rem;
    font-size: 1.4rem;
    line-height: 1.7rem;
    padding: 1.2rem 3rem;
    width: fit-content;
    position: relative;
    display: ${projects.length > 12 ? 'flex' : 'none'};
    align-self: center;
    :hover {
      background-color: rgba(56, 227, 168, 0.3);
    }
    &__green {
      border: ${({ theme }) => `0.1rem solid ${theme.color.green}`};
      color: ${({ theme }) => theme.color.green};
    }
    &--img {
      width: 1.4rem;
      height: 1.4rem;
      margin-left: 0.8rem;
      margin-top: 0.1rem;
      position: relative;
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: center;

      &__usd {
        transform: rotate(180deg);
      }
    }
  }
`;

const Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 2.2rem;
  line-height: 2.6rem;
  letter-spacing: -0.03em;
  color: #ffffff;
  margin-bottom: 4rem;
  ${media.mobile} {
    font-size: 1.6rem;
  }
  sup {
    font-style: normal;
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 1.2rem;
    margin-left: 1rem;
    vertical-align: super;
    ${media.mobile} {
      font-size: 1rem;
    }
  }
  .title--desc {
    font-style: normal;
    font-weight: normal;
    font-size: 1.4rem;
    line-height: 2rem;
    text-transform: uppercase;
    color: #ffffff;
    margin-left: 2.4rem;
    vertical-align: center;
    ${media.mobile} {
      display: none;
    }
  }
`;
