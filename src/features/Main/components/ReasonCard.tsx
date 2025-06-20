import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { css } from '@emotion/react';

import { DescriptionType, TitleType } from '~/constant/reason';
import { colors } from '~/styles/colors';
import { mediaQuery } from '~/styles/media';
import { theme } from '~/styles/theme';

type Props = {
  image: string;
  title: TitleType;
  description: DescriptionType;
  index: number;
  isTabletSize?: boolean;
  isMobileSize?: boolean;
  isReverseDirection?: boolean;
};
export const ReasonCard = ({
  image,
  title,
  description,
  index,
  isMobileSize,
  isReverseDirection,
}: Props) => {
  const triggerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const trigger = triggerRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        // rootMargin: '0px 0px 0px 0px',
      }
    );

    if (trigger) observer.observe(trigger);
    return () => {
      if (trigger) observer.unobserve(trigger);
    };
  }, []);

  return (
    <div css={clipWrapperCss}>
      <div ref={triggerRef} css={triggerLineCss} />
      <div css={[containerCss(isReverseDirection), animatedCardCss(isVisible, index)]}>
        <div css={imageWrapperCss}>
          <Image src={image} alt="디프만 참여 이유" fill style={{ objectFit: 'cover' }} />
        </div>
        <div css={content.wrapperCss}>
          <h1 css={content.titleCss}>
            {!isMobileSize ? title.default : title.mobile ?? title.default}
          </h1>
          <p css={content.descriptionCss}>
            {!isMobileSize ? description.default : description.mobile}
          </p>
        </div>
      </div>
    </div>
  );
};

const clipWrapperCss = css`
  position: relative;
  height: 188px; /* 카드 전체 높이 */
  overflow: hidden;

  ${mediaQuery('tablet')} {
    height: 158px;
  }
  ${mediaQuery('mobile')} {
    height: auto;
  }
`;

const triggerLineCss = css`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 1px;
  opacity: 0;
  pointer-events: none;
`;

const animatedCardCss = (isVisible: boolean, index: number) => css`
  position: relative;
  transform: ${isVisible ? 'translateY(0)' : 'translateY(94px)'};
  opacity: ${isVisible ? 1 : 0};
  transition: opacity 0.3s ease, transform 0.6s ease;
  transition-delay: ${index * 0.1}s;
`;

const containerCss = (isReverseDirection?: boolean) => css`
  position: relative;
  display: flex;
  width: 825px;
  min-height: 188px;

  background-color: ${colors.primary.gray};
  border: ${colors.primary.blue} 1px solid;
  box-shadow: 0 0 8px 4px ${colors.primary.blue}24;

  z-index: 50;

  ${isReverseDirection &&
  css`
    flex-direction: row-reverse;
  `}

  ${mediaQuery('tablet')} {
    width: 688px;
    min-height: 158px;
  }

  ${mediaQuery('mobile')} {
    flex-direction: column;
    width: 100%;
    min-width: 312px;
    height: 100%;
  }
`;

const imageWrapperCss = css`
  position: relative;
  width: 259px;
  height: auto;
  flex-shrink: 0;
  overflow: hidden;

  ${mediaQuery('tablet')} {
    width: 218px;
    max-height: 158px;
  }

  ${mediaQuery('mobile')} {
    width: 100%;
    min-height: 226px;
  }
`;

const content = {
  wrapperCss: css`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 24px;
    gap: 14px;

    ${mediaQuery('tablet')} {
      justify-content: center;
    }
  `,

  titleCss: css`
    ${theme.typosV3.pretendard.head6};
    white-space: pre-wrap;
    color: ${colors.primary.darknavy};

    ${mediaQuery('tablet')} {
      ${theme.typosV3.pretendard.sub1Semibold};
    }

    ${mediaQuery('mobile')} {
      ${theme.typosV3.pretendard.sub2Bold};
    }
  `,

  descriptionCss: css`
    ${theme.typosV3.pretendard.body3Medium};
    white-space: pre-wrap;
    color: ${colors.grey[800]};

    ${mediaQuery('tablet')} {
      ${theme.typosV3.pretendard.body5Medium};
    }

    ${mediaQuery('mobile')} {
      ${theme.typosV3.pretendard.body6Medium};
    }
  `,
};
