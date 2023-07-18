

import './style/card.css';

const Cards = () => {
    return (  
        <div className="card-group">
        <div className="card">
          <img src="./images/Ramzi.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Ramzi - AppTweak</h5>
            <h5 className="card-title">UX/UI Designer</h5>
            
            <p className="card-text">Our program is free of charge, although we ask for strong commitment during our 7 month-journey. And you know what? Many alumni stay actively involved!.</p>
            </div>
        </div>
        <div className="card">
          <img src="./images/Gita.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Gita - ttl.be</h5>
            <h5 className="card-title">QA Developer</h5>
            
            <p className="card-text">"What HYF brought to me is you should never give up and always try to find a way when you’re stuck. I’ve learned that dreaming big without big efforts will bring you nowhere. HackYourFuture was part of my journey to become who I am now.".</p>
            
            </div>
        </div>
        <div className="card">
          <img src="./images/Edwardo.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Edouardo - Capgemini</h5>
            <h5 className="card-title">IT Consultant</h5>
            
            <p className="card-text">"Hack your future definitely built the bridge between the unknown and the doors of my personal success, writing code is now part of my life and I will never forget the lessons learned and time spent with the fellow students and coaches. A big thank you!".".</p>
            </div>
        </div>
      </div>

    );
}

 
export default Cards;;
