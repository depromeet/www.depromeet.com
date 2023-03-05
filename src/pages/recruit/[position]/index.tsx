import ApplySection from '~/components/common/ApplySection';
import SEO from '~/components/common/SEO';
import { POSITION_TYPE, PositionType } from '~/components/recruit-detail/constants';
import DescriptionSection from '~/components/recruit-detail/DescriptionSection';
import HeaderSection from '~/components/recruit-detail/HeaderSection';
import PreviousSection from '~/components/recruit-detail/PreviousSection';
import { sectionCss } from '~/components/recruit-detail/RecruitDetail.style';
import TipSection from '~/components/recruit-detail/TipSection';

interface Props {
  position: (typeof POSITION_TYPE)[PositionType];
}

export default function RecruitDetail({ position }: Props) {
  return (
    <>
      <SEO title={`디프만 - ${position}`} />
      <main>
        <HeaderSection positionType={position} />
        <PreviousSection />
        <DescriptionSection positionType={position} />
        <TipSection positionType={position} />
        <ApplySection wrapperCss={sectionCss} />
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
