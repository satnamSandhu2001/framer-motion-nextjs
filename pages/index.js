import Box3 from '@/components/Box3';
import Box4 from '@/components/Box4';
import Box5 from '@/components/Box5';

function Home() {
  return (
    <div className="min-h-screen bg-black/90">
      <div className="p-16 bg-black/90">
        {/* <motion.div
        className="w-56 h-24 bg-teal-400 border-t-4 border-white"
        animate={{
          x: '300%',
          y: '100%',
          opacity: 1,
          scale: 0.5,
          rotate: 180,
        }}
        initial={{
          opacity: 0.2,
        }}
        transition={{
          stiffness: 60,
          damping: 5,
          type: 'spring',
        }}
      ></motion.div> */}

        {/* <motion.div
        className="w-56 h-24 bg-teal-400 border-t-4 border-white"
        whileTap={{
          scale: 1,
        }}
        drag
        dragConstraints={{
          right: 20,
          left: -30,
          top: 50,
          bottom: 200,
        }}
        whileHover={{
          scale: 0.95,
        }}
      ></motion.div> */}

        {/* <Box3 /> */}

        {/* <Box4 /> */}

        <Box5 />
      </div>
    </div>
  );
}

export default Home;
