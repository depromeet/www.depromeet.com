import { SEO } from '~/components/SEO';
import { BlogContentSection } from '~/features/Blog/sections/BlogContentSection';

export default function blog() {
  return (
    <>
      <SEO title="디프만 - Blog" />
      <main>
        <BlogContentSection />
        {/* <BlogSubscribeSection /> */}
      </main>
    </>
  );
}
