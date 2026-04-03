// components/Counter.jsx
import React, { useState, useEffect, useRef } from 'react';

const Counter = ({ targetValue, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateNumber();
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [hasAnimated]);

  const animateNumber = () => {
    const frameDuration = 1000 / 60;
    const totalFrames = Math.round(duration / frameDuration);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const easeOutQuad = 1 - (1 - progress) * (1 - progress);
      const currentValue = Math.floor(easeOutQuad * targetValue);
      
      setCount(currentValue);
      
      if (frame === totalFrames) {
        setCount(targetValue);
        clearInterval(timer);
      }
    }, frameDuration);
  };

  return (
    <div ref={counterRef} className="counter-value">
      {count.toLocaleString()}{suffix}
    </div>
  );
};

export default Counter;