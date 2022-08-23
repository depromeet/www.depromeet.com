import SEO from '~/components/common/SEO';
import { POSITION_TYPE, PositionType } from '~/components/recruit-detail/constants';
import DescriptionSection from '~/components/recruit-detail/DescriptionSection';
import HeaderSection from '~/components/recruit-detail/HeaderSection';
import OtherPositionSection from '~/components/recruit-detail/OtherPositionSection';

interface Props {
  position: typeof POSITION_TYPE[PositionType];
}

export default function RecruitDetail({ position }: Props) {
  return (
    <>
      <SEO title={`디프만 - ${position}`} />
      <main>
        <HeaderSection positionType={position} />
        <DescriptionSection positionType={position} />
        <OtherPositionSection positionType={position} />
      </main>
    </>
  );
}

interface Paths {
  params: {
    // NOTE: 대소문자 구분을 위해 string으로 정의
    position: string;
  };
}

export async function getStaticPaths() {
  const paths: Paths[] = [];

  Object.values(POSITION_TYPE).forEach(position => {
    paths.push({ params: { position: position.toLowerCase() } });
  });

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }: Paths) {
  const { position } = params;
  const upperCasePosition = position.toUpperCase();

  if (!POSITION_TYPE.hasOwnProperty(upperCasePosition)) {
    return { notFound: true };
  }

  return {
    props: { position: upperCasePosition },
  };
}
