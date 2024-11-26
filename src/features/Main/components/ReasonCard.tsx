import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { css } from '@emotion/react';

import { mediaQuery } from '~/styles/media';
import { theme } from '~/styles/theme';

type Props = {
  image: string;
  title: string;
  description: string;
  index?: number;
  isTabletSize?: boolean;
  isReverseDirection?: boolean;
};
export const ReasonCard = ({
  image,
  title,
  description,
  index,
  isTabletSize,
  isReverseDirection,
}: Props) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const isRenderArrow = !isTabletSize || index === 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} css={[containerCss(isReverseDirection), isVisible ? fadeInCss : hiddenCss]}>
      {isRenderArrow && (
        <div css={arrowWrapperCss}>
          <Image
            src={'/images/16th/main/reason/reason_arrow.png'}
            width={20}
            height={90}
            alt="reason arrow"
          />
        </div>
      )}

      <div css={imageWrapperCss}>
        <Image
          src={image}
          alt="디프만 참여 이유"
          fill
          style={{
            objectFit: 'cover',
          }}
        />
      </div>

      <div css={content.wrapperCss(isReverseDirection)}>
        <h1 css={content.titleCss}>{title}</h1>
        <p css={content.descriptionCss}>{description}</p>
      </div>
    </div>
  );
};

const fadeInCss = css`
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
`;

const hiddenCss = css`
  opacity: 0;
  transform: translateY(20px);
`;

const containerCss = (isReverseDirection?: boolean) => css`
  position: relative;
  display: flex;
  gap: 58px;
  width: 1000px;
  padding: 10px;
  border-radius: 20px;
  background-color: white;

  ${isReverseDirection &&
  css`
    flex-direction: row-reverse;
  `}

  ${mediaQuery('tablet')} {
    padding: 12px 12px 40px;
    width: 100%;
    max-width: 500px;
    flex-direction: column;
    gap: 24px;
  }
`;

const arrowWrapperCss = css`
  position: absolute;
  top: -102px;
  left: calc(50% - 10px);
`;

const imageWrapperCss = css`
  position: relative;
  width: 476px;
  height: 318px;
  flex-shrink: 0;
  border-radius: 20px;
  overflow: hidden;

  ${mediaQuery('tablet')} {
    width: 100%;
    height: 100%;
    aspect-ratio: 476/318;
  }
`;

const content = {
  wrapperCss: (isReverseDirection?: boolean) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 26px 0;
    margin-left: 0px;
    margin-right: 36px;

    ${isReverseDirection &&
    css`
      margin-left: 36px;
      margin-right: 0px;
    `}

    ${mediaQuery('tablet')} {
      margin: 0;
      padding: 0 8px;
      gap: 16px;
      justify-content: center;
    }
  `,

  titleCss: css`
    ${theme.typosV2.pretendard.bold32};
    line-height: 140%;
    white-space: pre-wrap;

    ${mediaQuery('mobile')} {
      ${theme.typosV2.pretendard.bold20};
      line-height: 140%;
    }
  `,

  descriptionCss: css`
    ${theme.typosV2.pretendard.medium18};
    line-height: 160%;
    white-space: pre-wrap;

    ${mediaQuery('mobile')} {
      ${theme.typosV2.pretendard.medium15};
      line-height: 160%;
    }
  `,
};
