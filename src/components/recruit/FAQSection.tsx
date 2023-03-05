import { useState } from 'react';
import Link from 'next/link';
import { css } from '@emotion/react';

import { colors, mediaQuery } from '~/styles/constants';
import { section40HeadingCss, sectionSmallCss } from '~/styles/css';

import { FAQ, FAQ_TYPE, FAQ_TYPE_LABEL, FaqType } from './contstants';
import { sectionCss, sectionHeadingCss } from './Recurit.style';
import { ClickableButton } from '../common/Clickable';
import { AnswerIcon, DropdownIcon, QuestionIcon } from '../common/icons';

const faqTypes = Object.keys(FAQ_TYPE) as FaqType[];

export default function FAQSection() {
  const [faqType, setFaqType] = useState<FaqType>(FAQ_TYPE.REQUIREMENT);
  const [selectedFaqItem, setSelectedFaqItem] = useState(0);

  return (
    <section css={sectionCss}>
      <div css={sectionHeadingCss}>
        <p css={sectionSmallCss}>FAQ</p>
        <h2 css={section40HeadingCss}>자주 묻는 질문</h2>
      </div>
      <div css={faqLayoutBox}>
        <ul css={faqLayoutAside}>
          {faqTypes.map(key => (
            <li key={`faq-type-category-${key}`}>
              <ClickableButton
                css={faqCategoryButtonCss(faqType === FAQ_TYPE[key])}
                onClick={() => {
                  setFaqType(FAQ_TYPE[key]);
                  setSelectedFaqItem(0);
                }}
              >
                {FAQ_TYPE_LABEL[key]}
              </ClickableButton>
            </li>
          ))}
        </ul>
        <ul css={faqLayoutContent}>
          {FAQ[faqType].map((item, index) => (
            <li
              key={`recruitment-list-${faqType}-${index}`}
              css={faqItem(selectedFaqItem === index)}
              onClick={() => {
                setSelectedFaqItem(index);
              }}
            >
              <ClickableButton>
                <dt>
                  <QuestionIcon width={24} height={24} />
                  {item.title}
                  <div css={faqItemDrowpdownIcon(selectedFaqItem === index)}>
                    <DropdownIcon width={24} height={24} />
                  </div>
                </dt>
                <dd>
                  <AnswerIcon width={24} height={24} /> {item.description}
                </dd>
              </ClickableButton>
            </li>
          ))}
        </ul>
        <div css={faqDescription}>
          <div css={faqDescriptionIcon}>*</div>
          <p>
            찾으시는 내용이 없으신가요?
            <br />
            카카오톡 채널
            <Link target="_blank" rel="noopener noreferrer" href="https://pf.kakao.com/_xoxmcxed">
              &nbsp;@depromeet&nbsp;
            </Link>
            으로 <br /> 궁금한 점을 전달해 주세요.
          </p>
          <small>(18시 이후 답변)</small>
        </div>
      </div>
    </section>
  );
}

const faqLayoutBox = css`
  position: relative;
  display: flex;
  width: 100%;

  ${mediaQuery('xs')} {
    flex-direction: column;
  }
`;

const faqLayoutAside = css`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  width: calc((1200 - 876) / 1200 * 100%);

  ${mediaQuery('xs')} {
    justify-content: center;
    flex-direction: row;
    column-gap: 40px;
    width: 100%;

    margin-bottom: 30px;
  }
`;

const faqDescription = css`
  position: absolute;
  left: 0;
  top: 247px;
  width: calc((1200 - 876) / 1200 * 100%);
  padding-right: 30px;

  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  letter-spacing: -0.3px;
  color: ${colors.gray900};

  a {
    color: ${colors.point};
    text-decoration: underline;
  }

  small {
    color: ${colors.gray500};
  }

  ${mediaQuery('xs')} {
    width: 100%;
    margin-top: 30px;
    padding-right: 0;
    position: unset;
    text-align: center;
  }
`;

const faqDescriptionIcon = css`
  font-weight: 500;
  font-size: 26px;
  line-height: 31px;
  letter-spacing: -0.3px;
  color: ${colors.point};
`;

const faqLayoutContent = css`
  border-top: solid 1px ${colors.black};
  width: calc(876 / 1200 * 100%);

  ${mediaQuery('xs')} {
    width: 100%;
  }
`;

const faqItem = (selected = false) => css`
  position: relative;
  padding: 20px 10px;
  border-bottom: solid 1px ${colors.black};
  height: fit-content;
  min-height: 65px;

  dt {
    display: flex;
    align-items: flex-start;
    text-align: left;

    padding-right: 38px;
    font-weight: 600;
    font-size: 18px;
    line-height: 140%;
    letter-spacing: -0.3px;
    color: ${colors.black};
  }

  dd {
    display: ${selected ? 'flex' : 'none'};
    align-items: flex-start;
    text-align: left;

    margin-top: 11px;

    font-weight: 600;
    font-size: 18px;
    line-height: 140%;
    letter-spacing: -0.3px;
    color: #71727a;
  }

  svg {
    margin-right: 12px;
    flex-shrink: 0;
  }

  ${mediaQuery('xs')} {
    dd {
      margin-top: 22px;
    }
  }
`;

const faqItemDrowpdownIcon = (selected = false) => css`
  position: absolute;
  top: 20px;
  right: 10px;
  transform: rotate(${selected ? '180deg' : '0deg'});
  line-height: 0;

  svg {
    margin: 0;
  }
`;

const faqCategoryButtonCss = (selected = false) => css`
  font-weight: 600;
  font-size: ${selected ? '24px' : '20px'};
  line-height: 28px;
  letter-spacing: -0.3px;
  color: ${colors.black};
  text-decoration: ${selected ? 'underline' : 'none'};

  ${mediaQuery('xs')} {
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: ${selected ? colors.point : '${colors.black}'};
  }
`;
