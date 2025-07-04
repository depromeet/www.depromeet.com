import { css } from '@emotion/react';
import Marquee from 'react-fast-marquee';

import { StoryItem } from '~/components/Stories/StoryItem';
import { STORIES } from '~/constant/stories';
import { sectionBg } from '~/styles/background';
import { mediaQuery } from '~/styles/media';
import { theme } from '~/styles/theme';

/**
 * * Main 페이지 블로그 section
 */
export const MainBlogSection = () => {
  return (
    <section css={containerCss}>
      <div css={text.wrapperCss}>
        <h1 css={text.titleCss}>Depromeet Stories</h1>
        <p css={text.subCss}>디프만 공식 블로그를 통해 활동 소식을 만나보세요</p>
      </div>
      <Marquee>
        {STORIES.map(({ ...info }) => (
          <StoryItem key={info.name} {...info} />
        ))}
      </Marquee>
    </section>
  );
};

const containerCss = css`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 100px 0;
  background: white;
  overflow: hidden;

  z-index: 20;
  ${sectionBg};

  ${mediaQuery('mobile')} {
    padding: 60px 0;
  }
`;

const text = {
  wrapperCss: css`
    display: flex;
    flex-direction: column;
    align-self: center;
    row-gap: 8px;
    width: 100%;
    max-width: 1100px;
    padding: 0 58px;
    margin-bottom: 48px;

    ${mediaQuery('tablet')} {
      padding: 0 40px;
      margin-bottom: 60px;
    }
    ${mediaQuery('mobile')} {
      padding: 0 24px;
      margin-bottom: 40px;
    }
  `,
  subCss: css`
    ${theme.typosV2.pretendard.semibold20};

    ${mediaQuery('mobile')} {
      ${theme.typosV3.pretendard.body3Medium};
    }
  `,

  titleCss: css`
    color: ${theme.colors.primary.darknavy};
    font-family: MartianMono;
    font-size: 42px;
    font-weight: 400;
    line-height: 109%;
    letter-spacing: -2.1px;

    ${mediaQuery('mobile')} {
      ${theme.typosV2.pretendard.bold28};
    }
  `,
};
