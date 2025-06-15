import { css } from '@emotion/react';
import { motion } from 'framer-motion';

import { QUANTIFIED_INFO } from '~/constant/aboutInfo';
import { colors } from '~/styles/colors';
import { mediaQuery } from '~/styles/media';
import { theme } from '~/styles/theme';

export const ResultCardList = () => {
  return (
    <div css={containerCss}>
      {QUANTIFIED_INFO.map(({ label, number, unit }, idx) => (
        <div css={cardCss} key={label}>
          <p css={textCss.wrapper}>
            <span css={textCss.number}>
              {String(number)
                .split('')
                .map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{
                      delay: 0.2 + index * 0.1,
                      duration: 0,
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
            </span>
            <span
              css={[
                textCss.unit,
                idx === 0 &&
                  css`
                    font-family: MartianMono;
                    font-size: 45px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 111%;
                    letter-spacing: -1.8px;
                  `,
              ]}
            >
              {unit}
            </span>
          </p>
          <p css={textCss.label}>{label}</p>
        </div>
      ))}
      {Array.from({ length: 4 }).map((_, idx) => (
        <span className="square" key={idx} />
      ))}
    </div>
  );
};

const containerCss = css`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 67px;
  height: 240px;
  padding: 40px 48px;
  margin: 0 40px;
  border: 1px solid ${theme.colors.primary.blue};
  background: ${theme.colors.primary.gray};
  box-shadow: 0px 0px 8px 0px rgba(24, 86, 255, 0.14);

  ${mediaQuery('tablet')} {
    grid-template-columns: repeat(2, 1fr);
    height: auto;
  }

  ${mediaQuery('mobile')} {
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    height: auto;
    padding: 0 24px;
  }

  .square {
    position: absolute;
    width: 12.662px;
    height: 12.662px;
    background: ${theme.colors.primary.blue};
    box-shadow: 0px 0px 4px 0px rgba(30, 90, 255, 0.4);

    &:nth-of-type(1) {
      top: 0;
      left: 0;
      transform: translate(-50%, -50%);
    }

    &:nth-of-type(2) {
      top: 0;
      right: 0;
      transform: translate(50%, -50%);
    }

    &:nth-of-type(3) {
      bottom: 0;
      left: 0;
      transform: translate(-50%, 50%);
    }

    &:nth-of-type(4) {
      bottom: 0;
      right: 0;
      transform: translate(50%, 50%);
    }
  }
`;

const cardCss = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;

  ${mediaQuery('tablet')} {
    width: 234px;
    height: 226px;
  }

  ${mediaQuery('mobile')} {
    gap: 18px;
    width: auto;
    height: auto;
  }
`;

const textCss = {
  wrapper: css`
    display: flex;
    align-items: center;
    color: ${colors.primary.darknavy};
  `,
  label: css`
    color: #445071;
    ${theme.typosV3.pretendard.sub1Semibold};

    ${mediaQuery('mobile')} {
      ${theme.typosV3.pretendard.sub1Semibold};
      line-height: 150%;
    }
  `,
  number: css`
    ${theme.typosV3.DMMono.Number1};

    ${mediaQuery('mobile')} {
      ${theme.typosV3.DMMono.Number1};
    }
  `,
  unit: css`
    ${theme.typosV3.DMMono.Number1};

    ${mediaQuery('mobile')} {
      ${theme.typosV3.DMMono.Number1};
    }
  `,
};
