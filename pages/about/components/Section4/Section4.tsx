import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Device } from 'common/contexts/device';
import { useDeviceContext } from 'common/hooks';
import { googleFormLink } from 'common/utils/misc';

import { DimmerDPMLogo } from '../../assets';

export default function Section4() {
  const device = useDeviceContext();

  return (
    <Container device={device}>
      {device === 'mobile' && (
        <LogoWrapper>
          <DimmerDPMLogo />
        </LogoWrapper>
      )}

      <Title device={device}>
        <p>디프만의</p>
        <b>열한 번째 이야기</b>를 함께
        <p>만들어가고 싶다면</p>
        <NofifyMessage device={device}>COVID-19확산으로 인해 온라인 모임을 지향하고 있습니다.</NofifyMessage>
      </Title>

      <ApplyButton
        onClick={() => window.open(googleFormLink)}
        css={{ marginTop: device === 'mobile' ? 40 : undefined }}
      >
        11기에서 만나기
      </ApplyButton>
      <ShareButton onClick={shareInfo}>지인에게 공유하기</ShareButton>
    </Container>
  );
}

async function shareInfo() {
  const { clipboard, share, permissions } = navigator;

  if (share) {
    await share({ title: '디프만', text: '디프만 11번째 이야기', url: 'https://depromeet.com' });

    return;
  }

  const { state } = await permissions.query({ name: 'clipboard-write' as PermissionName });
  const onFullfilled = () => alert('클립보드로 주소가 복사되었습니다.');
  const onRejected = () => alert('주소 복사에 실패했습니다.');

  if (['granted', 'prompt'].includes(state)) {
    clipboard.writeText('디프만 11번째 이야기 - www.depromeet.com').then(onFullfilled, onRejected);
  }
}

const LogoWrapper = styled.div`
  position: absolute;
  top: 0;
`;

const Container = styled.div<{ device: Device }>`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  padding-bottom: 300px;
  margin-top: 376px;

  background: linear-gradient(180deg, rgba(61, 99, 241, 0) 0%, #3d63f2 100%);

  ${({ device }) =>
    device === 'mobile' &&
    css`
      margin-top: 190px;
      padding-bottom: 200px;
    `}
`;

const Title = styled.div<{ device: Device }>`
  font-size: 60px;
  line-height: 80px;

  ${({ device }) =>
    device === 'mobile' &&
    css`
      font-size: 28px;
      line-height: 40px;
      font-weight: 300;
    `}

  b {
    font-weight: 700;
  }
`;

const NofifyMessage = styled.small<{ device: Device }>`
  font-size: 18px;
  font-weight: 500;
  line-height: 26px;
  text-transform: uppercase;

  margin-top: 32px;

  ${({ device }) =>
    device === 'mobile' &&
    css`
      margin-top: 20px;
      font-size: 12px;
      font-weight: 200;
    `}
`;

const ApplyButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 36.3rem;
  height: 5.4rem;
  background: rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(120px);

  border-radius: 10px;
  margin-top: 56px;

  font-size: 16px;
  font-weight: 700;

  color: #fff;

  border: none;

  :hover {
    opacity: 0.7;
  }
`;

const ShareButton = styled.button`
  width: 36.3rem;
  height: 5.4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #fff;
  border-radius: 10px;
  margin-top: 22px;
  background: none;

  text-align: center;
  font-size: 16px;
  font-weight: 700;
  color: #fff;

  :hover {
    opacity: 0.7;
  }
`;
