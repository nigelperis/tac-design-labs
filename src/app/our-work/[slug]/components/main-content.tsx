'use client';

import Image from 'next/image';

import ImageGallery from '~/components/image-gallery';

import landingPageLeavesBackground from '~/assets/images/landing-page-team-background.png';

import { images, rightColImageCount, workDetails } from '../constant';
import { shuffleImages } from '../utils';
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
    <div
      className="relative max-h-full w-full bg-[#EDD7C3] pb-7 pt-5 bg-blend-luminosity lg:pb-9 lg:pt-14"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.40), rgba(255, 255, 255, 0.40)), url(${landingPageLeavesBackground.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overview */}
      <div className="mx-auto w-[333px] lg:w-[85vw]">
        <p className="text-justify lg:text-[1.62vw]">{currentWork.overview}</p>
      </div>

      {/* Main Layout */}
      <div className="mx-auto mt-10 flex flex-col lg:mt-20 lg:w-[85vw] lg:flex-row lg:gap-20">
        {/* Left Column */}
        <div className="mb-8 flex flex-col gap-16 text-[#173552]">
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
          ]
            .filter((section) => Boolean(section.content))
            .map((section, idx) => {
              return (
                <div key={idx} className="flex flex-col gap-7">
                  {/* Mobile Images */}
                  <div className="mx-auto grid grid-cols-2 gap-4 lg:hidden">
                    <ImageGallery
                      images={getMobileImages(idx)}
                      className="h-[140px] w-[160px] rounded-[27px] border-4 border-[#ECC19A] object-cover shadow-[0px_3.6px_3.6px_0px_#00000040]"
                    />
                  </div>

                  {/* Section Title */}
                  <div className="mx-7 flex items-center gap-2 lg:mx-0">
                    <Image
                      src={'/works/leaf-icon.svg'}
                      alt={currentWork.title}
                      width={24}
                      height={24}
                    />
                    <h1 className="max-w-80 text-[24px] text-[#C6742B] lg:max-w-full lg:text-[2vw]">
                      {section.title}
                    </h1>
                  </div>

                  {/* Section Content */}
                  {Array.isArray(section.content) ? (
                    <ul className="mx-auto list-disc space-y-4 pl-6 lg:mx-0">
                      {section.content.map((item, contentIdx) => (
                        <li
                          className="w-[81vw] text-justify text-[18px] lg:w-[38vw] lg:text-[1.62vw]"
                          key={contentIdx}
                        >
                          <b>{item.title}</b>: <span>{item.description}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mx-auto w-[81vw] text-justify text-[18px] lg:mx-0 lg:w-[41vw] lg:text-[1.62vw]">
                      {section.content}
                    </p>
                  )}
                </div>
              );
            })}
        </div>

        {/* Main Images Section */}
        <div className="mx-auto hidden max-w-[38vw] columns-2 gap-4 lg:my-auto lg:block">
          <ImageGallery
            images={shuffleImages(mainImages)}
            className="max-h-96 w-full max-w-80 rounded-[27px] border-4 border-[#ECC19A] object-cover shadow-[0px_3.6px_3.6px_0px_#00000040]"
          />
        </div>
      </div>
      <ImageSlider images={extraImages} />
    </div>
  );
}

export default MainContent;
