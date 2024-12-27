import { getOptimizedBackgroundImage } from '~/utils/background-image-optimizer';

import careerPageBackground from '~/assets/images/career-page-background.png';
import career from '~/assets/images/career.jpg';

export default function Career() {
  const optimizedCareerPageBackground = getOptimizedBackgroundImage({
    src: careerPageBackground.src,
    width: careerPageBackground.width,
    height: careerPageBackground.height,
  });
  return (
    <div
      className="bg-[#EDD7C3] bg-contain py-16 font-primary bg-blend-soft-light"
      style={{
        backgroundImage: optimizedCareerPageBackground,
      }}
    >
      <div className="bg-white py-2">
        <div className="relative h-[340px] w-full">
          <div
            className="h-full w-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${career.src})`,
            }}
          ></div>
          <div className="absolute inset-0 flex justify-start bg-black bg-opacity-50">
            <div className="px-[18px] py-8 text-white md:px-28 md:py-12">
              <h1 className="mb-8 px-4 text-2xl font-bold md:text-4xl">
                Join Our Team
              </h1>
              <p className="mt-2 px-4 text-xl font-[400] leading-10 md:text-3xl md:leading-normal">
                We work together, driven by our passion to serve the community
                and help you grow. Sounds good? Explore our opportunities and
                come join us.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="font-primary">
        <div className="px-[18px] py-11 md:px-28 md:py-24">
          <h2 className="mb-4 text-center text-[28px] font-[700] text-[#552B0A] md:text-[42px]">
            Life Inside Our Office
          </h2>
          <p className="text-justify text-[16px] font-[400] leading-relaxed text-[#173552] md:text-[26px]">
            Our office is designed as a dynamic space for architectural
            dialogue, creativity, and innovative design. We foster an
            environment where every team member feels connected, both with each
            other and the space around them. Spread across 2400 sq. feet of
            open, rectangular floor plan, our workspace encourages collaboration
            and sparks creativity. Understanding the psychology of space, we’ve
            crafted an environment that nurtures the creative minds of
            architects, helping them thrive in their work.
          </p>
        </div>

        <div className="px-[18px] py-11 md:px-28 md:py-24">
          <h2 className="mb-4 text-[28px] font-[700] text-[#552B0A] md:text-[42px]">
            Discover Our Impactful Projects
          </h2>
          <p className="text-justify text-[16px] font-[400] leading-relaxed text-[#173552] md:text-[26px]">
            Explore how TAC Design LAB transforms spaces with sustainable and
            innovative designs. See firsthand how we integrate eco-friendly
            practices into every project we undertake.
          </p>
        </div>
      </div>
    </div>
  );
}
