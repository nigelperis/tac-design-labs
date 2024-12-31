'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import { getOptimizedBackgroundImage } from '~/utils/background-image-optimizer';

import brickButton from '~/assets/images/button-background.png';
import exploreProjectBG from '~/assets/images/explore-our-work-background.png';
import landingPageLeavesBackground from '~/assets/images/landing-page-team-background.png';
import teamPicture from '~/assets/images/TAC-team-picture.jpg';
import akshay from '~/assets/profile-images/akshay.jpg';
import ashams from '~/assets/profile-images/ashams.jpg';
import aswathi from '~/assets/profile-images/aswathy.jpg';
import priya from '~/assets/profile-images/priya.jpeg';
import vijayan from '~/assets/profile-images/vijayan.jpg';

import type { StaticImageData } from 'next/image';

interface TeamMember {
  name: string;
  summary: string;
  position: string;
  picture: StaticImageData;
}

interface TeamCardDetail {
  picture: StaticImageData;
  summary: string;
}

const optimizedButton = getOptimizedBackgroundImage({
  src: brickButton.src,
  width: brickButton.width,
  height: brickButton.height,
});

const teamMemberDetails: TeamMember[] = [
  {
    name: 'AR. ASHAMS RAVI',
    summary:
      'With over seven years of experience in sustainable architecture, Ar. Ashams Ravi is a dedicated professional. He graduated from the Prime College of Architecture and Planning, Nagapattinam, and began his career at the Centre of Science and Technology for Rural Development (COSTFORD), Trivandrum, where he worked from 2017 to 2022. Under the mentorship of Ar. P.B. Sajan, a close disciple of Master Architect Laurie Baker, he honed his skills in designing and executing over 100 residential units and other government projects using sustainable technologies. During this period, he also served as a faculty member at the Laurie Baker Centre for Habitat Studies, training architects and students in sustainable architecture.\nAr. Ashams Ravi has actively contributed to the Kerala Institute of Local Administration – Centre for Human Resource Development (KILA-CHRD), where he provided training on sustainable and cost-effective technologies to various PMAY(a) functionaries. He has delivered talks and workshops on sustainable architecture at numerous architecture schools across India and was a speaker at TEDx Countdown on Sustainable Architecture in November 2021. His personal commitment to sustainable design is evident in his own home, built using reused and renewable materials, which earned him the HUDCO National Design Award (2021-2022) in the Green Building category. Today, he is recognized as an inspirational figure in the field of sustainable architecture.',
    picture: ashams,
    position: 'Founder / Principal Architect',
  },
  {
    name: 'AR. AKSHAY RAVI',
    summary: `With a Bachelor’s Degree in Architecture from ITM University, Gwalior, Akshay Ravi brings a wealth of knowledge and over three years of practical experience to TAC Design LAB. As a Junior Architect and Site Architect at COSTFORD, he has contributed to a variety of residential, commercial, and office building projects across both government and private sectors. Akshay’s work is characterized by a deep commitment to sustainability, integrating eco-friendly practices into conventional design frameworks.
    Known for his creativity, attention to detail, and passion for architectural innovation, Akshay is driven by a desire to make a positive impact through his work. His approach to design is informed by thorough research, functional zoning, and architectural detailing. Outside of his professional life, Akshay is an avid traveler, drawing inspiration from his journeys to enhance his creative process.
    `,
    picture: akshay,
    position: 'Principal Architect',
  },
  {
    name: 'SARADHA PRIYA CS',
    summary: `Having over seven years of experience in civil engineering and project management, Saradha Priya C S is a committed professional at TAC Design LAB. She holds a B.Tech in Civil Engineering and has a rich background working with COSTFORD (Centre of Science & Technology for Rural Development) in Thiruvananthapuram. During her tenure at COSTFORD, she played a crucial role in various government projects, including the setup of office facilities, market improvements, and community health center renovations.
    Since joining TAC Design LAB in April 2023, Saradha has been instrumental in managing and executing projects such as the renovation of residential buildings and the construction of eco-friendly homes using reused materials. Her expertise in site supervision, material planning, and bill certification ensures the seamless execution of every project. Saradha's commitment to sustainable development and meticulous attention to detail make her an invaluable asset to the team.
    `,
    picture: priya,
    position: 'Project Manager',
  },
  {
    name: 'ABHIJITH VIJAYAN',
    summary: `A Project Engineer with four years of expertise, Abhijith Vijayan has led numerous projects from inception to completion. He is a graduate of Mohandas College of Engineering and Technology, Trivandrum, holding a Bachelor of Technology in Civil Engineering. Abhijith has demonstrated expertise in managing budgets, resulting in increased production efficiency, reduced costs, and revenue growth. He is adept at identifying and mitigating project risks, ensuring on-time and within-budget delivery.
    In his previous roles, Abhijith worked as a Site Engineer at COSTFORD (Centre of Science and Technology for Rural Development) in Trivandrum, where he contributed to housing projects for the SC community at Venganoor Grama Panchayath and other residential projects. He also gained valuable experience at SR Electricals, managing the construction of petrol pumps. His commitment to safety is evident in the development and implementation of a project safety plan that led to zero safety incidents during the project timeline.
    Abhijith’s technical proficiency and strong leadership skills make him an essential part of the TAC Design LAB team.
    `,
    picture: vijayan,
    position: 'Project Engineer',
  },
  {
    name: 'ASWATHY UV',
    summary: `She is a proficient Architectural Assistant at TAC Design LAB with a solid background in interior design and architectural drafting. Aswathy holds a Diploma in Interior Designing from CADPOINT, Trivandrum, along with an Architectural Draughtsman certification from Govt ITI for Women, Kazhakuttam, where she excelled with a 94.5% score. Aswathy's academic background is complemented by hands-on experience in residential and office building projects, making her a valuable asset to the team`,
    picture: aswathi,
    position: 'Architectural Assistant',
  },
];

