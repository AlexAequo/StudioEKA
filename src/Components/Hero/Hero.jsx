import React from 'react';
import './Hero.css';
import HEROS from '../Assets/HEROS.png';
import HEROS2 from '../Assets/HEROS2.png';
import HEROS3 from '../Assets/HEROS3.png';
import Boutoncta from '../Boutoncta/Boutoncta';
import WordRotate from '../magicui/word-rotate';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    appendDots: dots => (
        <div className="slick-dots-container">
            <ul> {dots} </ul>
        </div>
    ),
};

const Hero = () => {
    return (
        <div className="hero-section">
            <div className="carousel-container">
                <Slider {...carouselSettings} className="carousel">
                    <div><img src={HEROS} alt="Hero Banner" className="carousel-image" /></div>
                    <div><img src={HEROS2} alt="Hero Banner 2" className="carousel-image" /></div>
                    <div><img src={HEROS3} alt="Hero Banner 3" className="carousel-image" /></div>
                </Slider>
            </div>
            <div className="hero-content">
                <motion.h1
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    Une communication <br />
                    qui a du <span className="highlight-inline">
                        <WordRotate
                            className="word-rotate"
                            words={["chien !", "style !", "peps !"]}
                        />
                    </span>
                </motion.h1>
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                >
                    <Boutoncta />
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
