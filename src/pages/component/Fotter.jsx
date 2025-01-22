import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faBehance, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {

    
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-sections">
          <div className="footer-section">
            <div className="footer-logo">
              <img src="./qsd.png" alt="NICHAN-LABS"/>
            </div>
            <h3>À Propos de NichanLabs</h3>
            <p>NichanLabs est un laboratoire d'innovation où l'art rencontre la technologie. Notre équipe repousse les limites de la création numérique pour offrir des solutions créatives et innovantes à nos clients.</p>
          </div>
          <div className="footer-section">
            <h3>Nos Services</h3>
            <ul>
              <li><a href="#services">Design Créatif</a></li>
              <li><a href="#services">Art Numérique</a></li>
              <li><a href="#services">Développement Créatif</a></li>
              <li><a href="#services">Expériences Immersives</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact NichanLabs</h3>
            <ul className="contact-info">
              <li><i className="fas fa-phone"></i> +212 XXX-XXXXXX</li>
              <li><i className="fas fa-envelope"></i> contact@nichanlabs.com</li>
              <li><i className="fas fa-map-marker-alt"></i> Maroc</li>
            </ul>
          </div>
        </div>
        <div className="social-links">
          <a href="#" title="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="#" title="Behance"><FontAwesomeIcon icon={faBehance} /></a>
          <a href="#" title="Twitter"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="#" title="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href="#" title="GitHub"><FontAwesomeIcon icon={faGithub} /></a>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 NichanLabs. Tous droits réservés.</p>
          <p>Innovation et Créativité par <img src="./qsd.png" alt="NICHAN-LABS" className="footer-mini-logo"/> NichanLabs</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer