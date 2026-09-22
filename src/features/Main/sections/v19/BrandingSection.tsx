import { useCallback, useEffect, useRef, useState } from 'react';
import { css } from '@emotion/react';
import { useReducedMotion } from 'framer-motion';
import type { LottieRefCurrentProps } from 'lottie-react';

import { Lottie } from '~/components/Lottie/Lottie';
import { colors } from '~/styles/colors';

type Variant = 'mobile' | 'desktop';

const DESKTOP_QUERY = '(min-width: 768px)';

const ASSETS_PATH = '/images/19th/home/branding/';

const SOURCES: Record<Variant, { path: string; lastFrame: number }> = {
  mobile: { path: `${ASSETS_PATH}branding-mobile.json`, lastFrame: 360 },
  desktop: { path: `${ASSETS_PATH}branding-desktop.json`, lastFrame: 360 },
};

const ANIMATION_LABEL = 'Orbit Beyond Boundaries - 경계 밖의 새로운 궤도로';

const stripDuplicateDashes = (node: unknown): void => {
  if (Array.isArray(node)) {
    node.forEach(stripDuplicateDashes);
    return;
  }
  if (!node || typeof node !== 'object') return;

  const shape = node as { ty?: string; d?: Array<{ nm?: string }> };
  if (shape.ty === 'st' && Array.isArray(shape.d)) {
    const seen = new Set<string | undefined>();
    shape.d = shape.d.filter(entry => {
      if (seen.has(entry.nm)) return false;
      seen.add(entry.nm);
      return true;
    });
  }

  Object.values(node).forEach(stripDuplicateDashes);
};

export const BrandingSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const lottieRef = useRef<LottieRefCurrentProps | null>(null);
  const [variant, setVariant] = useState<Variant | null>(null);
  const [loaded, setLoaded] = useState<Partial<Record<Variant, object>>>({});
  const [isInView, setInView] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const animationData = variant ? loaded[variant] ?? null : null;
  const lastFrame = variant ? SOURCES[variant].lastFrame : 0;

  useEffect(() => {
    const query = window.matchMedia(DESKTOP_QUERY);
    const apply = () => setVariant(query.matches ? 'desktop' : 'mobile');

    apply();
    query.addEventListener('change', apply);

    return () => query.removeEventListener('change', apply);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      rootMargin: '200px',
    });
    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!variant || !isInView || animationData) return;

    let cancelled = false;
    fetch(SOURCES[variant].path)
      .then(response => response.json())
      .then(data => {
        stripDuplicateDashes(data);
        if (!cancelled) setLoaded(prev => ({ ...prev, [variant]: data }));
      })
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  }, [variant, isInView, animationData]);

  const syncPlayState = useCallback(() => {
    const lottie = lottieRef.current;
    if (!lottie) return;

    if (shouldReduceMotion) {
      lottie.goToAndStop(lastFrame - 1, true);
      return;
    }

    if (isInView) lottie.play();
    else lottie.pause();
  }, [isInView, shouldReduceMotion, lastFrame]);

  useEffect(syncPlayState, [syncPlayState]);

  return (
    <section ref={sectionRef} css={sectionCss} data-section="branding" data-gnb-theme="dark">
      <div css={contentCss}>
        {animationData && (
          <Lottie
            key={variant}
            lottieRef={lottieRef}
            animationData={animationData}
            assetsPath={ASSETS_PATH}
            initialSegment={[0, lastFrame]}
            rendererSettings={{ preserveAspectRatio: 'xMidYMid meet' }}
            autoplay={!shouldReduceMotion}
            loop
            onDOMLoaded={syncPlayState}
            role="img"
            aria-label={ANIMATION_LABEL}
            css={animationCss}
          />
        )}
      </div>
    </section>
  );
};

const sectionCss = css`
  position: relative;
  width: 100%;
  background: ${colors.v19.blue900};
`;

const contentCss = css`
  position: relative;
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  aspect-ratio: 360 / 592;

  @media (min-width: 768px) {
    aspect-ratio: 1920 / 1000;
  }
`;

const animationCss = css`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
`;
