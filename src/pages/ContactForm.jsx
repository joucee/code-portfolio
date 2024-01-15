import React, { useState } from 'react';
import "../style/index.css";

function ContactForm() {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [societe, setSociete] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Ici, vous pouvez traiter les données du formulaire, par exemple en les envoyant à un serveur
        console.log({ nom, prenom, societe, message });
        // Réinitialiser les champs du formulaire après la soumission si nécessaire
        setNom('');
        setPrenom('');
        setSociete('');
        setMessage('');
    };

    return (
        <div className="contact-form-container">
            <h4 className="form-title">Formulaire de Contact</h4>

            <form onSubmit={handleSubmit} className="form">
                <label htmlFor="nom" className="form-label">Nom :</label>
                <input
                    type="text"
                    id="nom"
                    name="nom"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                    required
                    className="form-input"
                />

                <label htmlFor="prenom" className="form-label">Prénom :</label>
                <input
                    type="text"
                    id="prenom"
                    name="prenom"
                    value={prenom}
                    onChange={(e) => setPrenom(e.target.value)}
                    required
                    className="form-input"
                />

                <label htmlFor="societe" className="form-label">Société :</label>
                <input
                    type="text"
                    id="societe"
                    name="societe"
                    value={societe}
                    onChange={(e) => setSociete(e.target.value)}
                    className="form-input"
                />

                <label htmlFor="message" className="form-label">Message :</label>
                <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="form-input"
                ></textarea>

                <button type="submit" className="form-button" onClick={() => alert('En cours de développement Back-end ;-)')}>Envoyer</button>
            </form>
        </div>
    );
}

export default ContactForm;