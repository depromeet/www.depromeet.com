import React, { useCallback, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { FixedSizeList } from 'react-window';
import AutoSize from 'react-virtualized-auto-sizer';
import styled from '@emotion/styled';

import ProjectProvider from '../../context/project';

import List from './List';

type Props<T> = {
  open: boolean;
  data: T[];
  currentDataId: number;
  onPrev: () => void;
  onNext: () => void;
  onClose: () => void;
};

export default function Carousel<T>({ open, data, currentDataId, onClose, onPrev, onNext }: Props<T>) {
  const scrollRef = useRef<FixedSizeList>(null);

  const handleKeyDown = useCallback(({ keyCode }: KeyboardEvent) => keyCode === ESC && onClose(), []);

  useEffect(() => {
    if (window != null) {
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, []);

  return !open || document == null
    ? null
    : createPortal(
        <ProjectProvider id={currentDataId} length={data.length}>
          <Container>
            <Backdrop onClick={onClose} />

            <AutoSize>
              {({ width, height }) => (
                <Background css={{ height, width }} onClick={onClose}>
                  <List width={width} onPrev={onPrev} onNext={onNext} ref={scrollRef} />
                </Background>
              )}
            </AutoSize>
          </Container>
        </ProjectProvider>,
        document.getElementById('modal-root') ?? document.body,
      );
}

const ESC = 27;

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Backdrop = styled.div`
  z-index: -1;

  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  opacity: 0.8;
  background-color: #000;
`;

const Background = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
`;
