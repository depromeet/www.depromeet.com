import { Intro } from '~/components/Intro';
import { useCheckWindowSize } from '~/hooks/useCheckWindowSize';

export const BlogIntroSection = () => {
  const { isTargetSize: isMobileSize } = useCheckWindowSize('mobile');
  return (
    <>
      {isMobileSize ? (
        <Intro
          imageUrl="/images/16th/blog/blog_m.svg"
          title="16기 정보 인트로"
          width={720}
          height={360}
          color="black"
        />
      ) : (
        <Intro
          imageUrl="/images/16th/blog/blog.svg"
          title="16기 정보 인트로"
          width={1920}
          height={300}
          color="black"
        />
      )}
    </>
  );
};
