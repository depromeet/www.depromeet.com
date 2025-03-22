import { SEO } from '~/components/SEO';
import { BlogContentSection } from '~/features/Blog/sections/BlogContentSection';
import { BlogSubscribeSection } from '~/features/Blog/sections/BlogSubscribeSection';
import { IntroSection } from '~/features/Common/sections/IntroSection';

export default function blog() {
  return (
    <>
      <SEO title="디프만 - Blog" />
      <main>
        <IntroSection
          defaultImgUrl="/images/16th/blog/blog.svg"
          mobileImgUrl="/images/16th/blog/blog_m.svg"
        />
        <BlogContentSection />
        <BlogSubscribeSection />
      </main>
    </>
  );
}
