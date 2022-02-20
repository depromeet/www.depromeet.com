import { FC, HTMLAttributes } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { media } from '../styles/theme';

type Props = {
  src: string;
  job: string;
  color: string;
  order: number;
  className: string;
};

const Mimoji = ({ src, job, color, order, className }: Props) => (
  <MimojiWrapper order={order} color={color} className={className}>
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

const isEvenOrder = (order: number) => order % 2 !== 0;

const MimojiWrapper = styled.div<{ order: number; color: string }>`
  position: relative;
  text-transform: uppercase;
  background: transparent;
  color: ${({ color }) => color};
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
      right: ${({ order }) => (isEvenOrder(order) ? '7.6rem' : '1.7rem')};
      bottom: 3rem;

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
      background-color: ${({ color }) => color};
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
      left: ${({ order }) => (isEvenOrder(order) ? '12.7rem' : '0.1rem')};
      top: ${({ order }) => (isEvenOrder(order) ? '6.5rem' : '6.9rem')};
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
      transform: ${({ order }) =>
        isEvenOrder(order) ? 'rotate(-4.63deg)' : 'rotate(2.3deg)'};
      ${media.mobile} {
        z-index: 3;
        padding: 0.74rem 1.65rem;
        transform: ${({ order }) =>
          isEvenOrder(order) ? 'rotate(5.16deg)' : 'rotate(-5.16deg)'};
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
