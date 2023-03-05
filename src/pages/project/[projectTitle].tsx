import { css } from '@emotion/react';

import SEO from '~/components/common/SEO';
import { Project, projects } from '~/components/project/constants';
import HeaderSection from '~/components/project-detail/HeaderSection';
import OtherProjectSection from '~/components/project-detail/OtherProjectSection';
import ProjectDetailSection from '~/components/project-detail/ProjectDetailSection';
import { layoutCss } from '~/styles/css';

interface Props {
  currentProject: Project;
}

export default function ProjectDetail({ currentProject }: Props) {
  const { title, description, image } = currentProject;

  return (
    <>
      <SEO title={`디프만 - ${title}`} description={description} image={image} />
      <main css={mainCss}>
        <HeaderSection {...currentProject} />
        <ProjectDetailSection currentProject={currentProject} />
        <OtherProjectSection />
      </main>
    </>
  );
}

const mainCss = css`
  ${layoutCss};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface Paths {
  params: {
    projectTitle: (typeof projects)[number]['title'];
  };
}

export async function getStaticPaths() {
  const paths: Paths[] = projects.map(project => ({ params: { projectTitle: project.title } }));

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }: Paths) {
  const { projectTitle } = params;

  const currentProject = projects.find(project => project.title === projectTitle);

  if (!currentProject) {
    return { notFound: true };
  }

  return {
    props: { currentProject },
  };
}
