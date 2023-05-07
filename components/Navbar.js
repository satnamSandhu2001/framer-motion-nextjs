import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

function Navbar({ scrollYProgress }) {
  return (
    <div
      className="text-white bg-gray-950 sticky top-0 z-[100]
	"
    >
      {/* progress bar */}
      <motion.div
        className={`fixed top-0 left-0 z-50 h-[4px] bg-red-600 w-full origin-left`}
        style={{ scaleX: scrollYProgress }}
      ></motion.div>
      <Link className="px-8 py-2 inline-block hover:bg-white/10" href="/">
        Home
      </Link>
      <Link className="px-8 py-2 inline-block hover:bg-white/10" href="/about">
        About
      </Link>
      <Link
        className="px-8 py-2 inline-block hover:bg-white/10"
        href="/contact"
      >
        Contact
      </Link>
    </div>
  );
}

export default Navbar;
