import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { FAQ } from '~/components/FAQ/FAQ';

// TODO: @kimyouknow tsconfig 파일 정리해서 경로 alias 적용하기
import { Provider } from '../../../tests/setup';

describe('FAQ 컴포넌트 레이아웃 테스트', () => {
  it('🟢 메인 타이틀에 "자주 묻는 질문"이 표시된다.', () => {
    render(<FAQ />, {
      wrapper: Provider,
    });

    expect(screen.getByRole('heading', { name: '자주 묻는 질문' })).toBeInTheDocument();
  });
  it('🟢 서브 타이틀에 "FAQ"가 표시된다.', () => {
    render(<FAQ />, {
      wrapper: Provider,
    });

    expect(screen.getByRole('heading', { name: 'FAQ' })).toBeInTheDocument();
  });
  it('🟢 면접탭을 클릭하면 면접질문들 항목을 표시한다.', async () => {
    const user = userEvent.setup();

    render(<FAQ />, {
      wrapper: Provider,
    });

    // await user.click(screen.getByRole('button', { name: '면접' }));
    await user.click(screen.getByText('면접'));

    expect(screen.getByText('인터뷰는 언제 진행되나요?')).toBeInTheDocument;
  });
});
