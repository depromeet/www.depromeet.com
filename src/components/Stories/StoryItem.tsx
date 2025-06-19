import { css } from '@emotion/react';

import { StoryItemType } from '~/constant/stories';
import { mediaQuery } from '~/styles/media';
import { theme } from '~/styles/theme';

interface StoryItemProps extends StoryItemType {}

export const StoryItem = ({ name, url, image }: StoryItemProps) => {
  const handleClick = () => {
    window.open(url, '_blank');
  };

  return (
    <div css={cardCss} onClick={handleClick}>
      <img src={image} alt={name} css={backgroundImageCss} />
      <div css={overlayCss} />
      <div css={contentCss}>
        <h3 css={titleCss}>{name}</h3>
      </div>
    </div>
  );
};

const cardCss = css`
  position: relative;
  width: 245px;
  height: 322px;
  background-color: white;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-right: 40px;
  flex-shrink: 0;
  border: 1px solid ${theme.colors.primary.blue};

  ${mediaQuery('tablet')} {
    width: 200px;
    height: 262px;
  }

  ${mediaQuery('mobile')} {
    width: 182px;
    height: 238.42px;

    &:hover {
      transform: none;
    }
  }
`;

const backgroundImageCss = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const overlayCss = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 54.5%, rgba(0, 0, 0, 0.7) 100%);
`;

const contentCss = css`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  color: white;

  ${mediaQuery('tablet')} {
    padding: 20px;
  }

  ${mediaQuery('mobile')} {
    padding: 18.2px;
  }
`;

const titleCss = () => css`
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.8px;
  word-break: break-all;

  ${mediaQuery('tablet')} {
    ${theme.typosV3.pretendard.sub5Medium}
  }
  ${mediaQuery('mobile')} {
    ${theme.typosV3.pretendard.body6Medium}
  }
`;
