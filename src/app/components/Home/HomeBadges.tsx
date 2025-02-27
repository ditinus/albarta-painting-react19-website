"use client";
import './homeBadges.css';
import Image from 'next/image';
import google from '../../../../public/assets/logo-1.svg';
import bbb from '../../../../public/assets/logo-2.svg';
import CleverCanadian from '../../../../public/assets/logo-3.svg';
import HomeStars from '../../../../public/assets/logo-4.svg';
import best2023 from '../../../../public/assets/logo-5.svg';
import best2024 from '../../../../public/assets/logo-6.svg';

const HomeBadges: React.FC = () => {
  return (
    <div className="badgeContainer">
      <div className="row justify-content-center row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6 align-items-center">
        <div className="col">
          <Image className='object-fit-contain log-img' src={google} alt="Google 4.9 Rating" width={150} height={150} />
        </div>
        <div className="col">
          <Image className='object-fit-contain log-img' src={bbb} alt="BBB Accredited" width={150} height={150} />
        </div>
        <div className="col">
          <Image className='object-fit-contain log-img' src={CleverCanadian} alt="Clever Canadian" width={150} height={150} />
        </div>
        <div className="col">
          <Image className='object-fit-contain log-img' src={HomeStars} alt="HomeStars Verified" width={150} height={150} />
        </div>
        <div className="col">
          <Image className='object-fit-contain log-img' src={best2023} alt="Best of Best 2023" width={150} height={150} />
        </div>
        <div className="col">
          <Image className='object-fit-contain log-img' src={best2024} alt="Best of Best 2024" width={150} height={150} />
        </div>
      </div>
    </div>
  );
};

export default HomeBadges;
