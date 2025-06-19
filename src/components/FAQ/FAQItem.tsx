import { css, Theme } from '@emotion/react';
import { motion, Variants } from 'framer-motion';

import { Icon } from '~/components/Icon/Icon';
import { theme } from '~/styles/theme';

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
          <Icon icon={isOpen ? 'arrow_white' : 'arrow_blue'} size={24} />
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
  open: { backgroundColor: theme.colors.primary.blue },
  closed: { backgroundColor: theme.colors.primary.gray },
};

const bodyVariants: Variants = {
  initial: { opacity: 0, height: 0, display: 'none' },
  open: { opacity: 1, height: 'fit-content', display: 'block' },
  closed: { opacity: 0, height: 0, display: 'none' },
};

const arrowIconVariants: Variants = {
  open: { backgroundColor: theme.colors.primary.blue },
  closed: { backgroundColor: theme.colors.primary.gray },
};

const liCss = css`
  cursor: pointer;
`;

const headerCss = (theme: Theme, isOpen: boolean) => css`
  background-color: ${isOpen ? theme.colors.primary.gray : theme.colors.primary.blue};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 30px;
  border: 1px solid ${theme.colors.primary.blue};
  > h4 {
    color: ${isOpen ? 'white' : 'black'};
    text-align: left;
    ${theme.typosV2.pretendard.medium16}
  }
`;

const arrowContainerCss = () => css`
  border-radius: 400px;
  width: 24px;
  height: 24px;
`;

const bodyCss = (theme: Theme) => css`
  background-color: white;
  border: 1px solid ${theme.colors.primary.blue};

  > p {
    padding: 16px 30px;
    color: black;
    ${theme.typosV2.pretendard.medium16};
  }
`;
