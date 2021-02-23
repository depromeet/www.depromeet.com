/* eslint-disable react/no-array-index-key */
import {
  FC, useEffect, useMemo, useState, useCallback, useRef, MutableRefObject, forwardRef,
} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import {
  FixedSizeList, ListChildComponentProps,
} from 'react-window';
import AutoSize from 'react-virtualized-auto-sizer';
import projectsData from '../resources/data/projects';
import { ProjectData } from '../resources/data/interface';
import {
  iconAppleStore, iconConstruction, iconGoogleStore, iconWebLink, rightBorderImg,
} from '../resources/images';

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

const useCloseOnEsc = (onEscKeyDown) => {
  useEffect(() => {
    if (window !== undefined) {
      window.addEventListener('keydown', onEscKeyDown);
      return () => {
        window.removeEventListener('keydown', onEscKeyDown);
      };
    }
  }, [onEscKeyDown]);
};

const ProjectDialogContents:FC<ProjectDialogProps> = ({ visible, setVisible }) => {
  const modalElement = useMemo(() => document.createElement('div'), []);
  const closeDialog = useCallback(() => setVisible({ visible: false, index: 0 }), [setVisible]);
  const scrollRef = useRef<FixedSizeList>(null);
  const onEscKeyDown = useCallback((e) => {
    if (e.keyCode === 27) {
      closeDialog();
    }
  }, [closeDialog]);

  useScrollToIndex(scrollRef, visible.index);
  usePortalSetup(modalElement);
  useCloseOnEsc(onEscKeyDown);

  return ReactDOM.createPortal(
    (
      <Container>
        <Backdrop onClick={closeDialog} />
        <AutoSize>
          {({ width, height }) => (
            <ProjectsListWrapper height={height} width={width}>
              <FixedSizeList
                itemCount={projectsData.length}
                layout="horizontal"
                height={`${contentHeight}rem`}
                width={width}
                itemSize={contentWidth * 10}
                ref={scrollRef}
                itemData={projectsData}
                style={{
                  overflowY: 'hidden',
                }}
                innerElementType={innerWrapper}
              >
                {ProjectItem}
              </FixedSizeList>
            </ProjectsListWrapper>
          )}
        </AutoSize>
      </Container>
    ),
    modalElement,
  );
};

const innerWrapper = forwardRef(({ style, ...rest }, ref) => (
  <div
    ref={ref}
    style={{
      ...style,
      width: `${parseFloat(style.width) + 520 * 2}px`,
    }}
    {...rest}
  />
));

const useScrollToIndex = (scrollRef: MutableRefObject<FixedSizeList>, index: number) => {
  useEffect(() => {
    if (scrollRef.current !== null) { scrollRef.current.scrollToItem(index, 'center'); }
  }, [scrollRef, index]);
};

const usePortalSetup = (portal: HTMLElement, rootId = 'modal-root') => useEffect(() => {
  const modalRoot = document.getElementById(rootId);
  modalRoot.appendChild(portal);
  return () => {
    modalRoot.removeChild(portal);
  };
}, [portal, rootId]);

const RightBorder = rightBorderImg();
interface ProjectDataProps extends ListChildComponentProps{
  data: ProjectData[];
}
const ProjectItem:FC<ProjectDataProps> = ({ data, index, style }) => {
  const projectData = data[index];
  const Image = useMemo(() => projectData.image(), [projectData]);

  return (
    <ProjectDetail
      key={`project-detail-${index}`}
      style={{
        ...style,
        left: `${parseFloat(style.left) + 560}px`,
      }}
    >
      <div className="image">
        <Image />
        <div className="image-shadow" />
      </div>
      <div className="detail">
        <div className="detail--desktop-left">
          <div className="title">
            {projectData.title}
          </div>
          <div className="catchphrase">
            {projectData.catchphrase}
          </div>
          <div className="buttons">
            <AppLinkButtons data={projectData} />
          </div>
        </div>
        <div className="detail--desktop-right">
          <div className="detail--subject">
            프로젝트 소개
            <span className="detail--right-border">
              <RightBorder />
            </span>
          </div>
          <div className="detail--description">
            {projectData.description}
          </div>
          <div className="detail--subject">
            {projectData.generation}기 {projectData.team || ''}
            <span className="detail--right-border">
              <RightBorder />
            </span>
          </div>
          <TeamMember job="designer" member={projectData.desingers?.join(' ∙ ')} />
          <TeamMember job="backend" member={projectData.frontends?.join(' ∙ ')} />
          <TeamMember job="frontend" member={projectData.backends?.join(' ∙ ')} />
        </div>
      </div>
    </ProjectDetail>
  );
};

const TeamMember:FC<{job: string, member?: string}> = ({ job, member }) => (
  member === undefined || member === null ? <></> : (
    <div className="detail--team">
      <span className="detail--team-job">{job}</span>
      <span className="detail--team-member">{member}</span>
    </div>
  )
);

