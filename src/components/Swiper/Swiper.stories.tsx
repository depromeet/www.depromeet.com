import { css } from '@emotion/react';
import type { Meta } from '@storybook/react';

import { Swiper } from '~/components/Swiper';

const meta: Meta<typeof Swiper> = {
  title: 'components/Swiper',

  args: {},
};

export default meta;

export const Primary = {
  render: () => (
    <Swiper.Wrapper spaceBetween={50} slidesPerView={1} pagination={{ clickable: true }}>
      {MOCK_ITEMS.map(item => (
        <Swiper.Item key={item.title}>
          <div css={itemCss}>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        </Swiper.Item>
      ))}
    </Swiper.Wrapper>
  ),
};

export const AutoCarousel = {
  render: () => (
    <Swiper.Wrapper
      spaceBetween={20}
      slidesPerView={5}
      loop={true} // infinite carousel로 하려면 slide의 개수 >= slidesPerView * 2 조건을 만족해야 해요!
      autoplay={{
        delay: 0,
      }}
      speed={5000}
    >
      {MOCK_ITEMS.map(item => (
        <Swiper.Item key={item.title}>
          <div css={itemCss}>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        </Swiper.Item>
      ))}
    </Swiper.Wrapper>
  ),
};

const itemCss = css`
  background-color: tomato;
`;

const MOCK_ITEMS = [
  {
    title: '14기 김윤호',
    description:
      '디프만은 디자이너와 개발자가 만나 서비스기획부터 론칭까지, 하나의 프로덕트를 완성하며 성장하는 IT 커뮤니티입니다. 하나의 프로덕트를 완성하며 성장하는 IT 커뮤니티입니다.',
  },
  {
    title: '14기 강지영',
    description:
      '디프만은 디자이너와 개발자가 만나 서비스기획부터 론칭까지, 하나의 프로덕트를 완성하며 성장하는 IT 커뮤니티입니다. 하나의 프로덕트를 완성하며 성장하는 IT 커뮤니티입니다.',
  },
  {
    title: '14기 변수미',
    description:
      '디프만은 디자이너와 개발자가 만나 서비스기획부터 론칭까지, 하나의 프로덕트를 완성하며 성장하는 IT 커뮤니티입니다. 하나의 프로덕트를 완성하며 성장하는 IT 커뮤니티입니다.',
  },
  {
    title: '13기 김동규',
    description:
      '디프만은 디자이너와 개발자가 만나 서비스기획부터 론칭까지, 하나의 프로덕트를 완성하며 성장하는 IT 커뮤니티입니다. 하나의 프로덕트를 완성하며 성장하는 IT 커뮤니티입니다.',
  },
  {
    title: '14기 운영진',
    description:
      '디프만은 디자이너와 개발자가 만나 서비스기획부터 론칭까지, 하나의 프로덕트를 완성하며 성장하는 IT 커뮤니티입니다. 하나의 프로덕트를 완성하며 성장하는 IT 커뮤니티입니다.',
  },
  {
    title: '14기 운영진2',
    description:
      '디프만은 디자이너와 개발자가 만나 서비스기획부터 론칭까지, 하나의 프로덕트를 완성하며 성장하는 IT 커뮤니티입니다. 하나의 프로덕트를 완성하며 성장하는 IT 커뮤니티입니다.',
  },
  {
    title: '14기 운영진3',
    description:
      '디프만은 디자이너와 개발자가 만나 서비스기획부터 론칭까지, 하나의 프로덕트를 완성하며 성장하는 IT 커뮤니티입니다. 하나의 프로덕트를 완성하며 성장하는 IT 커뮤니티입니다.',
  },
  {
    title: '14기 운영진4',
    description:
      '디프만은 디자이너와 개발자가 만나 서비스기획부터 론칭까지, 하나의 프로덕트를 완성하며 성장하는 IT 커뮤니티입니다. 하나의 프로덕트를 완성하며 성장하는 IT 커뮤니티입니다.',
  },
  {
    title: '14기 운영진5',
    description:
      '디프만은 디자이너와 개발자가 만나 서비스기획부터 론칭까지, 하나의 프로덕트를 완성하며 성장하는 IT 커뮤니티입니다. 하나의 프로덕트를 완성하며 성장하는 IT 커뮤니티입니다.',
  },
  {
    title: '14기 운영진6',
    description:
      '디프만은 디자이너와 개발자가 만나 서비스기획부터 론칭까지, 하나의 프로덕트를 완성하며 성장하는 IT 커뮤니티입니다. 하나의 프로덕트를 완성하며 성장하는 IT 커뮤니티입니다.',
  },
];
