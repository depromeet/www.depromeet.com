import { css, Theme } from '@emotion/react';

import { STORIES } from '~/constant/stories';
import { colors } from '~/styles/colors';
import { mediaQuery } from '~/styles/media';

import { StoryItem } from './StoryItem';

export const Stories = () => {
  return (
    <section css={containerCss}>
      <div css={headerCss}>
        <h2 css={titleCss}>디프만 스토리</h2>
        <p css={descriptionCss}>디프만 멤버들의 생생한 이야기를 만나보세요</p>
      </div>

      <div css={storiesGridCss}>
        {STORIES.map(story => (
          <StoryItem key={story.name} {...story} />
        ))}
      </div>
    </section>
  );
};

const containerCss = (_theme: Theme) => css`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 20px;
  background-color: ${colors.primary.gray};

  ${mediaQuery('mobile')} {
    padding: 60px 16px;
  }
`;

const headerCss = css`
  text-align: center;
  margin-bottom: 60px;

  ${mediaQuery('mobile')} {
    margin-bottom: 40px;
  }
`;

const titleCss = (theme: Theme) => css`
  ${theme.typosV2.bebas.regular24};
  color: ${theme.colors.grey['900']};
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 16px;

  ${mediaQuery('mobile')} {
    font-size: 28px;
  }
`;

const descriptionCss = (theme: Theme) => css`
  ${theme.typosV2.pretendard.regular14};
  color: ${theme.colors.grey['700']};
  font-size: 18px;
  font-weight: 500;
  margin: 0;

  ${mediaQuery('mobile')} {
    font-size: 16px;
  }
`;

const storiesGridCss = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;

  ${mediaQuery('tablet')} {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  ${mediaQuery('mobile')} {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;
