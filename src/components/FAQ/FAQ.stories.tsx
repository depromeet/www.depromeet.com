/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
import { Meta } from '@storybook/react';

import { FAQItem } from '~/components/FAQ/FAQItem';
import { FAQList } from '~/components/FAQ/FAQList';
import { FAQS } from '~/constant/faq';

import { FAQ } from './index';

const meta: Meta<typeof FAQ> = {
  title: 'components/FAQ',
};

export default meta;

export const Primary = {
  render: () => (
    <div css={{ backgroundColor: 'black' }}>
      <FAQ />
    </div>
  ),
};

export const List = {
  render: () => <FAQList FAQList={FAQS} />,
};

export const Interaction = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    const onClickOpenButton = () => {
      setIsOpen(prev => !prev);
    };

    return (
      <FAQItem
        isOpen={isOpen}
        onClickOpenButton={onClickOpenButton}
        question={FAQS[0].question}
        answer={FAQS[0].answer}
      />
    );
  },
};

export const Close = {
  render: () => (
    <FAQItem
      isOpen={false}
      onClickOpenButton={() => {}}
      question={FAQS[0].question}
      answer={FAQS[0].answer}
    />
  ),
};

export const Open = {
  render: () => (
    <FAQItem
      isOpen={true}
      onClickOpenButton={() => {}}
      question={FAQS[0].question}
      answer={FAQS[0].answer}
    />
  ),
};
