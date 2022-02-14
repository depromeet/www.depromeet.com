import Image from 'next/image';
import { useCallback, useState } from 'react';
import styled from 'styled-components';
import ProjectDialog from '../../components/ProjectDialog';
import { Below } from '../../public';

import { projects } from './projects';

export default function ProjectListMobileView() {
  const [more, setMore] = useState(false);

  /**
   * NOTE(@jonghopark95)
   *
   * 상세 정보 모달을 출력하는 로직은 components/Projects 에서 가져왔습니다.
   * 이는 추후에 상세 정보 모달을 수정하며 로직을 분리할 예정입니다.
   */
  const [dialogVisible, setDialogVisible] = useState({
    visible: false,
    index: 0,
  });

  const showProjectDialog = useCallback(
    (projectId: number) => {
      setDialogVisible({ visible: true, index: projectId });
    },
    [setDialogVisible]
  );

  const PROJECT_AMOUNT = more ? projects.length : 9;

  return (
    <Wrapper>
      <Title>
        모든 작업물
        <small>30</small>
      </Title>
      <ProjectContainer>
        {projects
          .slice(0, PROJECT_AMOUNT)
          .map(({ order, 서비스명, imageFileName }) => (
            <Item key={order}>
              <Image
                src={`/projects/icons/${imageFileName}`}
                alt="service-icon"
                width="100%"
                height="100%"
                onClick={() => showProjectDialog(order)}
              />
              <span>{서비스명}</span>
            </Item>
          ))}
      </ProjectContainer>
      <Button onClick={() => setMore((prev) => !prev)} more={more}>
        <span>{more ? '접기' : '더보기'}</span>
        <Below />
      </Button>
      <ProjectDialog visible={dialogVisible} setVisible={setDialogVisible} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 56px;
`;

const Title = styled.p`
  width: fit-content;
  position: relative;

  font-weight: 800;
  font-size: 16px;

  color: #fff;
  margin-bottom: 20px;

  small {
    position: absolute;
    right: -14px;
    top: -1px;
    font-size: 8px;
  }
`;

const ProjectContainer = styled.div`
  display: grid;
  width: 100%;

  gap: 20px 24px;

  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 30px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    margin-top: 12px;

    font-weight: 600;
    font-size: 14px;

    color: #fff;
  }
`;

const Button = styled.div<{ more: boolean }>`
  width: 90px;
  height: 38px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid #00ff94;
  border-radius: 27px;
  margin: 0 auto;

  font-size: 12px;
  font-weight: bold;
  color: #00ff94;
  background-color: #000;
  cursor: pointer;

  span {
    margin-right: 6px;
  }

  svg {
    transform: ${({ more }) => more && `rotate(180deg)`};
  }
`;
