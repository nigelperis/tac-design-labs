'use client';

import Image from 'next/image';

import landingPageLeavesBackground from '~/assets/images/landing-page-team-background.png';

import { images, rightColImageCount, workDetails } from '../constant';
import DetailsCarousel from './details-carousel';
import ImageSlider from './image-slider';
import type { MainContentProps } from './model';

function MainContent(props: MainContentProps) {
  const { work } = props;
  const currentWork = workDetails[work];

  const maxImages = rightColImageCount[work];
  const mainImages = images[work].slice(0, maxImages);
  const extraImages = images[work].slice(maxImages);

  // Function to get the first 6 images for mobile
  const getMobileImages = (index: number) =>
    images[work].slice(index * 6, index * 6 + 6);

  return (
    <div className="relative max-h-full w-full bg-[#EDD7C3] pb-7 pt-5 bg-blend-luminosity lg:pb-9 lg:pt-14">
      <Image
        src={landingPageLeavesBackground}
        alt={currentWork.title}
        layout="fill"
      />

      {/* Overview */}
      <div className="mx-auto w-[333px] lg:w-[85vw]">
        <p className="text-justify lg:text-[28px]">{currentWork.overview}</p>
      </div>

      {/* Main Layout */}
      <div className="mx-auto mt-10 flex flex-col lg:mt-20 lg:w-[85vw] lg:flex-row lg:gap-20">
        {/* Left Column */}
        <div className="mb-8 flex flex-col gap-20 text-[#173552]">
          {[
            { title: 'Design Intent', content: currentWork.designIntent },
            {
              title: 'Materials and Techniques',
              content: currentWork.materialsAndTechniques,
            },
            { title: 'Key Features', content: currentWork.keyFeatures },

            { title: 'Material Palette', content: currentWork.materialPallete },
            {
              title: 'Functional Layout',
              content: currentWork.functionalLayout,
            },
            {
              title: 'Sustainability Measures',
              content: currentWork.sustainabilityMeasures,
            },
            {
              title: 'Cultural and Aesthetic Considerations',
              content: currentWork.culturalConsiderations,
            },
            { title: 'Outcome', content: currentWork.outcome },
          ].map((section, idx) => {
            if (!section.content) return null;

            return (
              <div key={idx} className="flex flex-col gap-7">
                {/* Mobile Images */}
                <div className="mx-auto grid grid-cols-2 gap-4 lg:hidden">
                  {getMobileImages(idx).map((image, imageIdx) => (
                    <div key={imageIdx} className="mb-5">
                      <Image
                        src={image}
                        alt={`Mobile Image ${imageIdx.toString()}`}
                        width={0}
                        height={0}
                        sizes="50vw"
                        className="h-[140px] w-[160px] rounded-[27px] border-4 border-[#ECC19A] object-cover shadow-[0px_3.6px_3.6px_0px_#00000040]"
                      />
                    </div>
                  ))}
                </div>

                {/* Section Title */}
                <div className="mx-7 flex items-center gap-2 lg:mx-0">
                  <Image
                    src={'/works/leaf-icon.svg'}
                    alt={currentWork.title}
                    width={24}
                    height={24}
                  />
                  <h1 className="max-w-80 text-[24px] text-[#C6742B] lg:max-w-full lg:text-[36px]">
                    {section.title}
                  </h1>
                </div>

                {/* Section Content */}
                {Array.isArray(section.content) ? (
                  <ul className="mx-auto list-disc pl-9 lg:mx-0">
                    {section.content.map((item, contentIdx) => (
                      <li
                        className="w-[350px] text-[18px] lg:w-[39vw] lg:text-[28px]"
                        key={contentIdx}
                      >
                        <b>{item.title}</b>: <span>{item.description}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mx-auto w-[350px] text-[18px] lg:mx-0 lg:w-[33vw] lg:text-[28px]">
                    {section.content}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Main Images Section */}
        <div className="hidden max-w-[38vw] gap-x-5 lg:grid lg:grid-cols-2">
          {mainImages.map((image, idx) => (
            <div key={idx} className="mb-5">
              <Image
                src={image}
                alt={`Image ${idx.toString()}`}
                width={0}
                height={0}
                sizes="100vw"
                className="max-h-96 w-full max-w-80 rounded-[27px] border-4 border-[#ECC19A] object-cover shadow-[0px_3.6px_3.6px_0px_#00000040]"
              />
            </div>
          ))}
        </div>
        {/* <DetailsCarousel images={mainImages} /> */}
      </div>
      <ImageSlider images={extraImages} />
    </div>
  );
}

export default MainContent;