const AppLinkButtons: FC<{data: ProjectData}> = ({ data }) => {
  if (data.ios === undefined && data.android === undefined && data.web === undefined) {
    const ConstructionIcon = iconConstruction();
    return (
      <LinkButton className="button button__construction" link="#">
        <div className="button--icon">
          <ConstructionIcon />
        </div>
        준비중
      </LinkButton>
    );
  }
  return (
    <>
      <AppstoreButton link={data.ios} />
      <PlaystoreButton link={data.android} />
      <WeblinkButton link={data.web} />
    </>
  );
};

const WeblinkButton : FC<{link?: string}> = ({ link }) => {
  const WeblinkIcon = iconWebLink();
  return (
    <LinkButton className="button button__link" link={link}>
      <div className="button--icon">
        <WeblinkIcon />
      </div>
      바로 가기
    </LinkButton>
  );
};
const PlaystoreButton : FC<{link?: string}> = ({ link }) => {
  const PlayStoreIcon = iconGoogleStore();
  return (
    <LinkButton className="button button__link" link={link}>
      <div className="button--icon">
        <PlayStoreIcon />
      </div>
      Google Play
    </LinkButton>
  );
};
const AppstoreButton: FC<{link?: string}> = ({ link }) => {
  const AppleIcon = iconAppleStore();
  return (
    <LinkButton className="button button__link" link={link}>
      <div className="button--icon">
        <AppleIcon />
      </div>
      App Store
    </LinkButton>
  );
};

const LinkButton: FC<{link?: string, className: string}> = ({ link, className, children }) => {
  if (link !== undefined) {
    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      <div
        className={className}
        role="button"
        tabIndex={0}
        onClick={() => (link !== '#' ? window.open(link) : null)}
      >
        {children}
      </div>
    );
  }
  return <> </>;
};

// rem
const contentWidth = 80;
const contentHeight = 84;
const Container = styled.div`
  position: fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
`;
const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background-color: black;
  opacity: 0.8;
  z-index: -1;
`;

const ProjectsListWrapper = styled.div<{height: string, width:string}>`
  display: flex;
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  align-items: center;
`;
const ProjectDetail = styled.div`
  position: relative;
  width: ${contentWidth}rem;
  height: ${contentHeight}rem;
  background-color: #212121;
  border-radius: 3.6rem;
  opacity: 1;
  margin-left: 5.6rem;
  left: 52rem;
  z-index: 1;
  :first-of-type {
    margin-left: 0;
  }
  .image {
    height: 42rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    position: relative;
    .image-shadow {
      position: absolute;
      height: 19rem;
      width: 100%;
      bottom: 0;
      z-index: -1;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 12.63%, rgba(0, 0, 0, 0.9) 100%);
    }
  }

  .detail {
    height: 42rem;
    width: 100%;
    font-family: Apple SD Gothic Neo;
    color: white;
    word-break: keep-all;
    padding:4.8rem 5.6rem 0;
    box-sizing: border-box;
    display: grid;
    grid-template: 1fr / 17.2rem 46.8rem;
    gap: 0 5.7rem;

    .title {
      margin-bottom: 1.6rem;
      font-weight: 800;
      font-size: 3rem;
      line-height: 3.5rem;
    }
    .catchphrase {
      margin-bottom: 3.2rem;
      font-weight: bold;
      font-size: 2rem;
      line-height: 3.2rem;
    }
    .buttons {
      display: grid;
      grid-template: repeat(3, minmax(4.8rem, 4.8rem)) / 1fr;
      gap: 1.6rem 0;

      .button {
        font-weight: 500;
        font-size: 1.6rem;
        line-height: 2rem;
        border-radius: 1.2rem;
        background-color: black;
        width: 17.2rem;
        height: 4.8rem;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        
        &--icon {
          margin-right: 1rem;
          width: 2rem;
          height: 2rem;
        }

        &__link {
        }
        &__construction {
          background-color: #363636;
        }
      }
    }

    &--subject {
      margin-right: 1rem;
      font-weight: 800;
      font-size: 1.4rem;
      line-height: 1.6rem;
      margin-bottom: 2rem;
    }
    &--right-border {
      margin-left: 1rem;
    }

    &--description {
      font-size: 1.6rem;
      line-height: 2.8rem;
      max-height: 11rem;
      overflow: hidden;
      margin-bottom: 4rem;
    }

    &--team {
      display: grid;
      grid-template: repeat(auto-fill, 1fr) / 7rem 1fr;
      grid-auto-flow: column;
      justify-content: start;
      gap: 1.4rem 0.8rem;
      &-job {
        font-style: italic;
        font-weight: 500;
        font-size: 1.4rem;
        line-height: 2.8rem;
        text-transform: lowercase;
        width: 7rem;
      }
      &-member {
          font-size: 1.6rem;
          line-height: 2.8rem;
      }
    }
  }
`;

export default ProjectDialog;
