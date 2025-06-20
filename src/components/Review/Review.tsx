import { css, Theme } from '@emotion/react';
import Marquee from 'react-fast-marquee';

import { StoryItem } from '~/components/Stories/StoryItem';
import { STORIES } from '~/constant/stories';
import { sectionBg } from '~/styles/background';
import { mediaQuery } from '~/styles/media';

export function Review() {
  return (
    <section css={layoutCss}>
      <h1>
        디퍼들의 실제 이야기가
        <br /> 궁금하다면?
      </h1>
      <h5>
        뉴스레터와 블로그를 통해
        <br /> 활동 소식을 만나보세요
      </h5>
      <Marquee>
        {STORIES.map(({ ...info }) => (
          <StoryItem key={info.name} {...info} />
        ))}
      </Marquee>
    </section>
  );
}

const layoutCss = (theme: Theme) => css`
  padding: 120px 0;
  display: flex;
  flex-direction: column;
  gap: 22px;
  align-items: center;
  overflow: hidden;
  ${sectionBg};

  h1 {
    ${theme.typosV3.pretendard.head1};
    color: ${theme.colors.primary.darknavy};
    text-align: center;

    ${mediaQuery('mobile')} {
      ${theme.typosV3.pretendard.head3};
    }
  }

  h5 {
    ${theme.typosV3.pretendard.sub1Medium};
    text-align: center;
    color: ${theme.colors.primary.darknavy};

    ${mediaQuery('mobile')} {
      ${theme.typosV3.pretendard.sub5Medium};
    }
  }
`;
