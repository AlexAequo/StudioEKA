import React, { useEffect } from 'react';
import anime from 'animejs';
import './StudioEkaAnimation.css';

const StudioEkaAnimation = () => {
    useEffect(() => {
        var logoEl = document.querySelector('.logo-animation');
        
        if (!logoEl) {
            console.error('Élément .logo-animation introuvable');
            return;
        }

        var pathEls = document.querySelectorAll('.logo-animation path:not(.icon-curve)');
        var innerWidth = window.innerWidth;
        var maxWidth = 740;
        var logoScale = innerWidth <= maxWidth ? innerWidth / maxWidth : 1;
        var logoTimeline = anime.timeline();

        logoEl.style.transform = 'translateY(50px) scale('+logoScale+')';

        for (var i = 0; i < pathEls.length; i++) {
            var el = pathEls[i];
            el.setAttribute('stroke-dashoffset', anime.setDashoffset(el));
        }

        logoTimeline
        .add({
            targets: '.dot-e',
            translateX: [
                { value: -600, duration: 520, delay: 200, easing: 'easeInQuart' },
                { value: [-100, 0], duration: 500, delay: 1000, easing: 'easeOutQuart' }
            ],
            scale: [
                { value: [0, 1], duration: 200, easing: 'easeOutBack' },
                { value: 0, duration: 20, delay: 500, easing: 'easeInQuart' },
                { value: 1, duration: 200, delay: 1000, easing: 'easeOutQuart' },
                { value: 0, duration: 400, delay: 500, easing: 'easeInBack' }
            ],
            offset: 0
        }).add({
            targets: '.dot-i',
            translateY: [
                { value: 600, duration: 520, delay: 200, easing: 'easeInQuart' },
                { value: [100, 0], duration: 500, delay: 1000, easing: 'easeOutQuart' }
            ],
            scale: [
                { value: [0, 1], duration: 200, easing: 'easeOutBack' },
                { value: 0, duration: 20, delay: 500, easing: 'easeInQuart' },
                { value: 1, duration: 200, delay: 1000, easing: 'easeOutQuart' },
                { value: 0, duration: 400, delay: 500, easing: 'easeInBack' }
            ],
            offset: 0
        }).add({
            targets: '.letter-e path',
            duration: 1200,
            delay: 500,
            easing: 'easeInOutQuart',
            strokeDashoffset: [anime.setDashoffset, 0],
            opacity: [
                { value: 0, duration: 500, easing: 'easeOutQuart' },
                { value: 1, duration: 500, easing: 'easeInQuart' }
            ],
            fill: {
                value: '#FFF',
                duration: 500,
                delay: 500,
                easing: 'easeInOutQuad'
            },
            offset: 0
        }).add({
            targets: '.letter-s path',
            duration: 1200,
            delay: 500,
            easing: 'easeInOutQuart',
            strokeDashoffset: [anime.setDashoffset, 0],
            opacity: [
                { value: 0, duration: 500, easing: 'easeOutQuart' },
                { value: 1, duration: 500, easing: 'easeInQuart' }
            ],
            fill: {
                value: '#FFF',
                duration: 500,
                delay: 500,
                easing: 'easeInOutQuad'
            },
            offset: 0
        });

    }, []); // Le tableau vide [] assure que ce useEffect s'exécute une fois que le composant est monté

    return (
        <div className="logo-animation">
            {/* ton JSX ici */}
        </div>
    );
};

export default StudioEkaAnimation;
