import Head from 'next/head';

interface Props {
  /**
   * `title`, `og:title`, `twitter:title`에 사용됩니다.
   *
   * @default 디프만 - Depromeet
   */
  title?: string;
  /**
   * `description`, `og:description`, `twitter:description`에 사용됩니다.
   *
   * @default 오직 디자이너와 프로그래머의 동반성장을 위해서
   */
  description?: string;
  /**
   * `og:image`, `twitter:image`에 사용됩니다.
   *
   * @default 추가 필요
   */
  image?: string;
  /**
   * `og:image`, `twitter:image`의 크기를 지정하는데 사용됩니다.
   *
   * @default 1300px
   */
  width?: string;
  /**
   * `og:image`, `twitter:image`의 크기를 지정하는데 사용됩니다.
   *
   * @default 650px
   */
  height?: string;
}

const DEFAULT_TITLE = '디프만 - Depromeet';
const DEFAULT_DESCRIPTION = '오직 디자이너와 프로그래머의 동반성장을 위해서';
const DEFAULT_IMAGE = '/og-main.png';
const DEFAULT_WIDTH = '1300';
const DEFAULT_HEIGHT = '650';

export const SEO = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  image = DEFAULT_IMAGE,
  width = DEFAULT_WIDTH,
  height = DEFAULT_HEIGHT,
}: Props) => {
  return (
    <Head>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content={width} />
      <meta property="og:image:height" content={height} />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
};
