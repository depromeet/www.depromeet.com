import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { css } from '@emotion/react';

import { colors } from '~/styles/colors';
import { mediaQuery } from '~/styles/media';
import { theme } from '~/styles/theme';

type Props = {
  image: string;
  title: string;
  description: string;
  index: number;
  isTabletSize?: boolean;
  isReverseDirection?: boolean;
};
export const ReasonCard = ({ image, title, description, index, isReverseDirection }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) observer.unobserve(node);
    };
  }, []);

  return (
    <div
      ref={ref}
      css={[
        containerCss(isReverseDirection),
        css`
          opacity: ${isVisible ? 1 : 0};
          transform: ${isVisible ? 'translateY(0)' : 'translateY(76px)'};
          clip-path: ${isVisible ? 'inset(0% 0% -50% 0%)' : 'inset(0% 0% 50% 0%)'};
          transition: opacity 0.1s linear, transform 0.5s linear, clip-path 0.6s linear;
          transition-delay: ${index * 0.1}s;
        `,
      ]}
    >
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
      <div css={content.wrapperCss}>
        <h1 css={content.titleCss}>{title}</h1>
        <p css={content.descriptionCss}>{description}</p>
      </div>
    </div>
  );
};

const containerCss = (isReverseDirection?: boolean) => css`
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
`;

const imageWrapperCss = css`
  position: relative;
  width: 259px;
  height: auto;
  flex-shrink: 0;
  overflow: hidden;
`;

const content = {
  wrapperCss: css`
    display: flex;
    flex-direction: column;

    width: 100%;
    padding: 24px;
    gap: 14px;
  `,

  titleCss: css`
    ${theme.typosV3.pretendard.head5};
    white-space: pre-wrap;
    color: ${colors.primary.darknavy};

    ${mediaQuery('mobile')} {
      ${theme.typosV2.pretendard.bold20};
    }
  `,

  descriptionCss: css`
    ${theme.typosV3.pretendard.body3Medium};

    white-space: pre-wrap;
    color: ${colors.grey[800]};

    ${mediaQuery('mobile')} {
      ${theme.typosV2.pretendard.medium15};
    }
  `,
};
