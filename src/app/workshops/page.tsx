import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { getOptimizedBackgroundImage } from '~/utils/background-image-optimizer';

import buttonBackground from '~/assets/images/button-background.png';
import workshopHeaderBackground from '~/assets/images/workshop_bg_header_2.jpg';
import Workshope3 from '~/assets/images/workshop_image1.jpg';
import Workshope4 from '~/assets/images/workshop_image2.jpg';
import Workshope5 from '~/assets/images/workshop_image3.jpg';
import bambooWorkshop1 from '~/assets/images/workshop-bamboo-1.jpg';
import bambooWorkshop2 from '~/assets/images/workshop-bamboo-2.jpg';
import bambooWorkshop3 from '~/assets/images/workshop-bamboo-3.jpg';
import workshopWebBanner from '~/assets/images/workshop-banner-web.png';
import brickWorkshop1 from '~/assets/images/workshop-brick-1.jpeg';
import brickWorkshop2 from '~/assets/images/workshop-brick-2.jpeg';
import brickWorkshop3 from '~/assets/images/workshop-brick-3.jpeg';
import workshopCta from '~/assets/images/workshop-cta.jpg';
import mudWorkshop1 from '~/assets/images/workshop-mud-1.jpeg';
import mudWorkshop2 from '~/assets/images/workshop-mud-2.jpeg';
import mudWorkshop3 from '~/assets/images/workshop-mud-3.jpeg';
import workshopPageBackground from '~/assets/images/workshop-page-background.png';
import Workshope6 from '~/assets/images/Workshop4.jpg';
import Workshope7 from '~/assets/images/workshop5.jpg';
import Workshope8 from '~/assets/images/workshop6.jpg';
import Workshopemobile from '~/assets/images/workshopbgmobiel.jpg';

