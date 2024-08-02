import React from 'react';
import './Barreservice.css';

const Barreservice = () => {
    return (
        <div className="Services">
            <div className="service-item">
                <div className="circle">
                
                </div>
                <h2>Communication digitale & print</h2>
            </div>
            <div className="service-item">
                <div className="circle">
                    <img src="https://via.placeholder.com/24" alt="Icon" className="icon"/>
                </div>
                <h2>Back-office Notion</h2>
            </div>
            <div className="service-item">
                <div className="circle">
                    <img src="https://via.placeholder.com/24" alt="Icon" className="icon"/>
                </div>
                <h2>Développement web</h2>
            </div>
        </div>
    );
}

export default Barreservice;
