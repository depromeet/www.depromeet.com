import { SEO } from '~/components/SEO';
import { BlogContentSection } from '~/features/Blog/BlogContentSection';
import { BlogIntroSection } from '~/features/Blog/BlogIntroSection';
import { BlogSubscribeSection } from '~/features/Blog/BlogSubscribeSection';

export default function blog() {
  return (
    <>
      <SEO title="디프만 - Blog" />
      <main>
        <BlogIntroSection />
        <BlogContentSection />
        <BlogSubscribeSection />
      </main>
    </>
  );
}
