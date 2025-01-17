import Image from 'next/image';
import Link from 'next/link';

import OurWorkCarousel from '~/components/works-carousel';

import { getOptimizedBackgroundImage } from '~/utils/background-image-optimizer';
import { cn } from '~/utils/cn';

import CloseQuoteSm from '~/assets/svgs/close-quote-sm.svg';
import CloseQuote from '~/assets/svgs/closequote.svg';
import LandingPageListImage from '~/assets/svgs/landing-page-list-image.svg';
import OpenQuoteSm from '~/assets/svgs/open-quote-sm.svg';
import OpenQuote from '~/assets/svgs/openquote.svg';

import buttonBackground from '~/assets/images/button-background.png';
import landingPageArchitectureBackground from '~/assets/images/landing-page-architecture-background.jpg';
import landingPageAshamsRavi from '~/assets/images/landing-page-ashams-ravi-potrait.jpeg';
import landingPageAssetGrass from '~/assets/images/landing-page-asset-grass.png';
import landingPageAssetLeaves from '~/assets/images/landing-page-asset-leaves.png';
import landingPageDriedLeavesBackground from '~/assets/images/landing-page-dried-leaves-background.png';
import landingPageHeroBackground from '~/assets/images/landing-page-hero-background.png';
import landingPageHeroImage from '~/assets/images/landing-page-hero-image.png';
import landingPagePortfolioHouse1 from '~/assets/images/landing-page-portfolio-house-1.png';
import landingPagePortfolioHouse2 from '~/assets/images/landing-page-portfolio-house-2.png';
import landingPagePortfolioHouse3 from '~/assets/images/landing-page-portfolio-house-3.png';
import landingPagePortfolioHouse4 from '~/assets/images/landing-page-portfolio-house-4.png';
import landingPagePortfolioHouse5 from '~/assets/images/landing-page-portfolio-house-5.png';
import landingPageWoodenBoardBackground from '~/assets/images/landing-page-wooden-board-background.png';

