import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMousePointer } from '@fortawesome/free-solid-svg-icons';


export default function NichaLabs() {

    const handleClick = () => {
        window.open('https://nichanlabs.com', '_blank');
    };

    return (
        <div className="nichalabs-container">
            <div onClick={handleClick} target="_blank" rel="noopener noreferrer" className="nichalabs-card">
                <div className="card-content">
                    <div className="card-header">
                        <div className="header-content">
                            <img src="./logo.png" alt="NichanLabs Logo" className="company-logo" />
                        </div>
                    </div>
                    <div className="card-body">
                        <p className="main-text">Nichan LABS, l'expertise digitale au service de vos projets : développement, design et stratégie numérique.</p>
                        <p className="subtitle"> <i style={{ fontSize: '20px'}}><FontAwesomeIcon icon={faMousePointer} className="click-icon" /> </i> Click to explore our services</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
