import Image from 'next/image';
import { css } from '@emotion/react';
import { m, Variants } from 'framer-motion';

import { ABOUT_IMAGE_BASE } from '~/constants/images';
import { defaultEasing } from '~/constants/motions';
import useMediaQuery from '~/hooks/use-media-query';
import useToggle from '~/hooks/use-toggle';
import { colors, mediaQuery } from '~/styles/constants';
import { layoutCss, section36HeadingCss, sectionSmallCss } from '~/styles/css';

export default function MoreExperienceSection() {
  return (
    <section css={sectionCss}>
      <small css={smallCss}>MORE EXPERIENCE</small>
      <h2 css={headingCss}>
        일할 땐 일하고
        <br />
        놀땐 노는 디프만
      </h2>

      <div css={cardWrapperCss}>
        {EXPERIENCES.map(experience => (
          <Card key={experience.name} {...experience} />
        ))}
      </div>
    </section>
  );
}

const sectionCss = css`
  ${layoutCss};

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
  text-align: center;

  margin-bottom: 80px;

  ${mediaQuery('xs')} {
    margin-bottom: 60px;
  }
`;

const cardWrapperCss = css`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;

  ${mediaQuery('xs')} {
    gap: 11px;
  }
`;

interface Experience {
  icon: string;
  name: string;
  description: string;
  src: string;
}

const EXPERIENCES: Experience[] = [
  {
    icon: 'H',
    name: '해커톤',
    description: '13기 처음 선보이는 디프만의 해커톤, 1박2일간 함께 프로젝트에 도전해봐요.',
    src: `${ABOUT_IMAGE_BASE}/hackathon.webp`,
  },
  {
    icon: 'N',
    name: '네트워킹 데이',
    description: '같은 직군, 같은 개발 언어를 가진 디프만 멤버들과 네트워킹할 수 있어요.',
    src: `${ABOUT_IMAGE_BASE}/networking.webp`,
  },
  {
    icon: 'S',
    name: '스터디',
    description: '독서, 공부부터 포폴까지 자유롭게 스터디를 만들고 참여할 수 있어요.',
    src: `${ABOUT_IMAGE_BASE}/study.webp`,
  },
  {
    icon: 'C',
    name: '커피챗',
    description: '현업에서 일하는 멋진 디프만 선배들과 고민을 나누고 이야기를 들을 수 있어요.',
    src: `${ABOUT_IMAGE_BASE}/coffeechat.webp`,
  },
  {
    icon: 'G',
    name: '모임',
    description: '같은 관심사를 가진 디프만 멤버들끼리 모임을 통해 취향을 공유할 수 있어요.',
    src: `${ABOUT_IMAGE_BASE}/group.webp`,
  },
  {
    icon: 'M',
    name: '번개',
    description: '프로젝트와 별개로 디프만 멤버들과 가볍게 만나 친목을 즐길 수 있어요.',
    src: `${ABOUT_IMAGE_BASE}/meeting.webp`,
  },
];

function Card({ icon, name, description, src }: Experience) {
  const isMobile = useMediaQuery('xs');

  const [isOpen, toggleIsOpen] = useToggle(false);

  const onMobileClick = () => {
    if (!isMobile) return;
    console.log(isOpen);
    toggleIsOpen();
  };

  return (
    <m.article
      css={articleCss}
      initial="default"
      whileHover="hover"
      onClick={onMobileClick}
      animate={isMobile && isOpen ? 'hover' : 'default'}
    >
      <Image css={imageCss} src={src} alt={name} fill quality={100} />
      <m.span css={spanCss} variants={spanVriants}>
        <m.span css={iconSpanCss} variants={iconSpanVariants}>
          {icon}
        </m.span>
        {name}
      </m.span>

      <m.div css={hoverWrapperCss} variants={hoverWrapperVariants}>
        <m.p css={paragraphCss} variants={paragraphVariants}>
          {description}
        </m.p>
      </m.div>
    </m.article>
  );
}

const articleCss = css`
  position: relative;
  width: 384px;
  height: 300px;
  padding: 32px 40px;

  ${mediaQuery('sm')} {
    width: calc(50% - 24px);
    height: 224px;
    padding: 20px;
  }

  ${mediaQuery('xs')} {
    width: calc(50% - 6px);
  }
`;

const imageCss = css`
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  z-index: -1;
`;

const spanCss = css`
  position: relative;
  display: flex;
  align-items: center;
  gap: 6px;

  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  color: ${colors.white};
  z-index: 10;

  ${mediaQuery('xs')} {
    font-size: 16px;
  }
`;

const spanVriants: Variants = {
  default: {
    color: colors.white,
    transition: {
      duration: 0.3,
      ease: defaultEasing,
    },
  },
  hover: {
    color: colors.point,
    transition: {
      duration: 0.3,
      ease: defaultEasing,
    },
  },
};

const iconSpanCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: solid 2px ${colors.white};

  font-weight: 500;
  font-size: 17px;
  letter-spacing: -1px;
  color: ${colors.white};
`;

const iconSpanVariants: Variants = {
  default: {
    borderColor: colors.white,
    transition: {
      duration: 0.3,
      ease: defaultEasing,
    },
  },
  hover: {
    borderColor: colors.point,
    backgroundColor: colors.point,
    transition: {
      duration: 0.3,
      ease: defaultEasing,
    },
  },
};

const hoverWrapperCss = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 32px 40px;

  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(12.5px);
  z-index: 9;

  display: flex;
  flex-direction: column;
  justify-content: end;
  opacity: 0;

  border-top: solid 1px ${colors.black};

  ${mediaQuery('sm')} {
    padding: 20px;
  }
`;

const hoverWrapperVariants: Variants = {
  default: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: defaultEasing,
    },
  },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: defaultEasing,
    },
  },
};

const paragraphCss = css`
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 140%;

  ${mediaQuery('xs')} {
    font-weight: 500;
    font-size: 14px;
  }
`;

const paragraphVariants: Variants = {
  default: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 0.5,
      ease: defaultEasing,
    },
  },
  hover: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.5,
      ease: defaultEasing,
    },
  },
};
