import { FC, HTMLAttributes } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { media } from '../styles/theme';

const Mimoji: FC<HTMLAttributes<unknown> & { src: string; job: string }> = ({
  src,
  job,
  className,
}) => (
  <MimojiWrapper job={job} className={className}>
    <div className="mimoji--circle" />
    <div className="mimoji--job">{job}</div>
    <div className="mimoji--image">
      <div className="mimoji--image-container">
        <Image
          src={src}
          alt={src}
          layout="fill"
          loading="lazy"
          objectFit="contain"
        />
      </div>
    </div>
  </MimojiWrapper>
);

const MimojiWrapper = styled.div<{ job: string }>`
  position: relative;
  text-transform: uppercase;
  background: transparent;
  color: ${({ job, theme }) =>
    job === 'designer' ? theme.color.blue : theme.color.green};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 26.7rem;
  height: 28.2rem;

  ${media.mobile} {
    width: 16rem;
    height: 12rem;
  }

  .mimoji {
    &--image {
      z-index: 2;
      position: absolute;
      right: ${({ job }) => (job === 'designer' ? '7.6rem' : '1.7rem')};
      bottom: 2rem;

      ${media.mobile} {
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      &-container {
        position: relative;
        width: 17.7rem;
        height: 17.7rem;
        ${media.mobile} {
          width: 9.6rem;
          height: 9.6rem;
        }
      }
    }
    &--circle {
      background-color: ${({ job, theme }) =>
        job === 'designer' ? theme.color.blue : theme.color.green};
      width: 19rem;
      height: 19rem;
      border-radius: 50%;
      ${media.mobile} {
        width: 10.4rem;
        height: 10.4rem;
      }
    }
    &--job {
      z-index: 1;
      position: absolute;
      left: ${({ job }) => (job === 'designer' ? '12.7rem' : '0.1rem')};
      top: ${({ job }) => (job === 'designer' ? '7.5rem' : '7.9rem')};
      font-family: Montserrat;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: white;
      border-radius: 7.65rem;
      padding: 1.2rem 2.4rem;
      transform: ${({ job }) =>
        job === 'designer' ? 'rotate(-4.63deg)' : 'rotate(2.3deg)'};
      ${media.mobile} {
        z-index: 3;
        padding: 0.74rem 1.65rem;
        transform: ${({ job }) =>
          job === 'designer' ? 'rotate(5.16deg)' : 'rotate(-5.16deg)'};
        left: unset;
        top: unset;
        bottom: 0.3rem;
        font-weight: bold;
        font-size: 14px;
        line-height: 17px;
      }
    }
  }
`;

export default Mimoji;
