import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { useRouter } from 'next/router';

import { Device } from 'common/contexts/device';
import { useDeviceContext } from 'common/hooks';

type Props = Omit<React.HTMLAttributes<HTMLDivElement>, keyof OwnProps> & OwnProps;

type OwnProps = {
  href: string;
  label: string;
};

export default function NavigationItem({ href, label, onClick, onKeyPress, ...props }: Props) {
  const { push, pathname } = useRouter();

  const device = useDeviceContext();

  const isSelectedItem = href === pathname;

  return (
    <Item
      role="button"
      tabIndex={0}
      device={device}
      css={isSelectedItem && device !== 'mobile' && { fontWeight: 700 }}
      onClick={(event) => {
        onClick?.(event);
        push(href);
      }}
      onKeyPress={(event) => {
        onKeyPress?.(event);
        push(href);
      }}
      {...props}
    >
      {label.toUpperCase()}

      {href === pathname && <Underline css={device === 'mobile' && { display: 'none' }} />}
    </Item>
  );
}

const Item = styled.div<{ device: Device }>`
  position: relative;

  margin-right: 34px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  :hover {
    color: #c0c0c0;
  }

  ${({ device }) => device === 'mobile' && itemMobileStyles}
`;

const itemMobileStyles = css`
  margin-right: 0;
  margin-top: 67px;

  font-size: 30px;
  font-weight: bold;
  font-family: Gmarket Sans;
  line-height: 30px;

  :hover {
    color: #fff;
  }

  :first-of-type {
    margin-top: 0;
  }
`;

const Underline = styled.div`
  position: absolute;

  height: 2px;
  width: 100%;
  margin-top: 8px;

  background-color: #fff;
  cursor: default;
`;
