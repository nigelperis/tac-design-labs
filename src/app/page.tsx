import Image, { getImageProps } from 'next/image';

import landingPageAssetGrass from '~/assets/images/landing-page-asset-grass.png';
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
    <section className="h-full min-h-full">
      <div
        className="h-full min-h-full md:flex md:flex-row-reverse md:justify-between"
        style={{ backgroundImage: `url(${src})` }}
      >
        <div className="relative w-full">
          <Image
            src={landingPageHeroImage}
            alt="Landing page hero image "
            className="h-full w-full object-cover"
          />
          <Image
            src={landingPageAssetGrass}
            alt="Landing page asset grass"
            className="absolute right-0 top-full -translate-y-1/2 object-cover drop-shadow-md md:right-full md:translate-x-1/2"
            width={120}
          />
        </div>

        <div className="p-8">
          <h1 className="text-center font-primary text-5xl font-bold text-primary-500 md:text-7xl">
            TAC Design LAB
          </h1>
          <p className="mt-9 text-center font-primary text-2xl font-normal text-primary-500 md:text-4xl">
            Where Every Space Is A Step Towards Sustainability
          </p>
        </div>
      </div>
    </section>
  );
}
