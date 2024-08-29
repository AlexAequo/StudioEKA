// Kaleidoscope.jsx
import React, { useEffect, useState, useRef } from 'react';
import anime from 'animejs';
import './Kaleidoscope.css'; // Assurez-vous que le chemin d'accès au fichier CSS est correct

const Kaleidoscope = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            anime({
                targets: containerRef.current.querySelectorAll('.tile'),
                scale: [1, 1.5],
                rotate: '1turn',
                duration: 2000,
                easing: 'easeInOutSine',
                loop: true,
            });
        }
    }, []);

    const toggleDarkMode = () => {
        setDarkMode(prev => !prev);
    };

    const toggleEditMode = () => {
        setIsEditing(prev => !prev);
    };

    return (
        <div className={`tiles-container ${darkMode ? 'dark' : ''}`} ref={containerRef}>
            <div className="tile fliph">Studio</div>
            <div className="tile flipv">EKA</div>
            <div className="tile flipv2">EKA</div>
            <div className="tile fliphv">Studio</div>

            <button className="menu-button" onClick={toggleEditMode}>
                <span></span>
                <span></span>
                <span></span>
            </button>

            <button className="light-mode-button" onClick={toggleDarkMode}>
                <span></span>
                <span></span>
            </button>

            {isEditing && (
                <>
                    <div className="overlay"></div>
                    <div id="edit">
                        <div className="panel">
                            <button className="edit-close-button" onClick={toggleEditMode}>
                                <span></span>
                                <span></span>
                            </button>
                            <p>Edit Mode</p>
                        </div>
                    </div>
                </>
            )}
            <div id="toast">Hello, World!</div>
        </div>
    );
};

export default Kaleidoscope;
