import { workDetails } from '../constant';
import type { AdmirationProps } from './model';

function Admiration(props: AdmirationProps) {
  const { work } = props;

  const currentWork = workDetails[work];

  return (
    <div
      className="mx-auto flex h-[300px] w-full items-center justify-center"
      style={{
        backgroundImage: "url('/works/admiration-bg.png')",
        borderTop: '8px solid white',
        borderBottom: '8px solid white',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h1 className="w-[81vw] text-center text-[18px] text-white lg:w-[57vw] lg:text-[32px]">
        {currentWork.admiration}
      </h1>
    </div>
  );
}

export default Admiration;
