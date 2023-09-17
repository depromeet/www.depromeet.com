import { SEO } from '~/components/SEO';
import { TimerContainer } from '~/components/TimerContainer';

export default function Root() {
  return (
    <>
      <SEO />
      <main>
        <TimerContainer />
      </main>
    </>
  );
}
