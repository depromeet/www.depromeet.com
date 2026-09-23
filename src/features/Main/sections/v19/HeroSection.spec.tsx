import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { HeroSection } from '~/features/Main/sections/v19/HeroSection';
import { EASTER_EGG_TAP_COUNT } from '~/features/Main/sections/v19/useHeroObjectEasterEgg';

import { Provider } from '../../../../../tests/setup';

/** 이름(role·label)으로 찾을 수 없는 숨은 장치라, 비행 단계를 드러내는 속성으로 본다. */
const flightPhase = () =>
  screen
    .getByAltText('이정표 3D 오브젝트')
    .closest('[data-easter-egg]')
    ?.getAttribute('data-easter-egg');

const tapObject = async (user: ReturnType<typeof userEvent.setup>, times: number) => {
  for (let i = 0; i < times; i += 1) {
    await user.click(screen.getByAltText('이정표 3D 오브젝트'));
  }
};

describe('HeroSection — 이정표 오브젝트 이스터에그', () => {
  it('🟢 오브젝트는 평소 제자리에 있다.', () => {
    render(<HeroSection />, { wrapper: Provider });

    expect(flightPhase()).toBe('idle');
  });

  it('🔴 18번까지 눌러도 제자리다.', async () => {
    const user = userEvent.setup();
    render(<HeroSection />, { wrapper: Provider });

    await tapObject(user, EASTER_EGG_TAP_COUNT - 1);

    expect(flightPhase()).toBe('idle');
  });

  it('🟢 19번째 클릭에 날아간다.', async () => {
    const user = userEvent.setup();
    render(<HeroSection />, { wrapper: Provider });

    await tapObject(user, EASTER_EGG_TAP_COUNT);

    expect(flightPhase()).toBe('away');
  });
});
