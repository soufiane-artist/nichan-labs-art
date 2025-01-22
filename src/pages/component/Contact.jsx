import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import {toast, ToastContainer} from 'react-toastify';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
        toast.success('Champ modifié avec succès!');

    };

    return (
        <section id="contact" className="contact">
            <ToastContainer theme="colored" />
            <h2>Contacter <span>Nous</span></h2>
            <div className="contact-container">
                <div className="contact-info">
                    <div className="info-item">
                        <i >
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                        </i>
                        <h3>Localisation</h3>
                        <p>Maroc</p>
                    </div>
                    <div className="info-item">
                        <i>
                        <FontAwesomeIcon icon={faEnvelope} />
                        </i>
                        <h3>Email</h3>
                        <p>contact@nichanart.com</p>
                    </div>
                    <div className="info-item">
                        <i>
                        <FontAwesomeIcon icon={faPhone} />
                        </i>
                        <h3>Téléphone</h3>
                        <p>+212 XXX-XXXXXX</p>
                    </div>
                </div>
                <form id="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input 
                            type="text" 
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Votre Nom" 
                            required 
                        />
                        <input 
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Votre Email" 
                            required 
                        />
                    </div>
                    <input 
                        type="text" 
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Sujet" 
                        required 
                    />
                    <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Votre Message" 
                        required 
                    />
                    <button type="submit" className="btn primary">Envoyer le Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;