import { useEffect, useState } from 'react';
import { css } from '@emotion/react';

import { SEO } from '~/components/SEO';
import { Thumbnail } from '~/components/Thumbnail';
import { Link } from '~/components/Thumbnail/Thumbnail';
import { PROJECT_LIST, TAB_LIST } from '~/constant/project';
import { colors } from '~/styles/colors';
import { theme } from '~/styles/theme';

export default function Project() {
  const [currentTab, setCurrentTab] = useState('전체');
  const [selectedProjectList, setSelectedProjectList] = useState(PROJECT_LIST);

  useEffect(() => {
    if (currentTab === '전체') {
      return setSelectedProjectList(PROJECT_LIST);
    }
    if (currentTab === '-10기') {
      return setSelectedProjectList(
        PROJECT_LIST.filter(project => Number(project.subTitle.replace('기', '')) <= 10)
      );
    }
    setSelectedProjectList(PROJECT_LIST.filter(project => project.subTitle === currentTab));
  }, [currentTab]);

  return (
    <>
      <SEO title="디프만 - Project" />
      <main css={mainCss}>
        <section css={sectionCss}>
          <ul css={tabWrapperCss}>
            <li css={tabContainerCss}>
              {TAB_LIST.map(tab => (
                <button
                  key={tab}
                  css={currentTab === tab ? activeTabCss : inActiveTabCss}
                  onClick={() => setCurrentTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </li>
          </ul>
          <div css={projectContainerCss}>
            {selectedProjectList.map(project => (
              <Thumbnail
                key={project.title}
                img={`/images/project/${project.subTitle}/${project.title}.png`}
                title={project.title}
                subTitle={project.subTitle}
                description={project.description}
                links={project.links as Link[]}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

const mainCss = css`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
  margin-bottom: 200px;
`;

const sectionCss = css`
  width: 100vw;
  max-width: 960px;
`;

const tabWrapperCss = css`
  display: flex;
`;

const tabContainerCss = css`
  display: flex;
`;

const activeTabCss = css`
  ${theme.typos.pretendard.subTitle2};
  padding: 16px 24px;
  color: ${colors.yellow500};
`;

const inActiveTabCss = css`
  ${theme.typos.pretendard.subTitle2};
  padding: 16px 24px;
  color: ${colors.white};
`;

const projectContainerCss = css`
  margin-top: 36px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 12px;
`;
