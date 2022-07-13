import React from 'react';
import styled from '@emotion/styled';

type Props = {
  children: React.ReactNode;
};

function Section({ children }: Props) {
  return <div>{children}</div>;
}

const Title = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  letter-spacing: -0.3px;
  color: #fff;

  margin-bottom: 40px;
`;

const SubText = styled.sub`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 2px;
  text-transform: uppercase;

  color: #fff;
  vertical-align: center;
  margin-left: 24px;
`;

const Content = styled.div``;

export default Object.assign(Section, { Title, SubText, Content });
