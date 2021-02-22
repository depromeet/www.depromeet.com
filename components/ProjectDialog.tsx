/* eslint-disable react/no-array-index-key */
import {
  FC, useEffect, useMemo, useState, useCallback, useRef, MutableRefObject,
} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import projectsData from '../resources/data/projects';

interface ProjectDialogVisibleArg {
    visible: boolean;
    index: number;
}
interface ProjectDialogProps {
  visible: ProjectDialogVisibleArg,
  // eslint-disable-next-line no-unused-vars
  setVisible: (arg: ProjectDialogVisibleArg) => void;
}
const ProjectDialog: FC<ProjectDialogProps> = (props) => {
  const [isClientSide, setClientSide] = useState(false);
  const { visible } = props;

  useEffect(() => {
    if (document !== undefined) {
      setClientSide(true);
    }
  }, [setClientSide]);

  return (
    <>
      {isClientSide && visible.visible && <ProjectDialogContents {...props} />}
    </>
  );
};

const ProjectDialogContents:FC<ProjectDialogProps> = ({ visible, setVisible }) => {
  const modalElement = useMemo(() => document.createElement('div'), []);
  const closeDialog = useCallback(() => setVisible({ visible: false, index: 0 }), [setVisible]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useScrollToIndex(scrollRef, visible.index);
  usePortalSetup(modalElement);

  return ReactDOM.createPortal(
    (
      <Container ref={scrollRef}>
        <Backdrop onClick={closeDialog} />
        {
          projectsData.map((v, idx) => {
            console.log(`${v} id is ${idx}`);
            return (
              <ProjectDetail key={`project-detail-${idx}`}>hi</ProjectDetail>
            );
          })
        }
      </Container>
    ),
    modalElement,
  );
};
const useScrollToIndex = (scrollRef: MutableRefObject<HTMLElement>, index: number, width = contentWidth) => useEffect(() => {
  scrollRef.current.scroll(index * width, 0);
}, [scrollRef, index, width]);

const usePortalSetup = (portal: HTMLElement, rootId = 'modal-root') => useEffect(() => {
  const modalRoot = document.getElementById(rootId);
  modalRoot.appendChild(portal);
  return () => {
    modalRoot.removeChild(portal);
  };
}, [portal, rootId]);

// rem
const horizontalPadding = 56;
const contentWidth = 80;
const contentHeight = 84;
const contentColumnGap = 5.6;
const Container = styled.div`
  position: fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  padding: 12rem ${horizontalPadding}rem;
  width: ${horizontalPadding * 2 + contentWidth * projectsData.length + contentColumnGap * projectsData.length}rem;
  display: grid;
  align-items: center;
  grid-template: 1fr / repeat(${projectsData.length}, 1fr);
  gap: 0 ${contentColumnGap}rem;
  overflow-x: scroll;
  color: white;
`;
const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background-color: black;
  opacity: 0.8;
  z-index: -1;
`;

const ProjectDetail = styled.div`
  width: ${contentWidth}rem;
  height: ${contentHeight}rem;
  background-color: #212121;
  border-radius: 3.6rem;
  opacity: 1;

  .image-area {
    height: 42rem;
    width: 100%;
  }

  .detail-area {
    height: 42rem;
    width: 100%;
  }
`;

export default ProjectDialog;
