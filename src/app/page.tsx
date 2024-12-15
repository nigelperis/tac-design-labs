import Image, { getImageProps } from 'next/image';

import landingPageBackground from '~/assets/images/landing-page-background.png';
import landingPageHeroImage from '~/assets/images/landing-page-hero-image.png';

export default function Home() {
  const {
    props: { src },
  } = getImageProps({
    src: landingPageBackground.src,
    alt: 'Background image',
    width: landingPageBackground.width,
    height: landingPageBackground.height,
  });
  return (
    <section
      className="grid grid-rows-[fit-content_1fr]"
      style={{ backgroundImage: `url(${src})` }}
    >
      <Image
        src={landingPageHeroImage}
        alt="Landing page hero image "
        className="h-full w-full object-cover"
      />
      <div className="h-full p-8">
        <h1 className="text-center font-primary text-4xl font-bold text-primary-500">
          TAC Design LAB
        </h1>
        <p className="mt-9 text-justify font-primary text-2xl font-normal text-primary-500">
          Where Every Space Is A Step Towards Sustainability
        </p>
      </div>
    </section>
  );
}