import { LandingPageCarousel } from './landing-page-carousel';
import styles from './landing-page-style.module.css';

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
        className={cn(
          'relative h-full min-h-full overflow-hidden bg-[#D19A6A] bg-cover pb-10 bg-blend-soft-light md:flex md:h-[80vh] md:flex-row-reverse md:items-center md:justify-between',
          styles.dashed_dotted_line,
        )}
        style={{
          backgroundImage: optimizedLandingPageHeroBackground,
        }}
      >
        <div className="relative ml-auto w-full">
          <Image
            src={landingPageHeroImage}
            placeholder="blur"
            alt="Landing page hero image "
            className="w-full overflow-hidden rounded-md md:ml-auto md:aspect-video md:h-[350px] md:w-3/4 md:rounded-none md:rounded-s-3xl"
          />
          <Image
            src={landingPageAssetGrass}
            placeholder="empty"
            alt="Landing page asset grass"
            className="absolute -right-6 top-[95%] h-[165px] w-[120px] -translate-y-1/2 object-contain drop-shadow-md md:left-1/3 md:w-[150px] md:-translate-x-[60%]"
          />
        </div>

        <div className="relative mt-8 flex flex-col items-start justify-center p-8 md:pl-24">
          <h1 className="text-center font-primary text-[38px] font-bold text-primary-500 md:text-6xl">
            TAC Design LAB
          </h1>
          <p className="mt-6 text-balance font-primary text-[22px] font-normal text-primary-500 md:text-4xl">
            Where Every Space Is A Step Towards Sustainability
          </p>
        </div>
      </section>

      <section className="relative bg-[#EDD7C3] px-8 pb-14 text-secondary-500 md:flex md:items-center md:justify-around">
        <Image
          src={landingPageAshamsRavi}
          placeholder="blur"
          loading="lazy"
          alt="Ashams Ravi portrait"
          className="relative -top-5 h-[300px] w-[200px] rounded-3xl object-cover max-sm:mx-auto md:-top-8 md:h-[400px] md:w-[300px] md:object-fill"
        />
        <div className="relative md:w-1/2">
          <OpenQuote className="absolute -left-11 top-2 hidden min-[1200px]:-top-4 min-[1200px]:inline" />

          <p className="relative mt-2 text-justify font-primary text-lg font-normal italic leading-5 tracking-wide md:text-left md:text-4xl">
            <OpenQuoteSm className="absolute -top-[7px] inline min-[1200px]:hidden" />{' '}
            <span className="ml-[30px] min-[1200px]:ml-0">
              We all know the greenest choice is to avoid building altogether.
              But when construction is necessary, the focus must shift to
              creating spaces that respect and protect nature.{' '}
            </span>
            <CloseQuote className="mt-5 hidden min-[1200px]:inline" />
            <CloseQuoteSm className="ml-1 mt-1 inline min-[1200px]:hidden" />
          </p>

          <p className="mt-6 text-center font-primary text-2xl font-bold text-accent-500 md:text-right md:text-[32px]">
            - Ashams Ravi
          </p>
        </div>

        <Image
          src={landingPageAssetLeaves}
          loading="lazy"
          alt="Landing page asset leaves"
          className="absolute left-0 top-full z-10 -translate-y-1/2 object-cover drop-shadow-md"
          width={200}
        />
      </section>

      <section
        className="relative bg-cover py-16 md:flex md:justify-between"
        style={{
          backgroundImage: optimizedLandingPageArchitectureBackground,
        }}
      >
        <div className="md:grid md:grid-cols-2">
          <h2 className="relative w-2/3 pl-4 pt-4 font-primary text-4xl font-bold leading-10 text-primary-500 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-[95%] after:translate-y-4 after:bg-black md:col-span-2 md:w-fit md:px-14 md:pl-24 md:text-5xl">
            Sustainable Architecture
          </h2>

          <ul className="my-8 space-y-8 md:ml-16">
            <li className="px-8">
              <div className="flex space-x-2">
                <LandingPageListImage className="" />
                <h3 className="pb-6 font-primary text-xl font-bold text-primary-500 md:text-2xl">
                  Understanding Sustainable Architecture
                </h3>
              </div>
              <p className="text-balance text-justify font-primary font-normal text-primary-500 md:text-lg">
                A practice of designing and constructing buildings that minimize
                environmental impact while optimizing resources. It combines
                energy conservation, renewable materials and innovative
                technologies with traditional wisdom to create harmonious and
                healthy spaces. At its core, it is about building responsibly
                for a better future.
              </p>
            </li>

            <li className="px-8">
              <div className="flex space-x-2">
                <LandingPageListImage className="" />
                <h3 className="pb-6 font-primary text-xl font-bold text-primary-500 md:text-2xl">
                  The Need for Sustainable Design
                </h3>
              </div>
              <p className="text-balance text-justify font-primary font-normal text-primary-500 md:text-lg">
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
                <h3 className="pb-6 font-primary text-xl font-bold text-primary-500 md:text-2xl">
                  A Global Mission
                </h3>
              </div>
              <p className="text-balance text-justify font-primary font-normal text-primary-500 md:text-lg">
                Governments and global organizations are driving sustainable
                architecture with incentives and regulations, emphasizing its
                importance as a collective effort to address climate challenges
                and ensure a resilient future.
              </p>
            </li>
          </ul>
          <ul className="mr-16 hidden grid-cols-2 gap-x-4 gap-y-4 md:grid md:pt-7">
            <li className="col-span-2">
              <Image
                src={landingPagePortfolioHouse1}
                alt="Portfolio image"
                className="rounded-3xl border-[5px] border-[#F0E0D6] object-cover"
                style={{
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.2)',
                }}
              />
            </li>
            <li className="">
              <Image
                src={landingPagePortfolioHouse2}
                alt="Portfolio image"
                className="aspect-square rounded-3xl border-[5px] border-[#F0E0D6] object-cover"
                style={{
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.2)',
                }}
              />
            </li>
            <li className="">
              <Image
                src={landingPagePortfolioHouse3}
                alt="Portfolio image"
                className="aspect-square rounded-3xl border-[5px] border-[#F0E0D6] object-cover"
                style={{
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.2)',
                }}
              />
            </li>
          </ul>

          <ul className="col-span-2 my-4 hidden grid-cols-2 gap-x-4 gap-y-4 md:mx-16 md:grid">
            <li>
              <Image
                src={landingPagePortfolioHouse4}
                alt="Portfolio image"
                className="aspect-video rounded-3xl border-[5px] border-[#F0E0D6] object-cover"
                style={{
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.2)',
                }}
              />
            </li>
            <li>
              <Image
                src={landingPagePortfolioHouse5}
                alt="Portfolio image"
                className="aspect-video rounded-3xl border-[5px] border-[#F0E0D6] object-cover"
                style={{
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.2)',
                }}
              />
            </li>
          </ul>

          <LandingPageCarousel />
        </div>
      </section>

      <section
        className="relative py-11"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) -98.6%, rgba(198, 116, 43, 0.2) 100%), ${optimizedLandingPageDriedLeavesBackground}`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h2 className="z-[1] text-center font-primary text-3xl font-bold text-[#5A3213] md:text-5xl">
          What Our Clients Say
        </h2>

        <div className="z-[1] my-5 overflow-hidden rounded-2xl drop-shadow-2xl">
          <iframe
            className="mx-auto aspect-video w-[95%] rounded-2xl border-[5px] border-[#ECC19A] sm:w-[90%] md:w-3/4 lg:w-1/2"
            src="https://www.youtube.com/embed/qpOZ6rXgR_s?si=jQgeuC20qgI6c0pK"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            style={{
              boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.2)',
            }}
          ></iframe>
        </div>

        <div className="z-[1]">
          <p className="px-12 text-center font-primary text-base font-normal leading-6 text-[#000000] md:px-36 md:text-2xl">
            &quot;We are much happier and comfortable living in this new house.
            The quality of life has improved a lot. It was a great experience
            and without TAC Design LAB this project wouldn&apos;t have been
            possible.&quot;
          </p>
          <p className="mt-5 text-center font-primary text-xl font-bold text-[#062039] md:text-3xl">
            Anunay & Akanksha
          </p>
        </div>
      </section>

      <section
        className="md:py-26 border-b-[5px] border-t-[5px] border-white bg-opacity-30 bg-cover bg-center pt-11 mix-blend-multiply md:pb-8 md:pt-8"
        style={{
          backgroundImage: optimizedLandingPageWoodenBoardBackground,
        }}
      >
        <h2 className="mb-4 bg-cover px-5 text-center font-primary text-[22px] font-normal text-[#250606] md:mb-11 md:px-7 md:pt-6 md:text-[40px]">
          Dive into our portfolio of projects that blend innovative design with
          sustainable solutions.
        </h2>

        <OurWorkCarousel />

        <div className="flex justify-center md:mt-10">
          <Link
            href="/our-work"
            style={{ backgroundImage: optimizedButtonBackground }}
            className="block w-fit bg-cover bg-center px-[34px] py-[28px] font-primary text-lg font-bold text-[#331803] duration-200 hover:scale-105"
          >
            <span className="md:p-8">See Our Work</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
