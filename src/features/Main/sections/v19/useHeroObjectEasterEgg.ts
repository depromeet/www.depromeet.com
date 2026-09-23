import { useCallback, useRef, useState } from 'react';

/** 19기라서 19번. */
export const EASTER_EGG_TAP_COUNT = 19;

/** `idle` → (19번째 클릭) → `away`(좌측 상단 밖으로) → `home`(오른쪽 밖에서 제자리로) → `idle` */
export type HeroFlightPhase = 'idle' | 'away' | 'home';

interface UseHeroObjectEasterEggOptions {
  disabled?: boolean;
}

export function useHeroObjectEasterEgg({ disabled = false }: UseHeroObjectEasterEggOptions = {}) {
  const [phase, setPhase] = useState<HeroFlightPhase>('idle');
  const tapCountRef = useRef(0);

  const handleTap = useCallback(() => {
    // 비행이 겹치면 오브젝트가 제자리를 잃는다.
    if (disabled || phase !== 'idle') return;

    tapCountRef.current += 1;
    if (tapCountRef.current < EASTER_EGG_TAP_COUNT) return;

    tapCountRef.current = 0;
    setPhase('away');
  }, [disabled, phase]);

  /** 넘어오는 값은 끝난 variant 의 이름이다. 훅이 애니메이션 라이브러리 타입을 알 필요는 없다. */
  const handleFlightComplete = useCallback((definition: unknown) => {
    if (definition === 'away') setPhase('home');
    else if (definition === 'home') setPhase('idle');
  }, []);

  return { phase, handleTap, handleFlightComplete };
}
