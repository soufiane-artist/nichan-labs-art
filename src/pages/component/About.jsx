import React from 'react'

function About() {
  return (
    <div>
         <section id="about" className="about">
                <div className="about-container">
                    <div className="about-text">
                        <h2>Notre Vision chez <span>NichanLabs</span></h2>
                        <p className="highlight">Innovation, Créativité & Excellence Technique</p>
                        <p>
                            NichanLabs combine expertise technique et vision artistique pour
                            créer des expériences numériques uniques. Notre approche innovante fusionne art traditionnel et
                            technologies de pointe pour repousser les limites de la création digitale.
                        </p>
                        <div className="stats">
                            <div className="stat-item">
                                <span className="number">5+</span>
                                <span className="label">Ans d'Expérience</span>
                            </div>
                            <div className="stat-item">
                                <span className="number">100+</span>
                                <span className="label">Projets Réalisés</span>
                            </div>
                            <div className="stat-item">
                                <span className="number">50+</span>
                                <span className="label">Clients Satisfaits</span>
                            </div>
                        </div>
                    </div>
                    <div className="about-image">
                        <img
                            src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop"
                            alt="Art & Innovation chez NichanLabs"
                        />
                    </div>
                </div>
            </section>
    </div>
  )
}

export default About