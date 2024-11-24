import { css, Theme } from '@emotion/react';
import { motion, Variants } from 'framer-motion';

import { mediaQuery } from '~/styles/media';

import { NarrowArrowIcon } from '../Icons';

interface FAQItemProps {
  isOpen: boolean;
  onClickOpenButton: () => void;
  question: string;
  answer: string;
}

export function FAQItem({ isOpen, onClickOpenButton, question, answer }: FAQItemProps) {
  return (
    <li role="button" aria-expanded={isOpen} onClick={onClickOpenButton} css={liCss}>
      <motion.div
        css={theme => headerCss(theme, isOpen)}
        animate={isOpen ? 'open' : 'closed'}
        variants={headerVariants}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <h4>{question}</h4>
        <motion.div
          variants={arrowIconVariants}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          css={theme => arrowContainerCss(theme, isOpen)}
        >
          <NarrowArrowIcon
            direction={isOpen ? 'up' : 'down'}
            color={isOpen ? '' : '#FFFFFF'}
            fill={isOpen ? '' : '#FFFFFF'}
          />
        </motion.div>
      </motion.div>
      <motion.div
        css={bodyCss}
        animate={isOpen ? 'open' : 'closed'}
        variants={bodyVariants}
        transition={{ duration: 0.3, height: 0, ease: 'easeOut' }}
      >
        <p>{answer}</p>
      </motion.div>
    </li>
  );
}

const headerVariants: Variants = {
  open: { backgroundColor: 'black' },
  closed: { backgroundColor: 'white' },
};

const bodyVariants: Variants = {
  initial: { opacity: 0, height: 0, display: 'none' },
  open: { opacity: 1, height: 'fit-content', display: 'block' },
  closed: { opacity: 0, height: 0, display: 'none' },
};

const arrowIconVariants: Variants = {
  open: { stroke: 'black' },
  closed: { stroke: 'white' },
};

const liCss = css`
  cursor: pointer;
`;

const headerCss = (theme: Theme, isOpen: boolean) => css`
  background-color: ${isOpen ? 'black' : 'white'};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 30px;
  border-radius: ${isOpen ? '12px 12px 0 0' : '12px'};

  > h4 {
    color: ${isOpen ? 'white' : 'black'};
    text-align: center;
    ${theme.typosV2.pretendard.regular16}
  }

  ${mediaQuery('mobile')} {
    padding: 12px;

    > h4 {
      ${theme.typosV2.pretendard.regular14}
    }
  }
`;

const arrowContainerCss = (theme: Theme, isOpen: boolean) => css`
  border-radius: 400px;
  width: 24px;
  height: 24px;
  background-color: ${isOpen ? 'white' : 'black'};
`;

const bodyCss = (theme: Theme) => css`
  background-color: white;
  border-radius: 0 0 12px 12px;
  > p {
    padding: 12px 30px;
    color: black;
    ${theme.typosV2.pretendard.regular16};
  }
  ${mediaQuery('mobile')} {
    > p {
      padding: 12px;
      ${theme.typosV2.pretendard.regular14}
    }
  }
`;
