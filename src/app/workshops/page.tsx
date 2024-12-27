import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { getOptimizedBackgroundImage } from '~/utils/background-image-optimizer';

import bamboo from '~/assets/images/Bamboo1.jpg';
import bamboo1 from '~/assets/images/bamboo2.jpg';
import bamboo2 from '~/assets/images/bamboo3.jpg';
import bgworkshop from '~/assets/images/bgworkshop.png';
import buttonBackground from '~/assets/images/button-background.png';
import landingPageArchitectureBackground from '~/assets/images/our-work-bg-img.png';
import Workshope3 from '~/assets/images/workshop_image1.jpg';
import Workshope4 from '~/assets/images/workshop_image2.jpg';
import Workshope5 from '~/assets/images/workshop_image3.jpg';
import Workshop from '~/assets/images/workshop1.png';
import Workshop1 from '~/assets/images/workshop2.png';
import Workshope6 from '~/assets/images/Workshop4.jpg';
import Workshope7 from '~/assets/images/workshop5.jpg';
import Workshope8 from '~/assets/images/workshop6.jpg';

const Workshops = () => {
  const optimizedButtonBackground = getOptimizedBackgroundImage({
    src: buttonBackground.src,
    width: buttonBackground.width,
    height: buttonBackground.height,
  });
  const optimizedLandingPageArchitectureBackground =
    getOptimizedBackgroundImage({
      src: landingPageArchitectureBackground.src,
      width: landingPageArchitectureBackground.width,
      height: landingPageArchitectureBackground.height,
    });
  return (
    <section
      className="bg-[#E9D0B7] font-primary"
      style={{
        backgroundImage: optimizedLandingPageArchitectureBackground,
      }}
    >
      <div className="mx-auto flex h-[457px] flex-col items-stretch lg:flex-row">
        <div className="relative lg:w-[40%]">
          <Image
            src={Workshop1}
            alt="Workshops Background"
            width={600}
            height={300}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 p-6 font-primary">
            <h2 className="text-center text-[62px] font-bold text-white">
              Workshops
            </h2>
            <p className="text-[36px] text-white">Learn, Build, Innovate</p>
          </div>
        </div>

        <div className="relative h-full bg-amber-950 lg:w-[60%]">
          <Image
            src={Workshop}
            alt="Workshop Gallery"
            width={840}
            height={500}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="px-[18px] py-10 md:px-28 md:py-10">
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
      <div className="px-[18px] font-primary md:px-28">
        <h1 className="mb-8 text-3xl font-bold text-[#C6742B] md:text-[48px]">
          Why These Workshops Matter
        </h1>

        <div className="mb-12 flex flex-col-reverse gap-8 md:flex-row-reverse md:justify-between">
          <div className="w-full space-y-6 font-[400] text-[#173552] md:w-[50%]">
            <ul className="list-disc pl-10">
              <li className="text-[24px] leading-relaxed">
                <span className="font-bold">Practical Learning:</span>{' '}
                Architectural education often lacks hands-on experience. Our
                workshops offer students the chance to work directly with
                materials and techniques, bringing theoretical concepts to life.
              </li>
              <li className="text-[24px] leading-relaxed">
                <span className="font-bold">Sustainability in Focus:</span> By
                working with eco-friendly materials like bamboo and mud,
                participants gain a deeper appreciation for sustainable
                construction methods, fostering a commitment to greener
                practices.
              </li>
              <li className="text-[24px] leading-relaxed">
                <span className="font-bold">Skill Development:</span> Students
                develop essential skills, from material handling to construction
                techniques, preparing them to meet the evolving demands of the
                industry.
              </li>
              <li className="text-[24px] leading-relaxed">
                <span className="font-bold">Inspiring Innovation:</span>{' '}
                Exposure to diverse materials and methods sparks creativity,
                encouraging students to explore fresh, sustainable design ideas.
              </li>
              <li className="text-[24px] leading-relaxed">
                <span className="font-bold">Real-World Solutions:</span>{' '}
                Hands-on experience equips students with the tools to tackle
                real-world challenges in sustainable construction confidently.
              </li>
            </ul>
            <p className="text-[24px] leading-relaxed">
              Our workshops are more than just learning experiences - they are a
              step toward building a more sustainable and responsible
              architectural future.
            </p>
          </div>

          <div className="mt-5 grid w-full grid-cols-2 gap-6 md:w-[45%]">
            <div className="col-span-1 overflow-hidden rounded-xl">
              <Image
                src={Workshope3}
                alt="Workshop Image 1"
                width={500}
                height={500}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="col-span-1 overflow-hidden rounded-xl">
              <Image
                src={Workshope4}
                alt="Workshop Image 2"
                width={500}
                height={500}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="col-span-2 overflow-hidden rounded-xl">
              <Image
                src={Workshope5}
                alt="Workshop Image 3"
                width={500}
                height={300}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="px-[18px] py-10">
          <h1 className="mb-8 text-3xl font-bold text-[#C6742B] md:text-[48px]">
            Workshop Structure
          </h1>
          <p className="text-[28px] font-[700] text-[#173552]">
            These workshops are thoughtfully crafted to inspire and educate,
            combining engaging lectures with hands-on sessions to provide a
            holistic learning experience in sustainable architecture.
          </p>
          <div className="px-5 py-10">
            <div className="flex flex-col gap-8 lg:flex-row">
              <div className="flex-1">
                <h2 className="mb-8 text-3xl font-bold text-[#C6742B] md:text-[36px]">
                  Lecture Session Highlights:
                </h2>
                <ul className="ml-12 max-w-2xl list-disc space-y-4 text-[24px] text-[#173552]">
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

              <div className="mt-12 flex w-full flex-col gap-4 lg:w-1/3">
                <div className="relative h-52 w-full">
                  <Image
                    src={Workshope6}
                    alt="Lecture Image 1"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-md"
                  />
                </div>
                <div className="relative h-52 w-full">
                  <Image
                    src={Workshope7}
                    alt="Lecture Image 2"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-md"
                  />
                </div>
                <div className="relative h-52 w-full">
                  <Image
                    src={Workshope8}
                    alt="Lecture Image 3"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <h2 className="mb-8 text-3xl font-bold text-[#C6742B] md:text-[36px]">
                Hands-On Sessions
              </h2>
              <p className="text-[24px] font-[700] text-[#173552]">
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
            <div className="w-full rounded-[50px] bg-[#FFF5EDB2] py-5">
              <h1 className="text-center text-3xl font-bold text-[#C6742B] md:text-[48px]">
                Bamboo Workshop
              </h1>
            </div>
            <p className="my-6 text-[24px] font-[700] text-[#173552] md:px-10">
              Discover the versatility and elegance of bamboo as a sustainable
              construction material.
            </p>

            <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:px-10">
              <div className="relative h-[380px]">
                <Image
                  src={bamboo}
                  alt="Workshop Group"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-[38px]"
                />
              </div>
              <div className="relative h-[380px]">
                <Image
                  src={bamboo1}
                  alt="Bamboo Structure"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-[38px]"
                />
              </div>
              <div className="relative h-[380px]">
                <Image
                  src={bamboo2}
                  alt="Hands-on Bamboo Work"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-[38px]"
                />
              </div>
            </div>

            <div className="space-y-4 text-lg">
              <p className="text-[24px] font-[400] text-[#173552] md:px-10">
                Here is what this workshop has in store for you -
              </p>
              <ul className="list-inside text-[24px] font-[400] text-[#173552] md:px-10">
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
              <h1 className="text-center text-3xl font-bold text-[#C6742B] md:text-[48px]">
                Bamboo Workshop
              </h1>
            </div>
            <p className="my-6 text-[24px] font-[700] text-[#173552] md:px-10">
              Discover the versatility and elegance of bamboo as a sustainable
              construction material.
            </p>

            <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:px-10">
              <div className="relative h-[380px]">
                <Image
                  src={bamboo}
                  alt="Workshop Group"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-[38px]"
                />
              </div>
              <div className="relative h-[380px]">
                <Image
                  src={bamboo1}
                  alt="Bamboo Structure"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-[38px]"
                />
              </div>
              <div className="relative h-[380px]">
                <Image
                  src={bamboo2}
                  alt="Hands-on Bamboo Work"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-[38px]"
                />
              </div>
            </div>

            <div className="space-y-4 text-lg">
              <p className="text-[24px] font-[400] text-[#173552] md:px-10">
                Here is what this workshop has in store for you -
              </p>
              <ul className="list-inside text-[24px] font-[400] text-[#173552] md:px-10">
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
              <h1 className="text-center text-3xl font-bold text-[#C6742B] md:text-[48px]">
                Bamboo Workshop
              </h1>
            </div>
            <p className="my-6 text-[24px] font-[700] text-[#173552] md:px-10">
              Discover the versatility and elegance of bamboo as a sustainable
              construction material.
            </p>

            <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:px-10">
              <div className="relative h-[380px]">
                <Image
                  src={bamboo}
                  alt="Workshop Group"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-[38px]"
                />
              </div>
              <div className="relative h-[380px]">
                <Image
                  src={bamboo1}
                  alt="Bamboo Structure"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-[38px]"
                />
              </div>
              <div className="relative h-[380px]">
                <Image
                  src={bamboo2}
                  alt="Hands-on Bamboo Work"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-[38px]"
                />
              </div>
            </div>

            <div className="space-y-4 text-lg">
              <p className="text-[24px] font-[400] text-[#173552] md:px-10">
                Here is what this workshop has in store for you -
              </p>
              <ul className="list-inside text-[24px] font-[400] text-[#173552] md:px-10">
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

        <div className="mt-6">
          <div className="">
            {/* Key Takeaways Section */}
            <div className="mb-8 rounded-[18px] border-2 border-orange-300 bg-[#FFFFFF80] bg-opacity-50 p-8 shadow-md">
              <h2 className="text-3xl font-bold text-[#C6742B] md:text-[36px]">
                Key Takeaways for Students
              </h2>
              <ul className="mx-auto mt-8 max-w-6xl space-y-4 text-[24px] text-lg font-[400] text-[#173552]">
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
              <p className="mt-6 text-[24px] font-[700] text-[#173552]">
                These workshops bridge the gap between theory and practice,
                empowering students with the skills, confidence, and creativity
                needed to build sustainably. By engaging with these hands-on
                experiences, participants are not just learning – they're
                shaping a greener future in architecture.
              </p>
            </div>

            {/* Completed Workshops Section */}
            <div className="pt-6">
              <h2 className="ttext-3xl font-bold text-[#C6742B] md:text-[48px]">
                Completed Workshops and Talks
              </h2>
              <p className="text-[24px] font-[700] text-[#173552]">
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
              backgroundImage: `url(${bgworkshop.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="m-auto max-w-xl text-center">
              <h1 className="mb-4 text-2xl font-semibold text-[#000000]">
                Dive deeper into sustainable architecture, materials, and
                techniques by exploring our blog posts. Gain valuable knowledge,
                tips, and inspiration to fuel your design journey.
              </h1>
              <div className="flex justify-center">
                <Link
                  href="#"
                  style={{ backgroundImage: optimizedButtonBackground }}
                  className="mt-5 block w-fit bg-cover bg-center px-[60px] py-[35px] font-primary text-lg font-bold text-[#331803]"
                >
                  Read Our Latest Posts
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workshops;
