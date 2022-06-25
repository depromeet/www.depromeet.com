import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Header, Layout, Footer } from 'common/components';
import { Device } from 'common/contexts/device';
import { usePassed } from 'common/hooks';

import { Grid, Person } from './components';
import { members } from './utils/member';

export default function Member() {
  const passed = usePassed({ y: 200 });

  return (
    <Layout header={<Header showBackground={passed} />} footer={<Footer />}>
      {(device) => (
        <>
          <Background />

          <Container device={device}>
            <Label device={device}>Depromeet Member</Label>

            <Title css={{ marginTop: device === 'mobile' ? 12 : 46 }} device={device}>
              <b>계속해서 이어지는</b>
              {`\n성장의 경험들`}
            </Title>

            <SubText css={{ marginTop: 20, marginBottom: 127 }} device={device}>
              디프만은 지속적인 성장의 순환을 추구합니다.
              <br />
              디프만에서 성장을 경험하고 다시 나누고자 하는 사람들이
              <mark> 운영진으로 모여 성장을 순환시킵니다.</mark>
            </SubText>

            {members.map(({ semester, people }) => (
              <Grid
                key={semester}
                items={people}
                columns={{ mobile: 2, desktop: 4 }}
                gap={{ mobile: '20px 16px', desktop: '31px 47px' }}
                label={
                  <GridLabel css={{ marginBottom: 42 }} device={device}>
                    {semester}기 운영진 <sub>{people.length}</sub>
                  </GridLabel>
                }
              >
                {(person) => <Person key={person.name} {...person} />}
              </Grid>
            ))}
          </Container>
        </>
      )}
    </Layout>
  );
}

const Background = styled.div`
  z-index: -1;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;

  background: linear-gradient(150.23deg, rgba(49, 107, 255, 0.97) 5.68%, rgba(0, 0, 0, 0.97) 31.37%);
`;

const Container = styled.div<{ device: Device }>`
  width: 1147px;
  padding-top: 256px;
  margin: 0 auto;

  /**
  * NOTE(@jonghopark95)
  * - 미관을 위해 임시로 min-height 속성을 추가하였습니다.
  * - 후임 maintainer 께서는 어느 정도 운영진이 데이터가 모이면 아래 속성을 제거해주시면 감사하겠습니다.
  */
  min-height: 1800px;

  ${({ device }) =>
    device === 'mobile' &&
    css`
      width: 327px;
      padding-top: 112px;
    `}
`;

const Label = styled.label<{ device: Device }>`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;

  color: #fff;

  ${({ device }) =>
    device === 'mobile' &&
    css`
      font-size: 12px;
    `}
`;

const Title = styled.h1<{ device: Device }>`
  font-size: 60px;
  line-height: 80px;

  color: #fff;
  white-space: pre-wrap;

  b {
    font-weight: bold;
  }

  ${({ device }) =>
    device === 'mobile' &&
    css`
      font-size: 28px;
      line-height: 40px;
    `}
`;

const SubText = styled.h2<{ device: Device }>`
  width: 608px;

  font-weight: 400;
  font-size: 20px;
  line-height: 140%;

  color: #fff;
  opacity: 0.8;

  mark {
    background-color: unset;
    color: #38e3a8;
    opacity: 1;
    font-weight: bold;
  }

  ${({ device }) =>
    device === 'mobile' &&
    css`
      font-size: 12px;
      width: 100%;
    `}
`;

const GridLabel = styled.label<{ device: Device }>`
  position: relative;
  display: inline-block;
  font-size: 32px;
  font-weight: 700;
  color: #fff;

  sub {
    position: absolute;
    top: -7px;
    right: -20px;
    font-size: 16px;
  }

  ${({ device }) =>
    device === 'mobile' &&
    css`
      font-size: 16px;

      sub {
        top: -4px;
        right: -12px;
        font-size: 10px;
      }
    `}
`;
