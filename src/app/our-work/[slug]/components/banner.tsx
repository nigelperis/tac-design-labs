import Image from 'next/image';

import { workDetails } from '../constant';
import type { WorkDetails } from '../model';
import type { BannerProps } from './model';

function Banner(props: BannerProps) {
  const { imagePath, work } = props;
  const currentWork: WorkDetails = workDetails[work];

  return (
    <div className="relative flex h-[441px] w-full items-center justify-center lg:h-[622px]">
      <Image
        src={imagePath}
        alt={currentWork.title}
        fill
        objectFit="cover"
        objectPosition="center"
        className="scale-100 transform"
      />

      {/* Text Part */}
      <div className="flex h-[304px] w-full flex-col items-center justify-center gap-4 bg-[#ECC19A33] text-center text-white backdrop-blur-[4.1px]">
        <h1 className="text-[42px] font-bold lg:text-[96px]">
          {currentWork.title}
        </h1>
        <p className="max-w-[351px] text-[22px] lg:max-w-[1082px] lg:text-[1.91vw]">

          {currentWork.subTitle}
        </p>
      </div>
    </div>
  );
}

export default Banner;
