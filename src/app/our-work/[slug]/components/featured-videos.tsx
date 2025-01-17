import { workDetails } from '../constant';
import type { FeaturedVideoProps } from './model';

function FeaturedVideos(props: FeaturedVideoProps) {
  const { work } = props;

  const currentWork = workDetails[work];

  return (
    <>
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

                  <p className="mx-auto w-[30vw] text-center text-[0.9vw]">
                    {video.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default FeaturedVideos;
