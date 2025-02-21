import './homeoffercard.css';
import { Image } from 'react-bootstrap';

// Define an interface for the offer object
interface Offer {
  image: string;
  title: string;
  startDate: string;
  endDate: string;
  description: string;
}

// Define the props interface for the HomeOfferCard component
interface HomeOfferCardProps {
  offer: Offer;
  isActive: boolean;
}

const HomeOfferCard: React.FC<HomeOfferCardProps> = ({ offer, isActive }) => {
  return (
    <div className={`offer-card ${isActive ? "active" : ""}`}>
      {/* Image with overlay */}
      <div className="offer-img-container">
        <Image className="offer-img" src={offer.image} alt={offer.title} />
        
        {/* Title Overlay on Image */}
        <div className="offer-ribbon">
          <h2>{offer.title}</h2>
 
        </div>
        
        {/* Bottom section containing date and description */}
        <div className="offer-bottom-overlay">
          <p><strong>Offer starts: {offer.startDate}</strong></p>
          <p><strong>Offer ends: {offer.endDate}</strong></p>
        </div>
        <p className="offer-bottom-overlay-description">{offer.description}</p>
      </div>
    </div>
  );
}

export default HomeOfferCard;
