import { css } from '@emotion/react';
import { motion } from 'framer-motion';

import { colors } from '~/styles/colors';
import { mediaQuery } from '~/styles/media';

export const BrandingSection = () => {
  return (
    <section css={sectionCss}>
      <div css={contentCss}>
        <motion.h2
          css={headingCss}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          Connect the ring
        </motion.h2>
        <motion.h2
          css={headingCss}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Find your key
        </motion.h2>
        <motion.p
          css={subheadingCss}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          연결의 가치를 성장의 열쇠로
        </motion.p>
      </div>
    </section>
  );
};

const sectionCss = css`
  width: 100%;
  padding: 120px 40px;
  background: ${colors.grey18['00']};

  ${mediaQuery('mobile')} {
    padding: 80px 20px;
  }
`;

const contentCss = css`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const headingCss = css`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 80px;
  font-weight: 400;
  line-height: 1.2;
  color: ${colors.primary18.strong};
  text-align: center;
  letter-spacing: -0.02em;

  ${mediaQuery('tablet')} {
    font-size: 60px;
  }

  ${mediaQuery('mobile')} {
    font-size: 40px;
  }
`;

const subheadingCss = css`
  margin-top: 24px;
  font-family: Pretendard, sans-serif;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.5;
  color: ${colors.primary18.strong};
  text-align: center;

  ${mediaQuery('tablet')} {
    font-size: 20px;
  }

  ${mediaQuery('mobile')} {
    font-size: 16px;
    margin-top: 16px;
  }
`;
