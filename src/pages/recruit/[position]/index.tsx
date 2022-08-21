import Error from 'next/error';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';

import { POSITION_TYPE, PositionType } from '~/components/recruit-detail/constants';
import DescriptionSection from '~/components/recruit-detail/DescriptionSection';
import HeaderSection from '~/components/recruit-detail/HeaderSection';
import OtherPositionSection from '~/components/recruit-detail/OtherPositionSection';

export default function RecruitDetail() {
  const router = useRouter();
  const { position } = router.query as ParsedUrlQuery & { position: string };
  const positionType = POSITION_TYPE[position?.toUpperCase() as PositionType];

  if (!position && !positionType) return <Error statusCode={404} />;

  return (
    <main>
      <HeaderSection positionType={positionType} />
      <DescriptionSection positionType={positionType} />
      <OtherPositionSection positionType={positionType} />
    </main>
  );
}
