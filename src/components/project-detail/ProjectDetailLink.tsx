import { useState } from 'react';
import Image from 'next/image';
import { css } from '@emotion/react';

import { POSITION_ICON_BASE } from '~/constants/images';
import { colors } from '~/styles/constants';

import { ClickableLink } from '../common/Clickable';

export default function ProjectDetailLink({
  type,
  link,
}: {
  type: '앱스토어' | '플레이스토어' | 'WEB' | '비핸스' | '깃허브';
  link: string;
}) {
  const [isHover, setIsHover] = useState<boolean>(false);
  const iconImage = isHover ? 'project-link--active.webp' : 'project-link--default.webp';

  return (
    <ClickableLink
      css={linkCss}
      href={link}
      target="_blank"
      className="project-detail__link"
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
    >
      <Image
        src={`${POSITION_ICON_BASE}/${iconImage}`}
        alt="바로가기"
        height="20"
        width="20"
        css={css`
          object-fit: cover;
        `}
      />
      <span>{type}</span>
    </ClickableLink>
  );
}

const linkCss = css`
  display: flex;
  gap: 6px;
  align-items: center;

  & > span {
    font-weight: 500;
    font-size: 16px;
    line-height: 140%;
    letter-spacing: -0.3px;
    color: ${colors.point};
  }
`;
