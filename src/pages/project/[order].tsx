import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';

import SEO from '~/components/common/SEO';
import AnotherProjectSection from '~/components/project/AnotherProjectSection';
import { Project, projects } from '~/components/project/constants';
import ProjectDetailSection from '~/components/project/ProjectDetailSection';

export default function ProjectDetail() {
  const {
    query: { order },
    isReady,
    push,
  } = useRouter();
  const [project, setProject] = useState<Project>();

  useEffect(() => {
    if (!isReady) {
      return;
    }

    const selectProject = projects.find(project => project.order === Number(order));

    if (!selectProject) {
      push('/project');
      return;
    }

    setProject(selectProject);
  }, [isReady, order, push]);

  if (!project) {
    // Add Loading
    return <div css={loadingCss}></div>;
  }

  return (
    <>
      <SEO title={`디프만 - ${project.title}`} />
      <main>
        <ProjectDetailSection project={project} />
        <AnotherProjectSection />
      </main>
    </>
  );
}

const loadingCss = css`
  height: 2000px;
`;
