import Image from 'next/image';
import { css } from '@emotion/react';

import { DEPROMEET_EMAIL, DEPROMEET_INSTAGRAM } from '~/constants/common/depromeet';
import { CONTACT_IMAGES } from '~/constants/images';
import { colors, radius } from '~/styles/constants';

export default function ContactSection() {
  return (
    <section css={sectionCss}>
      <div css={descriptionWrapperCss}>
        <h2 css={descriptionHeadingCss}>
          궁금한 것이 있거나
          <br />
          문의 사항이 있으신가요?
        </h2>
        <span css={descriptionTimeCss}>운영 시간 : 9시 ~ 18시</span>
        <small css={descriptionBusinessCss}>비즈니스 문의 depromeet@gmail.com</small>
      </div>

      <div css={buttonWrapperCss}>
        <ContactAnchor
          imageSrc="gmail"
          href={`mailto:${DEPROMEET_EMAIL}`}
          text="gmail"
          value="depromeet@gmail.com"
        />
        <ContactAnchor
          imageSrc="kakaotalk"
          // TODO: 여기 카카오톡 플러스 채널로
          href={'https://www.naver.com'}
          text="kakao plus friend"
          value="depromeet"
        />
        <ContactAnchor
          imageSrc="instagram"
          href={DEPROMEET_INSTAGRAM}
          text="instagram"
          value="@depromeet"
        />
      </div>
    </section>
  );
}

const sectionCss = css`
  margin-top: 120px;
  width: 100%;
  display: flex;
`;

const descriptionWrapperCss = css`
  width: 100%;
`;

const descriptionHeadingCss = css`
  font-size: 2rem;
  font-weight: 600;
  line-height: 150%;

  margin-bottom: 16px;
`;

const descriptionTimeCss = css`
  display: block;
  font-size: 1.25rem;
  line-height: 150%;

  margin-bottom: 4px;
`;

const descriptionBusinessCss = css`
  font-size: 1rem;
  line-height: 150%;
  color: ${colors.gray4};
`;

const buttonWrapperCss = css`
  width: 420px;
  flex-shrink: 0;

  display: flex;
  flex-direction: column;
  gap: 24px;
`;

interface ContactAnchorProps {
  imageSrc: keyof typeof CONTACT_IMAGES;
  href: string;
  text: string;
  value: string;
}

function ContactAnchor({ imageSrc, href, text, value }: ContactAnchorProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" css={contactAnchorCss}>
      <div css={contactInfoWrapperCss}>
        <Image src={CONTACT_IMAGES[imageSrc]} alt={`${text} icon`} width={32} height={32} />
        <span>{text}</span>
      </div>

      <span css={contactValueCss}>{value}</span>
    </a>
  );
}

const contactAnchorCss = css`
  width: 100%;
  height: 56px;
  background-color: ${colors.gray9};
  border-radius: ${radius.md};

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-left: 16px;
  padding-right: 24px;

  transition: background-color 0.3s;

  &:hover {
    background-color: ${colors.primary};
  }
`;

const contactInfoWrapperCss = css`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 9px;
`;

const contactValueCss = css`
  font-weight: 400;
`;
