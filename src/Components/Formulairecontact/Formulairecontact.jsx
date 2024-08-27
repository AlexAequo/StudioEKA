import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Formulairecontact.css';

const Formulairecontact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_dl0pifs', 
      'template_hl6bojm', 
      form.current, 
      'a8zwgELYcb-FssEET'
    )
    .then((result) => {
      alert('Message envoyé avec succès!');
    }, (error) => {
      alert('Échec de l\'envoi du message, veuillez réessayer.');
    });
  };

  return (
    <div className="form-container">
      <h2>Restons en contact !</h2>
      <form ref={form} onSubmit={sendEmail}>
        <div className="input-group">
          <input type="text" name="prenom" placeholder="Prénom" required />
          <input type="text" name="nom" placeholder="Nom" required />
        </div>
        <input type="email" name="email" placeholder="Email" required />
        <textarea name="message" placeholder="Message" required></textarea>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default Formulairecontact;


