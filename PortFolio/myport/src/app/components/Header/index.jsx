'use client';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './style.module.scss';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import Magnetic from '../Magnetic';
import Nav from '../Nav';
import gsap from 'gsap';
import Round from '../Rounded';

export default function Header() {
    const header = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const pathname = usePathname();
    const button = useRef(null);

    useEffect(() => {
        if (isActive) setIsActive(false);
    }, [pathname]);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
        gsap.to(button.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                start: 0,
                end: window.innerHeight,
                onLeave: () => { gsap.to(button.current, { scale: 1, duration: 0.25, ease: 'power1.out' }) },
                onEnterBack: () => { gsap.to(button.current, { scale: 0, duration: 0.25, ease: 'power1.out' }) }
            }
        });
    }, []);

    const scrollToSection = (id) => {
        gsap.to(window, { duration: 1, scrollTo: { y: `#${id}`, offsetY: 70 }, ease: 'power2.inOut' });
    };

    return (
        <>
            <div ref={header} className={styles.header}>
                <Magnetic>
                    <div className={styles.logo}>
                        <p className={styles.copyright}>©</p>
                        <div className={styles.name}>
                            <p className={styles.codeBy}>Code by</p>
                            <p className={styles.dennis}>Maleesha</p>
                            <p className={styles.snellenberg}>Weerasinghe</p>
                        </div>
                    </div>
                </Magnetic>

                <div className={styles.nav}>
                    <Magnetic>
                        <div className={styles.el} onClick={() => scrollToSection('work')}>
                            <a>Work</a>
                            <div className={styles.indicator}></div>
                        </div>
                    </Magnetic>
                    <Magnetic>
                        <div className={styles.el} onClick={() => scrollToSection('about')}>
                            <a>About</a>
                            <div className={styles.indicator}></div>
                        </div>
                    </Magnetic>
                    <Magnetic>
                        <div className={styles.el} onClick={() => scrollToSection('contact')}>
                            <a>Contact</a>
                            <div className={styles.indicator}></div>
                        </div>
                    </Magnetic>
                </div>
            </div>
            <div ref={button} className={styles.headerButtonContainer}>
                <Round onClick={() => { setIsActive(!isActive); }} className={`${styles.button}`}>
                    <div className={`${styles.burger} ${isActive ? styles.burgerActive : ''}`}></div>
                </Round>
            </div>
            <AnimatePresence mode="wait">
                {isActive && <Nav />}
            </AnimatePresence>
        </>
    );
}
