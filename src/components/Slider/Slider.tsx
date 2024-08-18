import React, { useCallback, useRef } from 'react';
import './Slider.scss';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { useAppContext } from "../../AppContext";

export const Slider = React.memo(() => {
  const {onNext, onPrev, index, slides, onReset} = useAppContext();
  const startX = useRef<number | null>(null);

  const handleTouchStart = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    startX.current = e.touches[0].clientX;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    if (!startX.current) return;
    const currentX = e.touches[0].clientX;
    const diffX = startX.current - currentX;

    if (Math.abs(diffX) > 50) {
      if (diffX > 0) {
        onNext()
      } else {
        onPrev()
      }
      startX.current = null;
    }
  }, [onNext, onPrev]);

  return (
    <div className="sliderContainer">
      <Header />
      <div className="slider" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
        <div
          className="sliderContent"
          style={{
            transform: `translateX(-${index * 100}vw)`,
            transition: 'transform 0.4s ease-in-out',
            willChange: 'transform',
          }}>
          {slides.map((slide, index) => (
            <div key={index} className={`slide slide${index + 1}`}>
              {slide}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
});
