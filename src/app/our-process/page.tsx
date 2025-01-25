import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { getOptimizedBackgroundImage } from '~/utils/background-image-optimizer';

import CostEstimation from '~/assets/svgs/costestimation.svg';
import DocApproval from '~/assets/svgs/docandapproval.svg';
import Economic from '~/assets/svgs/economic.svg';
import HealthComfort from '~/assets/svgs/healthandcomfort.svg';
import PenIcon from '~/assets/svgs/pen.svg';
import SiteVisit from '~/assets/svgs/sitevisit.svg';
import SustainableConstruction from '~/assets/svgs/sustainableconstruction.svg';

import OurWorkBgButton from '~/assets/images/button-background.png';
import lineourprocess from '~/assets/images/lineourprocess.png';
import lineourwork1 from '~/assets/images/lineourwork1.png';
import lineourwork2 from '~/assets/images/lineourwork2.png';
import lineourwork3 from '~/assets/images/lineourwork3.png';
import lineourwork4 from '~/assets/images/lineourwork4.png';
import lineourwork5 from '~/assets/images/lineourwork5.png';
import lineourwork6 from '~/assets/images/lineourwork6.png';
import OurProcessBgImg from '~/assets/images/our-process-background.png';
import ourprocesscatbgimg from '~/assets/images/ourproccessbgimg.png';

