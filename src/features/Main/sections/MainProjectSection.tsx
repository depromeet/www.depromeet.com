import { useState } from 'react';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import { AnimatePresence, m } from 'framer-motion';

import { Icon } from '~/components/Icon/Icon';
import { Thumbnail } from '~/components/Thumbnail';
import { Link } from '~/components/Thumbnail/Thumbnail';
import { staggerHalf } from '~/constant/motion';
import { PROJECT_LIST } from '~/constant/project';
import { useCheckWindowSize } from '~/hooks/useCheckWindowSize';
import { mediaQuery } from '~/styles/media';
import { theme } from '~/styles/theme';
import { sliceByPage } from '~/utils/pagination';

const FIRST_PAGE = 1;

export const MainProjectSection = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(FIRST_PAGE);
  const { isTargetSize: isTabletSize } = useCheckWindowSize('tablet');
  const { isTargetSize: isMobileSize } = useCheckWindowSize('mobile');

  const isMaxCurrentPage = currentPage >= 3;

  const onClickMore = () => {
    if (isMaxCurrentPage) {
      router.push('/project');
      return;
    }

    setCurrentPage(prev => prev + 1);
  };

  return (
    <section css={sectionCss(isMaxCurrentPage)}>
      <div css={text.wrapperCss}>
        <h1 css={text.headlineCss}>프로젝트</h1>
        <p css={text.descriptionCss}>
          디프만 멤버 &apos;디퍼(DEEPER)&apos; 들의
          {isMobileSize && <br />} 다양한 프로젝트를 확인해보세요
        </p>
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <m.div
          css={projectContainerCss}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={staggerHalf}
        >
          {sliceByPage(PROJECT_LIST, currentPage, isTabletSize, isMobileSize, 0).map(project => (
            <Thumbnail
              key={project.title}
              img={`/images/project/${project.subTitle}/${project.title}.png`}
              title={project.title}
              subTitle={project.subTitle}
              description={project.description}
              links={project.links as Link[]}
            />
          ))}
        </m.div>
      </AnimatePresence>

      <button css={button.containerCss(isMaxCurrentPage)} onClick={onClickMore}>
        <div css={button.wrapperCss}>
          {isMaxCurrentPage ? '프로젝트 보기' : '더보기'}
          <span css={button.iconCss}>
            <Icon icon="ic_arrow_black" size={24} direction={isMaxCurrentPage ? 'right' : 'down'} />
          </span>
        </div>
      </button>
    </section>
  );
};

const sectionCss = (isMaxCurrentPage?: boolean) => css`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  padding: 140px 0;
  gap: 68px;

  ${mediaQuery('tablet')} {
    padding: 140px 64px;
  }

  ${mediaQuery('mobile')} {
    padding: 80px 24px 100px;
    gap: 62px;
  }

  ${!isMaxCurrentPage &&
  css`
    &::after {
      content: '';
      position: absolute;

      bottom: 140px;
      height: 220px;
      width: 100%;
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.4) 14%,
        rgba(0, 0, 0, 0.71) 30.75%,
        rgba(0, 0, 0, 0.88) 41%,
        #000 50%,
        #000 100%
      );

      ${mediaQuery('mobile')} {
        bottom: 100px;
      }
    }
  `}
`;

const text = {
  wrapperCss: css`
    display: flex;
    flex-direction: column;
    gap: 24px;
    color: white;
    text-align: center;
  `,

  headlineCss: css`
    ${theme.typosV2.pretendard.bold44};
    line-height: 150%;

    ${mediaQuery('mobile')} {
      ${theme.typosV2.pretendard.bold28};
      line-height: 150%;
    }
  `,

  descriptionCss: css`
    ${theme.typosV2.pretendard.semibold20};
    line-height: 150%;

    ${mediaQuery('mobile')} {
      ${theme.typosV2.pretendard.semibold18};
      line-height: 150%;
    }
  `,
};

const projectContainerCss = css`
  width: 100%;
  max-width: 960px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;

  ${mediaQuery('tablet')} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${mediaQuery('mobile')} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const button = {
  containerCss: (isMaxCurrentPage?: boolean) => css`
    ${!isMaxCurrentPage &&
    css`
      position: absolute;
      bottom: 156px;
    `}

    padding: 12px 36px;
    border-radius: 100px;
    background-color: white;
    z-index: 10;
  `,

  wrapperCss: css`
    display: flex;
    gap: 8px;
    align-items: center;
    color: black;
    ${theme.typosV2.pretendard.semibold20};
    line-height: 150%;

    ${mediaQuery('mobile')} {
      ${theme.typosV2.pretendard.semibold16};
      line-height: 150%;
    }
  `,

  iconCss: css`
    width: 24px;
    height: 24px;
    background-color: white;
    border-radius: 400px;
  `,
};
