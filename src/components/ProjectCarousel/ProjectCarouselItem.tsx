import Image from 'next/image';
import { css } from '@emotion/react';

import { Project } from '~/constant/project';
import { mediaQuery } from '~/styles/media';

interface ProjectCarouselItemProps extends Project {}

export function ProjectCarouselItem({ title, subTitle }: ProjectCarouselItemProps) {
  return (
    <div css={imageCss}>
      <Image alt={title} src={`/images/project/${subTitle}/${title}.png`} fill quality={100} />
    </div>
  );
}

const imageCss = css`
  position: relative;
  width: 312px;
  height: 208px;
  object-fit: cover;
  object-position: center;
  margin-left: 20px;

  ${mediaQuery('mobile')} {
    width: 200px;
    height: 130px;
    margin-left: 8px;
  }
`;
