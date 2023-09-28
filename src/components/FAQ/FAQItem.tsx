import { css, Theme } from '@emotion/react';
import { motion, Variants } from 'framer-motion';

import { ArrowIcon } from '~/components/Icons';
import { mediaQuery } from '~/styles/media';
import { theme } from '~/styles/theme';

interface FAQItemProps {
  isOpen: boolean;
  onClickOpenButton: () => void;
  question: string;
  answer: string;
}

export function FAQItem({ isOpen, onClickOpenButton, question, answer }: FAQItemProps) {
  return (
    <li>
      <motion.div
        css={theme => headerCss(theme, isOpen)}
        animate={isOpen ? 'open' : 'closed'}
        variants={headerVariants}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        onClick={onClickOpenButton}
      >
        <h3>{question}</h3>
        <motion.div variants={arrowIconVariants} transition={{ duration: 0.3, ease: 'easeOut' }}>
          <ArrowIcon
            direction={isOpen ? 'up' : 'down'}
            css={theme => arrowIconCss(theme, isOpen)}
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
  open: { backgroundColor: theme.colors.blue400 },
  closed: { backgroundColor: theme.colors.black400 },
};

const bodyVariants: Variants = {
  initial: { opacity: 0, height: 0, display: 'none' },
  open: { opacity: 1, height: 'fit-content', display: 'block' },
  closed: { opacity: 0, height: 0, display: 'none' },
};

const arrowIconVariants: Variants = {
  open: { stroke: theme.colors.black800 },
  closed: { stroke: theme.colors.blue400 },
};

const headerCss = (theme: Theme, isOpen: boolean) => css`
  background-color: ${isOpen ? theme.colors.blue400 : theme.colors.black400};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 30px;
  cursor: pointer;
  > h3 {
    color: ${isOpen ? theme.colors.black800 : theme.colors.white};
    text-align: center;
    ${theme.typos.pretendard.subTitle2}
  }

  ${mediaQuery('mobile')} {
    padding: 8px;

    > h3 {
      font-weight: 500;
      font-size: 14px;
    }
  }
`;

const arrowIconCss = (theme: Theme, isOpen: boolean) => css`
  > path {
    stroke: ${isOpen ? theme.colors.black800 : theme.colors.blue400};
  }

  ${mediaQuery('mobile')} {
    width: 24px;
    height: 24px;
  }
`;

const bodyCss = (theme: Theme) => css`
  background-color: ${theme.colors.black800};
  > p {
    padding: 40px;
    color: ${theme.colors.white};
    ${theme.typos.pretendard.body1};
  }
  ${mediaQuery('mobile')} {
    > p {
      padding: 20px 8px;

      font-size: 14px;
    }
  }
`;
