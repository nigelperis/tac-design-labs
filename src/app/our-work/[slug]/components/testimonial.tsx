import Image from 'next/image';

import { workDetails } from '../constant';
import type { TestimonialProps } from './model';

function Testimonial(props: TestimonialProps) {
  const { work } = props;

  const currentWork = workDetails[work];

  return (
    <div
      className="relative min-h-[522px] w-full p-4 lg:min-h-[725px]"
      style={{
        boxShadow: 'inset 0px 15px 4px 0px rgba(0, 0, 0, 0.25)',
      }}
    >
      <Image
        src="/works/testimonial-bg.png"
        alt="testimonial"
        layout="fill"
        className="absolute left-0 top-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-10 mx-auto flex-col items-center justify-center text-black lg:w-[81vw]">
        <p className="text-center text-[20px] lg:text-[32px]">
          {currentWork.testimonial}
        </p>
        {currentWork.testimonialVideo ? (
          <iframe
            className="mx-auto aspect-video w-[95%] rounded-2xl border-[5px] border-[#ECC19A] lg:w-1/2"
            src={currentWork.testimonialVideo}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            style={{
              boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.2)',
            }}
          />
        ) : (
          <p>Coming soon</p>
        )}
      </div>
    </div>
  );
}

export default Testimonial;
