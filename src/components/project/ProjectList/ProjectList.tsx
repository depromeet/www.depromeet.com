import { useEffect, useMemo, useState } from 'react';

import { Project } from '../constants';
import Pagination from '../Pagination/Pagination';
import ProjectContainer from '../ProjectContainer';

const sliceByPage = (projects: Project[], page: number) => {
  return projects.slice(9 * (page - 1), 9 * page);
};

interface Props {
  projects: Project[];
}

export default function ProjectList({ projects }: Props) {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [projects]);

  const displayedProjects = useMemo(
    () => sliceByPage(projects, currentPage),
    [projects, currentPage]
  );
  const onClickPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <ProjectContainer projects={displayedProjects} />
      <Pagination
        numberOfPages={Math.ceil(projects.length / 9)}
        currentPage={currentPage}
        onClick={onClickPage}
      />
    </div>
  );
}
