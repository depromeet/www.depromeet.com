/* eslint-disable react/no-array-index-key */
import {
  FC, useEffect, useMemo, useState,
  useCallback, useRef, MutableRefObject,
  forwardRef, CSSProperties, useLayoutEffect, SetStateAction, Dispatch,
  HTMLAttributes,
} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import {
  FixedSizeList, ListChildComponentProps,
} from 'react-window';
import AutoSize from 'react-virtualized-auto-sizer';
import { ProjectData } from '../resources/data/interface';
import {
  iconAppleStore, iconConstruction, iconGoogleStore, iconWebLink, rightBorderImg,
} from '../resources/images';
import projectsData from '../resources/data/projects';
import { media } from '../styles/theme';
import {
  getContentItemPosition,
  isMobile, mobileContentHeight, mobileContentWidth,
  getResponsiveContentWidth, getResponsiveContentHeight,
  calcItemCenterPosition, calcRealListWidth, getContentGap,
} from '../lib/project_detail';

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
      {isClientSide && visible.visible && <ProjectDialogList {...props} />}
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
    return () => {};
  }, [onEscKeyDown]);
};

const ProjectDialogList:FC<ProjectDialogProps> = ({ visible, setVisible }) => {
  const modalElement = useMemo(() => document.createElement('div'), []);
  const closeDialog = useCallback(() => setVisible({ visible: false, index: 0 }), [setVisible]);
  const scrollRef = useRef<FixedSizeList>();
  const onEscKeyDown = useCallback((e) => {
    if (e.keyCode === 27) {
      closeDialog();
    }
  }, [closeDialog]);

  usePortalSetup(modalElement);
  useCloseOnEsc(onEscKeyDown);

  return ReactDOM.createPortal(
    (
      <Container>
        <Backdrop onClick={closeDialog} />
        <AutoSize>
          {({ width, height }) => (
            <>
              <ProjectsListWrapper height={height} width={width} onClick={closeDialog}>
                <ProjectsDialogContents width={width} index={visible.index} scrollRef={scrollRef} />
              </ProjectsListWrapper>
            </>
          )}
        </AutoSize>
      </Container>
    ),
    modalElement,
  );
};

interface ProjectContentsProps {
  width: number;
  index: number;
  scrollRef: MutableRefObject<FixedSizeList>;
}
const ProjectsDialogContents:FC<ProjectContentsProps> = ({ width, index, scrollRef }) => {
  const [focusedIndex, setFocusedIndex] = useState(index);
  useScrollToIndex(scrollRef, focusedIndex, width);
  return (
    <>
      <FixedSizeList
        className="no-scroll-bar"
        itemCount={projectsData.length}
        layout="horizontal"
        height={`${getResponsiveContentHeight(width)}rem`}
        width={width}
        itemSize={getResponsiveContentWidth(width) * 10}
        ref={scrollRef}
        itemData={projectsData}
        style={{
          overflowY: 'hidden',
          overflowX: isMobile(width) ? 'scroll' : 'hidden',
        }}
        innerElementType={innerWrapper(width)}
      >
        {withScrollController(focusedIndex, setFocusedIndex, width)}
      </FixedSizeList>
    </>
  );
};

const withScrollController = (focusedIndex, setFocusedIndex, width) => (props: ProjectDataProps) => (
  <ProjectItem
    focusedIndex={focusedIndex}
    setFocusedIndex={setFocusedIndex}
    windowWidth={width}
    {...props}
  />
);

const innerWrapper = (width) => forwardRef<HTMLDivElement, {style: CSSProperties}>(({ style, ...rest }, ref) => {
  const realWidth = calcRealListWidth(width, style.width);
  return (
    <div
      className="no-scroll-bar"
      ref={ref}
      style={{
        ...style,
        width: `${realWidth}px`,
      }}
      {...rest}
    />
  );
});

const useScrollToIndex = (scrollRef: MutableRefObject<FixedSizeList>, index: number, width: number) => {
  const xOffset = calcItemCenterPosition(index, width);
  useLayoutEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo(xOffset);
    }
  }, [scrollRef, xOffset]);
};

