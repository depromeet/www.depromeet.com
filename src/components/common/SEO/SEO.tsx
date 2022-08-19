import Head from 'next/head';
import { useRouter } from 'next/router';

import { BASE_URL } from '~/constants/common/common';

interface Props {
  /**
   * `title`, `og:title`, `twitter:title`에 사용됩니다.
   */
  title?: string;
  /**
   * `description`, `og:description`, `twitter:description`에 사용됩니다.
   */
  description?: string;
  /**
   * `og:iamge`, `twitter:image`에 사용됩니다.
   */
  image?: string;
}

const DEFAULT_TITLE = '디프만 - Depromeet';
const DEFAULT_DESCRIPTION = '오직 디자이너와 프로그래머의 동반성장을 위해서';
const DEFAULT_IMAGE = '';

export default function SEO({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  image = DEFAULT_IMAGE,
}: Props) {
  const router = useRouter();

  const currentUrl = BASE_URL + router.route;

  return (
    <Head>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <link rel="canonical" href={currentUrl} />
      <meta property="og:url" content={currentUrl} />
    </Head>
  );
}
