import Image, { getImageProps } from 'next/image';

import landingPageAshamsRavi from '~/assets/images/landing-page-ashams-ravi-portrait.jpeg';
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
        className="landing-page-hero relative h-full min-h-full overflow-hidden md:flex md:flex-row-reverse md:items-center md:justify-between"
        style={{ backgroundImage: `url(${src})` }}
      >
        <div className="relative w-full">
          <Image
            src={landingPageHeroImage}
            placeholder="blur"
            alt="Landing page hero image "
            className="h-1/4 w-full overflow-hidden rounded-md object-cover md:aspect-video md:w-auto"
          />
          <Image
            src={landingPageAssetGrass}
            placeholder="empty"
            alt="Landing page asset grass"
            className="absolute -right-6 top-full -translate-y-1/2 object-cover drop-shadow-md md:right-full md:translate-x-1/2"
            width={120}
          />
        </div>

        <div className="relative mt-8 flex flex-col justify-center p-8">
          <h1 className="text-center font-primary text-5xl font-bold text-primary-500 md:text-7xl">
            TAC Design LAB
          </h1>
          <p className="mt-9 text-balance text-center font-primary text-2xl font-normal text-primary-500 md:text-4xl">
            Where Every Space Is A Step Towards Sustainability
          </p>
        </div>
      </div>

      <div className="bg-[#EDD7C3] px-8 pb-14 text-secondary-500">
        <Image
          src={landingPageAshamsRavi}
          placeholder="blur"
          alt="Ashams Ravi portrait"
          className="relative -top-5 rounded-3xl"
        />
        <p className="mt-2 text-balance text-justify indent-10 font-primary text-lg font-normal italic">
          We all know the greenest choice is to avoid building altogether. But
          when construction is necessary, the focus must shift to creating
          spaces that respect and protect nature.
        </p>
        <p className="text-right font-primary text-2xl font-bold text-accent-500">
          - Ashams Ravi
        </p>
      </div>
    </section>
  );
}
