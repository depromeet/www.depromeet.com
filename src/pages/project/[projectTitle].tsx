import SEO from '~/components/common/SEO';
import AnotherProjectSection from '~/components/project/AnotherProjectSection';
import { Project, projects } from '~/components/project/constants';
import ProjectDetailSection from '~/components/project/ProjectDetailSection';

interface Props {
  currentProject: Project;
}

export default function ProjectDetail({ currentProject }: Props) {
  return (
    <>
      <SEO title={`디프만 - ${currentProject.title}`} />
      <main>
        <ProjectDetailSection project={currentProject} />
        <AnotherProjectSection />
      </main>
    </>
  );
}

interface Paths {
  params: {
    projectTitle: typeof projects[number]['title'];
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
