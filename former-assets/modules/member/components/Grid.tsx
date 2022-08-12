import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Device } from 'common/contexts/device';
import { useDeviceContext } from 'common/hooks';

type Props<T> = Omit<React.HTMLAttributes<HTMLDivElement>, keyof OwnProps<T>> & OwnProps<T>;

type OwnProps<T> = {
  items: T[];
  label?: React.ReactNode;
  children?: (item: T) => React.ReactNode;
} & GridStyleProps;

type GridStyleProps = {
  columns: { mobile: number; desktop: number };
  rows?: { mobile: number; desktop: number };
  gap?: { mobile: string; desktop: string };
};

export default function Grid<T>({ items, label, children, className, ...props }: Props<T>) {
  const device = useDeviceContext();

  return (
    <>
      {label}
      <Container className={className} {...props} device={device}>
        {items.map((item) => children?.(item))}
      </Container>
    </>
  );
}

const Container = styled.div<GridStyleProps & { device: Device }>`
  display: grid;

  ${({ columns, rows, gap, device }) =>
    device === 'mobile'
      ? css`
          grid-template-columns: repeat(${columns.mobile}, 1fr);
          grid-template-rows: ${rows == null ? 'none' : `repeat(${rows.mobile}, 1fr)`};

          ${gap != null && { gap: gap?.mobile }};
        `
      : css`
          grid-template-columns: repeat(${columns.desktop}, 1fr);
          grid-template-rows: ${rows == null ? 'none' : `repeat(${rows.desktop}, 1fr)`};

          ${gap != null && { gap: gap?.desktop }};
        `}
`;
