import React from 'react';
import './Barreservice.css';
import communication from '../Assets/communication.png';
import backoffice from '../Assets/backoffice.png';
import development from '../Assets/development.png';

const Barreservice = () => {
    return (
        <div className="Services">
            <div className="service-item">
                <div className="circle">
                <img src={communication} alt="Communication digitale & print" className="icon-competence" />
                </div>
                <h2>Communication <br/> 
                <span>digitale & print</span></h2>
            </div>
            <div className="service-item">
                <div className="circle">
                <img src={backoffice} alt="Back-office Notion" className="icon-competence" />
                </div>
                <h2>Back-office<br/>
                <span>Notion</span></h2>
            </div>
            <div className="service-item">
                <div className="circle">
                <img src={development} alt="Développement web" className="icon-competence" />
                </div>
                <h2>Développement <br/>
                <span>web</span></h2>
            </div>
        </div>
    );
}

export default Barreservice;
