import React from 'react';
import { type StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

import { getOptimizedBackgroundImage } from '~/utils/background-image-optimizer';

import aboutUsPageImage1 from '~/assets/images/about-us-page-image-1.png';
import aboutUsPageImage2 from '~/assets/images/about-us-page-image-2.png';
import aboutUsPageImage3 from '~/assets/images/about-us-page-image-3.png';
import laurieBarkerPortrait from '~/assets/images/about-us-page-laurie-barker-portrait.jpeg';
import landingPageArchitectureBackground from '~/assets/images/landing-page-architecture-background.png';

function AboutUsPage() {
  const optimizedLandingPageArchitectureBackground =
    getOptimizedBackgroundImage({
      src: landingPageArchitectureBackground.src,
      width: landingPageArchitectureBackground.width,
      height: landingPageArchitectureBackground.height,
    });

  return (
    <div className="relative">
      <section
        className="bg-[#EDD7C3] py-16 bg-blend-soft-light"
        style={{
          backgroundImage: `url(${optimizedLandingPageArchitectureBackground})`,
        }}
      >
        <p className="mx-8 w-fit rounded-full bg-white px-5 py-[10px] font-primary text-xs font-normal text-primary-500">
          Our story
        </p>

        <h2 className="mt-8 px-8 font-primary text-3xl font-normal text-primary-500 md:text-[52px]">
          TAC Design LAB: Crafting{' '}
          <span className="text-accent-500"> Sustainable Future</span> with
          Vision and Innovation
        </h2>

        <ul className="my-10 space-y-10 px-8">
          <StoryCard
            mainImage={aboutUsPageImage1}
            subImage1={aboutUsPageImage2}
            subImage2={aboutUsPageImage3}
            description="TAC Design Lab is a collective of visionary architects and designers from Thiruvananthapuram, united by a passion for sustainability and innovation. Founded by Ar. Ashams Ravi, TAC was born from a commitment to creating buildings that harmonize with the earth, inspired by the principles of Laurie Baker. We focus on using minimal resources to deliver affordable, impactful architectural solutions."
          />

          <StoryCard
            title={
              <h3 className="font-primary text-5xl font-normal text-primary-500">
                Foundations of
                <span className="text-accent-500"> Our Vision</span>
              </h3>
            }
            mainImage={aboutUsPageImage1}
            subImage1={aboutUsPageImage2}
            subImage2={aboutUsPageImage3}
            description="Our philosophy centres on traditional craftsmanship and cultural heritage, emphasizing design innovation through sustainable techniques. We aim to meet current needs while safeguarding the well-being of future generations."
          />

          <StoryCard
            title={
              <h3 className="font-primary text-3xl font-normal text-primary-500 md:text-5xl">
                Partnering with
                <span className="text-accent-500"> Clients</span> for Better
                Designs
              </h3>
            }
            mainImage={aboutUsPageImage1}
            subImage1={aboutUsPageImage2}
            subImage2={aboutUsPageImage3}
            description="Client collaboration is fundamental to our approach. We prioritize understanding client's needs, preferences, and budget constraints, offering tailored solutions that exceed expectations. Regular site visits and adaptable designs ensure client satisfaction."
          />

          <StoryCard
            title={
              <h3 className="font-primary text-3xl font-normal text-primary-500 md:text-5xl">
                A Portfolio of{' '}
                <span className="text-accent-500">
                  {' '}
                  Excellence & Recognition{' '}
                </span>
              </h3>
            }
            mainImage={aboutUsPageImage1}
            subImage1={aboutUsPageImage2}
            subImage2={aboutUsPageImage3}
            description="Our portfolio features key projects like Project Canaan, which earned the HUDCO National Award and widespread recognition for its green building efforts. Our team excels in unique, innovative designs, meticulous on-site detailing, and effective project management."
          />

          <StoryCard
            title={
              <h3 className="font-primary text-3xl font-normal text-primary-500 md:text-5xl">
                From Workshops to a{' '}
                <span className="text-accent-500"> Greener Future </span>
              </h3>
            }
            mainImage={aboutUsPageImage1}
            subImage1={aboutUsPageImage2}
            subImage2={aboutUsPageImage3}
            description="Our portfolio features key projects like Project Canaan, which earned the HUDCO National Award and widespread recognition for its green building efforts. Our team excels in unique, innovative designs, meticulous on-site detailing, and effective project management. Looking ahead, our vision is to reduce the building industry's environmental impact, creating a more sustainable world for future generations."
          />
        </ul>
      </section>

      <section className="bg-[#FAEEE5] px-8 py-9">
        <p className="w-fit rounded-full bg-[#F3D1B3] px-5 py-[10px] font-primary text-xs font-normal text-primary-500 md:hidden">
          Inspiration
        </p>
        <h2 className="l font-primary text-3xl font-normal text-primary-500 md:hidden">
          Laurie Baker: The Pioneer of Sustainable Architecture and Timeless
          Inspiration
        </h2>
        <div className="flex flex-col items-center gap-10 md:flex-row md:gap-20">
          <Image
            src={laurieBarkerPortrait}
            alt="Laurie Barker Portrait"
            className="w-full overflow-hidden rounded-lg border-[6px] border-white"
          />
          <div>
            <p className="mb-3 hidden w-fit rounded-full bg-[#F3D1B3] px-5 py-[10px] font-primary text-xs font-normal text-primary-500 md:block">
              Inspiration
            </p>
            <h2 className="mb-3 hidden font-primary text-5xl font-normal text-primary-500 md:block">
              Laurie Baker:{' '}
              <span className="text-accent-500"> The Pioneer</span> of
              Sustainable Architecture and Timeless Inspiration
            </h2>
            <p className="text-balance text-justify font-primary text-lg font-normal text-gray-950">
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
    </div>
  );
}

export default AboutUsPage;

interface StoryCardProps {
  title?: React.ReactNode;
  mainImage: string | StaticImport;
  subImage1: string | StaticImport;
  subImage2: string | StaticImport;
  description: string;
}

function StoryCard(props: StoryCardProps) {
  const { title, mainImage, description, subImage1, subImage2 } = props;
  return (
    <li className="group">
      <div className="md:hidden">{title} </div>

      <div className="items-center md:mt-8 md:flex md:gap-11 md:group-odd:flex-row-reverse">
        <div className="my-5 grid md:grid-cols-2 md:grid-rows-2 md:gap-6">
          <Image
            className="object-cover-cover min-h-full min-w-full overflow-hidden rounded-[20px] border-4 border-surface-500 md:row-span-2"
            src={mainImage}
            alt="about us page image 1"
          />
          <Image
            className="hidden h-full min-h-full min-w-full overflow-hidden rounded-[20px] border-4 border-surface-500 object-cover md:block"
            src={subImage1}
            alt="about us page image 2"
          />
          <Image
            className="hidden h-full min-h-full min-w-full overflow-hidden rounded-[20px] border-4 border-surface-500 object-cover md:block"
            src={subImage2}
            alt="about us page image 3"
          />
        </div>

        <div>
          <div className="mb-5 hidden md:block">{title}</div>
          <p className="text-balance text-justify font-primary text-lg font-normal text-gray-950 md:text-2xl">
            {description}
          </p>
        </div>
      </div>
    </li>
  );
}
