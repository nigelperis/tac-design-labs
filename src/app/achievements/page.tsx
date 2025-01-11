import React from 'react';

import { getOptimizedBackgroundImage } from '~/utils/background-image-optimizer';
import { cn } from '~/utils/cn';

import achievementPhoto1 from '~/assets/images/achievement-photo-1.jpeg';
import achievementPhoto2 from '~/assets/images/achievement-photo-2.jpeg';
import achievementPhoto3 from '~/assets/images/achievement-photo-3.jpeg';
import achievementPhoto4 from '~/assets/images/achievement-photo-4.jpeg';
import achievementPhoto5 from '~/assets/images/achievement-photo-5.jpeg';
import achievementPhoto6 from '~/assets/images/achievement-photo-6.png';
import achievementsBambooBackground from '~/assets/images/achievements-bamboo-background.png';
import achievementsPageBackground from '~/assets/images/achievements-page-background.png';
import buttonBackground from '~/assets/images/button-background.png';

import AchievementCard from './achievements-card';
import styles from './achivements-page-style.module.css';

const achievements = [
  {
    title: 'HUDCO: National Award for Green Building',
    description:
      'The Housing and Urban Development Corporation (HUDCO) recognized Ar. Ashams Ravi’s innovative work in sustainable architecture, awarding him the prestigious National Award for Green Building in 2021-2022. The award celebrates his outstanding contributions to eco-friendly construction and sustainable design practices.',
    image: achievementPhoto1,
    buttonText: 'Read the full announcement',
    href: 'https://hudco.org.in/writereaddata/HUDCO-DA23-announcement.pdf',
  },
  {
    title: 'The Better India: Recognizing Sustainable Innovation',
    description:
      'The Better India featured Ar. Ashams Ravi of TAC Design LAB for his groundbreaking sustainable home in Kerala, constructed using 90% recycled materials and bamboo. This recognition highlights his innovative approach to eco-friendly design, achieving significant environmental...',
    image: achievementPhoto2,
    buttonText: 'Read the full article',
    href: 'https://thebetterindia.com/224686/kerala-architect-sustainable-home-recycled-material-eco-friendly-water-india-ang136/',
  },
  {
    title:
      'Rethinking The Future: Top 10 Examples of Upcycling in Architecture',
    description:
      "TAC Design LAB's work was featured in Rethinking The Future as one of the top 10 examples of upcycling in architecture. Their innovative approach to reusing materials from demolished buildings showcases their commitment to reducing waste and promoting sustainable architecture.",
    image: achievementPhoto3,
    buttonText: 'Read the full article',

    href: 'https://www.re-thinkingthefuture.com/rtf-fresh-perspectives/a1989-10-examples-of-upcycling-in-architecture/',
  },
  {
    title: 'The New Indian Express: The Green Building Specialist',
    description:
      "Ar. Ashams Ravi, honored with the HUDCO Design Award 2021-2022, was featured by The New Indian Express for his pioneering work in sustainable architecture. His project 'Canaan' in Thiruvananthapuram, constructed with 90% reused materials, highlights his dedication to eco-friendly design and minimal environmental impact.",
    image: achievementPhoto4,
    buttonText: 'Read the full article',

    href: 'https://www.newindianexpress.com/cities/kochi/2022/Aug/26/the-green-building-specialist-2491360.html',
  },
  {
    title: 'Tamil Thisai: Bamboo & Recycled Waste - A Green Home in Kerala',
    description:
      "Tamil Thisai highlighted TAC Design LAB's eco-friendly home in Kerala, constructed using 90% recycled materials and bamboo. Completed in just four months, the project exemplifies the firm's dedication to rapid, sustainable construction that harmonizes with nature.",
    image: achievementPhoto5,
    buttonText: 'Read the full article',

    href: 'https://tamilthisai.com/india/bamboo-90-recycled-waste-kerala-architect-builds-green-home-in-4-months/',
  },
  {
    title: 'TEDx: Sustainable Architecture - A Talk by Ar. Ashams Ravi',
    description:
      'In a TEDx talk, Ar. Ashams Ravi delves into the principles of sustainable architecture, emphasizing eco-conscious design and construction practices. His insights and experiences offer valuable lessons for future architects and designers aiming to minimize environmental impact.',
    image: achievementPhoto6,
    buttonText: 'Watch the TEDx Talk',
    href: 'https://youtu.be/td0RKMoBkuM?si=y2zLy5rfCPaieDjk',
  },
];

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
        className="bg-[#D19A6A] bg-opacity-35 bg-repeat px-7 py-8 bg-blend-soft-light md:px-32"
        style={{
          backgroundImage: optimizedLandingPageArchitectureBackground,
        }}
      >
        <ul className="group space-y-5">
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} {...achievement} />
          ))}
        </ul>
      </section>

      <section
        className={cn(
          styles.achievement_cta,
          'bg-[#D19A6A] bg-opacity-5 bg-cover bg-center py-10',
        )}
        style={{ backgroundImage: optimizedBambooBackground }}
      >
        <div
          className={cn(
            styles.cta_content,
            'border-y-8 border-white bg-[#420C03CC] py-9',
          )}
        >
          <p className="text-balance px-9 py-5 text-center font-primary text-[22px] text-white md:px-10 md:text-[40px] md:leading-[50px]">
            Inspired by our achievements? Discover how we can help you bring
            your vision to life with sustainable and innovative solutions
            tailored to your needs.
          </p>
        </div>

        <button
          style={{ backgroundImage: optimizedButtonBackground }}
          className="mx-auto mt-4 block rounded bg-cover bg-center p-8 font-primary text-[12px] font-bold text-[#331803] duration-200 hover:scale-105 md:text-2xl"
        >
          Explore Our Services
        </button>
      </section>
    </div>
  );
}

export default Achievement;
