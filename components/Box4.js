import React from 'react';
import { motion } from 'framer-motion';

const Box4 = () => {
  return (
    <motion.div
      animate={{
        scale: [0.5, 1.2, 1, 1],
        borderRadius: ['20%', '50%', '10%', '100%'],
        minHeight: '224px',
        rotate: [50, 0, 90, 360, 0],
        transition: { duration: 2 },
      }}
      className="w-56 min-h-[6rem] bg-blue-400 inline-block border-t-4 border-white"
    ></motion.div>
  );
};

export default Box4;
