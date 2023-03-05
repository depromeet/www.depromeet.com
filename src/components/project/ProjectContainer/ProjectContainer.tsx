import { css } from '@emotion/react';
import { AnimatePresence, m } from 'framer-motion';

import { staggerHalf } from '~/constants/motions';
import { mediaQuery } from '~/styles/constants';

import { Project } from '../constants';
import ProjectItem from '../ProjectItem/ProjectItem';

interface Props {
  projects: Project[];
}
export default function ProjectContainer({ projects }: Props) {
  // NOTE: 모바일의 더보기를 눌렀을 때 같은 리스트인지 파악하기 위해 초기 3개만 사용
  const key = projects.slice(0, 3).reduce((a, p) => a + p.title, '');

  return (
    <AnimatePresence mode="wait" initial={false}>
      {projects.length && (
        <m.div
          key={key}
          css={wrapperCss}
          variants={staggerHalf}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {projects.map(project => {
            return <ProjectItem project={project} key={project.order} />;
          })}
        </m.div>
      )}
    </AnimatePresence>
  );
}

const wrapperCss = css`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(3, 300px);
  gap: 24px;

  ${mediaQuery('sm')} {
    grid-template-columns: 1fr 1fr;
  }

  ${mediaQuery('xs')} {
    display: flex;
    flex-direction: column;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    gap: 20px;
  }
`;
