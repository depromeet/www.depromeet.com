import { HTMLProps, useEffect, useState } from 'react';
import { css } from '@emotion/react';

import { FAQItem } from '~/components/FAQ/FAQItem';
import { FAQType } from '~/constant/faq';
import { mediaQuery } from '~/styles/media';

interface FAQListProps extends HTMLProps<HTMLUListElement> {
  FAQList: FAQType[];
  label: string;
}

const DEFAULT_OPEN_IDX = 0;
const CLOSE_IDX = -1;

export function FAQList({ FAQList, label, ...props }: FAQListProps) {
  const [activeIndex, setActiveIndex] = useState(DEFAULT_OPEN_IDX);

  const onClickActiveFaq = (idx: number) => {
    /**
     * 열려 있는 아이템 다시 클릭하면 닫히게 하기
     */
    setActiveIndex(prev => (prev === idx ? CLOSE_IDX : idx));
  };

  useEffect(() => {
    setActiveIndex(DEFAULT_OPEN_IDX);
  }, []);

  return (
    <ul aria-label={`faq-list-${label}`} css={containerCss} {...props}>
      {FAQList.map((item, index) => (
        <FAQItem
          key={item.question}
          isOpen={activeIndex === index}
          onClickOpenButton={() => onClickActiveFaq(index)}
          {...item}
        />
      ))}
    </ul>
  );
}

const containerCss = css`
  display: flex;
  flex-direction: column;
  gap: 16px;

  ${mediaQuery('mobile')} {
    gap: 8px;
  }
`;
