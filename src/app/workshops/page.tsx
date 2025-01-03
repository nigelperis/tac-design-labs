import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { getOptimizedBackgroundImage } from '~/utils/background-image-optimizer';

import buttonBackground from '~/assets/images/button-background.png';
import Workshope3 from '~/assets/images/workshop_image1.jpg';
import Workshope4 from '~/assets/images/workshop_image2.jpg';
import Workshope5 from '~/assets/images/workshop_image3.jpg';
import bambooWorkshop1 from '~/assets/images/workshop-bamboo-1.jpg';
import bambooWorkshop2 from '~/assets/images/workshop-bamboo-2.jpg';
import bambooWorkshop3 from '~/assets/images/workshop-bamboo-3.jpg';
import brickWorkshop1 from '~/assets/images/workshop-brick-1.jpeg';
import brickWorkshop2 from '~/assets/images/workshop-brick-2.jpeg';
import brickWorkshop3 from '~/assets/images/workshop-brick-3.jpeg';
import workshopCta from '~/assets/images/workshop-cta.jpg';
import workshopHeaderBackground from '~/assets/images/workshop-header-background.png';
import mudWorkshop1 from '~/assets/images/workshop-mud-1.jpeg';
import mudWorkshop2 from '~/assets/images/workshop-mud-2.jpeg';
import mudWorkshop3 from '~/assets/images/workshop-mud-3.jpeg';
import workshopPageBackground from '~/assets/images/workshop-page-background.png';
import workshopImage1 from '~/assets/images/workshop-page-image-1.png';
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
        <div className="relative lg:w-[40%]">
          <Image
            src={workshopHeaderBackground}
            alt="Workshops Header Background"
            width={600}
            height={300}
            className="hidden h-auto w-full object-cover lg:flex"
          />
          <Image
            src={Workshopemobile}
            alt="Workshops Header Background"
            width={600}
            height={300}
            className="flex h-auto w-full object-cover lg:hidden"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-5 p-6 font-primary">
            <h2 className="text-center text-[44px] font-bold text-[#331803] md:text-[62px]">
              Workshops
            </h2>
            <p className="text-[25px] text-[#5A3213] md:text-[36px]">
              Learn, Build, Innovate
            </p>
          </div>
        </div>

        <div className="relative h-full lg:w-[60%]">
          <Image
            src={workshopImage1}
            alt="Workshop Gallery"
            width={840}
            height={500}
            className="hidden h-auto w-full object-cover lg:flex"
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
      <div className="px-[18px] font-primary md:px-20">
        <h1 className="mb-2 text-xl font-bold leading-normal text-[#C6742B] md:mb-8 md:text-[42px]">
          Why These Workshops Matter
        </h1>

        <div className="mb-12 flex flex-col-reverse gap-8 md:justify-between xl:flex-row-reverse">
          <div className="w-full space-y-6 font-[400] text-[#173552] xl:w-[50%]">
            <ul className="list-disc pl-6 md:pl-10">
              <li className="text-[16px] md:text-[24px]">
                <span className="font-bold">Practical Learning:</span>{' '}
                Architectural education often lacks hands-on experience. Our
                workshops offer students the chance to work directly with
                materials and techniques, bringing theoretical concepts to life.
              </li>
              <li className="text-[16px] md:text-[24px]">
                <span className="font-bold">Sustainability in Focus:</span> By
                working with eco-friendly materials like bamboo and mud,
                participants gain a deeper appreciation for sustainable
                construction methods, fostering a commitment to greener
                practices.
              </li>
              <li className="text-[16px] md:text-[24px]">
                <span className="font-bold">Skill Development:</span> Students
                develop essential skills, from material handling to construction
                techniques, preparing them to meet the evolving demands of the
                industry.
              </li>
              <li className="text-[16px] md:text-[24px]">
                <span className="font-bold">Inspiring Innovation:</span>{' '}
                Exposure to diverse materials and methods sparks creativity,
                encouraging students to explore fresh, sustainable design ideas.
              </li>
              <li className="md:text-[24px text-[16px]">
                <span className="font-bold">Real-World Solutions:</span>{' '}
                Hands-on experience equips students with the tools to tackle
                real-world challenges in sustainable construction confidently.
              </li>
            </ul>
            <p className="text-[16px] md:text-[24px]">
              Our workshops are more than just learning experiences - they are a
              step toward building a more sustainable and responsible
              architectural future.
            </p>
          </div>

          <div className="mt-5 grid w-full grid-cols-2 gap-2 xl:w-[45%]">
            <div className="col-span-1 overflow-hidden rounded-xl drop-shadow-xl">
              <Image
                src={Workshope3}
                alt="Workshop Image 1"
                width={500}
                height={500}
                className="aspect-square h-full w-full rounded-xl border-2 border-[#F0E0D6] object-cover md:border-[5px]"
              />
            </div>
            <div className="col-span-1 overflow-hidden rounded-xl drop-shadow-xl">
              <Image
                src={Workshope4}
                alt="Workshop Image 2"
                width={500}
                height={500}
                className="aspect-square h-full w-full rounded-xl border-2 border-[#F0E0D6] object-cover md:border-[5px]"
              />
            </div>
            <div className="col-span-2 overflow-hidden rounded-xl drop-shadow-xl">
              <Image
                src={Workshope5}
                alt="Workshop Image 3"
                width={500}
                height={500}
                className="h-full w-full rounded-xl border-2 border-[#F0E0D6] object-cover md:border-[5px]"
              />
            </div>
          </div>
        </div>
        <div className="py-1 md:py-10">
          <h1 className="mb-4 text-3xl text-[24px] font-bold text-[#C6742B] md:mb-8 md:text-[48px]">
            Workshop Structure
          </h1>
          <p className="text-[16px] font-bold text-[#173552] md:text-[28px]">
            These workshops are thoughtfully crafted to inspire and educate,
            combining engaging lectures with hands-on sessions to provide a
            holistic learning experience in sustainable architecture.
          </p>
          <div className="py-6">
            <div className="flex flex-col gap-8 lg:flex-row">
              <div className="flex-1">
                <h2 className="mb-8 text-3xl text-[24px] font-bold text-[#C6742B] md:text-[36px]">
                  Lecture Session Highlights:
                </h2>
                <ul className="ml-6 max-w-2xl list-disc space-y-4 text-[16px] text-[#173552] md:ml-12 md:text-[24px]">
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
                    <span className="font-bold">A Thought to Ponder:</span> "The
                    earth is not given to you by your parents; you have taken a
                    loan from your next generation." This quote serves as a
                    powerful reminder of our shared responsibility toward the
                    planet.
                  </li>
                  <li>
                    <span className="font-bold">
                      Sustainability in Practice:
                    </span>{' '}
                    Learn techniques like reducing resource input, managing
                    waste, and designing with minimal environmental impact.
                  </li>
                  <li>
                    <span className="font-bold">Building with Purpose:</span>{' '}
                    Understand how to create spaces that blend comfort,
                    functionality, and environmental harmony through humane
                    design and site analysis.
                  </li>
                </ul>
              </div>

              <div className="mt-0 flex w-full flex-col gap-4 md:mt-12 lg:w-1/3">
                <div className="relative h-72 w-full lg:h-52">
                  <Image
                    src={Workshope6}
                    alt="Lecture Image 1"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl border-[2px] border-[#F0E0D6] shadow-md drop-shadow-xl md:border-[5px]"
                  />
                </div>
                <div className="relative h-72 w-full lg:h-52">
                  <Image
                    src={Workshope7}
                    alt="Lecture Image 2"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl border-[2px] border-[#F0E0D6] shadow-md drop-shadow-xl md:border-[5px]"
                  />
                </div>
                <div className="relative h-72 w-full lg:h-52">
                  <Image
                    src={Workshope8}
                    alt="Lecture Image 3"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl border-[2px] border-[#F0E0D6] shadow-md drop-shadow-xl md:border-[5px]"
                  />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <h2 className="mb-3 text-3xl text-[24px] font-bold text-[#C6742B] md:mb-8 md:text-[36px]">
                Hands-On Sessions
              </h2>
              <p className="text-[16px] font-[700] text-[#173552] md:text-[24px]">
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
            <p className="my-6 text-[16px] font-[700] text-[#173552] md:px-10 md:text-[24px]">
              Discover the versatility and elegance of bamboo as a sustainable
              construction material.
            </p>

            <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:px-10">
              <div className="relative h-[380px]">
                <Image
                  src={bambooWorkshop1}
                  alt="Workshop Group"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-[38px] border-[5px] border-[#F0E0D6] drop-shadow-xl"
                />
              </div>
              <div className="relative h-[380px]">
                <Image
                  src={bambooWorkshop2}
                  alt="Bamboo Structure"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-[38px] border-[5px] border-[#F0E0D6] drop-shadow-xl"
                />
              </div>
              <div className="relative h-[380px]">
                <Image
                  src={bambooWorkshop3}
                  alt="Hands-on Bamboo Work"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-[38px] border-[5px] border-[#F0E0D6] drop-shadow-xl"
                />
              </div>
            </div>

            <div className="space-y-4 text-lg">
              <p className="text-[16px] font-[400] text-[#173552] md:px-10 md:text-[24px]">
                Here is what this workshop has in store for you -
              </p>
              <ul className="list-inside text-[16px] font-[400] text-[#173552] md:px-10 md:text-[24px]">
                <li className="my-5">
                  <strong>Introduction to Bamboo:</strong>Characteristics,
                  properties, and preservation methods. Feasibility in Current
                  Scenarios: Exploring the pros and cons of bamboo in
                  contemporary construction
                </li>
                <li className="my-5">
                  <strong>Feasibility in Current Scenarios:</strong> Exploring
                  the pros and cons of bamboo in contemporary construction.
                </li>
                <li className="my-5">
                  <strong>Climatic Considerations:</strong> Understanding how
                  bamboo performs in different climatic conditions.
                </li>
                <li className="my-5">
                  <strong>Treatment Methods:</strong> Techniques for treating
                  bamboo to enhance durability and resistance to pests.
                </li>
                <li className="mt-5">
                  <strong>Joining Techniques: </strong> Methods for joining
                  bamboo components in construction.
                </li>
                <li className="">
                  Structural Properties: Examining bamboo's tensile strength and
                  bending capacity.
                </li>
                <li className="">
                  Practical Construction: Building a structure using bamboo,
                  applying the knowledge gained in the lecture.
                </li>
                <li className="mt-5">
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
            <p className="my-6 text-[16px] font-[700] text-[#173552] md:px-10 md:text-[24px]">
              Step into the timeless world of mud construction, a practice
              rooted in tradition yet essential for sustainable living.
            </p>

            <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:px-10">
              <div className="relative h-[380px]">
                <Image
                  src={mudWorkshop1}
                  alt="Workshop Group"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-[38px] border-[5px] border-[#F0E0D6] drop-shadow-xl"
                />
              </div>
              <div className="relative h-[380px]">
                <Image
                  src={mudWorkshop2}
                  alt="Bamboo Structure"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-[38px] border-[5px] border-[#F0E0D6] drop-shadow-xl"
                />
              </div>
              <div className="relative h-[380px]">
                <Image
                  src={mudWorkshop3}
                  alt="Hands-on Bamboo Work"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-[38px] border-[5px] border-[#F0E0D6] drop-shadow-xl"
                />
              </div>
            </div>

            <div className="space-y-4 text-lg">
              <p className="text-[16px] font-[400] text-[#173552] md:px-10 md:text-[24px]">
                A sneak peek of what you’ll learn in this workshop -
              </p>
              <ul className="list-inside text-[16px] font-[400] text-[#173552] md:px-10 md:text-[24px]">
                <li className="my-5">
                  <strong>Introduction to Mud:</strong>Understanding mud’s
                  characteristics, properties, and preservation techniques.
                </li>
                <li className="my-5">
                  <strong>Feasibility in Current Scenarios:</strong> Discussing
                  the advantages and challenges of mud in modern construction.
                </li>
                <li className="my-5">
                  <strong>Climatic Considerations:</strong> Evaluating mud's
                  performance in different environments
                </li>
                <li className="my-5">
                  <strong>Tests for Mud:</strong> Learning methods to assess mud
                  quality and suitability
                </li>
                <li className="mt-5">
                  <strong>Elemental Composition:</strong> Understanding the role
                  of mud components in construction
                </li>
                <li className="mt-5">
                  <strong>Stabilization Methods:</strong> Understanding the role
                  Techniques for stabilizing mud using lime, rice husk, or other
                  binders
                </li>
                <li className="mt-5">
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
            <p className="my-6 text-[16px] font-[700] text-[#173552] md:px-10 md:text-[24px]">
              Explore the enduring charm and strength of bricks in sustainable
              construction.
            </p>

            <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:px-10">
              <div className="relative h-[380px]">
                <Image
                  src={brickWorkshop1}
                  alt="Workshop Group"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-[38px] border-[5px] border-[#F0E0D6] drop-shadow-xl"
                />
              </div>
              <div className="relative h-[380px]">
                <Image
                  src={brickWorkshop2}
                  alt="Bamboo Structure"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-[38px] border-[5px] border-[#F0E0D6] drop-shadow-xl"
                />
              </div>
              <div className="relative h-[380px]">
                <Image
                  src={brickWorkshop3}
                  alt="Hands-on Bamboo Work"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-[38px] border-[5px] border-[#F0E0D6] drop-shadow-xl"
                />
              </div>
            </div>

            <div className="space-y-4 text-lg">
              <p className="text-[16px] font-[400] text-[#173552] md:px-10 md:text-[24px]">
                See what valuable insights await in this workshop -
              </p>
              <ul className="list-inside text-[16px] font-[400] text-[#173552] md:px-10 md:text-[24px]">
                <li className="my-5">
                  <strong>Introduction to Bricks:</strong>Characteristics,
                  properties, and preservation techniques. Feasibility in
                  Current Scenarios: Assessing the relevance of bricks in
                  sustainable architecture.
                </li>
                <li className="my-5">
                  <strong>Climatic Considerations:</strong> Understanding how
                  bricks perform in different climatic conditions
                </li>
                <li className="my-5">
                  <strong>Brick Baking Process:</strong> An overview of how
                  bricks are made and baked
                </li>
                <li className="my-5">
                  <strong>Types of Bricks:</strong> Exploring their variety and
                  uses.
                </li>
                <li className="mt-5">
                  <strong>Bonding Techniques:</strong> Learning different
                  methods to join bricks.
                </li>
                <li className="mt-5">
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
            <div className="mb-8 rounded-[18px] border-2 border-orange-300 bg-[#FFFFFF80] bg-opacity-50 p-8 shadow-md">
              <h2 className="text-[24px] font-bold text-[#C6742B] md:text-[36px]">
                Key Takeaways for Students
              </h2>
              <ul className="mx-auto mt-8 max-w-6xl space-y-4 text-[16px] text-lg font-[400] text-[#173552] md:text-[24px]">
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
              <p className="mt-6 text-[16px] font-[700] text-[#173552] md:text-[24px]">
                These workshops bridge the gap between theory and practice,
                empowering students with the skills, confidence, and creativity
                needed to build sustainably. By engaging with these hands-on
                experiences, participants are not just learning – they're
                shaping a greener future in architecture.
              </p>
            </div>

            {/* Completed Workshops Section */}
            <div className="pt-1 md:pt-6">
              <h2 className="text-[24px] font-bold text-[#C6742B] md:text-[48px]">
                Completed Workshops and Talks
              </h2>
              <p className="mt-5 text-[16px] font-[700] text-[#173552] md:text-[24px]">
                A journey of impactful workshops and enlightening talks that
                promote sustainable architectural practices.
              </p>
            </div>
          </div>
        </div>

        <div className="h-32"></div>
      </div>
      <div className="py-10">
        <div className="bg-white py-2">
          <div
            className="flex h-[400px] w-full items-center justify-center bg-cover bg-center"
            style={{
              backgroundImage: optimizedWorkshopCtaBackground,
            }}
          >
            <div className="m-auto max-w-3xl text-center">
              <h1 className="mb-4 text-[16px] font-[400] text-[#000000] md:text-3xl md:font-semibold">
                Dive deeper into sustainable architecture, materials, and
                techniques by exploring our blog posts. Gain valuable knowledge,
                tips, and inspiration to fuel your design journey.
              </h1>
              <div className="flex justify-center">
                <Link
                  href=""
                  style={{ backgroundImage: optimizedButtonBackground }}
                  className="mt-5 block w-fit bg-cover bg-center px-[60px] py-[35px] font-primary text-[12px] font-bold text-[#331803] duration-200 hover:scale-105 md:text-lg"
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
