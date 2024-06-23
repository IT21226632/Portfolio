'use client'
import Image from 'next/image'
import './landing.css'
import { useRef , useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

// TypingText Component
const TypingText = ({ text, onComplete }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(displayedText + text.charAt(index));
        setIndex(index + 1);
      }, 100); // Adjust typing speed here
      return () => clearTimeout(timeout);
    } else if (!isTypingComplete) {
      setIsTypingComplete(true);
      if (onComplete) {
        onComplete();
      }
    }
  }, [index, text, displayedText, onComplete, isTypingComplete]);

  return (
    <span>
      {displayedText}
      {!isTypingComplete && (
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.75 }}
          style={{ borderRight: '2px solid' }}
        />
      )}
    </span>
  );
};

export default function Home() {
  const [isFirstLineComplete, setIsFirstLineComplete] = useState(false);
  const [startFirstLine, setStartFirstLine] = useState(false);

  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.5,
        start: 0,
        end: window.innerHeight,
        onUpdate: e => direction = e.direction * -1
      },
      x: "-500px",
    });
    requestAnimationFrame(animate);

    // Start the first line after 5 seconds delay
    const delayTimeout = setTimeout(() => {
      setStartFirstLine(true);
    }, 3000);

    return () => clearTimeout(delayTimeout);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }

    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.05 * direction;
  }

  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);

  return (
    <main className="main">
      <Image
        src="/images/backport9.jpg"
        fill={true}
        alt="background"
      />
      <div className='self'>
        <div className='text'>
          <span className='text-span'>
            {startFirstLine && <TypingText text='Fullstack Developer .' onComplete={() => setIsFirstLineComplete(true)} />}
          </span>
        </div>
        <div className='text'>
          <span className='text-span'>
            {isFirstLineComplete && <TypingText text='Software Engineering Undergraduate .' />}
          </span>
        </div>
      </div>
      <div className="sliderContainer">
        <div ref={slider} className="slider">
          <p ref={firstText}>Maleesha Weerasinghe -</p>
          <p ref={secondText}>Maleesha Weerasinghe -</p>
        </div>
      </div>
    </main>
  );
}
