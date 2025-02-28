import QualityWorkmanship from '../../../../public/assets/OualityWorkManship.png';
import QualityMaterials from '../../../../public/assets/QualityMaterial.png';
import ExperiencedTeam from '../../../../public/assets/Experienced Team.png';
import CustomerSatisfaction from '../../../../public/assets/Customer Satifaction.png';
import './HomeWhyChooseSection.css';
import Image from 'next/image';

const HomeWhyChooseSection = () => {
  return (
    <section className=" why-choose-us" style={{backgroundColor: '#E2E7F1',}}>
      <h2 className='text-center'>WHY CHOOSE US?</h2>
      <div className="features">
        <div className="row">
          {/* Quality Workmanship Feature */}
          <div className="col-12 col-sm-6 col-md-3 feature ">
            <div className="icon">
              <Image src={QualityWorkmanship} alt="Quality Workmanship" />
            </div>
            <h3 style={{color:"#0D378D"}}>Quality Workmanship</h3>
            <p>We use only premium materials and top-notch techniques.</p>
          </div>

          {/* Quality Materials Feature */}
          <div className="col-12 col-sm-6 col-md-3 feature">
            <div className="icon">
              <Image src={QualityMaterials} alt="Quality Materials" />
            </div>
            <h3 style={{color:"#0D378D"}}>Quality Materials</h3>
            <p>We work with trusted, high-quality materials that stand the test of time.</p>
          </div>

          {/* Experienced Team Feature */}
          <div className="col-12 col-sm-6 col-md-3 feature">
            <div className="icon">
              <Image src={ExperiencedTeam} alt="Experienced Team" />
            </div>
            <h3 style={{color:"#0D378D"}}>Experienced Team</h3>
            <p>Our experts have over a decade of experience.</p>
          </div>

          {/* Customer Satisfaction Feature */}
          <div className="col-12 col-sm-6 col-md-3 feature">
            <div className="icon">
              <Image src={CustomerSatisfaction} alt="Customer Satisfaction" />
            </div>
            <h3 style={{color:"#0D378D"}}>Customer Satisfaction</h3>
            <p>Your satisfaction is our priority, and we ensure the job is done right the first time.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeWhyChooseSection;
