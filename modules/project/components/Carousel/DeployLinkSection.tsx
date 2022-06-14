import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Device } from 'common/contexts/device';
import { useDeviceContext } from 'common/hooks';

import { AppleStore, GooglePlay, WebLink, Construction } from '../../assets';

import DeployLinkButton from './DeployLinkButton';

type Props = {
  deployLink: {
    ios?: string;
    android?: string;
    web?: string;
  };
};

export default function DeployLinkSection({ deployLink }: Props) {
  const device = useDeviceContext();

  const entries = Object.entries(deployLink);

  return (
    <Grid device={device}>
      {entries.length === 0 ? (
        <DeployLinkButton link="#" label="준비중" content={<Construction />} />
      ) : (
        entries.map(([key, link]) =>
          link == null ? null : (
            <DeployLinkButton
              key={key}
              link={link}
              label={key === 'ios' ? 'App Store' : key === 'android' ? 'Google Play' : key === 'web' ? '바로 가기' : ''}
              content={
                key === 'ios' ? (
                  <AppleStore />
                ) : key === 'android' ? (
                  <GooglePlay />
                ) : key === 'web' ? (
                  <WebLink />
                ) : (
                  <></>
                )
              }
            />
          ),
        )
      )}
    </Grid>
  );
}

const Grid = styled.div<{ device: Device }>`
  display: grid;
  grid-template: repeat(3, 48px) / 1fr;
  gap: 16px 0;

  ${({ device }) =>
    device === 'mobile' &&
    css`
      position: absolute;
      bottom: 25px;
      left: 20px;
      right: 20px;

      display: flex;
      justify-content: stretch;
      gap: 0px;
    `}
`;
