import Image from 'next/image';
import { css } from '@emotion/react';

import { Swiper } from '~/components/Swiper';
import { Project } from '~/constant/project';

interface ProjectCarouselItemProps extends Project {}

export function ProjectCarouselItem({ title, subTitle }: ProjectCarouselItemProps) {
  return (
    <Swiper.Item css={imageCss}>
      <Image alt={title} src={`/images/project/${subTitle}/${title}.png`} fill quality={100} />
    </Swiper.Item>
  );
}

ProjectCarouselItem.displayName = 'SwiperSlide';

const imageCss = css`
  position: relative;
  width: 312px;
  height: 208px;
  object-fit: cover;
  object-position: center;
`;