const usePortalSetup = (portal: HTMLElement, rootId = 'modal-root') => useEffect(
  () => {
    const modalRoot = document.getElementById(rootId);
    modalRoot.appendChild(portal);
    return () => {
      modalRoot.removeChild(portal);
    };
  }, [portal, rootId],
);

const RightBorder = rightBorderImg();
interface ProjectDataProps extends ListChildComponentProps{
  data: ProjectData[];
  focusedIndex: number;
  setFocusedIndex: Dispatch<SetStateAction<number>>;
  windowWidth: number;
}
const Image:FC<{data:ProjectData, src?: string}> = ({ data, src }) => {
  if (typeof data.image === 'string') {
    return (
      <img
        src={src || data.image}
        loading="lazy"
        alt={`${data.title}`}
        style={{
          objectFit: 'contain',
          height: '37rem',
        }}
      />
    );
  }
  return <MemoizedImage data={data} />;
};
const MemoizedImage = ({ data }) => {
  const ProjectImage = useMemo(() => data.image(), [data]);
  return <ProjectImage />;
};
const Icon: FC<{data:ProjectData} & HTMLAttributes<HTMLDivElement>> = ({ data }) => {
  const MemoizedIcon = useMemo(() => ((typeof data.icon === 'string')
    ? () => (
      <img
        src={(typeof data.icon === 'string' && data.icon)}
        loading="lazy"
        alt={`${data.title}`}
        style={{
          objectFit: 'contain',
          height: '7.2rem',
        }}
      />
    ) : data.icon()), [data]);
  return <MemoizedIcon />;
};

