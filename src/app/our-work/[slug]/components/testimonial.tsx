import { workDetails } from '../constant';
import type { TestimonialProps } from './model';

function Testimonial(props: TestimonialProps) {
  const { work } = props;
  const currentWork = workDetails[work];

  return (
    <div
      className="relative min-h-[522px] w-full bg-cover bg-center p-4 shadow-[inset_0px_15px_4px_0px_rgba(0,0,0,0.25)] lg:min-h-[725px]"
      style={{
        backgroundImage: "url('/works/testimonial-bg.png')",
        borderTop: '6px solid white',
      }}
    >
      {/* Content Overlay */}
      <div className="absolute inset-0 mx-auto flex flex-col items-center justify-center gap-y-6 text-black lg:w-[81vw] lg:gap-y-12">
        <p className="w-[89vw] text-center text-[20px] lg:w-auto lg:text-[32px]">
          {currentWork.testimonial}
        </p>

        {currentWork.testimonialVideo ? (
          <iframe
            className="mx-auto aspect-video w-[90%] rounded-2xl border-[5px] border-[#ECC19A] lg:w-[50%]"
            src={currentWork.testimonialVideo}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            style={{
              boxShadow: '0px 15px 4px 0px rgba(0, 0, 0, 0.25) inset',
            }}
          />
        ) : (
          <p className="text-[24px] lg:text-[64px]">COMING SOON</p>
        )}
      </div>
    </div>
  );
}

export default Testimonial;