const OurProcess = () => {
  const optimizedOurProcessBg = getOptimizedBackgroundImage({
    src: OurProcessBgImg.src,
    width: OurProcessBgImg.width,
    height: OurProcessBgImg.height,
  });
  const optimizedourprocessbgimg = getOptimizedBackgroundImage({
    src: ourprocesscatbgimg.src,
    width: ourprocesscatbgimg.width,
    height: ourprocesscatbgimg.height,
  });
  const optimizedOurWorkBgButton = getOptimizedBackgroundImage({
    src: OurWorkBgButton.src,
    width: OurWorkBgButton.width,
    height: OurWorkBgButton.height,
  });
  return (
    <div className="font-primary">
      <div
        style={{
          backgroundImage: optimizedOurProcessBg,
          backgroundSize: 'cover  ',
        }}
      >
        <div className="px-7 pb-12 pt-24 md:px-24 md:pb-24 md:pt-16">
          <h1 className="mb-2 max-w-[900px] text-4xl text-primary-500 md:mb-5 md:text-6xl">
            Partnering with You for{' '}
            <span className="text-accent-500 md:mt-4 md:block">
              Sustainable Living
            </span>
          </h1>
          <p className="mb-8 text-base text-[#173552] md:mb-24 md:text-3xl md:font-normal md:leading-normal">
            We are committed to building sustainable architecture that respects
            the environment and enhances your lifestyle. Here is a step-by-step
            overview of how we work together:
          </p>
          <div className="space-y-4 md:hidden">
            <div className="rounded-xl bg-white bg-opacity-50 px-6 py-5">
              <div className="mb-3 flex items-center gap-2">
                <PenIcon
                  width={50}
                  height={50}
                  className="min-h-[50px] min-w-[50px]"
                />
                <h3 className="text-[20px] font-bold text-accent-500">
                  Registration
                </h3>
              </div>
              <div className="text-sm leading-6 text-[#173552]">
                <p className="mb-3">
                  We treat each client as a valued partner in creating something
                  exceptional. Before registration, we ensure you fully
                  understand our approach, philosophy and techniques through an
                  in-depth briefing at our studio. This covers our construction
                  methods, materials, and design strategies.
                </p>
                <span>Registration Fees (Non-refundable) :</span>
                <ul className="ml-6 mt-2 list-disc leading-7">
                  <li>₹2000 for residential buildings</li>
                  <li>₹10,000 for non-residential buildings</li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src={lineourprocess}
                alt="logo"
                className="h-12 w-2"
                width={50}
                height={50}
              />
            </div>

            <div className="rounded-xl bg-white bg-opacity-50 px-6 py-5">
              <div className="mb-3 flex items-center gap-2">
                <SiteVisit
                  width={50}
                  height={50}
                  className="min-h-[50px] min-w-[50px]"
                />
                <h3 className="text-[20px] font-bold text-accent-500">
                  Site Visit & Initial Planning
                </h3>
              </div>
              <div className="text-sm leading-6 text-[#173552] md:leading-10">
                <p>
                  After registration, our team will visit your site (with prior
                  notice) within a week to discuss design requirements, budget,
                  and schedule. An initial plan will be prepared, which can be
                  revised based on your input to ensure it aligns with your
                  vision.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src={lineourprocess}
                alt="logo"
                className="h-12 w-2"
                width={50}
                height={50}
              />
            </div>

            <div className="rounded-xl bg-white bg-opacity-50 px-6 py-5">
              <div className="mb-3 flex items-center gap-2">
                <DocApproval
                  width={50}
                  height={50}
                  className="min-h-[50px] min-w-[50px]"
                />
                <h3 className="text-[20px] font-bold text-accent-500">
                  Documentation & Approvals
                </h3>
              </div>
              <div className="text-sm leading-7 text-[#173552]">
                <p className="mb-3">
                  Once the plan is finalized, you’ll need to submit all required
                  documents for sanction drawings.
                </p>
                <span>For government approval, you can either:</span>
                <ul className="ml-8 mt-2 list-disc">
                  <li>Manage the sanctioning process independently.</li>
                  <li>
                    Opt for our assistance by arranging a professional, with
                    costs borne directly by you.{' '}
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src={lineourprocess}
                alt="logo"
                className="h-12 w-2"
                width={50}
                height={50}
              />
            </div>
            <div className="rounded-xl bg-white bg-opacity-50 px-6 py-5">
              <div className="mb-3 flex items-center gap-2">
                <CostEstimation
                  width={50}
                  height={50}
                  className="min-h-[50px] min-w-[50px]"
                />
                <h3 className="text-[20px] font-bold text-accent-500">
                  Cost Estimation
                </h3>
              </div>
              <div className="text-sm text-[#173552]">
                <p className="mb-3 leading-7">
                  A cost estimate will be provided based on the finalized plan,
                  valid for six months due to market fluctuations. Any
                  adjustments due to changes in design, materials, or unforeseen
                  market conditions will be your responsibility.
                </p>
                <p className="text-xs font-bold">
                  {' '}
                  <span className="leading-[16px] text-accent-500">
                    Note:{' '}
                  </span>{' '}
                  If a project is halted before completion, all service charges
                  and outstanding amounts related to the project must be settled
                  promptly.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src={lineourprocess}
                alt="logo"
                width={50}
                height={50}
                className="h-12 w-2"
              />
            </div>
            <div className="rounded-xl bg-white bg-opacity-50 px-6 py-5">
              <div className="mb-3 flex items-center gap-2">
                <SustainableConstruction
                  width={50}
                  height={50}
                  className="min-h-[50px] min-w-[50px]"
                />
                <h3 className="text-[20px] font-bold text-accent-500">
                  Sustainable&nbsp;Construction
                </h3>
              </div>
              <div className="text-[#173552]">
                <p className="mb-3 text-sm leading-[30px] md:text-[28px]">
                  We begin construction using eco-friendly practices and
                  materials to minimize environmental impact. Our approach
                  includes:
                </p>

                <ul className="ml-6 mt-2 list-disc text-[12px] leading-[25px]">
                  <li>Low-impact development and native landscaping.</li>
                  <li>
                    Environmentally responsible, non-toxic, reused, recyclable
                    and renewable materials.
                  </li>
                  <li>
                    Efficient construction practices to conserve resources,
                    reduce waste and lower carbon footprint.
                  </li>
                  <li>
                    Water conservation techniques like rainwater harvesting,
                    gray water recycling and water-efficient fixtures to
                    minimize water usage.
                  </li>
                  <li>
                    Energy conservation technique like biogas that uses human
                    and kitchen waste to produce methane gas, which can be used
                    as a sustainable fuel for cooking.
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src={lineourprocess}
                alt="logo"
                className="h-12 w-2"
                width={50}
                height={50}
              />
            </div>
            <div className="rounded-xl bg-white bg-opacity-50 px-6 py-5">
              <div className="mb-3 flex items-center gap-2">
                <HealthComfort
                  width={50}
                  height={50}
                  className="min-h-[50px] min-w-[50px]"
                />
                <h3 className="text-[20px] font-bold text-accent-500">
                  Health & Comfort Integration
                </h3>
              </div>
              <div className="text-sm text-[#173552]">
                <p className="mb-3 leading-7">
                  Our designs enhance indoor air quality, maximize natural
                  light, and ensure comfortable living spaces, fostering
                  healthier and more productive environments for occupants.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src={lineourprocess}
                alt="logo"
                className="h-12 w-2"
                width={50}
                height={50}
              />
            </div>
            <div className="rounded-xl bg-white bg-opacity-50 px-6 py-5">
              <div className="mb-3 flex items-center gap-2">
                <Economic
                  width={50}
                  height={50}
                  className="min-h-[50px] min-w-[50px]"
                />
                <h3 className="text-[20px] font-bold text-accent-500">
                  Economic & Environmental Benefits
                </h3>
              </div>
              <div className="text-sm text-[#173552]">
                <p className="mb-3 leading-7">
                  By integrating energy efficiency, the use of renewable energy
                  sources and lower waste disposal costs, our projects reduce
                  operational costs and add long-term value. This approach makes
                  your building eco-friendly, cost-effective and appealing to
                  sustainability-conscious individuals. Additionally,
                  sustainable buildings are likely to have higher resale value
                  and attract tenants or customers who prioritize
                  sustainability.
                </p>
              </div>
            </div>
          </div>
          {/* for web */}
          <div className="hidden px-7 md:block">
            <div className="mb-10 flex gap-8">
              <div className="flex flex-col items-center gap-8">
                <PenIcon
                  width={50}
                  height={50}
                  className="min-h-[120px] min-w-[120px]"
                />
                <Image
                  src={lineourwork1}
                  alt="logo"
                  width={50}
                  height={50}
                  className="h-64 w-2"
                />
              </div>
              <div className="mt-4 flex flex-col gap-5">
                <h3 className="text-4xl font-bold text-accent-500">
                  Registration
                </h3>
                <div className="text-[28px] text-[#173552]">
                  <p className="mb-5 leading-10">
                    We treat each client as a valued partner in creating
                    something exceptional. Before registration, we ensure you
                    fully understand our approach, philosophy and techniques
                    through an in-depth briefing at our studio. This covers our
                    construction methods, materials, and design strategies.
                  </p>
                  <span>Registration Fees (Non-refundable) :</span>
                  <ul className="ml-8 mt-4 list-disc text-[24px] leading-10">
                    <li>₹2000 for residential buildings</li>
                    <li>₹10,000 for non-residential buildings</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mb-10 flex gap-8">
              <div className="flex flex-col items-center gap-8">
                <SiteVisit
                  width={50}
                  height={50}
                  className="min-h-[120px] min-w-[120px]"
                />
                <Image
                  src={lineourwork2}
                  alt="logo"
                  width={50}
                  height={50}
                  className="h-28 w-2"
                />
              </div>
              <div className="mt-6 flex flex-col gap-5">
                <h3 className="text-4xl font-bold text-accent-500">
                  Site Visit & Initial Planning
                </h3>
                <div className="text-[28px] text-[#173552]">
                  <p className="mb-5">
                    After registration, our team will visit your site (with
                    prior notice) within a week to discuss design requirements,
                    budget, and schedule. An initial plan will be prepared,
                    which can be revised based on your input to ensure it aligns
                    with your vision.
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-10 flex gap-8">
              <div className="flex flex-col items-center gap-8">
                <DocApproval
                  width={100}
                  height={100}
                  className="min-h-[120px] min-w-[120px]"
                />
                <Image
                  src={lineourwork3}
                  alt="logo"
                  width={50}
                  height={50}
                  className="h-64 w-2"
                />
              </div>
              <div className="mt-6 flex flex-col gap-5">
                <h3 className="text-4xl font-bold text-accent-500">
                  Documentation & Approvals
                </h3>
                <div className="text-[28px] text-[#173552]">
                  <p className="mb-5">
                    Once the plan is finalized, you’ll need to submit all
                    required documents for sanction drawings.
                  </p>
                  <span className="text-2xl">
                    For government approval, you can either:
                  </span>
                  <ul className="ml-8 mt-4 list-disc text-2xl leading-10">
                    <li>Manage the sanctioning process independently.</li>
                    <li>
                      Opt for our assistance by arranging a professional, with
                      costs borne directly by you.{' '}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mb-10 flex gap-8">
              <div className="flex flex-col items-center gap-8">
                <CostEstimation
                  width={50}
                  height={50}
                  className="min-h-[120px] min-w-[120px]"
                />
                <Image
                  src={lineourwork4}
                  alt="logo"
                  width={50}
                  height={50}
                  className="h-48 w-2"
                />
              </div>
              <div className="mt-3 flex flex-col gap-5">
                <h3 className="text-4xl font-bold text-accent-500">
                  Cost Estimation
                </h3>
                <div className="text-[28px] text-[#173552]">
                  <p className="mb-5">
                    A cost estimate will be provided based on the finalized
                    plan, valid for six months due to market fluctuations. Any
                    adjustments due to changes in design, materials, or
                    unforeseen market conditions will be your responsibility.
                  </p>
                  <p className="text-2xl font-bold leading-8">
                    {' '}
                    <span className="text-accent-500">Note: </span> If a project
                    is halted before completion, all service charges and
                    outstanding amounts related to the project must be settled
                    promptly.
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-10 flex gap-8">
              <div className="flex flex-col items-center gap-8">
                <SustainableConstruction
                  width={50}
                  height={50}
                  className="min-h-[120px] min-w-[120px]"
                />
                <Image
                  src={lineourwork5}
                  alt="logo"
                  width={50}
                  height={50}
                  className="h-96 w-2"
                  // className="min-h-[50px] min-w-[50px]"
                />
              </div>
              <div className="mt-4 flex flex-col gap-5">
                <h3 className="text-4xl font-bold text-accent-500">
                  Sustainable Construction
                </h3>
                <div className="text-[28px] font-normal text-[#173552]">
                  <p className="mb-5">
                    We begin construction using eco-friendly practices and
                    materials to minimize environmental impact. Our approach
                    includes:
                  </p>
                  <ul className="ml-8 mt-4 list-disc text-2xl leading-10">
                    <li>Low-impact development and native landscaping.</li>
                    <li>
                      Environmentally responsible, non-toxic, reused, recyclable
                      and renewable materials.
                    </li>
                    <li>
                      Efficient construction practices to conserve resources,
                      reduce waste and lower carbon footprint.
                    </li>
                    <li>
                      Water conservation techniques like rainwater harvesting,
                      gray water recycling and water-efficient fixtures to
                      minimize water usage.
                    </li>
                    <li>
                      Energy conservation technique like biogas that uses human
                      and kitchen waste to produce methane gas, which can be
                      used as a sustainable fuel for cooking.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mb-10 flex gap-8">
              <div className="flex flex-col items-center gap-8">
                <HealthComfort
                  width={50}
                  height={50}
                  className="min-h-[120px] min-w-[120px]"
                />
                <Image
                  src={lineourwork6}
                  alt="logo"
                  width={50}
                  height={50}
                  className="h-28 w-2"
                />
              </div>
              <div className="mt-6 flex flex-col gap-5">
                <h3 className="text-4xl font-bold text-accent-500">
                  Health & Comfort Integration
                </h3>
                <div className="text-[28px] font-normal text-[#173552]">
                  <p className="mb-5">
                    Our designs enhance indoor air quality, maximize natural
                    light, and ensure comfortable living spaces, fostering
                    healthier and more productive environments for occupants.
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-10 flex gap-8">
              <div className="flex flex-col items-center gap-8">
                <Economic
                  width={50}
                  height={50}
                  className="min-h-[120px] min-w-[120px]"
                />
              </div>
              <div className="mt-4 flex flex-col gap-5">
                <h3 className="text-4xl font-bold text-accent-500">
                  Economic & Environmental Benefits
                </h3>
                <div className="text-[28px] font-normal text-[#173552]">
                  <p className="mb-5">
                    By integrating energy efficiency, the use of renewable
                    energy sources and lower waste disposal costs, our projects
                    reduce operational costs and add long-term value. This
                    approach makes your building eco-friendly, cost-effective
                    and appealing to sustainability-conscious individuals.
                    Additionally, sustainable buildings are likely to have
                    higher resale value and attract tenants or customers who
                    prioritize sustainability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          className="relative w-full items-center justify-center border-b-4 border-t-4 border-white bg-cover bg-center px-4 py-8 text-white md:border-b-8 md:border-t-8 md:px-36 md:py-16"
          style={{
            backgroundImage: optimizedourprocessbgimg,
          }}
        >
          <div className="absolute inset-0 bg-[#ECC19A] mix-blend-multiply"></div>

          <div className="relative z-10 h-full items-center justify-center text-white">
            <div className="text-center text-[13px] md:text-[32px]">
              <h2 className="mb-2 text-center text-[24px] font-semibold text-[#4B2300] md:text-[48px] md:font-medium">
                Our Journey, Your Achievements{' '}
              </h2>
              <p className="mb-2 text-base leading-[30px] text-black md:text-3xl md:leading-[45px]">
                At TAC Design LAB, every step in our process is designed to
                achieve excellence. From concept to completion, we ensure that
                our projects not only meet but exceed expectations. Curious
                about the milestones we&apos;ve reached? Explore our proudest
                achievements.
              </p>
              <div className="flex justify-center">
                <Link
                  href="/achievements"
                  style={{ backgroundImage: optimizedOurWorkBgButton }}
                  className="rounded bg-cover bg-center p-8 text-[13px] font-bold text-[#331803] duration-200 hover:scale-105 hover:bg-opacity-80 md:mt-2 md:p-14 md:text-2xl"
                >
                  Achievements
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
