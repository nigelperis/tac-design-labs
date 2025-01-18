'use client';

import { useRef, useState } from 'react';

import { workDetails } from '../constant';
import type { FeaturedVideo } from '../model';
import type { FeaturedVideoProps } from './model';

function FeaturedVideos(props: FeaturedVideoProps) {
  const { work } = props;

  const currentWork = workDetails[work];

  return (
    <>
      {/* Desktop */}
      {currentWork.featuredVideos && (
        <div
          className="mx-auto my-auto hidden w-full flex-col items-center justify-center p-20 lg:block"
          style={{
            backgroundImage: "url('/works/teamsbg.png')",
            borderTop: '8px solid white',
          }}
        >
          <p className="text-center text-[32px]">
            See how our work has been recognized and celebrated in these
            featured videos
          </p>

          <div className="my-10 grid grid-cols-2 place-items-center gap-x-4 gap-y-16">
            {currentWork.featuredVideos.map((video, index) => {
              /* Card */
              return (
                <div
                  className="h-[700px] w-[42vw] rounded-2xl bg-[#FFFFFFBB] pb-5 pl-4 pr-4 pt-8"
                  key={index}
                >
                  <h3 className="mx-auto w-[37vw] text-center text-[1.9vw] font-bold text-[#552B0A]">
                    {video.title}
                  </h3>

                  {video.video ? (
                    <iframe
                      className="mx-auto my-10 aspect-video h-[350px] w-[30vw] rounded-2xl border-[5px] border-[#ECC19A]"
                      src={video.video}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share shadow-md"
                      style={{
                        boxShadow: '0px 15px 4px 0px rgba(0, 0, 0, 0.25) inset',
                      }}
                    />
                  ) : (
                    <p className="text-[24px] lg:text-[64px]">COMING SOON</p>
                  )}

                  <p className="mx-auto w-[30vw] text-center text-[1vw]">
                    {video.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Mobile */}
      {currentWork.featuredVideos && (
        <div
          className="mx-auto my-auto block pt-14 lg:hidden"
          style={{
            backgroundImage: "url('/works/teamsbg.png')",
            borderTop: '8px solid white',
          }}
        >
          <p className="mx-auto my-auto w-[333px] text-center text-[16px]">
            See how our work has been recognized and celebrated in these
            featured videos
          </p>

          <MobileMoreVideos featuredVideos={currentWork.featuredVideos} />
        </div>
      )}
    </>
  );
}

const MobileMoreVideos = (props: { featuredVideos: FeaturedVideo[] }) => {
  const { featuredVideos } = props;

  const [scrollPosition, setScrollPosition] = useState({
    scrollWidth: 0,
    scrollLeft: 0,
    offsetWidth: 0,
  });

  const scrollDemoRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollDemoRef.current) {
      const { scrollWidth, scrollLeft, offsetWidth } = scrollDemoRef.current;
      setScrollPosition({ scrollWidth, scrollLeft, offsetWidth });
    }
  };

  const blogCardWidth = 80; // Each video card is 80vw
  const activeIndex: number =
    Math.round(
      scrollPosition.scrollLeft /
        (scrollPosition.offsetWidth * (blogCardWidth / 100)),
    ) || 0;

  return (
    <>
      <div
        className="no-scrollbar relative mt-10 flex w-[99dvw] snap-x snap-mandatory gap-6 overflow-x-auto pb-14"
        onScroll={handleScroll}
        ref={scrollDemoRef}
      >
        <div className="shrink-0 snap-center">
          <div className="w-3 shrink-0"></div>
        </div>
        {featuredVideos.map((video, index) => (
          <div
            key={index}
            className={`max-w-[80vw] shrink-0 snap-center transition duration-1000 ease-in-out ${index === activeIndex ? 'opacity-100' : 'opacity-50'} `}
          >
            {/* * Card */}
            <div
              className="h-[586px] w-[81.2vw] rounded-2xl bg-[#FFFFFFBB] pb-5 pt-8"
              key={index}
            >
              <h3 className="mx-auto w-[75vw] text-center text-[5vw] font-bold text-[#552B0A]">
                {video.title}
              </h3>

              {video.video ? (
                <iframe
                  className="mx-auto my-5 h-[40%] w-[90%] rounded-2xl border-[5px] border-[#ECC19A]"
                  src={video.video}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share shadow-md"
                  style={{
                    boxShadow: '0px 15px 4px 0px rgba(0, 0, 0, 0.25) inset',
                  }}
                  allowFullScreen
                />
              ) : (
                <p className="text-[24px] lg:text-[64px]">COMING SOON</p>
              )}

              <p className="mx-auto w-[75vw] text-center text-[4vw]">
                {video.description}
              </p>
            </div>
          </div>
        ))}
        <div className="shrink-0 snap-center">
          <div className="w-3 shrink-0"></div>
        </div>
      </div>
      <div className="-mt-2 flex justify-center gap-2 pb-4">
        {featuredVideos.map((_, i) => (
          <div
            key={i}
            className={`h-[10px] w-[10px] rounded-full ${i === activeIndex ? 'w-[27px] border-none bg-primary-600' : 'border border-secondary-200 bg-white'}`}
          ></div>
        ))}
      </div>
    </>
  );
};

export default FeaturedVideos;