const Workshops = () => {
  const optimizedButtonBackground = getOptimizedBackgroundImage({
    src: buttonBackground.src,
    width: buttonBackground.width,
    height: buttonBackground.height,
  });
  const optimizedWorkshopPageBackground = getOptimizedBackgroundImage({
    src: workshopPageBackground.src,
    width: workshopPageBackground.width,
    height: workshopPageBackground.height,
  });
  const optimizedWorkshopCtaBackground = getOptimizedBackgroundImage({
    src: workshopCta.src,
    width: workshopCta.width,
    height: workshopCta.height,
  });
  return (
    <div
      className="bg-[#E9D0B7] bg-repeat font-primary"
      style={{
        backgroundImage: optimizedWorkshopPageBackground,
      }}
    >
      <div className="mx-auto flex h-auto flex-col lg:flex-row">
        <div className="relative flex-shrink-0 lg:w-[35%]">
          <Image
            src={workshopHeaderBackground}
            alt="Workshops Header Background"
            width={600}
            height={300}
            className="hidden h-full w-full object-cover lg:flex"
          />
          <Image
            src={Workshopemobile}
            alt="Workshops Header Background"
            width={600}
            height={300}
            className="flex h-full w-full object-cover lg:hidden"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-5 p-6 font-primary">
            <h2 className="text-center text-[44px] font-bold text-[#331803] md:text-[62px]">
              Workshops
            </h2>
            <p className="text-center text-[25px] text-[#5A3213] md:text-[36px]">
              Learn, Build, Innovate
            </p>
          </div>
        </div>

        <div className="relative h-full lg:w-[65%]">
          <Image
            src={workshopWebBanner}
            alt="Workshop Gallery"
            width={840}
            height={500}
            className="hidden h-full w-full object-cover lg:flex"
          />
        </div>
      </div>

      <div className="px-[18px] py-10 md:px-20 md:py-10">
        <p className="text-justify text-[16px] font-[400] leading-relaxed text-[#173552] md:text-[28px]">
          At TAC Design LAB, we believe in nurturing the next generation of
          architects through immersive, hands-on workshops on sustainable
          architecture. These workshops, tailored for architecture students,
          focus on using materials like bamboo, mud, and brick while emphasizing
          sustainable practices and future-ready design approaches. In a world
          facing climate change and resource depletion, these workshops bridge
          the gap between theoretical knowledge and practical application,
          preparing students to lead with innovative and eco-conscious
          solutions.
        </p>
      </div>
      <div className="px-[18px] font-primary md:px-10 lg:px-16">
        <h1 className="mb-2 text-xl font-bold leading-normal text-[#C6742B] md:mb-8 md:text-[42px]">
          Why These Workshops Matter
        </h1>

        <div className="mb-12 flex flex-col-reverse gap-8 md:justify-between xl:flex-col-reverse">
          <div className="w-full space-y-6 font-[400] text-[#173552] xl:w-[100%]">
            <ul className="list-disc pl-6 md:pl-10">
              <li className="mb-3 text-[16px] md:text-[24px]">
                <span className="font-bold">Practical Learning:</span>{' '}
                Architectural education often lacks hands-on experience. Our
                workshops offer students the chance to work directly with
                materials and techniques, bringing theoretical concepts to life.
              </li>
              <li className="mb-3 text-[16px] md:text-[24px]">
                <span className="font-bold">Sustainability in Focus:</span> By
                working with eco-friendly materials like bamboo and mud,
                participants gain a deeper appreciation for sustainable
                construction methods, fostering a commitment to greener
                practices.
              </li>
              <li className="mb-3 text-[16px] md:text-[24px]">
                <span className="font-bold">Skill Development:</span> Students
                develop essential skills, from material handling to construction
                techniques, preparing them to meet the evolving demands of the
                industry.
              </li>
              <li className="mb-3 text-[16px] md:text-[24px]">
                <span className="font-bold">Inspiring Innovation:</span>{' '}
                Exposure to diverse materials and methods sparks creativity,
                encouraging students to explore fresh, sustainable design ideas.
              </li>
              <li className="mb-3 text-[16px] md:text-[24px]">
                <span className="font-bold">Real-World Solutions:</span>{' '}
                Hands-on experience equips students with the tools to tackle
                real-world challenges in sustainable construction confidently
              </li>
            </ul>
            <p className="mb-3 text-[16px] md:text-[24px]">
              Our workshops are more than just learning experiences - they are a
              step toward building a more sustainable and responsible
              architectural future.
            </p>
          </div>

          <div className="mt-5 grid w-full grid-cols-2 gap-2 lg:w-[100%] lg:grid-cols-3 xl:gap-0">
            <div className="col-span-1 overflow-hidden rounded-xl drop-shadow-xl xl:p-3">
              <Image
                src={Workshope3}
                alt="Workshop Image 1"
                width={500}
                height={500}
                className="aspect-[4/3] h-full w-full rounded-xl border-[2.5px] border-[#F0E0D6] object-cover md:border-[2.5px]"
              />
            </div>
            <div className="col-span-1 overflow-hidden rounded-xl drop-shadow-xl xl:p-3">
              <Image
                src={Workshope4}
                alt="Workshop Image 2"
                width={500}
                height={500}
                className="aspect-[4/3] h-full w-full rounded-xl border-[2.5px] border-[#F0E0D6] object-cover md:border-[2.5px]"
              />
            </div>
            <div className="col-span-2 overflow-hidden rounded-xl drop-shadow-xl lg:col-span-1 xl:p-3">
              <Image
                src={Workshope5}
                alt="Workshop Image 3"
                width={500}
                height={500}
                className="aspect-[4/3] h-full w-full rounded-xl border-[2.5px] border-[#F0E0D6] object-cover md:border-[2.5px]"
              />
            </div>
          </div>
        </div>
        <div className="py-1 md:py-10">
          <h1 className="mb-4 text-3xl text-[24px] font-bold text-[#C6742B] md:mb-10 md:text-[48px]">
            Workshop Structure
          </h1>
          <p className="text-[16px] font-bold italic text-[#173552] md:text-[28px]">
            These workshops are thoughtfully crafted to inspire and educate,
            combining engaging lectures with hands-on sessions to provide a
            holistic learning experience in sustainable architecture.
          </p>
          <div className="py-6">
            <div className="flex flex-col justify-between gap-8 lg:flex-row">
              <div className="flex h-full w-full flex-col justify-between lg:w-[70%]">
                <h2 className="mb-4 text-3xl text-[24px] font-bold text-[#C6742B] md:mb-8 md:ml-6 md:text-[36px]">
                  Lecture Session Highlights:
                </h2>
                <ul className="ml-6 max-w-[790px] list-disc space-y-4 text-[16px] text-[#173552] md:ml-16 md:text-[24px]">
                  <li>
                    <span className="font-bold">
                      Understanding the Built Environment:
                    </span>{' '}
                    Explore how human-made surroundings, from buildings to
                    infrastructure, shape our lives and influence
                    sustainability.
                  </li>
                  <li>
                    <span className="font-bold">Rethinking Development:</span>{' '}
                    Delve into the impact of consumption-driven growth and the
                    urgent need for eco-conscious development.
                  </li>
                  <li>
                    <span className="font-bold">A Thought to Ponder:</span>{' '}
                    &quot;The earth is not given to you by your parents; you
                    have taken a loan from your next generation.&quot; This
                    quote serves as a powerful reminder of our shared
                    responsibility toward the planet.
                  </li>
                  <li>
                    <span className="font-bold">
                      Sustainability in Practice:
                    </span>{' '}
                    Learn techniques like reducing resource input, managing
                    waste, and designing with minimal environmental impact.
                  </li>
                  <li>
                    <span className="font-bold">Building with Purpose:</span>
                    Understand how to create spaces that blend comfort,
                    functionality, and environmental harmony through humane
                    design and site analysis.
                  </li>
                </ul>
              </div>

              <div className="mt-0 flex h-full w-full flex-col gap-4 md:mt-12 lg:w-[30%]">
                <div className="relative aspect-video h-full w-full lg:aspect-[5/3.5] xl:aspect-[2/1]">
                  <Image
                    src={Workshope6}
                    alt="Lecture Image 1"
                    fill
                    className="rounded-xl border-[2.5px] border-[#F0E0D6] object-cover shadow-md drop-shadow-xl"
                  />
                </div>
                <div className="w-ful relative aspect-video h-full lg:aspect-[5/3.5] xl:aspect-[2/1]">
                  <Image
                    src={Workshope7}
                    alt="Lecture Image 2"
                    fill
                    className="rounded-xl border-[2.5px] border-[#F0E0D6] object-cover shadow-md drop-shadow-xl"
                  />
                </div>
                <div className="relative aspect-video h-full w-full lg:aspect-[5/3.5] xl:aspect-[2/1]">
                  <Image
                    src={Workshope8}
                    alt="Lecture Image 3"
                    fill
                    className="rounded-xl border-[2.5px] border-[#F0E0D6] object-cover shadow-md drop-shadow-xl"
                  />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <h2 className="mb-3 text-3xl text-[24px] font-bold text-[#C6742B] md:mb-8 md:text-[36px]">
                Hands-On Sessions
              </h2>
              <p className="text-[16px] font-[700] italic text-[#173552] md:text-[24px]">
                Dive into a world of experiential learning with our hands-on
                sessions, where sustainable materials take center stage. These
                sessions are crafted to highlight the versatility of each
                material, allowing participants to explore their potential
                through guided, step-by-step construction activities.
              </p>
            </div>
          </div>
        </div>

        <div className="">
          <div className=" ">
            <div className="w-full rounded-[50px] bg-[#FFF5EDB2] py-5 md:py-2">
              <h1 className="text-center text-[24px] font-bold text-[#C6742B] md:text-[48px]">
                Bamboo Workshop
              </h1>
            </div>
            <p className="my-6 text-[16px] font-[700] italic text-[#173552] md:px-10 md:text-[24px]">
              Discover the versatility and elegance of bamboo as a sustainable
              construction material.
            </p>

            <div className="mb-8 grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-1 md:px-10 lg:gap-4">
              <div className="relative aspect-square">
                <Image
                  src={bambooWorkshop1}
                  alt="Workshop Group"
                  fill
                  className="rounded-[38px] border-[5px] border-[#F0E0D6] object-cover drop-shadow-xl"
                />
              </div>
              <div className="relative aspect-square">
                <Image
                  src={bambooWorkshop2}
                  alt="Bamboo Structure"
                  fill
                  className="rounded-[38px] border-[5px] border-[#F0E0D6] object-cover drop-shadow-xl"
                />
              </div>
              <div className="relative aspect-square">
                <Image
                  src={bambooWorkshop3}
                  alt="Hands-on Bamboo Work"
                  fill
                  className="rounded-[38px] border-[5px] border-[#F0E0D6] object-cover drop-shadow-xl"
                />
              </div>
            </div>

            <div className="space-y-4 text-lg">
              <p className="text-[16px] font-[400] text-[#173552] md:px-10 md:text-[24px]">
                Here is what this workshop has in store for you -
              </p>
              <ul className="ml-8 list-disc text-[16px] font-[400] text-[#173552] md:px-12 md:text-[24px]">
                <li className="md:mt-8">
                  <strong>Introduction to Bamboo:</strong> Characteristics,
                  properties, and preservation methods.
                </li>
                <li className="md:mt-8">
                  <strong>Feasibility in Current Scenarios:</strong> Exploring
                  the pros and cons of bamboo in contemporary construction.
                </li>
                <li className="md:mt-8">
                  <strong>Climatic Considerations:</strong> Understanding how
                  bamboo performs in different climatic conditions.
                </li>
                <li className="md:mt-8">
                  <strong>Treatment Methods:</strong> Techniques for treating
                  bamboo to enhance durability and resistance to pests.
                </li>
                <li className="md:mt-8">
                  <strong>Joining Techniques: </strong> Methods for joining
                  bamboo components in construction.
                </li>
                <li className="md:mt-8">
                  <strong>Structural Properties: </strong>Examining
                  bamboo&apos;s tensile strength and bending capacity.
                </li>
                <li className="md:mt-8">
                  <strong>Practical Construction: </strong>Building a structure
                  using bamboo, applying the knowledge gained in the lecture.
                </li>
                <li className="md:mt-8">
                  <strong>Relevant IS Codes:</strong> Overview of Indian
                  Standards (IS) codes related to bamboo construction.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <div className=" ">
            <div className="w-full rounded-[50px] bg-[#FFF5EDB2] py-5">
              <h1 className="text-center text-[24px] font-bold text-[#C6742B] md:text-[48px]">
                Mud Workshop
              </h1>
            </div>
            <p className="my-6 text-[16px] font-[700] italic text-[#173552] md:px-10 md:text-[24px]">
              Step into the timeless world of mud construction, a practice
              rooted in tradition yet essential for sustainable living.
            </p>

            <div className="mb-8 grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-1 md:px-10 lg:gap-4">
              <div className="relative aspect-square">
                <Image
                  src={mudWorkshop1}
                  alt="Workshop Group"
                  fill
                  objectPosition="50% 30%"
                  className="rounded-[38px] border-[5px] border-[#F0E0D6] object-cover drop-shadow-xl"
                />
              </div>
              <div className="relative aspect-square">
                <Image
                  src={mudWorkshop2}
                  alt="Bamboo Structure"
                  fill
                  className="rounded-[38px] border-[5px] border-[#F0E0D6] object-cover drop-shadow-xl"
                />
              </div>
              <div className="relative aspect-square">
                <Image
                  src={mudWorkshop3}
                  alt="Hands-on Bamboo Work"
                  fill
                  className="rounded-[38px] border-[5px] border-[#F0E0D6] object-cover drop-shadow-xl"
                />
              </div>
            </div>

            <div className="space-y-4 text-lg">
              <p className="text-[16px] font-[400] text-[#173552] md:px-10 md:text-[24px]">
                A sneak peek of what you’ll learn in this workshop -
              </p>
              <ul className="ml-8 list-disc text-[16px] font-[400] text-[#173552] md:px-10 md:text-[24px]">
                <li className="md:mt-8">
                  <strong>Introduction to Mud:</strong> Understanding mud’s
                  characteristics, properties, and preservation techniques.
                </li>
                <li className="md:mt-8">
                  <strong>Feasibility in Current Scenarios:</strong> Discussing
                  the advantages and challenges of mud in modern construction.
                </li>
                <li className="md:mt-8">
                  <strong>Climatic Considerations:</strong> Evaluating
                  mud&apos;s performance in different environments
                </li>
                <li className="md:mt-8">
                  <strong>Tests for Mud:</strong> Learning methods to assess mud
                  quality and suitability
                </li>
                <li className="md:mt-8">
                  <strong>Elemental Composition:</strong> Understanding the role
                  of mud components in construction
                </li>
                <li className="md:mt-8">
                  <strong>Stabilization Methods:</strong> Understanding the role
                  Techniques for stabilizing mud using lime, rice husk, or other
                  binders
                </li>
                <li className="md:mt-8">
                  <strong>Practical Construction:</strong> Understanding the
                  role Building structures using mud, such as Adobe bricks, Cob
                  walls and Wattle & Daub walls.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <div className=" ">
            <div className="w-full rounded-[50px] bg-[#FFF5EDB2] py-5">
              <h1 className="text-center text-[24px] font-bold text-[#C6742B] md:text-[48px]">
                Brick Workshop
              </h1>
            </div>
            <p className="my-6 text-[16px] font-[700] italic text-[#173552] md:px-10 md:text-[24px]">
              Explore the enduring charm and strength of bricks in sustainable
              construction.
            </p>

            <div className="mb-8 grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-1 md:px-10 lg:gap-4">
              <div className="relative aspect-square">
                <Image
                  src={brickWorkshop1}
                  alt="Workshop Group"
                  fill
                  className="rounded-[38px] border-[5px] border-[#F0E0D6] object-cover drop-shadow-xl"
                />
              </div>
              <div className="relative aspect-square">
                <Image
                  src={brickWorkshop2}
                  alt="Bamboo Structure"
                  fill
                  className="rounded-[38px] border-[5px] border-[#F0E0D6] object-cover drop-shadow-xl"
                />
              </div>
              <div className="relative aspect-square">
                <Image
                  src={brickWorkshop3}
                  alt="Hands-on Bamboo Work"
                  fill
                  className="rounded-[38px] border-[5px] border-[#F0E0D6] object-cover drop-shadow-xl"
                />
              </div>
            </div>

            <div className="space-y-4 text-lg">
              <p className="text-[16px] font-[400] text-[#173552] md:px-10 md:text-[24px]">
                See what valuable insights await in this workshop -
              </p>
              <ul className="ml-8 list-disc text-[16px] font-[400] text-[#173552] md:px-10 md:text-[24px]">
                <li className="md:mt-8">
                  <strong>Introduction to Bricks:</strong> Characteristics,
                  properties, and preservation techniques.
                </li>
                <li className="md:mt-8">
                  <strong>Feasibility in Current Scenarios:</strong> Assessing
                  the relevance of bricks in sustainable architecture.{' '}
                </li>
                <li className="md:mt-8">
                  <strong>Climatic Considerations:</strong> Understanding how
                  bricks perform in different climatic conditions
                </li>
                <li className="md:mt-8">
                  <strong>Brick Baking Process:</strong> An overview of how
                  bricks are made and baked
                </li>
                <li className="md:mt-8">
                  <strong>Types of Bricks:</strong> Exploring their variety and
                  uses.
                </li>
                <li className="md:mt-8">
                  <strong>Bonding Techniques:</strong> Learning different
                  methods to join bricks.
                </li>
                <li className="md:mt-8">
                  <strong>Practical Construction:</strong> Learning different
                  Crafting walls, arches, jalis, and other decorative elements
                  using brick
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <div className="">
            {/* Key Takeaways Section */}
            <div
              className="mb-8 rounded-[18px] border-2 border-[#ECC19A] bg-[#FFFFFF80] bg-opacity-50 p-8"
              style={{ boxShadow: '0px 4px 4px 0px #00000040' }}
            >
              {' '}
              <h2 className="text-[24px] font-bold text-[#C6742B] md:text-[36px]">
                Key Takeaways for Students
              </h2>
              <ul className="ml-2 mt-6 space-y-7 text-base font-[400] text-[#173552] md:ml-9 md:text-[24px] md:leading-[33px]">
                <li>
                  <strong>Confidence with Sustainable Materials:</strong>{' '}
                  Hands-on sessions help students understand and confidently use
                  bamboo, mud, and brick in their designs.
                </li>
                <li>
                  <strong>Practical Know-How:</strong> Learn the end-to-end
                  process of working with sustainable materials - from selection
                  to construction.
                </li>
                <li>
                  <strong>Skill Development:</strong> Gain tactile experience
                  with materials and tools, building essential construction
                  skills.
                </li>
                <li>
                  <strong>Tool Familiarity:</strong> Master the use of
                  specialized tools for working with bamboo, mud, and brick,
                  preparing for real-world projects.
                </li>
              </ul>
              <p className="mt-6 text-[16px] font-[700] italic text-[#173552] md:text-[24px]">
                These workshops bridge the gap between theory and practice,
                empowering students with the skills, confidence, and creativity
                needed to build sustainably. By engaging with these hands-on
                experiences, participants are not just learning – they&apos;re
                shaping a greener future in architecture.
              </p>
            </div>

            {/* Completed Workshops Section */}
            <div className="pt-1 md:pt-6">
              <h2 className="text-[24px] font-bold text-[#C6742B] md:text-[48px]">
                Completed Workshops and Talks
              </h2>
              <p className="mt-5 text-base font-bold italic leading-relaxed text-[#173552] md:text-[24px]">
                A journey of impactful workshos and enlightening talks that
                promote sustainable architectural practices.
              </p>
            </div>
          </div>
        </div>

        <div className="h-32"></div>
      </div>
      <div>
        <div className="bg-white py-2">
          <div
            className="flex h-[320px] w-full items-center justify-center bg-cover bg-center px-4 sm:h-[380px] sm:px-8 md:h-[520px] md:px-16 lg:px-16"
            style={{
              backgroundImage: optimizedWorkshopCtaBackground,
            }}
          >
            <div className="m-auto max-w-5xl text-center">
              <h2 className="mb-2 text-center text-[24px] font-medium md:text-[48px]">
                Explore More Insights
              </h2>{' '}
              <p className="mt-4 text-base font-[400] tracking-wide text-[#000000] md:text-[32px] md:leading-10">
                Dive deeper into sustainable architecture, materials, and
                techniques by exploring our blog posts. Gain valuable knowledge,
                tips, and inspiration to fuel your design journey.
              </p>
              <div className="flex justify-center">
                <Link
                  href="/blogs"
                  style={{ backgroundImage: optimizedButtonBackground }}
                  className="rounded bg-cover bg-center p-12 px-4 text-[13px] font-bold text-primary-500 duration-200 hover:scale-105 hover:bg-opacity-80 md:mt-2 md:p-14 md:text-2xl"
                >
                  Read Our Latest Posts
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workshops;