const TeamPage = () => {
  const optimizedLandingPageBackground = getOptimizedBackgroundImage({
    src: landingPageLeavesBackground.src,
    width: landingPageLeavesBackground.width,
    height: landingPageLeavesBackground.height,
  });

  return (
    <div>
      <section
        className="bg-[#EDD7C3] pt-40 font-primary font-normal bg-blend-luminosity"
        style={{
          backgroundImage: optimizedLandingPageBackground,
        }}
      >
        <TeamCard
          picture={teamPicture}
          summary="Our team is a collective of visionary architects, designers, and
        engineers dedicated to creating spaces that honor tradition while
        embracing modern culture. We collaborate closely, each member
        contributing their unique expertise to move projects forward and bring
        our innovative designs to life. With a shared passion for sustainable
        architecture, we’re excited to introduce you to the talented individuals
        who make our work possible."
        />

        {teamMemberDetails.map((member) => (
          <ProfileCard
            key={member.name}
            name={member.name}
            position={member.position}
            summary={member.summary}
            picture={member.picture}
          />
        ))}

        <div
          className="mt-20 border-y-8 border-white bg-[#420C03]/70 bg-cover p-8 text-center text-2xl text-white bg-blend-soft-light md:p-20 md:text-4xl"
          style={{
            backgroundImage: getOptimizedBackgroundImage(exploreProjectBG),
          }}
        >
          <h1 className="mb-8 text-balance">
            Curious to see the projects that define our approach to sustainable
            design? Explore our portfolio to discover the creativity and
            dedication that goes into every one of our projects.
          </h1>
          <div className="block">
            <button
              className="relative rounded bg-cover bg-center p-6 text-[11px] font-bold text-primary-500 duration-200 hover:scale-105 hover:bg-opacity-80 md:p-10 md:text-2xl"
              style={{
                backgroundImage: optimizedButton,
              }}
            >
              Explore Our Work
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

function TeamCard(props: TeamCardDetail) {
  return (
    <>
      <div className="mb-40 mt-[calc(20vw-20px)] flex flex-col items-center gap-20 bg-white px-8 md:mt-10 md:flex-row md:px-20 md:py-0">
        <Image
          className="-mb-20 -mt-[40%] aspect-square w-screen rounded-3xl border-[6px] border-secondary-100 object-cover shadow-[0px_4px_4px_0px_#00000040] backdrop-blur-sm md:-mt-20 md:w-min md:min-w-[500]"
          src={props.picture}
          alt="team-picture"
          draggable="false"
        />
        <span className="py-8 text-justify text-sm leading-8 md:py-0 md:text-xl md:leading-10 md:tracking-[2%]">
          {props.summary}
        </span>
      </div>
    </>
  );
}

function ProfileCard(props: TeamMember) {
  const [isExpanded, setExpanded] = useState(false);
  return (
    <div
      style={{
        backdropFilter: 'blur(4px)',
        boxShadow: '0px 4px 4px 0px #00000040',
      }}
      className={
        'mx-8 mt-[calc(50vw-20px)] flex flex-col items-center rounded-3xl bg-white bg-opacity-60 md:mx-20 md:mt-20 md:flex-row md:gap-20 md:p-10 md:pt-16'
      }
    >
      <Image
        className="-mt-[40%] aspect-square w-[80%] rounded-3xl border-[6px] border-secondary-100 object-cover shadow-[0px_4px_4px_0px_#00000040] backdrop-blur-sm md:-mt-0 md:h-[300] md:w-[300] md:self-start"
        src={props.picture}
        alt={'profile-image'}
      />
      <div className="flex flex-col gap-8 p-5">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <span className="text-2xl font-medium tracking-[2%] text-primary-500 md:text-4xl">
            {props.name}
          </span>
          <span className="text-base font-medium tracking-[2%] text-primary-500 md:text-2xl">
            {props.position}
          </span>
        </div>
        <div
          className={`${isExpanded ? 'line-clamp-none' : 'line-clamp-5 md:line-clamp-4'} text-justify text-sm md:text-2xl`}
        >
          {props.summary}
        </div>
        <button
          onClick={() => {
            setExpanded((state) => !state);
          }}
          className="self-end text-xl font-semibold text-primary-500 transition-transform duration-200 hover:scale-105"
        >
          Read {isExpanded ? 'Less' : 'More'} {'>'}
        </button>
      </div>
    </div>
  );
}

export default TeamPage;
