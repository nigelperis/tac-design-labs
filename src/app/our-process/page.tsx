import React from 'react';
import Image from 'next/image';

import { getOptimizedBackgroundImage } from '~/utils/background-image-optimizer';

import OurWorkBgButton from '~/assets/images/button-background.png';
import constructionapproval from '~/assets/images/constructionapproval.png';
import constructionapprovallg from '~/assets/images/constructionapprovallg.png';
import costestimationicon from '~/assets/images/costestimationicon.png';
import costestimationiconlg from '~/assets/images/costestimationiconlg.png';
import docandapprovalIcon from '~/assets/images/docandapprovalIcon.png';
import docandapprovalIconlg from '~/assets/images/docandapprovalIconlg.png';
import economicicon from '~/assets/images/economicicon.png';
import economiciconlg from '~/assets/images/economiciconlg.png';
import healthcomforticon from '~/assets/images/healthcomforticon.png';
import healthcomforticonlg from '~/assets/images/healthcomforticonlg.png';
import lineourprocess from '~/assets/images/lineourprocess.png';
import lineourwork1 from '~/assets/images/lineourwork1.png';
import lineourwork2 from '~/assets/images/lineourwork2.png';
import lineourwork3 from '~/assets/images/lineourwork3.png';
import lineourwork4 from '~/assets/images/lineourwork4.png';
import lineourwork5 from '~/assets/images/lineourwork5.png';
import lineourwork6 from '~/assets/images/lineourwork6.png';
import OurProcessBgImg from '~/assets/images/our-process-bg-img.png';
import ourprocesscatbgimg from '~/assets/images/ourproccessbgimg.png';
import PenIcon from '~/assets/images/pen-icon.png';
import PenIconLg from '~/assets/images/PenIconLg.png';
import siteivisiticon from '~/assets/images/siteivisiticon-lg.png';
import sitevisite from '~/assets/images/sitevisite-icon.png';

