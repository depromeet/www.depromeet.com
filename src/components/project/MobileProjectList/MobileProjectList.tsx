import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { css } from '@emotion/react';

import { Project } from '../constants';
import ProjectContainer from '../ProjectContainer';
import { Order } from '../ProjectListSection/ProjectListSection';

interface Props {
  projects: Project[];
  sortBy: Order;
  sortByLatest: () => void;
  sortByOldest: () => void;
}

export default function MobileProjectList({ projects }: Props) {
  const [showedProjectCount, setShowedProjectCount] = useState(4);

  const showMoreProjects = () => {
    setShowedProjectCount(prev => Math.min(prev + 4, projects.length));
  };

  const showedProjects = useMemo(
    () => projects.slice(0, showedProjectCount),
    [projects, showedProjectCount]
  );

  useEffect(() => {
    setShowedProjectCount(4);
  }, [projects]);

  return (
    <>
      <ProjectContainer projects={showedProjects} />

      {showedProjectCount < projects.length && (
        <button onClick={showMoreProjects} css={buttonCss}>
          <span>더보기</span>
          <Image src={'/project/dropdown.webp'} alt="" width={16} height={16} />
        </button>
      )}
    </>
  );
}

const buttonCss = css`
  display: flex;
  align-items: center;
  padding: 16px;
  margin: auto;
  margin-top: 30px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  span {
    margin-right: 6px;
  }
`;
