import { useEffect, useState } from 'react';
import Image from 'next/image';
import { css } from '@emotion/react';
import { AnimatePresence, m, Variants } from 'framer-motion';

import { ABOUT_IMAGE_BASE } from '~/constants/images';
import { defaultEasing } from '~/constants/motions';
import useMediaQuery from '~/hooks/use-media-query';
import { colors, mediaQuery } from '~/styles/constants';
import { section36HeadingCss, sectionSmallCss } from '~/styles/css';

import { ClickableButton } from '../common/Clickable';
import { SharpInCircleIcon } from '../common/icons/SharpInCircleIcon';

export default function JobGroupSection() {
  const isMobile = useMediaQuery('xs');
  const { currentJob, onJobClick, currentJobInform } = useJobInform();

  return (
    <section css={sectionCss}>
      <small css={smallCss}>JOB GROUP</small>
      <h2 css={headingCss}>
        디프만을 구성하는
        <br />
        디자이너와 개발자
      </h2>

      <div css={buttonWrapperCss}>
        {JOBS.map(job => (
          <ClickableButton
            key={job}
            onClick={onJobClick(job)}
            css={[buttonCss, currentJob === job && currentJobButtonCss]}
          >
            <AnimatePresence mode="wait" initial={false}>
              {currentJob === job && (
                <m.span
                  css={currentJobIconCss}
                  variants={currentJobIconVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <SharpInCircleIcon />
                </m.span>
              )}
            </AnimatePresence>
            {job}
          </ClickableButton>
        ))}
      </div>

      <AnimatePresence mode="popLayout">
        <m.article
          key={currentJob}
          css={articleCss}
          variants={articleVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <div css={imageWrapperCss}>
            <Image src={currentJobInform.src} alt={currentJobInform.name} fill quality={100} />
          </div>
          <div css={descriptionWrapperCss}>
            <SharpInCircleIcon
              width={isMobile ? 24 : 32}
              height={isMobile ? 24 : 32}
              color={colors.black}
              css={descriptionSharpIconCss}
            />
            <h3 css={jobHeadingCss}>
              {currentJobInform.name}
              <i>OF</i> DEPROMEET
            </h3>
            <p css={jobParagraphCss}>{currentJobInform.description}</p>
          </div>
        </m.article>
      </AnimatePresence>
    </section>
  );
}

const sectionCss = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 180px;

  ${mediaQuery('xs')} {
    margin-bottom: 100px;
  }
`;

const smallCss = css`
  ${sectionSmallCss};

  margin-bottom: 10px;
`;

const headingCss = css`
  ${section36HeadingCss};

  margin-bottom: 60px;

  ${mediaQuery('xs')} {
    margin-bottom: 40px;
  }
`;

const buttonWrapperCss = css`
  display: flex;

  margin-bottom: 56px;

  ${mediaQuery('xs')} {
    flex-wrap: wrap;
    justify-content: center;

    margin-bottom: 20px;
  }
`;

const buttonCss = css`
  position: relative;
  padding: 15px 25px;
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 1.375rem;

  ${mediaQuery('xs')} {
    font-size: 16px;
    line-height: 19px;
  }
`;

const currentJobButtonCss = css`
  text-decoration: underline;
`;

const currentJobIconCss = css`
  position: absolute;
  left: 3px;
  top: 17px;
`;

const currentJobIconVariants: Variants = {
  initial: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 0.3,
      ease: defaultEasing,
    },
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: defaultEasing,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.2,
    transition: {
      duration: 0.3,
      ease: defaultEasing,
    },
  },
};

const articleCss = css`
  width: 100%;
  height: 450px;
  border-top: solid 1px ${colors.black};
  border-bottom: solid 1px ${colors.black};

  display: flex;

  ${mediaQuery('xs')} {
    flex-direction: column;
  }
`;

const articleVariants: Variants = {
  initial: {
    x: '100%',
    transition: {
      duration: 0.5,
      ease: defaultEasing,
    },
  },
  animate: {
    x: 0,
    transition: {
      duration: 0.5,
      ease: defaultEasing,
    },
  },
  exit: {
    x: '-100%',
    transition: {
      duration: 0.5,
      ease: defaultEasing,
    },
  },
};

const imageWrapperCss = css`
  position: relative;
  width: 50%;
  height: 100%;
  flex-shrink: 0;

  & > img {
    object-fit: cover;
  }

  ${mediaQuery('xs')} {
    width: 100%;
    height: 200px;
  }
`;

const descriptionWrapperCss = css`
  max-width: 400px;
  margin: 50px 100px;
  display: flex;
  flex-direction: column;

  ${mediaQuery('xs')} {
    height: 100%;
    margin: 20px auto;
    padding: 0 16px;
  }
`;

const descriptionSharpIconCss = css`
  margin-bottom: 8px;
`;

const jobHeadingCss = css`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.75rem;

  & > i {
    font-family: 'Helvetica';
    font-style: italic;
    font-weight: 400;
    margin: 0 10px;
  }
`;

const jobParagraphCss = css`
  flex-grow: 1;
  display: flex;
  align-items: flex-end;

  font-weight: 600;
  font-size: 1.25rem;
  line-height: 140%;

  ${mediaQuery('xs')} {
    font-weight: 500;
    font-size: 16px;
    line-height: 22.4px;
  }
`;

const JOBS = ['UIUX DESIGN', 'iOS', 'ANDROID', 'WEB', 'SERVER'] as const;
type Job = (typeof JOBS)[number];

interface JobInform {
  name: string;
  description: string;
  src: string;
}

type JobInforms = {
  [key in Job]: JobInform;
};

const JOB_INFORMS: JobInforms = {
  'UIUX DESIGN': {
    name: 'UIUX DESIGNER',
    description:
      '디프만의 UIUX 디자이너는 UX/UI/GUI 등 서비스 런칭에 필요한 다양한 디자인 업무를 담당하고, 개발자와 커뮤니케이션하여 멋진 서비스를 만들어요!',
    src: `${ABOUT_IMAGE_BASE}/designer.webp`,
  },
  iOS: {
    name: 'iOS DEVELOPER',
    description:
      '디프만의 iOS 개발자는 완성도 있는 UI와 플랫폼에 최적화된 기술로 백엔드 개발자에 의해 구축된 서버와 통신하며 실제 서비스를 만들어 볼 수 있는 특별한 기회를 경험할 수 있어요.',
    src: `${ABOUT_IMAGE_BASE}/ios.webp`,
  },
  ANDROID: {
    name: 'ANDROID DEVELOPER',
    description:
      '디프만의 ANDROID 개발자는 완성도 있는 UI와 플랫폼에 최적화된 기술로 백엔드 개발자에 의해 구축된 서버와 통신하며 실제 서비스를 만들어 볼 수 있는 특별한 기회를 경험할 수 있어요.',
    src: `${ABOUT_IMAGE_BASE}/android.webp`,
  },
  WEB: {
    name: 'WEB DEVELOPER',
    description:
      '디프만의 WEB 개발자는 서비스 아이디어에 따라 웹사이트 뿐만 아니라 웹앱, PWA에서 웹뷰 앱까지! 다양한 플랫폼에서 동작하는 웹 서비스를 구현해볼 수 있어요.',
    src: `${ABOUT_IMAGE_BASE}/web.webp`,
  },
  SERVER: {
    name: 'SERVER DEVELOPER',
    description:
      '디프만의 SERVER 개발자는 서비스의 핵심 비즈니스 로직 구현을 담당하며, 서비스 내 데이터 흐름을 설계합니다. INFRASTRUCTURE 구축부터 배포, 운영까지 경험해보세요.',
    src: `${ABOUT_IMAGE_BASE}/server.webp`,
  },
};

function useJobInform() {
  const [currentJob, setCurrentJob] = useState<Job>('UIUX DESIGN');
  const [currentJobInform, setCurrentJobInform] = useState<JobInform>(JOB_INFORMS[currentJob]);

  useEffect(() => {
    setCurrentJobInform(JOB_INFORMS[currentJob]);
  }, [currentJob]);

  const onJobClick = (job: Job) => () => {
    setCurrentJob(job);
  };

  return { currentJob, onJobClick, currentJobInform };
}
