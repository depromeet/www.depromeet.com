import { useState } from 'react';
import Image from 'next/image';
import { css } from '@emotion/react';

import { ClickableLink } from '~/components/common/Clickable';
import { Project } from '~/components/project/constants';
import { POSITION_ICON_BASE } from '~/constants/images/images';
import { colors } from '~/styles/constants';

interface Props {
  currentProject: Project;
}

function ProjectDetailTeamMembers({
  part,
  members,
}: {
  part: 'DESIGN' | 'WEB' | 'SERVER';
  members: string[];
}) {
  return (
    <div className="project-detail__team--member">
      <b>{part}</b>
      {members?.map((member, idx) => (
        <span key={`${member}--${idx}`}>{member}</span>
      ))}
    </div>
  );
}

function ProjectDetailLinks({
  type,
  link,
}: {
  type: '앱스토어' | '플레이스토어' | 'WEB' | '비핸스' | '깃허브';
  link: string;
}) {
  const [isHover, setIsHover] = useState<boolean>(false);
  const iconImage = isHover ? 'project-link--active.webp' : 'project-link--default.webp';
  return (
    <ClickableLink
      href={link}
      target="_blank"
      className="project-detail__link"
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
    >
      <Image
        src={`${POSITION_ICON_BASE}/${iconImage}`}
        alt="바로가기"
        height="20"
        width="20"
        objectFit="cover"
      />
      <span>{type}</span>
    </ClickableLink>
  );
}

export default function ProjectDetailSection({ currentProject }: Props) {
  const { generation, title, team, catchphrase, description, prize } = currentProject;

  return (
    <>
      <ClickableLink href="/project" css={goBackCss}>
        <Image
          src={`${POSITION_ICON_BASE}/back.webp`}
          alt="뒤로가기"
          height="18"
          width="18"
          css={css`
            object-fit: cover;
          `}
        />
        <span>이전</span>
      </ClickableLink>

      <section css={projectDetailSectionCss}>
        <header className="project-meta-header">
          <div className="project-meta-header__left">
            <span className="project-meta__generation">{generation}기</span>
            <div className="project-meta__info">
              <span>{title}</span>
              <div />
              <p className="project-meta__prize">{catchphrase}</p>
            </div>
          </div>
          {prize !== 'Default' && (
            <div className="project-meta-header__right">
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundImage: `url(${POSITION_ICON_BASE}/project-prize.webp)`,
                  backgroundPosition: 'center center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                <span css={prizeSpanCss(prize === '최우수상')}>{prize}</span>
              </div>
            </div>
          )}
        </header>
        <div className="separator" />
        <div className="project-detail">
          <div className="project-detail__team">
            <span className="project-detail__team--info">
              {generation}기 {team}팀
            </span>
            {currentProject.designers && (
              <ProjectDetailTeamMembers part="DESIGN" members={currentProject.designers} />
            )}
            {currentProject.frontends && (
              <ProjectDetailTeamMembers part="WEB" members={currentProject.frontends} />
            )}
            {currentProject.backends && (
              <ProjectDetailTeamMembers part="SERVER" members={currentProject.backends} />
            )}
          </div>
          <div className="project-detail__separator" />
          <div className="project-detail__description">
            <p>{description}</p>
            <div className="project-detail__links">
              {currentProject.ios && (
                <ProjectDetailLinks type="앱스토어" link={currentProject.ios} />
              )}
              {currentProject.android && (
                <ProjectDetailLinks type="플레이스토어" link={currentProject.android} />
              )}
              {currentProject.web && <ProjectDetailLinks type="WEB" link={currentProject.web} />}
              {currentProject.behance && (
                <ProjectDetailLinks type="비핸스" link={currentProject.behance} />
              )}
              {currentProject.github && (
                <ProjectDetailLinks type="깃허브" link={currentProject.github} />
              )}
            </div>
          </div>
        </div>
        <div className="separator" />
      </section>
    </>
  );
}

const goBackCss = css`
  margin: 30px 0 26px 0;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const projectDetailSectionCss = css`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  .project-meta-header {
    margin-bottom: 23px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .project-meta-header__left {
      display: flex;
      align-items: center;
      gap: 20px;
      .project-meta__generation {
        display: flex;
        width: 98px;
        height: 48px;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background-color: ${colors.black};

        font-weight: 600;
        font-size: 1.25rem;
        line-height: 140%;
        text-align: center;
        letter-spacing: -0.3px;
        color: ${colors.gray100};
      }
      .project-meta__info {
        display: flex;
        align-items: center;
        span,
        p {
          font-weight: 600;
          font-size: 1.25rem;
          line-height: 140%;
          letter-spacing: -0.3px;
          color: ${colors.black};
        }
        div {
          margin: 0 12px;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background-color: ${colors.black};
        }
      }
      .project-meta__prize {
      }
    }
    .project-meta-header__right {
      width: 76px;
      height: 76px;

      div {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
  .project-detail {
    width: 100%;
    height: 389px;
    display: flex;
    justify-content: space-between;
    .project-detail__team {
      width: 50%;
      padding: 40px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      .project-detail__team--info {
        font-weight: 500;
        font-size: 1rem;
        line-height: 140%;
        letter-spacing: -0.3px;
        color: ${colors.black};
      }
      .project-detail__team--member {
        display: flex;
        align-items: center;
        gap: 20px;
        b {
          width: 57px;
          font-weight: 500;
          font-size: 1rem;
          line-height: 140%;
          letter-spacing: -0.3px;
          text-transform: uppercase;
          color: ${colors.black};
        }
        span {
          font-weight: 500;
          font-size: 16px;
          line-height: 140%;
          letter-spacing: -0.3px;
          text-transform: uppercase;
          color: ${colors.gray600};
        }
      }
    }
    .project-detail__separator {
      margin: 19px 0;
      width: 1px;
      background-color: ${colors.black};
    }
    .project-detail__description {
      width: 50%;
      padding: 40px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      p {
        font-weight: 600;
        font-size: 1.25rem;
        line-height: 140%;
        letter-spacing: -0.3px;
        color: ${colors.black};
      }
      .project-detail__links {
        width: 100%;
        display: flex;
        gap: 32px;
        align-items: center;
        .project-detail__link {
          display: flex;
          align-items: center;
          gap: 6px;
          span {
            font-weight: 500;
            font-size: 1rem;
            line-height: 140%;
            letter-spacing: -0.3px;
            color: ${colors.point};
          }
        }
      }
    }
  }
  .separator {
    width: 100%;
    height: 1px;
    background-color: ${colors.black};
  }
`;

const prizeSpanCss = (is최우수상: boolean) => css`
  font-weight: 600;
  font-size: ${is최우수상 ? '0.875rem' : '1.125rem'};
  line-height: 122%;
  letter-spacing: -0.003em;
  color: ${colors.black};
`;
