import './homehero.css'

const HomeHero = () => {
    return (
        <section className="hero">
            {/* <div className="overlay"></div> */}
            <div className="hero-content">
                <h1>EXPERT <span className="highlight">CALGARY PAINTERS</span></h1>
                <p>for Interior and Exterior House Painting Services</p>
                <div className="buttons">
                    <a href="#" className="btn primary">Get a Free Quote →</a>
                    <a href="#" className="btn secondary">Book Now</a>
                </div>
            </div>
            
        </section>
    )
    
}

export default HomeHero;