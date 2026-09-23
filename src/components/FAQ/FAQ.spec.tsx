import { render, screen, within } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { FAQ } from '~/components/FAQ/FAQ';

// TODO: @kimyouknow tsconfig 파일 정리해서 경로 alias 적용하기
import { Provider } from '../../../tests/setup';

/**
 * FAQItem은 `<li role="button" aria-expanded>`로 그려진다.
 * 항목 안의 화살표 `Icon`이 `<button>`을 하나 더 그리므로, 질문 항목만 걸러낸다.
 */
const questionItemsIn = (container: HTMLElement) =>
  within(container)
    .getAllByRole('button')
    .filter(item => item.hasAttribute('aria-expanded'));

describe('FAQ 컴포넌트 레이아웃 테스트', () => {
  it('🟢 메인 타이틀에 "자주 묻는 질문"이 표시된다.', () => {
    render(<FAQ />, {
      wrapper: Provider,
    });

    expect(screen.getByRole('heading', { name: '자주 묻는 질문' })).toBeInTheDocument();
  });
  it('🟢 [지원자격]탭만 활성화된 상태로 렌더링한다. ', () => {
    render(<FAQ />, {
      wrapper: Provider,
    });

    expect(screen.getByRole('tab', { name: '지원 자격', selected: true })).toBeInTheDocument();
  });
  it('🔴 [지원자격] 탭 외에 다른 탭은 활성화되지 않은 상태로 렌더링한다.', () => {
    render(<FAQ />, {
      wrapper: Provider,
    });

    expect(screen.getByRole('tab', { name: '면접 관련', selected: false })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: '활동 관련', selected: false })).toBeInTheDocument();
  });

  it('🟢 가장 위에 있는 질문은 답변이 보이는 상태로 렌더링한다.', () => {
    render(<FAQ />, {
      wrapper: Provider,
    });

    const questionListContainer = screen.getByRole('list', { name: /faq-list/ });
    const questionItems = questionItemsIn(questionListContainer);

    expect(questionItems[0]).toHaveAttribute('aria-expanded', 'true');
  });
  it('🟢 가장 위에 있는 질문 외에 나머지 질문들은 답변이 보이지 않은 상태로 렌더링한다.', () => {
    render(<FAQ />, {
      wrapper: Provider,
    });

    const questionListContainer = screen.getByRole('list', { name: /faq-list/ });
    const [, ...restQuestionItems] = questionItemsIn(questionListContainer);

    restQuestionItems.forEach(x => {
      expect(x).toHaveAttribute('aria-expanded', 'false');
    });
  });
});

describe('FAQ 컴포넌트 인터렉션 테스트', () => {
  it('🟢 답변이 보이는 질문을 클릭하면 질문이 가려진다.', async () => {
    const user = userEvent.setup();

    render(<FAQ />, {
      wrapper: Provider,
    });

    const questionListContainer = screen.getByRole('list', { name: /faq-list/ });
    const questionItems = questionItemsIn(questionListContainer);

    expect(questionItems[0]).toHaveAttribute('aria-expanded', 'true');

    await user.click(questionItems[0]);

    expect(questionItems[0]).toHaveAttribute('aria-expanded', 'false');
  });
  it('🟢 답변이 가려진 질문을 클릭하면 질문이 보여진다.', async () => {
    const user = userEvent.setup();

    render(<FAQ />, {
      wrapper: Provider,
    });

    const questionListContainer = screen.getByRole('list', { name: /faq-list/ });
    const questionItems = questionItemsIn(questionListContainer);

    expect(questionItems[1]).toHaveAttribute('aria-expanded', 'false');

    await user.click(questionItems[1]);

    expect(questionItems[1]).toHaveAttribute('aria-expanded', 'true');
  });
  it('🟢 답변은 최대 1개만 보여준다. 유저 클릭으로 인해 답변이 1개 이상 보일 수 없다.', async () => {
    const user = userEvent.setup();

    render(<FAQ />, {
      wrapper: Provider,
    });

    const questionListContainer = screen.getByRole('list', { name: /faq-list/ });
    const questionItems = questionItemsIn(questionListContainer);

    expect(questionItems[0]).toHaveAttribute('aria-expanded', 'true');

    await user.click(questionItems[1]);

    expect(questionItems[0]).toHaveAttribute('aria-expanded', 'false');
    expect(questionItems[1]).toHaveAttribute('aria-expanded', 'true');
    questionItems.slice(2).forEach(x => {
      expect(x).toHaveAttribute('aria-expanded', 'false');
    });
  });
  it('🟢 [지원자격]탭을 클릭하면 [지원자격]질문들 항목을 표시한다.', async () => {
    const user = userEvent.setup();

    render(<FAQ />, {
      wrapper: Provider,
    });

    await user.click(screen.getByRole('tab', { name: /지원 자격/ }));

    expect(screen.getByRole('tab', { name: '지원 자격', selected: true })).toBeInTheDocument();

    expect(screen.getByRole('list', { name: /지원 자격/ })).toBeInTheDocument();
  });
  it('🟢 [면접]탭을 클릭하면 [면접]질문들 항목을 표시한다.', async () => {
    const user = userEvent.setup();

    render(<FAQ />, {
      wrapper: Provider,
    });

    await user.click(screen.getByRole('tab', { name: '면접 관련' }));

    expect(screen.getByRole('tab', { name: '면접 관련', selected: true })).toBeInTheDocument();

    expect(screen.getByRole('list', { name: /면접/ })).toBeInTheDocument();
  });
  it('🟢 [활동]탭을 클릭하면 [활동]질문들 항목을 표시한다.', async () => {
    const user = userEvent.setup();

    render(<FAQ />, {
      wrapper: Provider,
    });

    await user.click(screen.getByRole('tab', { name: '활동 관련' }));

    expect(screen.getByRole('tab', { name: '활동 관련', selected: true })).toBeInTheDocument();

    expect(screen.getByRole('list', { name: /활동/ })).toBeInTheDocument();
  });
  it('🟢 다른 탭을 클릭하면, 가장 위에 있는 질문은 답변이 보이는 상태로 렌더링한다.', async () => {
    const user = userEvent.setup();

    render(<FAQ />, {
      wrapper: Provider,
    });

    await user.click(screen.getByRole('tab', { name: '면접 관련' }));

    const questionListContainer = screen.getByRole('list', { name: /면접/ });
    const [fistQuestionItem] = questionItemsIn(questionListContainer);

    expect(fistQuestionItem).toHaveAttribute('aria-expanded', 'true');
  });
  it('🟢 다른 탭을 클릭하면, 가장 위에 있는 질문 외에 나머지 질문들은 답변이 보이지 않은 상태로 렌더링한다.', async () => {
    const user = userEvent.setup();

    render(<FAQ />, {
      wrapper: Provider,
    });

    await user.click(screen.getByRole('tab', { name: '면접 관련' }));

    const questionListContainer = screen.getByRole('list', { name: /면접/ });
    const [, ...restQuestionItems] = questionItemsIn(questionListContainer);

    restQuestionItems.forEach(x => {
      expect(x).toHaveAttribute('aria-expanded', 'false');
    });
  });
});

describe('FAQ 컴포넌트 기타 기능 테스트', () => {
  it.todo('🟢 활성화되지 않은 답변도 브라우저 검색 기능을 통해 검색되어야 한다.', () => {});
});
