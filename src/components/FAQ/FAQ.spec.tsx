import { render, screen } from '@testing-library/react';
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
  it.todo('🟢 [지원자격]탭이 활성화된 상태로 렌더링한다.', () => {});
  it.todo('🟢 가장 위에 있는 질문은 답변이 보이는 상태로 렌더링한다.', () => {});
  it.todo(
    '🟢 가장 위에 있는 질문 외에 나머지 질문들은 답변이 보이지 않은 상태로 렌더링한다.',
    () => {}
  );
});

describe('FAQ 컴포넌트 인터렉션 테스트', () => {
  it.todo('🟢 답변이 보이는 질문을 클릭하면 질문이 가려진다.', () => {});
  it.todo('🟢 답변이 가려진 질문을 클릭하면 질문이 보여진다.', () => {});
  it.todo(
    '🟢 답변은 최대 1개만 보여준다. 유저 클릭으로 인해 답변이 1개 이상 보일 수 없다.',
    () => {}
  );
  it.todo('🟢 [지원자격]탭을 클릭하면 [지원자격]질문들 항목을 표시한다.', () => {});
  it.todo('🟢 [면접]탭을 클릭하면 [면접]질문들 항목을 표시한다.', () => {});
  it.todo('🟢 [활동]탭을 클릭하면 [활동]질문들 항목을 표시한다.', () => {});
  it.todo(
    '🟢 다른 탭을 클릭하면, 가장 위에 있는 질문은 답변이 보이는 상태로 렌더링한다.',
    () => {}
  );
  it.todo(
    '🟢 다른 탭을 클릭하면, 가장 위에 있는 질문 외에 나머지 질문들은 답변이 보이지 않은 상태로 렌더링한다.',
    () => {}
  );
});

describe('FAQ 컴포넌트 기타 기능 테스트', () => {
  it.todo('🟢 활성화되지 않은 답변도 브라우저 검색 기능을 통해 검색되어야 한다.', () => {});
});
