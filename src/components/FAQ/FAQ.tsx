import { useState } from 'react';
import { css, Theme } from '@emotion/react';

import { FAQList } from '~/components/FAQ/FAQList';
import { SectionTitle } from '~/components/SectionTitle';
import { FAQ_GROUP, FAQGroupType, FAQS, FAQType } from '~/constant/faq';

export function FAQ() {
  const [activeTab, setActiveTab] = useState<FAQGroupType>('지원자격');

  const onClickTab = (target: FAQGroupType) => {
    setActiveTab(target);
  };

  const isActive = (target: FAQGroupType) => activeTab === target;

  return (
    <div css={layoutCss}>
      <SectionTitle label="FAQ" title="자주 묻는 질문" />
      <ul css={tabLayoutCss}>
        {FAQ_GROUP.map(label => (
          <li
            key={label}
            onClick={() => onClickTab(label)}
            css={theme => tabCss(theme, isActive(label))}
          >
            {label}
          </li>
        ))}
      </ul>
      <FAQList FAQList={QuestionsMap[activeTab]} />
    </div>
  );
}

const 지원자격질문들 = FAQS.filter(x => x.group === '지원자격');

const 면접질문들 = FAQS.filter(x => x.group === '면접');

const 활동질문들 = FAQS.filter(x => x.group === '활동');

const QuestionsMap: Record<FAQGroupType, FAQType[]> = {
  지원자격: 지원자격질문들,
  면접: 면접질문들,
  활동: 활동질문들,
};

const layoutCss = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const tabLayoutCss = css`
  display: flex;
  > li:first-child {
    padding-left: 0px;
  }
`;

const tabCss = (theme: Theme, isActive: boolean) => css`
  ${theme.typos.pretendard.subTitle2}
  color: ${isActive ? theme.colors.yellow500 : theme.colors.white};
  cursor: pointer;
  padding: 16px 24px;
`;
