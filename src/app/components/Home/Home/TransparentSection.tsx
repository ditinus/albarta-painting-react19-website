
import { Image } from 'react-bootstrap';
import tranparentImage from '../../../../public/assets/Vector 2.png';
import './transparentsection.css'; // Make sure to import your CSS file if needed

const TransparentSection = () => {
  return (
    <div className="image-container">
      <Image 
        src={tranparentImage} 
        alt="Transparent Image" 
        fluid 
        className="responsive-image" 
      />
    </div>
  );
};

export default TransparentSection;
