import { useEffect, useState } from 'react';
import { css } from '@emotion/react';

import { FAQItem } from '~/components/FAQ/FAQItem';
import { FAQType } from '~/constant/faq';
import { mediaQuery } from '~/styles/media';

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

  useEffect(() => {
    setActiveIndex(DEFAULT_OPEN);
  }, []);

  return (
    <ul css={containerCss}>
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
