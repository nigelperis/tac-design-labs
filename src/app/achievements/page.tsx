import React from 'react';
import { ChevronRight } from 'lucide-react';
import { type StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import Link from 'next/link';

import { getOptimizedBackgroundImage } from '~/utils/background-image-optimizer';

import achievementPhoto1 from '~/assets/images/achievement-photo-1.jpeg';
import achievementsBambooBackground from '~/assets/images/achievements-bamboo-background.png';
import achievementsPageBackground from '~/assets/images/achievements-page-background.png';
import buttonBackground from '~/assets/images/button-background.png';

function Achievement() {
  const optimizedLandingPageArchitectureBackground =
    getOptimizedBackgroundImage({
      src: achievementsPageBackground.src,
      width: achievementsPageBackground.width,
      height: achievementsPageBackground.height,
    });

  const optimizedBambooBackground = getOptimizedBackgroundImage({
    src: achievementsBambooBackground.src,
    width: achievementsBambooBackground.width,
    height: achievementsBambooBackground.height,
  });

  const optimizedButtonBackground = getOptimizedBackgroundImage({
    src: buttonBackground.src,
    width: buttonBackground.width,
    height: buttonBackground.height,
  });

  return (
    <div className=" ">
      <section
        className="space-y-5 bg-[#D19A6A] bg-opacity-35 bg-repeat px-7 py-8 bg-blend-soft-light md:px-32"
        style={{
          backgroundImage: optimizedLandingPageArchitectureBackground,
        }}
      >
        <AchievementCard
          title=" HUDCO: National Award for Green Building"
          description="The Housing and Urban Development Corporation (HUDCO) recognized Ar.
        Ashams Ravi’s innovative work in sustainable architecture, awarding him
        the prestigious National Award for Green Building in 2021-2022. The
        award celebrates his outstanding contributions to eco-friendly
        construction and sustainable design practices."
          image={achievementPhoto1}
          href="#"
        />
        <AchievementCard
          title=" HUDCO: National Award for Green Building"
          description="The Housing and Urban Development Corporation (HUDCO) recognized Ar.
        Ashams Ravi’s innovative work in sustainable architecture, awarding him
        the prestigious National Award for Green Building in 2021-2022. The
        award celebrates his outstanding contributions to eco-friendly
        construction and sustainable design practices."
          image={achievementPhoto1}
          href="#"
        />
        <AchievementCard
          title=" HUDCO: National Award for Green Building"
          description="The Housing and Urban Development Corporation (HUDCO) recognized Ar.
        Ashams Ravi’s innovative work in sustainable architecture, awarding him
        the prestigious National Award for Green Building in 2021-2022. The
        award celebrates his outstanding contributions to eco-friendly
        construction and sustainable design practices."
          image={achievementPhoto1}
          href="#"
        />
        <AchievementCard
          title=" HUDCO: National Award for Green Building"
          description="The Housing and Urban Development Corporation (HUDCO) recognized Ar.
        Ashams Ravi’s innovative work in sustainable architecture, awarding him
        the prestigious National Award for Green Building in 2021-2022. The
        award celebrates his outstanding contributions to eco-friendly
        construction and sustainable design practices."
          image={achievementPhoto1}
          href="#"
        />
      </section>

      <section
        className="bg-[#EDD7C3] bg-opacity-5 bg-cover bg-center py-10 bg-blend-overlay shadow-inner"
        style={{ backgroundImage: optimizedBambooBackground }}
      >
        <div className="border-y-8 border-white bg-[#420C03CC] py-9">
          <p className="text-balance px-9 py-5 text-center font-primary text-2xl text-white">
            Inspired by our achievements? Discover how we can help you bring
            your vision to life with sustainable and innovative solutions
            tailored to your needs.
          </p>
        </div>

        <Link
          href="#"
          style={{ backgroundImage: optimizedButtonBackground }}
          className="mx-auto mt-4 block w-fit bg-cover bg-center px-[40px] py-[20px] font-primary text-lg font-bold text-[#331803]"
        >
          Explore Our Services
        </Link>
      </section>
    </div>
  );
}

export default Achievement;

interface AchievementCardProps {
  title: string;
  description: string;
  image: string | StaticImport;
  href: string;
}

function AchievementCard(props: AchievementCardProps) {
  const { title, description, image, href } = props;

  return (
    <div className="gap-2 overflow-auto rounded-[20px] bg-[#FFFFFF80] p-5 shadow-lg md:grid md:grid-cols-[2fr_1fr] md:rounded-[48px]">
      <h3 className="font-primary text-2xl font-bold text-[#552B0A] md:text-4xl 2xl:self-center">
        {title}
      </h3>
      <Image
        src={image}
        alt="Achievement photo"
        className="my-5 h-full items-center overflow-hidden rounded-[22px] border-4 border-[#ECC19A] md:col-start-2 md:col-end-3 md:row-span-3 md:my-auto md:min-h-full"
      />
      <p className="text-balance text-justify font-primary text-base text-black md:text-xl 2xl:h-fit 2xl:self-center">
        {description}
      </p>
      <Link
        href={href}
        className="mx-auto mt-5 flex h-fit w-fit items-center space-x-4 rounded-full bg-secondary-500 px-5 py-4 text-center text-sm font-bold text-white md:col-start-1 md:col-end-2"
      >
        Read the full announcement <ChevronRight className="text-[7px]" />
      </Link>
    </div>
  );
}
