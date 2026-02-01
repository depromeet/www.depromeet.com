import { css } from '@emotion/react';

import { mediaQuery } from '~/styles/media';
import { theme } from '~/styles/theme';

const CARD_GRADIENT_START = '#DFEEFE';
const CARD_GRADIENT_END = '#F9FBFF';

export const ValueSection = () => {
  const values = [
    {
      id: 'responsibility',
      number: '01',
      title: '책임감',
      subtitle: 'Responsibility',
      description: '맡은 일의 크기와 상관없이\n끝까지 완수하려는 태도',
    },
    {
      id: 'ownership',
      number: '02',
      title: '오너쉽',
      subtitle: 'Ownership',
      description: '문제와 결과를 내 일처럼\n받아들이는 태도',
    },
    {
      id: 'flexibility',
      number: '03',
      title: '유연성',
      subtitle: 'Flexibility',
      description: '완벽한 계획보다 빠른 실행과\n실험을 통해 배우는 태도',
    },
  ];

  return (
    <div css={containerStyles}>
      <div css={contentStyles}>
        <div css={headerContainerStyles}>
          <div css={titleStyles}>18기의 인재상</div>
          <div css={subtitleStyles}>디프만은 이런 디퍼를 원해요</div>
        </div>
        <div css={cardsContainerStyles}>
          {values.map(value => (
            <div key={value.id} css={valueCardStyles}>
              <div css={numberStyles}>{value.number}</div>
              {/* <div css={cardImagePlaceholderStyles}></div> */}
              <h3 css={semititleStyles}>{value.title}</h3>
              <p css={cardSubtitleStyles}>{value.subtitle}</p>
              <p css={descriptionStyles}>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const containerStyles = css`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 0 auto;
  padding: 120px 20px;
  background-color: #ffffff;

  ${mediaQuery('tablet')} {
    overflow-x: hidden;
    overflow-y: hidden;
    padding: 120px 20px 200px 20px;
  }
  ${mediaQuery('mobile')} {
    padding: 120px 20px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 50px;
    width: 282px;
    height: 282px;
    z-index: 0;
    opacity: 1;

    ${mediaQuery('mobile')} {
      display: none;
    }
    ${mediaQuery('tablet')} {
      top: 0;
      right: -50px;
      width: 280px;
      height: 280px;
    }
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -120px;
    left: -50px;
    width: 312px;
    height: 312px;
    z-index: 3;
    opacity: 1;

    ${mediaQuery('tablet')} {
      bottom: 0px;
      left: -60px;
      width: 260px;
      height: 260px;
    }

    ${mediaQuery('mobile')} {
      width: 200px;
      height: 200px;
      bottom: -20px;
      left: -50px;
    }
  }
`;

const contentStyles = css`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  max-width: 1100px;
  align-items: center;

  ${mediaQuery('mobile')} {
    gap: 30px;
  }
`;

const headerContainerStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  text-align: center;
`;

const titleStyles = css`
  ${theme.typosV3.pretendard.head1};
  font-size: 36px;
  font-weight: 600;
  margin: 0;
  color: ${theme.colors.primary.darknavy};

  ${mediaQuery('mobile')} {
    font-size: 28px;
  }
`;

const subtitleStyles = css`
  ${theme.typosV3.pretendard.sub1Semibold};
  font-size: 24px;
  font-weight: 500;
  margin: 0;
  color: ${theme.colors.grey18[600]};

  ${mediaQuery('mobile')} {
    font-size: 18px;
  }
`;

const cardsContainerStyles = css`
  display: grid;
  grid-template-columns: repeat(3, 392px);
  gap: 12px;
  width: 100%;
  justify-content: center;

  @media (min-width: 1280px) and (max-width: 1919px) {
    grid-template-columns: repeat(3, 285px);
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    grid-template-columns: repeat(3, 224px);
  }

  @media (min-width: 360px) and (max-width: 767px) {
    grid-template-columns: 320px;
  }
`;

const valueCardStyles = css`
  background: linear-gradient(to bottom right, ${CARD_GRADIENT_START}, ${CARD_GRADIENT_END});
  clip-path: polygon(70px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 70px);
  border-radius: 16px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 8px;
  position: relative;
  width: 392px;
  height: 400px;

  @media (min-width: 1280px) and (max-width: 1919px) {
    width: 285px;
    height: 380px;
    padding: 32px;
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    width: 224px;
    height: 320px;
    padding: 28px;
    border-radius: 12px;
  }

  @media (min-width: 360px) and (max-width: 767px) {
    width: 320px;
    height: 320px;
    padding: 28px;
    border-radius: 12px;
  }
`;

const numberStyles = css`
  font-family: 'Helvetica Neue', sans-serif;
  font-size: 40px;
  font-weight: 700;
  color: ${theme.colors.grey18[400]};
  line-height: 1.4;
  letter-spacing: -0.4px;
  position: absolute;
  top: 20px;
  right: 42.5px;
  transform: translateX(50%);
  text-align: center;

  @media (min-width: 768px) and (max-width: 1279px) {
    font-size: 32px;
    line-height: 1.2;
    right: 38px;
  }
`;

const semititleStyles = css`
  font-family: 'Pretendard', sans-serif;
  font-size: 36px;
  font-weight: 700;
  color: ${theme.colors.primary18.strong};
  margin: 0;
  line-height: 1.4;
  letter-spacing: -0.36px;

  @media (min-width: 768px) and (max-width: 1279px) {
    font-size: 32px;
    letter-spacing: -0.64px;
  }
`;

const cardSubtitleStyles = css`
  font-family: 'Helvetica Neue', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: ${theme.colors.grey18[900]};
  margin: 0;
  line-height: 1.4;

  @media (min-width: 768px) and (max-width: 1279px) {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.6;
    letter-spacing: -0.18px;
  }
`;

const descriptionStyles = css`
  font-family: 'Pretendard', sans-serif;
  font-size: 24px;
  font-weight: 500;
  color: ${theme.colors.grey18[900]};
  margin: 0;
  line-height: 1.4;
  white-space: pre-line;

  @media (min-width: 768px) and (max-width: 1279px) {
    font-size: 18px;
  }
`;
