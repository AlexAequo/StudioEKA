import React from 'react';

const Kaleidoscope = () => {
    return (
        <div className="kaleidoscope-container">
            <iframe
                src="https://henryegloff.com/kaleidotext?message=Studio%20EKA&size=229&mode=light"
                title="Kaleidoscope Text"
                width="100%"
                height="500px"
                style={{ border: 'none' }}
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default Kaleidoscope;
