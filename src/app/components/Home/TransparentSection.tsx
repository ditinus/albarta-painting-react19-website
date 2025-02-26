

import Image from 'next/image';
import tranparentImage from '../../../../public/assets/Vector 2.png';
import './transparentsection.css'; // Make sure to import your CSS file if needed

const TransparentSection = () => {
  return (
    <div className="image-container">
      <Image 
        src={tranparentImage} 
        alt="Transparent Image" 
         
        className="responsive-image" 
      />
    </div>
  );
};

export default TransparentSection;
