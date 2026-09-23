import { css } from '@emotion/react';

import { RECRUIT } from '~/constant/recruit';
import { colors } from '~/styles/colors';
import { theme } from '~/styles/theme';

export const ValueSection = () => {
  return (
    <div css={containerStyles} data-gnb-theme="light">
      <div css={contentStyles}>
        <div css={headerContainerStyles}>
          <div css={titleStyles}>{RECRUIT.generation}기의 인재상</div>
          <div css={subtitleStyles}>디프만에서는 이런 디퍼를 찾고있어요</div>
        </div>
        <div css={cardsContainerStyles}>
          {RECRUIT.values.map(value => (
            <div key={value.id} css={valueCardStyles}>
              <div css={numberStyles}>{value.number}</div>
              <div css={titleGroupStyles}>
                <h3 css={titleEnStyles}>{value.titleEn}</h3>
                <p css={titleKoStyles}>{value.titleKo}</p>
              </div>
              {/*
                폭 구간마다 줄바꿈이 달라서, 시안이 다른 구간만 문단을 따로 두고 나머지는 숨긴다.
                display:none 은 접근성 트리에서도 빠지므로 스크린리더는 한 번만 읽는다.
              */}
              <p
                css={[
                  descriptionStyles,
                  value.descriptionMobile ? hiddenOnMobileStyles : undefined,
                  value.descriptionTablet ? hiddenOnTabletStyles : undefined,
                ]}
              >
                {value.description}
              </p>
              {value.descriptionMobile && (
                <p css={[descriptionStyles, mobileOnlyStyles]}>{value.descriptionMobile}</p>
              )}
              {value.descriptionTablet && (
                <p css={[descriptionStyles, tabletOnlyStyles]}>{value.descriptionTablet}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const containerStyles = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.v19.white100};
  padding: 60px 20px;
  gap: 40px;

  @media (min-width: 768px) {
    padding: 80px 20px;
    gap: 80px;
  }

  @media (min-width: 1280px) {
    padding: 120px 40px;
  }

  @media (min-width: 1920px) {
    padding: 160px 40px;
  }
`;

const contentStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: inherit;

  @media (min-width: 768px) {
    max-width: 696px;
  }

  @media (min-width: 1280px) {
    max-width: 880px;
  }

  @media (min-width: 1920px) {
    max-width: 1200px;
  }
`;

const headerContainerStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  text-align: center;

  @media (min-width: 768px) {
    gap: 12px;
  }
`;

const titleStyles = css`
  ${theme.typosV4.pretendard.head6};
  color: ${colors.v19.coolGray900};
  margin: 0;

  @media (min-width: 768px) {
    ${theme.typosV4.pretendard.head0};
  }
`;

const subtitleStyles = css`
  ${theme.typosV4.pretendard.sub6M};
  color: ${colors.v19.coolGray600};
  margin: 0;

  @media (min-width: 768px) {
    ${theme.typosV4.pretendard.sub1M};
  }
`;

const cardsContainerStyles = css`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  width: 100%;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const valueCardStyles = css`
  background: ${colors.v19.gradient.skyBlueWhite};
  padding: 30px;
  display: flex;
  flex-direction: column;
  min-height: 240px;

  @media (min-width: 768px) {
    min-height: 320px;
  }

  @media (min-width: 1280px) {
    min-height: 400px;
  }
`;

const numberStyles = css`
  ${theme.typosV4.instrumentSans.sub4};
  color: ${colors.v19.coolGray400};
  margin: 0 0 12px;

  @media (min-width: 768px) {
    ${theme.typosV4.instrumentSans.sub2};
    margin-bottom: 18px;
  }

  @media (min-width: 1280px) {
    ${theme.typosV4.instrumentSans.sub1};
    color: ${colors.v19.coolGray400};
    margin-bottom: 20px;
  }
`;

const titleGroupStyles = css`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;

  @media (min-width: 768px) {
    gap: 8px;
  }

  @media (min-width: 1280px) {
    gap: 10px;
  }

  @media (min-width: 1920px) {
    gap: 12px;
  }
`;

const titleEnStyles = css`
  ${theme.typosV4.instrumentSans.sub4};
  color: ${colors.v19.coolGray900};
  margin: 0;

  @media (min-width: 768px) {
    font-size: 24px;
    letter-spacing: -0.01em;
  }

  @media (min-width: 1280px) {
    ${theme.typosV4.instrumentSans.head5};
    color: ${colors.v19.coolGray900};
  }
`;

const titleKoStyles = css`
  font-family: 'Pretendard', sans-serif;
  font-size: 22px;
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: 0.01em;
  color: ${colors.v19.blue500};
  margin: 0;

  @media (min-width: 768px) {
    font-size: 26px;
  }
`;

const descriptionStyles = css`
  /* 위쪽 auto 여백이 설명을 카드 바닥으로 민다. */
  margin: auto 0 0;
  font-family: 'Pretendard', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  color: ${colors.v19.coolGray900};

  @media (min-width: 768px) {
    font-size: 18px;
  }

  @media (min-width: 1280px) {
    font-size: 24px;
  }

  /**
   * 768~1919px 구간에서만 확정된 줄바꿈(description의 \n)을 그대로 쓴다.
   * 이 폭에서는 카드가 좁아 자연 줄바꿈이 시안과 어긋난다.
   * 1920 이상·767 이하는 normal이라 \n이 공백으로 접히고 자연 줄바꿈이 유지된다.
   */
  @media (min-width: 768px) and (max-width: 1919px) {
    white-space: pre-line;
  }
`;

/** 그 구간의 시안 줄바꿈이 `description`과 다를 때만 쓰는 대체 문단. */
const mobileOnlyStyles = css`
  display: none;

  @media (max-width: 767px) {
    display: block;
    white-space: pre-line;
  }
`;

const tabletOnlyStyles = css`
  display: none;

  @media (min-width: 768px) and (max-width: 1279px) {
    display: block;
    white-space: pre-line;
  }
`;

/** 대체 문단이 있는 구간에서는 기본 문단을 숨긴다. */
const hiddenOnMobileStyles = css`
  @media (max-width: 767px) {
    display: none;
  }
`;

const hiddenOnTabletStyles = css`
  @media (min-width: 768px) and (max-width: 1279px) {
    display: none;
  }
`;
