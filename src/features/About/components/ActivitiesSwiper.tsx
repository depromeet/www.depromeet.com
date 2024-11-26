import Image from 'next/image';
import { css } from '@emotion/react';
import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ArrowIcon } from '~/components/Icons';
import { mediaQuery } from '~/styles/media';
import { theme } from '~/styles/theme';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type Props = {
  activities: Array<{
    title: string;
    description: string;
    img: string;
  }>;
  backgroundImageUrl: string;
  subject: string;
};

export const ActivitiesSwiper = ({ activities, backgroundImageUrl, subject }: Props) => {
  SwiperCore.use([Navigation]);
  const buttonClass = {
    prev: `swiper-button-prev-${subject}`,
    next: `swiper-button-next-${subject}`,
  };

  return (
    <div css={containerCss}>
      <div css={swiperWrapperCss({ imageUrl: backgroundImageUrl })}>
        {/* NOTE: icon 교체 필요 */}
        <div css={navigation.wrapperCss}>
          <button className={buttonClass.prev} css={navigation.buttonCss}>
            <ArrowIcon direction="left" />
          </button>
          <button className={buttonClass.next} css={navigation.buttonCss}>
            <ArrowIcon direction="right" />
          </button>
        </div>
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={18}
          navigation={{
            prevEl: `.${buttonClass.prev}`,
            nextEl: `.${buttonClass.next}`,
          }}
          style={{
            display: 'flex',
            padding: '0 56px',
          }}
        >
          {activities.map(({ title, description, img }) => (
            <SwiperSlide
              key={title}
              style={{
                width: '276px',
              }}
            >
              <div css={card.wrapperCss}>
                <Image
                  src={img}
                  alt={title}
                  width={240}
                  height={147}
                  css={{ borderRadius: '12px' }}
                />
                <div css={card.textCss}>
                  <h1 css={card.titleCss}>{title}</h1>
                  <p css={card.descriptionCss}>{description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

const containerCss = css`
  width: 100%;
  padding: 0 20px;

  ${mediaQuery('mobile')} {
    padding: 0;
  }
`;

const swiperWrapperCss = ({ imageUrl }: { imageUrl: string }) => css`
  width: 100%;
  max-width: 1280px;
  height: 468px;
  padding: 70px 0;
  border-radius: 20px;
  background-image: url(${imageUrl});
  background-size: cover;
  position: relative;
  overflow: hidden;

  ${mediaQuery('mobile')} {
    border-radius: 0;
  }
`;

const navigation = {
  wrapperCss: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: calc(100% - 40px);
    position: absolute;
    left: 20px;
    top: calc(50% - 24px);
  `,

  buttonCss: css`
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    border: none;
    border-radius: 99px;
    padding: 9px 12px;
    cursor: pointer;
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.16);
    opacity: 100;
    background-color: white;
    z-index: 20;

    &:disabled {
      opacity: 0;
    }

    /* reset swiper navigation style */
    &::after {
      content: '';
    }

    ${mediaQuery('mobile')} {
      opacity: 0;
    }
  `,
};

const card = {
  wrapperCss: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    width: 276px;
    height: 328px;
    padding: 18px;
    border-radius: 20px;
    background-color: white;
  `,

  textCss: css`
    display: flex;
    flex-direction: column;
    gap: 8px;
  `,

  titleCss: css`
    ${theme.typosV2.pretendard.semibold20};
    line-height: 150%;
  `,

  descriptionCss: css`
    ${theme.typosV2.pretendard.medium16};
    line-height: 150%;
  `,
};
