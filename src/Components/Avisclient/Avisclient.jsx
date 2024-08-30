// Avisclient.jsx
import React from 'react';
import './Avisclient.css';

const testimonials = [
    {
        content: "Super service ! Je suis très satisfait.",
        photo: require('../Assets/temoignage1.jpg'),
        name: "John Doe",
        company: "Météors space"
    },
    {
        content: "Un travail exceptionnel, merci au Studio !",
        photo: require('../Assets/temoignage2.jpg'),
        name: "Sarah Berthelot",
        company: "Sensorial"
    }
];

const Avisclient = () => {
    return (
        <section className="testimonials-section">
            <div className="testimonials-container">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-card">
                        <p>{testimonial.content}</p>
                        <div className="testimonial-author">
                            <img src={testimonial.photo} alt={testimonial.name} className="testimonial-photo" />
                            <div>
                                <strong>{testimonial.name}</strong>
                                <span>{testimonial.company}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Avisclient;