const OurProcess = () => {
  const optimizedLandingPageArchitectureBackground =
    getOptimizedBackgroundImage({
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
        className="font-primary"
        style={{
          backgroundImage: optimizedLandingPageArchitectureBackground,
        }}
      >
        <div className="bg-[#EDD7C3CC] px-7 pb-12 pt-24 md:px-24 md:pb-24 md:pt-16">
          <h1 className="mb-2 max-w-[900px] text-4xl text-primary-500 md:mb-5 md:text-6xl">
            Partnering with You for{' '}
            <span className="text-accent-500">Sustainable Living</span>
          </h1>
          <p className="mb-8 text-base leading-7 text-[#173552] md:mb-24 md:text-4xl">
            We are committed to building sustainable architecture that respects
            the environment and enhances your lifestyle. Here is a step-by-step
            overview of how we work together:
          </p>
          <div className="space-y-4 md:hidden">
            <div className="rounded-xl bg-white bg-opacity-50 px-6 py-5">
              <div className="mb-3 flex items-center gap-2">
                <Image
                  src={PenIcon}
                  alt="logo"
                  width={50}
                  height={50}
                  className="min-h-[50px] min-w-[50px]"
                />
                <h3 className="text-2xl font-bold text-accent-500">
                  Registration
                </h3>
              </div>
              <div className="text-sm leading-7 text-[#173552]">
                <p className="mb-3">
                  We treat each client as a valued partner in creating something
                  exceptional. Before registration, we ensure you fully
                  understand our approach, philosophy and techniques through an
                  in-depth briefing at our studio. This covers our construction
                  methods, materials, and design strategies.
                </p>
                <span>Registration Fees (Non-refundable) :</span>
                <ul className="ml-8 mt-2 list-disc">
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
                <Image
                  src={sitevisite}
                  alt="logo"
                  width={50}
                  height={50}
                  className="min-h-[50px] min-w-[50px]"
                />
                <h3 className="text-2xl font-bold text-accent-500">
                  Site Visit & Initial Planning
                </h3>
              </div>
              <div className="text-sm leading-7 text-[#173552]">
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
                <Image
                  src={docandapprovalIcon}
                  alt="logo"
                  width={50}
                  height={50}
                  className="min-h-[50px] min-w-[50px]"
                />
                <h3 className="text-2xl font-bold text-accent-500">
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
                <Image
                  src={costestimationicon}
                  alt="logo"
                  width={50}
                  height={50}
                  className="min-h-[50px] min-w-[50px]"
                />
                <h3 className="text-2xl font-bold text-accent-500">
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
                  <span className="text-accent-500">Note: </span> If a project
                  is halted before completion, all service charges and
                  outstanding amounts related to the project must be settled
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
                <Image
                  src={constructionapproval}
                  alt="logo"
                  width={50}
                  height={50}
                  className="min-h-[50px] min-w-[50px]"
                />
                <h3 className="text-2xl font-bold text-accent-500">
                  Sustainable Construction & Approvals
                </h3>
              </div>
              <div className="text-sm text-[#173552]">
                <p className="mb-3 leading-7">
                  We begin construction using eco-friendly practices and
                  materials to minimize environmental impact. Our approach
                  includes:
                </p>

                <ul className="ml-8 mt-2 list-disc leading-7">
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
                <Image
                  src={healthcomforticon}
                  alt="logo"
                  width={50}
                  height={50}
                  className="min-h-[50px] min-w-[50px]"
                />
                <h3 className="text-2xl font-bold text-accent-500">
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
                <Image
                  src={economicicon}
                  alt="logo"
                  width={50}
                  height={50}
                  className="min-h-[50px] min-w-[50px]"
                />
                <h3 className="text-2xl font-bold text-accent-500">
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
          <div className="hidden px-7 md:block">
            <div className="mb-10 flex gap-8">
              <div className="flex flex-col items-center gap-8">
                <Image
                  src={PenIconLg}
                  alt="logo"
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
                  // className="min-h-[50px] min-w-[50px]"
                />
              </div>
              <div className="flex flex-col gap-5">
                <h3 className="text-4xl font-bold text-accent-500">
                  Registration
                </h3>
                <div className="text-3xl text-[#173552]">
                  <p className="mb-5">
                    We treat each client as a valued partner in creating
                    something exceptional. Before registration, we ensure you
                    fully understand our approach, philosophy and techniques
                    through an in-depth briefing at our studio. This covers our
                    construction methods, materials, and design strategies.
                  </p>
                  <span>Registration Fees (Non-refundable) :</span>
                  <ul className="ml-8 mt-4 list-disc">
                    <li>₹2000 for residential buildings</li>
                    <li>₹10,000 for non-residential buildings</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mb-10 flex gap-8">
              <div className="flex flex-col items-center gap-8">
                <Image
                  src={siteivisiticon}
                  alt="logo"
                  width={200}
                  height={200}
                  className="min-h-[120px] min-w-[120px]"
                />
                <Image
                  src={lineourwork2}
                  alt="logo"
                  width={50}
                  height={50}
                  className="h-28 w-2"
                  // className="min-h-[50px] min-w-[50px]"
                />
              </div>
              <div className="flex flex-col gap-5">
                <h3 className="text-4xl font-bold text-accent-500">
                  Site Visit & Initial Planning
                </h3>
                <div className="text-3xl text-[#173552]">
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
                <Image
                  src={docandapprovalIconlg}
                  alt="logo"
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
                  // className="min-h-[50px] min-w-[50px]"
                />
              </div>
              <div className="flex flex-col gap-5">
                <h3 className="text-4xl font-bold text-accent-500">
                  Documentation & Approvals
                </h3>
                <div className="text-3xl text-[#173552]">
                  <p className="mb-5">
                    Once the plan is finalized, you’ll need to submit all
                    required documents for sanction drawings.
                  </p>
                  <span>For government approval, you can either:</span>
                  <ul className="ml-8 mt-4 list-disc">
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
                <Image
                  src={costestimationiconlg}
                  alt="logo"
                  width={200}
                  height={200}
                  className="min-h-[120px] min-w-[120px]"
                />
                <Image
                  src={lineourwork4}
                  alt="logo"
                  width={50}
                  height={50}
                  className="h-48 w-2"
                  // className="min-h-[50px] min-w-[50px]"
                />
              </div>
              <div className="flex flex-col gap-5">
                <h3 className="text-4xl font-bold text-accent-500">
                  Cost Estimation
                </h3>
                <div className="text-3xl text-[#173552]">
                  <p className="mb-5">
                    A cost estimate will be provided based on the finalized
                    plan, valid for six months due to market fluctuations. Any
                    adjustments due to changes in design, materials, or
                    unforeseen market conditions will be your responsibility.
                  </p>
                  <p className="font-bold">
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
                <Image
                  src={constructionapprovallg}
                  alt="logo"
                  width={100}
                  height={100}
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
              <div className="flex flex-col gap-5">
                <h3 className="text-4xl font-bold text-accent-500">
                  Sustainable Construction & Approvals
                </h3>
                <div className="text-3xl text-[#173552]">
                  <p className="mb-5">
                    We begin construction using eco-friendly practices and
                    materials to minimize environmental impact. Our approach
                    includes:
                  </p>
                  <ul className="ml-8 mt-4 list-disc">
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
                <Image
                  src={healthcomforticonlg}
                  alt="logo"
                  width={200}
                  height={200}
                  className="min-h-[120px] min-w-[120px]"
                />
                <Image
                  src={lineourwork6}
                  alt="logo"
                  width={50}
                  height={50}
                  className="h-28 w-2"
                  // className="min-h-[50px] min-w-[50px]"
                />
              </div>
              <div className="flex flex-col gap-5">
                <h3 className="text-4xl font-bold text-accent-500">
                  Health & Comfort Integration
                </h3>
                <div className="text-3xl text-[#173552]">
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
                <Image
                  src={economiciconlg}
                  alt="logo"
                  width={200}
                  height={200}
                  className="min-h-[120px] min-w-[120px]"
                />
              </div>
              <div className="flex flex-col gap-5">
                <h3 className="text-4xl font-bold text-accent-500">
                  Economic & Environmental Benefits
                </h3>
                <div className="text-3xl text-[#173552]">
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
              <p className="mb-2 text-base text-black md:text-3xl">
                At TAC Design LAB, every step in our process is designed to
                achieve excellence. From concept to completion, we ensure that
                our projects not only meet but exceed expectations. Curious
                about the milestones we have reached? Explore our proudest
                achievements.
              </p>
              <button
                className="relative max-w-[220px] rounded bg-cover bg-center p-6 text-base font-bold text-primary-500 md:text-2xl"
                style={{
                  backgroundImage: optimizedOurWorkBgButton,
                }}
              >
                <span className="block md:hidden">
                  Schedule A Free Consultation
                </span>
                <span className="hidden p-10 md:block">Achievements</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
