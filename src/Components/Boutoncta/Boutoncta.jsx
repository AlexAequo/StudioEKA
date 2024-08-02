import React from 'react';
import { Link } from 'react-router-dom';
import './Boutoncta.css';

const Boutoncta = () => {
    return (
        <div className="cta1">
            <Link to="/contact" className="cta-button1">Prendre rendez-vous !</Link>
        </div>
    );
}

export default Boutoncta;



