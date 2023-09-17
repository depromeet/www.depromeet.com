import { useState } from 'react';

import { FAQItem } from '~/components/FAQ/FAQItem';
import { FAQType } from '~/constant/faq';

interface FAQListProps {
  FAQList: FAQType[];
}

const DEFAULT_OPEN = 0;
const CLOSE = -1;

export function FAQList({ FAQList }: FAQListProps) {
  const [activeIndex, setActiveIndex] = useState(DEFAULT_OPEN);

  const onClickActiveFaq = (idx: number) => {
    /**
     * 열려 있는 아이템 다시 클릭하면 닫히게 하기
     */
    setActiveIndex(prev => (prev === idx ? CLOSE : idx));
  };

  return (
    <ul>
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
