import Image from 'next/image';
import Link from 'next/link';

import { getOptimizedBackgroundImage } from '~/utils/background-image-optimizer';

import LandingPageListImage from '~/assets/svgs/landing-page-list-image.svg';

import buttonBackground from '~/assets/images/button-background.png';
import landingPageArchitectureBackground from '~/assets/images/landing-page-architecture-background.png';
import landingPageAshamsRavi from '~/assets/images/landing-page-ashams-ravi-portrait.jpeg';
import landingPageAssetGrass from '~/assets/images/landing-page-asset-grass.png';
import landingPageAssetLeaves from '~/assets/images/landing-page-asset-leaves.png';
import landingPageDriedLeavesBackground from '~/assets/images/landing-page-dried-leaves-background.png';
import landingPageHeroBackground from '~/assets/images/landing-page-hero-background.png';
import landingPageHeroImage from '~/assets/images/landing-page-hero-image.png';
import landingPageWoodenBoardBackground from '~/assets/images/landing-page-wooden-board-background.png';

export default function Home() {
  const optimizedLandingPageHeroBackground = getOptimizedBackgroundImage({
    src: landingPageHeroBackground.src,
    width: landingPageHeroBackground.width,
    height: landingPageHeroBackground.height,
  });

  const optimizedLandingPageArchitectureBackground =
    getOptimizedBackgroundImage({
      src: landingPageArchitectureBackground.src,
      width: landingPageArchitectureBackground.width,
      height: landingPageArchitectureBackground.height,
    });

  const optimizedLandingPageDriedLeavesBackground = getOptimizedBackgroundImage(
    {
      src: landingPageDriedLeavesBackground.src,
      width: landingPageDriedLeavesBackground.width,
      height: landingPageDriedLeavesBackground.height,
    },
  );

  const optimizedLandingPageWoodenBoardBackground = getOptimizedBackgroundImage(
    {
      src: landingPageWoodenBoardBackground.src,
      width: landingPageWoodenBoardBackground.width,
      height: landingPageWoodenBoardBackground.height,
    },
  );

  const optimizedButtonBackground = getOptimizedBackgroundImage({
    src: buttonBackground.src,
    width: buttonBackground.width,
    height: buttonBackground.height,
  });

  return (
    <div className="h-full min-h-full">
      <section
        className="landing-page-hero relative h-full min-h-full overflow-hidden bg-cover md:flex md:flex-row-reverse md:items-center md:justify-between"
        style={{
          backgroundImage: optimizedLandingPageHeroBackground,
        }}
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
      </section>

      <section className="relative bg-[#EDD7C3] px-8 pb-14 text-secondary-500">
        <Image
          src={landingPageAshamsRavi}
          placeholder="blur"
          loading="lazy"
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
        <Image
          src={landingPageAssetLeaves}
          loading="lazy"
          alt="Landing page asset leaves"
          className="absolute left-0 top-full z-10 -translate-y-1/2 object-cover drop-shadow-md"
          width={200}
        />
      </section>

      <section
        className="relative py-16"
        style={{
          backgroundImage: optimizedLandingPageArchitectureBackground,
        }}
      >
        <h2 className="relative w-2/3 pl-7 font-primary text-4xl font-normal leading-10 text-primary-500 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-primary-500">
          Sustainable Architecture
        </h2>

        <ul className="my-8 space-y-8">
          <li className="px-8">
            <div className="flex space-x-2">
              <LandingPageListImage className="" />
              <h3 className="font-primary text-xl font-bold text-primary-500">
                Understanding Sustainable Architecture
              </h3>
            </div>
            <p className="text-balance text-justify font-primary font-normal text-primary-500">
              A practice of designing and constructing buildings that minimize
              environmental impact while optimizing resources. It combines
              energy conservation, renewable materials and innovative
              technologies with traditional wisdom to create harmonious and
              healthy spaces. At its core, it is about building responsibly for
              a better future.
            </p>
          </li>

          <li className="px-8">
            <div className="flex space-x-2">
              <LandingPageListImage className="" />
              <h3 className="font-primary text-xl font-bold text-primary-500">
                The Need for Sustainable Design
              </h3>
            </div>
            <p className="text-balance text-justify font-primary font-normal text-primary-500">
              Buildings account for nearly 40% of global carbon emissions,
              highlighting the urgency for sustainable practices. Thoughtful
              architecture reduces environmental impact while fostering
              healthier living spaces and harmony with nature. As awareness
              grows, architects, engineers and developers are re-imagining
              construction methods to meet the rising demand for eco-friendly
              and resilient structures.
            </p>
          </li>

          <li className="px-8">
            <div className="flex space-x-2">
              <LandingPageListImage className="" />
              <h3 className="font-primary text-xl font-bold text-primary-500">
                A Global Mission
              </h3>
            </div>
            <p className="text-balance text-justify font-primary font-normal text-primary-500">
              Governments and global organizations are driving sustainable
              architecture with incentives and regulations, emphasizing its
              importance as a collective effort to address climate challenges
              and ensure a resilient future.
            </p>
          </li>
        </ul>
      </section>

      <section
        className="relative bg-gradient-to-b from-[#D9D9D9] to-[#D19A6A6B] bg-cover bg-center py-11 bg-blend-soft-light shadow-inner drop-shadow-md"
        style={{ backgroundImage: optimizedLandingPageDriedLeavesBackground }}
      >
        <h2 className="z-[1] text-center font-primary text-4xl font-normal text-primary-500">
          What Our Clients Say
        </h2>

        <div className="my-5 overflow-hidden rounded-[20px]">
          <iframe
            className="aspect-video w-[102%] overflow-hidden rounded-[20px] px-8"
            src="https://www.youtube.com/embed/aqz-KE-bpKQ?si=ATiiv6VVmF9B9R1a&amp;controls=0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>

        <div className="z-[1] px-8">
          <p className="font-primary text-base font-normal text-[#000000]">
            &quot;We are much happier and comfortable living in this new house.
            The quality of life has improved a lot. It was a great experience
            and without TAC Design LAB this project wouldn&apos;t have been
            possible.&quot;
          </p>
          <p className="mt-5 text-center font-primary text-2xl font-bold text-[#062039]">
            Anunay & Akanksha
          </p>
        </div>
      </section>

      <section
        className="bg-cover bg-center py-14"
        style={{ backgroundImage: optimizedLandingPageWoodenBoardBackground }}
      >
        <h2 className="bg-cover text-center font-primary text-2xl font-normal text-[#250606]">
          Dive into our portfolio of projects that blend innovative design with
          sustainable solutions.
        </h2>

        <div className="flex justify-center">
          <Link
            href="#"
            style={{ backgroundImage: optimizedButtonBackground }}
            className="block w-fit bg-cover bg-center px-[34px] py-[30px] font-primary text-lg font-bold text-[#331803]"
          >
            Explore Projects
          </Link>
        </div>
      </section>
    </div>
  );
}
