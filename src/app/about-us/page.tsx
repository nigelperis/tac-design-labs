import React from 'react';
import { type StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import Link from 'next/link';

import { getOptimizedBackgroundImage } from '~/utils/background-image-optimizer';
import { cn } from '~/utils/cn';

import SeparatorLG from '~/assets/svgs/separator-lg.svg';
import SeparatorSM from '~/assets/svgs/separator-sm.svg';

import aboutUsCtaBg from '~/assets/images/about-us-cta.png';
import aboutUsImag8Mob from '~/assets/images/about-us-image-8-mobile.png';
import aboutUsPageBackground from '~/assets/images/about-us-page-background.png';
import aboutUsPageImage1 from '~/assets/images/about-us-page-image-1.png';
import aboutUsPageImage2 from '~/assets/images/about-us-page-image-2.png';
import aboutUsPageImage3 from '~/assets/images/about-us-page-image-3.png';
import aboutUsPageImage4 from '~/assets/images/about-us-page-image-4.png';
import aboutUsPageImage5 from '~/assets/images/about-us-page-image-5.jpeg';
import aboutUsPageImage6 from '~/assets/images/about-us-page-image-6.jpeg';
import aboutUsPageImage7 from '~/assets/images/about-us-page-image-7.png';
import aboutUsPageImage8 from '~/assets/images/about-us-page-image-8.png';
import aboutUsPageImage9 from '~/assets/images/about-us-page-image-9.png';
import aboutUsImage10 from '~/assets/images/about-us-page-image-10.jpg';
import aboutUsImage11 from '~/assets/images/about-us-page-image-11.jpeg';
import aboutUsImage12 from '~/assets/images/about-us-page-image-12.jpeg';
import aboutUsImage13 from '~/assets/images/about-us-page-image-13.jpeg';
import aboutUsImage14 from '~/assets/images/about-us-page-image-14.jpeg';
import aboutUsImage15 from '~/assets/images/about-us-page-image-15.jpg';
import laurieBarkerPortrait from '~/assets/images/about-us-page-laurie-barker-portrait.jpeg';
import buttonBackground from '~/assets/images/button-background.png';

import aboutUsStyles from './about-us-styles.module.css';
import ImageGrid from './image-grid';

function AboutUsPage() {
  const optimizedAboutUsBackground = getOptimizedBackgroundImage({
    src: aboutUsPageBackground.src,
    width: aboutUsPageBackground.width,
    height: aboutUsPageBackground.height,
  });

  const optimizedAboutUsCta = getOptimizedBackgroundImage({
    src: aboutUsCtaBg.src,
    width: aboutUsCtaBg.width,
    height: aboutUsCtaBg.height,
  });

  const optimizedButtonBackground = getOptimizedBackgroundImage({
    src: buttonBackground.src,
    width: buttonBackground.width,
    height: buttonBackground.height,
  });

  return (
    <div className="relative">
      <section
        className="bg-cover py-10"
        style={{
          backgroundImage: optimizedAboutUsBackground,
        }}
      >
        <div className="lg:mx-[2rem] xl:mx-[3rem] 2xl:mx-[4rem]">
          <p className="mx-8 w-fit rounded-full bg-white px-5 py-[10px] font-primary text-sm font-extrabold text-primary-500 md:mx-[40px] md:px-12 md:py-[15px] md:text-base">
            OUR STORY{' '}
          </p>

          <h2
            className={cn(
              aboutUsStyles.main_title,
              'mt-8 px-8 font-primary text-3xl font-normal leading-10 text-primary-500 md:px-[40px] md:text-[52px] md:leading-[72px] lg:text-[44px] lg:leading-[67px]',
            )}
          >
            TAC Design LAB: Crafting{' '}
            <span className="text-accent-500"> Sustainable Future</span> with
            Vision and Innovation
          </h2>

          <ul className="space-y-10 px-8 md:px-[40px]">
            <StoryCard
              mobileImage={aboutUsPageImage1}
              mainImage={aboutUsPageImage1}
              subImage1={aboutUsPageImage2}
              subImage2={aboutUsPageImage3}
              description="TAC Design LAB is a collective of visionary architects and designers from Thiruvananthapuram, united by a passion for sustainability and innovation. Founded by Ar. Ashams Ravi, TAC was born from a commitment to creating buildings that harmonize with the earth, inspired by the principles of Laurie Baker. We focus on using minimal resources to deliver affordable, impactful architectural solutions."
            />

            <StoryCard
              title={
                <h3
                  className={cn(
                    aboutUsStyles.header1,
                    'font-primary text-[28px] font-normal leading-[39px] text-primary-500 md:text-[48px] md:leading-[67px] lg:text-[32px] lg:leading-[48px]',
                  )}
                >
                  Foundations of
                  <span className="text-accent-500"> Our Vision</span>
                </h3>
              }
              mobileImage={aboutUsPageImage5}
              mainImage={aboutUsPageImage4}
              subImage1={aboutUsPageImage5}
              subImage2={aboutUsPageImage6}
              description="Our philosophy centres on traditional craftsmanship and cultural heritage, emphasizing design innovation through sustainable techniques. We aim to meet current needs while safeguarding the well-being of future generations."
              alignment="main-right"
            />

            <StoryCard
              title={
                <h3
                  className={cn(
                    aboutUsStyles.header1,
                    'font-primary text-[28px] font-normal leading-[39px] text-primary-500 md:text-[48px] md:leading-[67px] lg:text-[32px] lg:leading-[48px]',
                  )}
                >
                  Partnering with
                  <span className="text-accent-500"> Clients</span> for Better
                  Designs
                </h3>
              }
              mobileImage={aboutUsImag8Mob}
              mainImage={aboutUsPageImage7}
              subImage1={aboutUsPageImage8}
              subImage2={aboutUsPageImage9}
              description="Client collaboration is fundamental to our approach. We prioritize understanding client's needs, preferences, and budget constraints, offering tailored solutions that exceed expectations. Regular site visits and adaptable designs ensure client satisfaction."
              alignment="main-left"
            />

            <StoryCard
              title={
                <h3
                  className={cn(
                    aboutUsStyles.header1,
                    'font-primary text-[28px] font-normal leading-[39px] tracking-tight text-primary-500 md:text-[48px] md:leading-[67px] lg:text-[1.8rem] lg:leading-[48px]',
                  )}
                >
                  A Portfolio of&nbsp;
                  <span className="text-accent-500">
                    Excellence & Recognition
                  </span>
                </h3>
              }
              mobileImage={aboutUsImage11}
              mainImage={aboutUsImage10}
              subImage1={aboutUsImage12}
              subImage2={aboutUsImage11}
              description="Our portfolio features key projects like Project Canaan, which earned the HUDCO National Award and widespread recognition for its green building efforts. Our team excels in unique, innovative designs, meticulous on-site detailing, and effective project management."
              alignment="main-left"
            />

            <StoryCard
              title={
                <h3
                  className={cn(
                    aboutUsStyles.header1,
                    'font-primary text-[28px] font-normal leading-[39px] text-primary-500 md:text-[48px] md:leading-[67px] lg:text-[1.8rem] lg:leading-[48px]',
                  )}
                >
                  From Workshops to a{' '}
                  <span className="text-accent-500"> Greener Future </span>
                </h3>
              }
              mobileImage={aboutUsImage14}
              mainImage={aboutUsImage13}
              subImage1={aboutUsImage14}
              subImage2={aboutUsImage15}
              description="Beyond our projects, TAC Design LAB engages with the community through collaborations with architecture and engineering colleges, advocating for sustainable practices, and conducting hands-on workshops in bamboo, mud, and brick masonry. Our vision is to reduce the building industry's environmental impact and create a sustainable future."
              alignment="main-left"
            />
          </ul>
        </div>
      </section>

      <section className="bg-[#FAEEE5] px-8 py-7 md:px-[120px] md:py-[100px]">
        <p className="w-fit rounded-full bg-[#F3D1B3] px-6 py-[11px] font-primary font-black tracking-[0.1rem] md:hidden md:font-black">
          INSPIRATION
        </p>
        <h2 className="pt-2 font-primary text-2xl font-normal leading-[39px] text-primary-500 md:hidden md:leading-[67px]">
          Laurie Baker: <span className="text-accent-500"> The Pioneer</span> of
          Sustainable Architecture and Timeless Inspiration
        </h2>
        <div className="flex flex-col items-center gap-5 md:flex-row md:gap-20">
          <div className="mt-5 md:my-0 md:flex-1 md:basis-1/3 lg:text-center">
            <Image
              src={laurieBarkerPortrait}
              placeholder="blur"
              alt="Laurie Barker Portrait"
              className="w-full overflow-hidden rounded-lg border-[6px] border-white"
            />
            <span className="mt-5 inline-flex space-x-2">
              <span
                className={cn(
                  aboutUsStyles.baker_credit,
                  'font-primary text-lg',
                )}
              >
                Credits:
              </span>
              <Link
                target="_blank"
                href="https://moremargie.com/article/bricks-of-kerala"
                className={cn(
                  aboutUsStyles.baker_credit_link,
                  'break-all font-primary text-lg text-accent-500 underline',
                )}
              >
                https://moremargie.com/article/bricks-of-kerala
              </Link>
            </span>
          </div>

          {/* Web */}
          <div
            className={cn(
              aboutUsStyles.baker_main_section,
              'md:flex-1 md:basis-2/3',
            )}
          >
            <p
              className={cn(
                aboutUsStyles.baker_title,
                'mb-3 hidden w-fit rounded-full bg-[#F3D1B3] px-9 py-[15px] font-primary text-base font-black tracking-[0.1rem] text-primary-500 md:block',
              )}
            >
              INSPIRATION
            </p>
            <h2
              className={cn(
                aboutUsStyles.baker_subtitle,
                'mb-3 hidden font-primary text-4xl font-normal text-primary-500 md:block md:leading-[66px]',
              )}
            >
              Laurie Baker:
              <span className="text-accent-500"> The Pioneer</span> of
              Sustainable Architecture and Timeless Inspiration
            </h2>
            <p
              className={cn(
                aboutUsStyles.baker_description,
                'text-balance text-justify font-primary text-lg font-normal leading-8 tracking-[2%] text-gray-950',
              )}
            >
              Laurie Baker (2 March 1917 – 1 April 2007) was a British-born
              Indian architect, known for his sustainable and cost-effective
              approach to architecture. Baker was deeply committed to the idea
              of using local materials and traditional building techniques in
              his work, and he is widely regarded as one of the pioneers of
              sustainable architecture in India. He received numerous awards for
              his work, including the Padma Shri in 1990 and the Padma Vibhushan
              in 2007, two of the highest civilian awards in India. Today,
              Baker’s legacy continues to inspire architects and builders around
              the world to embrace sustainable design principles, and his work
              serves as a testament to the power of architecture to improve
              people’s lives.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative border-y-8 border-white bg-cover py-5 md:h-[550px] md:py-[88px] lg:h-[540px] xl:h-[560px] 2xl:h-[550px]"
        style={{
          backgroundImage: optimizedAboutUsCta,
        }}
      >
        <SeparatorSM className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 md:hidden" />
        <SeparatorLG className="absolute left-1/2 top-0 hidden -translate-x-1/2 -translate-y-1/2 md:block" />
        <div className="bg-opacity-50 px-[8%] py-4 md:px-[5%] lg:px-[6%] xl:px-[6%] 2xl:px-[6%]">
          <h2 className="font-primary text-3xl font-normal text-primary-500 md:text-[52px] md:leading-[72px] lg:text-[40px] lg:leading-[72px] xl:text-[46px] xl:leading-[72px] 2xl:text-[52px] 2xl:leading-[72px]">
            We
            <span className="text-accent-500"> Collaborate</span> with Everyone
          </h2>
          <p className="mt-5 text-justify font-primary text-lg font-normal leading-8 text-gray-950 md:text-[28px] md:leading-[45px] lg:text-[20px] lg:leading-[45px] xl:text-[24px] xl:leading-[45px] 2xl:text-[28px] 2xl:leading-[45px]">
            At TAC Design LAB, we believe in the power of collaboration. Whether
            you&apos;re a homeowner, a business, or an institution, we tailor
            our services to meet your unique needs. Let&apos;s work together to
            create sustainable and innovative spaces that leave a lasting
            impact.
          </p>
        </div>
        <div className="flex justify-center font-primary">
          <Link
            href="/services"
            style={{ backgroundImage: optimizedButtonBackground }}
            className="rounded bg-cover bg-center p-10 px-4 text-[13px] font-bold text-primary-500 duration-200 hover:scale-105 hover:bg-opacity-80 md:p-14 md:text-2xl lg:p-11 lg:text-xl xl:p-12 xl:text-xl 2xl:p-12 2xl:text-xl"
          >
            Explore Our Services
          </Link>
        </div>
      </section>
    </div>
  );
}

export default AboutUsPage;

interface StoryCardProps {
  title?: React.ReactNode;
  mobileImage: string | StaticImport;
  mainImage: string | StaticImport;
  subImage1: string | StaticImport;
  subImage2: string | StaticImport;
  description: string;
  alignment?: 'main-left' | 'main-right' | 'main-bottom';
}

function StoryCard(props: StoryCardProps) {
  const {
    title,
    mobileImage,
    mainImage,
    description,
    subImage1,
    subImage2,
    alignment,
  } = props;

  const isImage10 = mainImage === aboutUsImage10;

  return (
    <li className="group">
      <div className="md:hidden md:leading-[48px]">{title} </div>

      <div className="items-center md:mt-8 md:flex md:gap-11 md:group-odd:flex-row-reverse">
        <div className="flex-grow basis-1/2">
          <ImageGrid
            mobileImage={mobileImage}
            mainImage={mainImage}
            subImage1={subImage1}
            subImage2={subImage2}
            alignment={alignment}
            centerObjectPosition={isImage10}
          />
        </div>

        <div className="flex-grow basis-1/2 lg:basis-[42%] xl:basis-[45%] 2xl:basis-1/2">
          <div className="mb-5 hidden md:block md:leading-[48px]">{title}</div>
          <p
            className={cn(
              aboutUsStyles.about_us_description,
              'text-balance text-justify font-primary text-lg font-normal text-gray-950 md:text-2xl md:leading-[45px]',
            )}
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>
        </div>
      </div>
    </li>
  );
}
