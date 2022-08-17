import { useState } from 'react';
import { css } from '@emotion/react';

import Button from '~/components/common/Button';

import { FAQ, FAQ_TYPE } from './constants';

export default function FaqSection() {
  const [currentTab, setCurrentTab] = useState<string>(FAQ_TYPE.REQUIREMENT);

  return (
    <section css={sectionCss}>
      <h3 css={headingCss}>자주 묻는 질문</h3>
      <p css={descriptionCss}>
        {/* TODO: 카카오 링크 걸기 */}
        찾으시는 내용이 없다면 디프만 카카오톡 채널 (<a href="none">@depromeet</a>)으로 궁금한 점을
        전달해 주세요.
      </p>
      <div css={tabContainerCss}>
        <Button
          isActive={currentTab === FAQ_TYPE.REQUIREMENT}
          onClick={() => {
            setCurrentTab(FAQ_TYPE.REQUIREMENT);
          }}
        >
          지원 자격
        </Button>
        <Button
          isActive={currentTab === FAQ_TYPE.INTERVIEW}
          onClick={() => {
            setCurrentTab(FAQ_TYPE.INTERVIEW);
          }}
        >
          면접 관련
        </Button>
        <Button
          isActive={currentTab === FAQ_TYPE.ACTIVITY}
          onClick={() => {
            setCurrentTab(FAQ_TYPE.ACTIVITY);
          }}
        >
          활동 관련
        </Button>
      </div>
      <ul css={faqListCss}>
        {FAQ[currentTab].map((faq, index) => (
          <li css={faqCss} key={`faq_${index}`}>
            <dt>
              <em>Q. </em>
              {faq.title}
            </dt>
            <dd>{faq.description}</dd>
          </li>
        ))}
      </ul>
    </section>
  );
}

const sectionCss = css`
  width: 100%;
  margin-bottom: 120px;
`;

const headingCss = css`
  font-weight: 700;
  font-size: 42px;
  line-height: 140%;
`;

const descriptionCss = css`
  margin-top: 12px;

  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  color: #cbcad1;
`;

const tabContainerCss = css`
  display: flex;
  gap: 0 40px;

  margin-top: 60px;
`;

const faqListCss = css`
  margin-top: 60px;
`;

const faqCss = css`
  margin-bottom: 60px;

  em {
    font-style: normal;
    color: #5e8bff;
  }

  dt {
    font-weight: 600;
    font-size: 26px;
    line-height: 150%;
  }

  dd {
    font-weight: 400;
    font-size: 20px;
    line-height: 150%;
    color: #82818d;
  }
`;
