import React from 'react';
import { motion } from 'framer-motion';

const BlurFade = ({ children, delay, inView }) => {
    return (
        <motion.div
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: inView ? 1 : 0, filter: inView ? 'blur(0px)' : 'blur(10px)' }}
            transition={{ delay, duration: 0.75 }}
        >
            {children}
        </motion.div>
    );
};

export default BlurFade;
