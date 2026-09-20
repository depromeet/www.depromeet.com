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
              <p css={descriptionStyles}>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Figma `203:2392`(1920) · `203:3061`(360)
const containerStyles = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.v19.white100};
  padding: 60px 20px;
  gap: 40px;

  @media (min-width: 768px) {
    padding: 100px 20px;
    gap: 60px;
  }

  @media (min-width: 1280px) {
    padding: 130px 40px;
    gap: 70px;
  }

  @media (min-width: 1920px) {
    padding: 160px 40px;
    gap: 80px;
  }
`;

/*
 * 콘텐츠 폭은 단계마다 시안 실측값이다 — 한 값으로 고정하면 안 된다.
 *   360 320  ·  768 696  ·  1280 880  ·  1920 1200
 * 같은 모집안내 페이지 안에서도 섹션마다 다르다(모집일정은 1280에서도 1200).
 * 카드 폭은 이 폭에서 파생된다: (폭 - gap 24) / 3 = 224 / 285 / 392.
 */
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
  font-family: 'Pretendard', sans-serif;
  font-size: 22px;
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: 0.01em;
  color: ${colors.v19.coolGray900};
  margin: 0;

  @media (min-width: 768px) {
    font-size: 26px;
  }

  @media (min-width: 1280px) {
    font-size: 32px;
  }

  @media (min-width: 1920px) {
    font-size: 40px;
  }
`;

const subtitleStyles = css`
  font-family: 'Pretendard', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  color: ${colors.v19.coolGray600};
  margin: 0;

  @media (min-width: 768px) {
    font-size: 16px;
  }

  @media (min-width: 1280px) {
    font-size: 20px;
  }

  @media (min-width: 1920px) {
    font-size: 24px;
  }
`;

const cardsContainerStyles = css`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  width: 100%;

  /* minmax(0, 1fr) — 그냥 1fr이면 줄바꿈 없는 긴 설명 한 줄이 열을 밀어 넓혀서
     세 칸의 폭이 서로 달라진다(768에서 229/222/222로 벌어졌다). */
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

/**
 * 시안 `203:2392` — 모서리 각짐. 번호와 제목 묶음은 위에 붙고 설명만 바닥에 붙는다.
 * `space-between`으로 세 덩어리를 고르게 펴면 제목이 카드 한가운데로 떠서 형태가 달라진다.
 *
 * 높이도 실측값이다(240 / 320 / 400 / 400). 1280과 1920이 같은 400이라 폭에 비례하는
 * 값이 아니라 단계마다 정해진 값이다 — 비례로 추정했던 280·340은 40~60px 낮았다.
 * `height`가 아니라 `min-height`인 이유는, 설명이 한 줄 더 늘어나는 폭에서 글자가 잘리는
 * 대신 카드가 늘어나게 하기 위해서다(그리드라 같은 행은 함께 늘어난다).
 */
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
    ${theme.typosV4.instrumentSans.sub3};
    margin-bottom: 14px;
  }

  @media (min-width: 1280px) {
    ${theme.typosV4.instrumentSans.sub2};
    margin-bottom: 18px;
  }

  @media (min-width: 1920px) {
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
    font-size: 26px;
    letter-spacing: -0.01em;
  }

  @media (min-width: 1280px) {
    font-size: 30px;
    letter-spacing: -0.02em;
  }

  @media (min-width: 1920px) {
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

  @media (min-width: 1280px) {
    font-size: 24px;
  }

  @media (min-width: 1920px) {
    font-size: 26px;
  }
`;

/*
 * 줄바꿈은 폭에 따라 다시 흐른다 — 설정에 개행 문자를 박아 두면 360에서도 1920의
 * 줄바꿈을 그대로 쓰게 되어 시안과 달라진다. 시안은 같은 문장이 360에서 한 줄,
 * 1920에서 두 줄이다. 글자 크기는 그대로 두면 그 둘이 모두 재현된다(실측 대조 완료).
 */
const descriptionStyles = css`
  /* 위쪽 auto 여백이 설명을 카드 바닥으로 민다. */
  margin: auto 0 0;
  font-family: 'Pretendard', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  color: ${colors.v19.coolGray900};

  @media (min-width: 768px) {
    font-size: 16px;
  }

  @media (min-width: 1280px) {
    font-size: 20px;
  }

  @media (min-width: 1920px) {
    font-size: 24px;
  }
`;
