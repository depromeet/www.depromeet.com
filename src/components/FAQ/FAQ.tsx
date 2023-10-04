import { useState } from 'react';
import { css, Theme } from '@emotion/react';

import { FAQList } from '~/components/FAQ/FAQList';
import { SectionTitle } from '~/components/SectionTitle';
import { FAQ_GROUP, FAQGroupType, FAQS } from '~/constant/faq';
import { SwitchCase } from '~/hocs/SwitchCase';
import { commonLayoutCss } from '~/styles/layout';
import { mediaQuery } from '~/styles/media';

export function FAQ() {
  const [activeTab, setActiveTab] = useState<FAQGroupType>('지원자격');

  const onClickTab = (target: FAQGroupType) => {
    setActiveTab(target);
  };

  const isActive = (target: FAQGroupType) => activeTab === target;

  return (
    <section css={layoutCss}>
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
      <SwitchCase
        value={activeTab}
        caseBy={{
          지원자격: <FAQList FAQList={지원자격질문들} />,
          면접: <FAQList FAQList={면접질문들} />,
          활동: <FAQList FAQList={활동질문들} />,
        }}
        defaultComponent={<FAQList FAQList={지원자격질문들} />}
      />
    </section>
  );
}

const 지원자격질문들 = FAQS.filter(x => x.group === '지원자격');

const 면접질문들 = FAQS.filter(x => x.group === '면접');

const 활동질문들 = FAQS.filter(x => x.group === '활동');

const layoutCss = css`
  ${commonLayoutCss}
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const tabLayoutCss = css`
  display: flex;
  > li:first-child {
    padding-left: 0px;
  }
  ${mediaQuery('tablet')} {
    justify-content: center;
  }
`;

const tabCss = (theme: Theme, isActive: boolean) => css`
  ${theme.typos.pretendard.subTitle2}
  color: ${isActive ? theme.colors.yellow500 : theme.colors.white};
  cursor: pointer;
  padding: 16px 24px;

  ${mediaQuery('mobile')} {
    font-size: 14px;
    padding: 8px 12px;
  }
`;
