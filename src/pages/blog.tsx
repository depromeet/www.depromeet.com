import { css } from '@emotion/react';
import { AnimatePresence, m } from 'framer-motion';

import { BlogPostThumbnail, Link } from '~/components/Blog';
import { Intro } from '~/components/Intro';
import { Subscribe } from '~/components/Main';
import { SectionTitleV2 } from '~/components/SectionTitleV2';
import { SEO } from '~/components/SEO';
import { BLOG_LIST } from '~/constant/blog';
import { staggerHalf } from '~/constant/motion';
import { mediaQuery } from '~/styles/media';

export default function blog() {
  return (
    <>
      <SEO title="디프만 - Blog" />
      <main>
        <Intro
          imageUrl="/images/blog/intro-img.svg"
          title="Blog 페이지 메인 배너"
          width={1024}
          height={400}
          color="green"
        />
        <section css={sectionCss}>
          <SectionTitleV2>디프만 블로그</SectionTitleV2>
          <AnimatePresence mode="wait" initial={false}>
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
                  links={blog.links as Link[]}
                />
              ))}
            </m.div>
          </AnimatePresence>
        </section>
        <Subscribe />
      </main>
    </>
  );
}

const sectionCss = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 120px 0;

  ${mediaQuery('tablet')} {
    padding: 80px 32px;
  }
  ${mediaQuery('mobile')} {
    padding: 80px 16px;
  }
`;

const blogContainerCss = css`
  width: 100%;
  max-width: 960px;
  margin-top: 36px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 12px;
  justify-items: center;

  ${mediaQuery('tablet')} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${mediaQuery('mobile')} {
    grid-template-columns: repeat(1, 1fr);
  }
`;
