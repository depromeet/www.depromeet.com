import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import { AnimatePresence, m } from 'framer-motion';

import { ProjectThumbnail } from '~/components/Project';
import { staggerHalf } from '~/constant/motion';
import { PROJECT_LIST } from '~/constant/project';
import { useCheckWindowSize } from '~/hooks/useCheckWindowSize';
import { sectionBg } from '~/styles/background';
import { colors } from '~/styles/colors';
import { mediaQuery } from '~/styles/media';
import { pxToRem } from '~/styles/style.utils';
import { theme } from '~/styles/theme';
import { sliceByPage } from '~/utils/pagination';

const FIRST_PAGE = 1;

export const MainProjectSection = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(FIRST_PAGE);
  const { isTargetSize: isTabletSize } = useCheckWindowSize('tablet');
  const { isTargetSize: isMobileSize } = useCheckWindowSize('mobile');

  const isMaxCurrentPage = currentPage >= 2;

  const onClickMore = () => {
    if (isMaxCurrentPage) {
      router.push('/project');
      return;
    }

    setCurrentPage(prev => prev + 1);
  };

  return (
    <section css={sectionCss(isMaxCurrentPage)}>
      <div css={wrapperCss}>
        <div css={text.wrapperCss}>
          <h1 css={text.titleCss}>Projects</h1>
          <p css={text.subCss}>
            디프만 멤버 &apos;디퍼(DEEPER)&apos; 들의
            {isMobileSize && <br />} 다양한 프로젝트를 확인해보세요
          </p>
        </div>
        <AnimatePresence mode="wait" initial={true}>
          <m.div
            css={projectContainerCss}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={staggerHalf}
          >
            {sliceByPage(PROJECT_LIST, currentPage, isTabletSize, isMobileSize, 0).map(project => (
              <ProjectThumbnail key={project.title} {...project} />
            ))}
          </m.div>
        </AnimatePresence>
        <button css={button.containerCss} onClick={onClickMore}>
          {isMaxCurrentPage ? '프로젝트 전체 보기' : '더보기'}
          <Image
            src={
              isMaxCurrentPage
                ? '/images/17th/icon/right-arrow-fill.svg'
                : '/images/17th/icon/down-arrow.svg'
            }
            alt={'화살표'}
            width={isMaxCurrentPage ? 24 : 16}
            height={isMaxCurrentPage ? 24 : 16}
          />
          {/* </div> */}
        </button>
        {/* 3d icon - 추후 프로젝트 컴포넌트가 확정나면 옮길 예정  */}
        <Image
          css={iconCss}
          src={'/images/17th/3d-icon/designer-icon.png'}
          alt={'iOS-icon'}
          width={!isMobileSize ? 300 : 168}
          height={!isMobileSize ? 300 : 168}
        />
      </div>
    </section>
  );
};

const sectionCss = (isMaxCurrentPage?: boolean) => css`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${sectionBg};

  ${!isMaxCurrentPage &&
  css`
    &::after {
      content: '';
      position: absolute;

      bottom: 140px;
      height: 220px;
      width: 100%;

      ${mediaQuery('mobile')} {
        bottom: 100px;
      }
    }
  `}
`;

const wrapperCss = css`
  position: relative;

  width: 100%;
  max-width: 1100px;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 100px 58px;

  gap: 68px;

  ${mediaQuery('tablet')} {
    max-width: 960px;
    padding: 80px 40px;
  }

  ${mediaQuery('mobile')} {
    padding: 40px 24px 100px;
  }
`;

const text = {
  wrapperCss: css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    gap: 12px;
    color: ${colors.primary.darknavy};
  `,

  titleCss: css`
    ${theme.typosV3.MartianMono.head3};
    font-size: ${pxToRem(42)};
    font-weight: 500;
    letter-spacing: -3px;
    line-height: 109%;
    text-align: start;

    z-index: 100;

    ${mediaQuery('mobile')} {
      ${theme.typosV3.MartianMono.head3};
      font-size: ${pxToRem(26)};
      letter-spacing: -1px;
    }
  `,
  subCss: css`
    ${theme.typosV3.pretendard.sub1Semibold};
    text-align: start;
    z-index: 100;

    ${mediaQuery('mobile')} {
      ${theme.typosV3.pretendard.body3Medium};
    }
  `,
};

const projectContainerCss = css`
  width: 100%;
  max-width: 994px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 29px;

  justify-content: center;

  justify-items: center;
  align-items: center;

  margin-left: auto;
  margin-right: auto;

  z-index: 50;

  ${mediaQuery('tablet')} {
    grid-template-columns: repeat(2, 1fr);
    max-width: 688px;
    padding: 0 20px;
    gap: 24px;
  }
  ${mediaQuery('mobile')} {
    grid-template-columns: repeat(1, 1fr);
    margin-top: -24px;
    padding: 0;
  }
`;

const button = {
  containerCss: css`
    padding: 14px 26px 13px 26px;
    margin-top: -32px;
    border-radius: 100px;
    background-color: ${colors.primary.gray};
    border: 1px ${colors.primary.blue} solid;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    z-index: 50;

    color: ${colors.primary.darknavy};
    ${theme.typosV3.pretendard.sub3Semibold};

    ${mediaQuery('mobile')} {
      padding: 8px 20px;
      ${theme.typosV3.pretendard.sub5Medium};
    }
  `,
};

const iconCss = css`
  position: absolute;
  bottom: 0;
  left: -80px;

  ${mediaQuery('tablet')} {
    bottom: -1%;
    left: -96px;
  }

  ${mediaQuery('mobile')} {
    bottom: 1.6%;
    left: -34px;
  }
`;
