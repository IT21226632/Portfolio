import React, { useState } from 'react'
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from '../Header/anim';
import Link from '../Link';
import SVG from '../Curve'

import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

const navItems = [
  {
    title: "Home",
    id: "home", // Update with section ID
  },
  {
    title: "Work",
    id: "work", // Update with section ID
  },
  {
    title: "About",
    id: "about", // Update with section ID
  },
  {
    title: "Contact",
    id: "contact", // Update with section ID
  },
]


export default function index() {

  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);
  

  const scrollToSection = (id) => {
    gsap.to(window, { duration: 1, scrollTo: { y: `#${id}`, offsetY: 70 }, ease: 'power2.inOut' });
  };

  return (
    <motion.div 
      variants={menuSlide} 
      initial="initial" 
      animate="enter" 
      exit="exit" 
      className={styles.menu}
      >
        <SVG />
       <div className={styles.body}>
            <div onMouseLeave={() => {setSelectedIndicator(pathname)}} className={styles.nav}>
                    <div className={styles.header}>
                        <p>Navigation</p>
                    </div>
                    {
                      navItems.map( (data, index) => {
                        return <Link 
                        key={index} 
                        data={{...data, index}} 
                        isActive={selectedIndicator == data.id}
                        setSelectedIndicator={setSelectedIndicator}
                        onClick={() => scrollToSection(data.id)}>
                        </Link>
                      })
                    }
            </div>
            <div className={styles.footer}>
                <FaGithub size={30}/>
                <FaLinkedin size={30}/>
                <FaXTwitter size={30}/>
                
            </div>
        </div>
    </motion.div>
  )
}