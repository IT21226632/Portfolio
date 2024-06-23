import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './anim';
import Round from '../Rounded'


export default function index() {

    const phrase = "I am passionate about coding, designing, and developing innovative and creative solutions. I thrive on turning complex problems into user-friendly applications.";
    const description = useRef(null);
    const isInView = useInView(description)
    return (
        <div ref={description} className={styles.description}>
            <div className={styles.body}>
                <p>
                {
                    phrase.split(" ").map( (word, index) => {
                        return <span className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                    })
                }
                </p>
                <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>My goal is to leverage my technical skills and creativity to make a positive impact through technology.</motion.p>
                <div data-scroll data-scroll-speed={0.1}>
                    
                    <Round className={styles.button}>
                        <p>About me</p>
                    </Round>
                    
                </div>
            </div>
        </div>
    )
}