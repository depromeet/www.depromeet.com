import { css } from '@emotion/react';
import { AnimatePresence, m } from 'framer-motion';
import Marquee from 'react-fast-marquee';

import { BlogPostThumbnail } from '~/components/Blog/BlogPostThumbnail';
import { BLOG_LIST } from '~/constant/blog';
import { staggerHalf } from '~/constant/motion';
import { mediaQuery } from '~/styles/media';
import { theme } from '~/styles/theme';

/**
 * * Main 페이지 블로그 section
 */
export const MainBlogSection = () => {
  return (
    <section css={containerCss}>
      <div css={text.wrapperCss}>
        <h1 css={text.titleCss}>디프만의 이야기가 궁금하다면</h1>
        <p css={text.subCss}>뉴스레터와 블로그를 통해 활동 소식을 만나보세요</p>
      </div>
      <AnimatePresence mode="wait" initial={false}>
        <Marquee>
          <m.div
            css={blogContainerCss}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={staggerHalf}
          >
            {BLOG_LIST.map(blog => (
              <BlogPostThumbnail
                key={blog.title}
                img={blog.img}
                title={blog.title}
                date={blog.date}
                link={blog.link}
                css={css`
                  width: 245px !important;
                  height: 322px !important;
                `}
              />
            ))}
          </m.div>
        </Marquee>
      </AnimatePresence>
    </section>
  );
};

const containerCss = css`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 120px 0 140px 0;
  background: white;
  overflow: hidden;

  ${mediaQuery('mobile')} {
    padding: 80px 0 80px 0;
  }
`;

const text = {
  wrapperCss: css`
    display: flex;
    flex-direction: column;
    row-gap: 24px;
    align-items: center;
    text-align: center;
  `,
  subCss: css`
    ${theme.typosV2.pretendard.semibold20};

    ${mediaQuery('mobile')} {
      ${theme.typosV2.pretendard.semibold18};
      line-height: 150%;
    }
  `,

  titleCss: css`
    ${theme.typosV2.pretendard.bold44};

    ${mediaQuery('mobile')} {
      ${theme.typosV2.pretendard.bold28};
    }
  `,
};

const blogContainerCss = css`
  width: 100%;
  display: flex;
  column-gap: 40px;
  margin-top: 92px;
  margin-left: 50px;
`;
