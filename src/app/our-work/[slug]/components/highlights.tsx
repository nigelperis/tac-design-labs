import Image from 'next/image';

import { workDetails } from '../constant';
import type { HighlightsProps } from './model';

function Highlights(props: HighlightsProps) {
  const { work } = props;
  const currentWork = workDetails[work];

  return (
    <div className="flex w-full flex-wrap items-center justify-around gap-2 bg-[#420C03] p-3 lg:mt-3 lg:h-[100px] lg:p-0">
      {/* Budget */}
      <div className="relative flex items-center">
        <Image
          src="/works/cash-rupees.svg"
          alt="Cash Rupees"
          width={18}
          height={18}
          className="mr-2 h-[18px] w-[18px] lg:h-[40px] lg:w-[40px]"
        />
        <p className="text-[10px] text-white lg:text-[32px]">
          {currentWork.budget}
        </p>
      </div>

      {/* Area */}
      <div className="relative flex items-center">
        <Image
          src="/works/property.svg"
          alt="Area"
          width={18}
          height={18}
          className="mr-2 h-[18px] w-[18px] lg:h-[40px] lg:w-[40px]"
        />
        <p className="text-[10px] text-white lg:text-[32px]">
          {currentWork.area}
        </p>
      </div>

      {/* Completion Date */}
      <div className="relative flex items-center">
        <Image
          src="/works/Calendar.svg"
          alt="Completion Date"
          width={18}
          height={18}
          className="mr-2 h-[18px] w-[18px] lg:h-[40px] lg:w-[40px]"
        />
        <p className="text-[10px] text-white lg:text-[32px]">
          {currentWork.completionYear}
        </p>
      </div>

      {/* Duration */}
      <div className="relative flex items-center">
        <Image
          src="/works/duration.svg"
          alt="Location"
          width={18}
          height={18}
          className="mr-2 h-[18px] w-[18px] lg:h-[40px] lg:w-[40px]"
        />
        <p className="text-[10px] text-white lg:text-[32px]">
          {currentWork.duration}
        </p>
      </div>

      {/* Location */}
      <div className="relative flex items-center">
        <Image
          src="/works/location.svg"
          alt="Location"
          width={18}
          height={18}
          className="mr-2 h-[18px] w-[18px] lg:h-[40px] lg:w-[40px]"
        />
        <p className="text-[10px] text-white lg:text-[32px]">
          {currentWork.location}
        </p>
      </div>
    </div>
  );
}

export default Highlights;