const ProjectItem:FC<ProjectDataProps> = ({
  data, index, style, focusedIndex, setFocusedIndex, windowWidth,
}) => {
  const projectData = data[index];
  return (
    <ProjectDetail
      key={`project-detail-${index}`}
      width={windowWidth}
      style={{
        ...style,
        left: `${getContentItemPosition(windowWidth, index, style.left)}px`,
        width: `${getResponsiveContentWidth(windowWidth)}rem`,
      }}
      onClick={(e) => e.stopPropagation()}
    >
      {
        focusedIndex === index
        && (
          <ScrollController
            index={focusedIndex}
            setIndex={setFocusedIndex}
            width={windowWidth}
          />
        )
      }
      {
        isMobile(windowWidth) || (
          <div className="image">
            <Image data={projectData} />
            <div className="image-shadow" />
          </div>
        )
      }
      <div className="detail">
        <div className="detail-left">
          <div className="title">
            {projectData.title}
          </div>
          <div className="catchphrase">
            <div className="catchphrase--icon">
              <Icon data={projectData} />
            </div>
            <div className="catchphrase--data no-scroll-bar">
              {projectData.catchphrase}
            </div>
          </div>
          {
            isMobile(windowWidth)
            || (
              <div className="buttons">
                <AppLinkButtons data={projectData} />
              </div>
            )
          }
        </div>
        <div className="detail-right">
          <div className="detail--subject">
            프로젝트 소개
            <span className="detail--right-border">
              <RightBorder />
            </span>
          </div>
          <div className="detail--description no-scroll-bar">
            {projectData.description}
          </div>
          <div className="detail--subject">
            {projectData.generation}기 {projectData.team || ''}
            <span className="detail--right-border">
              <RightBorder />
            </span>
          </div>
          <div className="detail--team-intro no-scroll-bar">
            <TeamMember job="designer" member={projectData.desingers?.join(' ∙ ')} />
            <TeamMember job="backend" member={projectData.backends?.join(' ∙ ')} />
            <TeamMember job="frontend" member={projectData.frontends?.join(' ∙ ')} />
          </div>
        </div>
        {
          isMobile(windowWidth)
            && (
              <div className="buttons">
                <AppLinkButtons data={projectData} />
              </div>
            )
        }
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
  const ConstructionIcon = useMemo(() => iconConstruction(), []);
  if (data.ios === undefined && data.android === undefined && data.web === undefined) {
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
  const WeblinkIcon = useMemo(() => iconWebLink(), []);
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
  const PlayStoreIcon = useMemo(() => iconGoogleStore(), []);
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
  const AppleIcon = useMemo(() => iconAppleStore(), []);
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

interface ScrollControllerProps {
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
  width: number;
}

const ScrollController: FC<ScrollControllerProps> = ({
  index, setIndex, width,
}) => {
  const scrollToNext = useCallback((e) => {
    e.stopPropagation();
    setIndex((prev) => (prev < projectsData.length - 1 ? prev + 1 : prev));
  }, [setIndex]);

  const scrollToPrev = useCallback((e) => {
    e.stopPropagation();
    setIndex((prev) => (prev > 0 ? prev - 1 : prev));
  }, [setIndex]);

  return (
    <ForegroundIndicator
      onClick={(e) => e.stopPropagation()}
      width={width}
    >
      <ScrollIndicator
        role="button"
        tabIndex={0}
        onClick={scrollToPrev}
        disabled={index === 0}
      >
        <img
          src={`/ic_left_${index === 0 ? 'dis' : 'default'}.svg`}
          alt="go to prev project"
        />
      </ScrollIndicator>
      <span className="separator" />
      <ScrollIndicator
        role="button"
        tabIndex={0}
        onClick={scrollToNext}
        disabled={index === projectsData.length - 1}
      >
        <img
          src={`/ic_right_${index === projectsData.length - 1 ? 'dis' : 'default'}.svg`}
          alt="go to next project"
        />
      </ScrollIndicator>
    </ForegroundIndicator>
  );
};
// rem
const remBase = 10;
const contentWidth = 80;
const contentHeight = 84;
const contentGap = 5.6;
const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;
const Backdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: black;
  opacity: 0.8;
  z-index: -1;
`;

const ProjectsListWrapper = styled.div<{height: string, width:string}>`
  display: flex;
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  align-content: center;
  align-items: center;
`;

const ProjectDetail = styled.div<{width: number}>`
  position: relative;
  width: ${contentWidth}rem;
  height: ${contentHeight}rem;
  background-color: #212121;
  border-radius: 3.6rem;
  opacity: 1;
  margin-left: ${contentGap}rem;
  left: 52rem;
  z-index: 1;

  ${media.mobile} {
    width: ${mobileContentWidth}rem;
    height: ${mobileContentHeight}rem;
    margin-left: ${({ width }) => getContentGap(width)}rem;
    box-sizing: border-box;
    padding: 2.5rem 2rem;
  }

  .image {
    height: 42rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    position: relative;
    ${media.mobile} {
      display: none;
    }
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
    color: white;
    word-break: keep-all;
    padding:4.8rem 5.6rem 0;
    box-sizing: border-box;
    display: grid;
    grid-template: 1fr / 17.2rem 46.8rem;
    gap: 0 5.7rem;

    ${media.mobile} {
      padding: 0;
      display: flex;
      flex-direction: column;
    }

    .title {
      margin-bottom: 1.6rem;
      font-weight: 800;
      font-size: 3rem;
      line-height: 3.5rem;

      ${media.mobile} {
        font-size: 2.4rem;
        line-height: 4rem;
      }
    }
    .catchphrase {
      margin-bottom: 3.2rem;
      font-weight: bold;
      font-size: 2rem;
      line-height: 3.2rem;
      ${media.mobile} {
        display: flex;
        font-size: 1.8rem;
        line-height: 2.8rem;
        margin-bottom: 4rem;
      }
      &--data {
        ${media.mobile} {
          width: 19rem;
          overflow-y: scroll;
        }
      }

      &--icon {
        display: none;
        width: 7.2rem;
        height: 7.2rem;
        border-radius: 1.2rem;
        overflow: hidden;
        ${media.mobile} {
          margin-right: 1.6rem;
          display: inline-block;
        }
      }
    }
    .buttons {
      display: grid;
      grid-template: repeat(3, minmax(4.8rem, 4.8rem)) / 1fr;
      gap: 1.6rem 0;
      
      ${media.mobile} {
        position: absolute;
        bottom: 2.5rem;
        right: 2rem;
        left: 2rem;
        display: flex;
        justify-content: stretch;
        gap: 0rem;
      }

      .button {
        font-weight: 500;
        font-size: 1.6rem;
        line-height: 2rem;
        border-radius: 1.2rem;
        background-color: black;
        /* width: 17.2rem; */
        max-width: 17.2rem;
        height: 4.8rem;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;

        ${media.mobile} {
          flex: 1;
          border-radius: 0.6rem;
          min-width: 1rem;
          max-width: 100%;
          height: 4rem;
          padding: 1.2rem 0;
          box-sizing: border-box;
          margin-right: 1.2rem;
          :last-child {
            margin-right: 0;
          }
        }
        
        &--icon {
          margin-right: 1rem;
          width: 2rem;
          height: 2rem;
        }

        &__link {
          :hover {
            background-color: #101010;
          }
        }
        &__construction {
          background-color: #363636;
        }
      }
    }


    &-right {
      ${media.mobile} {
        margin-bottom: 2.3rem;
      }
    }
    &--subject {
      margin-right: 1rem;
      font-weight: 800;
      font-size: 1.4rem;
      line-height: 1.6rem;
      margin-bottom: 2rem;
      ${media.mobile} {
        font-size: 1.2rem;
        margin-bottom: 1rem;
      }
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
      ${media.mobile} {
        font-size: 1.4rem;
        line-height: 2.6rem;
        max-height: 12.7rem;
        margin-bottom: 2.4rem;
        overflow-y: scroll;
      }
    }

    &--team-intro {
      max-height: 8.2rem;
      ${media.mobile} {
        overflow-y: scroll;
      }
    }
    &--team {
      display: grid;
      grid-template: repeat(auto-fill, 1fr) / 7rem 1fr;
      grid-auto-flow: column;
      justify-content: start;
      gap: 1.4rem 0.8rem;
      ${media.mobile} {
        /* grid-template-rows: repeat(3, 2.7rem); */
        grid-template-columns: 4.5rem 1fr;
      }
      &-job {
        font-style: italic;
        font-weight: 500;
        font-size: 1.4rem;
        line-height: 2.8rem;
        text-transform: lowercase;
        width: 7rem;
        ${media.mobile} {
          font-size: 1.2rem;
          line-height: 2.6rem;
          width: 5rem;
        }
      }
      &-member {
        font-size: 1.6rem;
        line-height: 2.8rem;
        ${media.mobile} {
          font-weight: 400;
          font-size: 1.4rem;
          line-height: 2.6rem;
        }
      }
    }
  }
`;

const isWideEnough = (width) => width > (contentWidth + contentGap) * remBase;
const calcScrollIndicatorWidth = ({ width }) => (
  isWideEnough(width) ? `${contentWidth + contentGap}rem` : `${width}px`
);
const calcIndicatorLeftPadding = ({ width }) => {
  const left = (isWideEnough(width) ? -(contentGap / 2) : (contentWidth * remBase - width) / 2 / 10);
  return left;
};
const calcSeparatorWidth = ({ width }) => {
  const smallWidth = width - indicatorWidth * 2;
  const largeWidth = contentWidth - indicatorWidth;
  return (isWideEnough(width) ? largeWidth : smallWidth);
};
const indicatorWidth = 5.2;
const ForegroundIndicator = styled.div<{width: number}>`
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 100%;
  width: ${calcScrollIndicatorWidth};
  left: ${calcIndicatorLeftPadding}rem;
  overflow-x: visible;

  ${media.mobile} {
    display: none;
  }

  .separator {
    width: ${calcSeparatorWidth}rem;
    height: 0;
  }
`;

const ScrollIndicator = styled.image<{disabled: boolean}>`
  width: ${indicatorWidth}rem;
  height: ${indicatorWidth}rem;
  background-color: transparent;
  border-radius: 50%;
  :hover {
    background-color: ${({ disabled }) => (disabled ? 'transparent' : '#222222')};
  }
`;

export default ProjectDialog;
