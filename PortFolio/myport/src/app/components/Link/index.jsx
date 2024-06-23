import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { slide, scale } from '../Header/anim';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export default function Index({ data, isActive, setSelectedIndicator}) {
  const { title, id, index } = data;

  const handleScroll = (e) => {
    e.preventDefault();
    setSelectedIndicator(id);

    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: `#${id}`,
        offsetY: 70
      },
      ease: 'power2.inOut'
    });
  };

  return (
    <motion.div
      className={styles.link}
      onMouseEnter={() => { setSelectedIndicator(id); }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? 'open' : 'closed'}
        className={styles.indicator}
      >
      </motion.div>
      <a href={`#${id}`} onClick={handleScroll}>{title}</a>
    </motion.div>
  );
}
