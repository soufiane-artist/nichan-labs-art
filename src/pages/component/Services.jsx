import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaintBrush, faPalette, faLaptop, faUsers } from '@fortawesome/free-solid-svg-icons';

function Services() {
  return (
    <div>
          <section id="services" className="services">
                <h2>Nos <span>Services</span></h2>
                <div className="services-grid">
                    <div className="service-card">
                        <i>
                        <FontAwesomeIcon icon={faPaintBrush} />
                        </i>
                        <h3>Peintures Murales</h3>
                        <p>Création de fresques et art mural personnalisé pour espaces urbains et intérieurs</p>
                    </div>
                    <div className="service-card">
                        <i>
                        <FontAwesomeIcon icon={faPalette} />
                        </i>
                        <h3>Peintures Artistiques</h3>
                        <p>Réalisation de tableaux et œuvres d'art sur mesure dans différents styles</p>
                    </div>
                    <div className="service-card">
                        <i>
                        <FontAwesomeIcon icon={faLaptop} />
                        </i>
                        <h3>Art Digital</h3>
                        <p>Création d'illustrations numériques et design graphique moderne</p>
                    </div>
                    <div className="service-card">
                        <i>
                        <FontAwesomeIcon icon={faUsers} />
                        </i>
                        <h3>Ateliers Artistiques</h3>
                        <p>Animation de workshops et formation en techniques artistiques</p>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default Services