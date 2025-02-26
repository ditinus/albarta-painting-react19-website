
import './homeoffercard.css';
import Image from 'next/image';

interface Offer {
  image: string;
  title: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface HomeOfferCardProps {
  offer: Offer;
  isActive: boolean;
}

const HomeOfferCard: React.FC<HomeOfferCardProps> = ({ offer, isActive }) => {
  return (
    <div className={`offer-card ${isActive ? "active" : ""} col-8 col-md-5`}>
      <div className="offer-img-container position-relative">
        <Image className="offer-img w-100 h-100 object-cover" src={offer.image} alt={offer.title} />
        
        <div className="offer-ribbon position-absolute top-40px bg-primary text-white p-2">
          <h2>{offer.title}</h2>
        </div>

        <div className="offer-bottom-overlay position-absolute bottom-86px left-0 w-100 p-2 bg-primary bg-opacity-50 text-white text-center">
          <p><strong>Offer starts: {offer.startDate}</strong></p>
          <p><strong>Offer ends: {offer.endDate}</strong></p>
        </div>

        <p className="offer-bottom-overlay-description position-absolute bottom-0 left-0 w-100 p-2 text-white fs-6">
          {offer.description}
        </p>
      </div>
    </div>
  );
}

export default HomeOfferCard;
