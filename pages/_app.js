import Navbar from '@/components/Navbar';
import '@/styles/globals.css';
import { useScroll } from 'framer-motion';
import PageTransitionEffect from '@/components/PageTransitionEffect';

export default function App({ Component, pageProps }) {
  const { scrollYProgress } = useScroll();
  return (
    <main className="bg-gradient-to-br from-pink-300 to-blue-300">
      <Navbar scrollYProgress={scrollYProgress} />
      <PageTransitionEffect>
        <Component {...pageProps} />
      </PageTransitionEffect>
    </main>
  );
}
