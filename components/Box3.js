import React from 'react';
import { motion } from 'framer-motion';

function Box3() {
  //   const boxVariant = {
  //     lion: {
  //       x: 0,
  //       scale: 1.5,
  //     },
  //   };

  const boxVariant = {
    hidden: {
      x: '-100vw',
    },
    visible: {
      x: 0,
      transition: {
        staggerChildren: 0.2,
        delay: 0.1,
        when: 'beforeChildren',
      },
    },
  };

  const childVariant = {
    hidden: {
      y: '60px',
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      className="mt-44 w-56 min-h-[6rem] bg-rose-400 inline-block border-t-4 border-white"
      variants={boxVariant}
      //   animate="lion"
      animate="visible"
      initial="hidden"
    >
      {[1, 2, 3].map((item) => {
        return (
          <motion.div
            key={item}
            className="h-8 w-8 mx-auto my-4 bg-teal-300"
            variants={childVariant}
          ></motion.div>
        );
      })}
    </motion.div>
  );
}

export default Box3;
