import AboutDepromeeet from '~/components/AboutInfo/AboutDepromeeet';
import { Contact } from '~/components/Contact';
import { Intro } from '~/components/Intro';
import { SEO } from '~/components/SEO';
import { Supports } from '~/components/Supports';

export default function About() {
  return (
    <>
      <SEO title="디프만 - About" />
      <main>
        <Intro
          imageUrl="/images/about/intro-img.svg"
          title="15기 정보 인트로"
          width={1024}
          height={400}
          color="yellow"
        />
        <AboutDepromeeet />
        <Supports />
        <Contact />
      </main>
    </>
  );
}
