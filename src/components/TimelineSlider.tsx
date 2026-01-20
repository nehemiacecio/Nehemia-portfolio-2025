import { useEffect, useCallback, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard, EffectCreative } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { motion } from 'framer-motion';
import type { MonthEntry } from '../types';
import { MonthCard } from './MonthCard';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-creative';

interface TimelineSliderProps {
  months: MonthEntry[];
  currentMonth: number;
  onMonthChange: (month: number) => void;
  onGoToSummary: () => void;
  onGoHome: () => void;
}

export function TimelineSlider({ months, currentMonth, onMonthChange, onGoToSummary, onGoHome }: TimelineSliderProps) {
  const swiperRef = useRef<SwiperType | null>(null);
  const isScrollingRef = useRef(false);

  const handleSlideChange = useCallback((swiper: SwiperType) => {
    onMonthChange(swiper.activeIndex + 1);
  }, [onMonthChange]);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.activeIndex !== currentMonth - 1) {
      swiperRef.current.slideTo(currentMonth - 1);
    }
  }, [currentMonth]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'End') {
        onGoToSummary();
      } else if (e.key === 'Home') {
        onGoHome();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onGoToSummary, onGoHome]);

  // Custom wheel handler for mouse scroll
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!swiperRef.current || isScrollingRef.current) return;

      const delta = e.deltaY;
      if (Math.abs(delta) < 5) return; // Ignore tiny movements

      isScrollingRef.current = true;

      if (delta > 0) {
        swiperRef.current.slideNext();
      } else {
        swiperRef.current.slidePrev();
      }

      // Debounce to prevent rapid scrolling
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 500);
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <div className="min-h-screen bg-base pt-16 relative">
      {/* Dot Indicators - Right side */}
      <div className="indicators hidden md:flex">
        {months.map((_, index) => (
          <button
            key={index}
            onClick={() => onMonthChange(index + 1)}
            className={`indicator ${currentMonth === index + 1 ? 'active' : ''}`}
            aria-label={`Go to month ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="counter hidden sm:block">
        <span className="current">{String(currentMonth).padStart(2, '0')}</span>
        <span className="separator">/</span>
        <span className="total">{String(months.length).padStart(2, '0')}</span>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation, Keyboard, EffectCreative]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        keyboard={{ enabled: true }}
        effect="creative"
        creativeEffect={{
          prev: {
            shadow: false,
            translate: ['-20%', 0, -1],
            opacity: 0,
          },
          next: {
            translate: ['100%', 0, 0],
            opacity: 0,
          },
        }}
        onSwiper={(swiper) => { swiperRef.current = swiper; }}
        onSlideChange={handleSlideChange}
        initialSlide={currentMonth - 1}
        className="h-[calc(100vh-64px)]"
      >
        {months.map((month, index) => (
          <SwiperSlide key={month.month} className="h-full overflow-hidden bg-base">
            <MonthCard entry={month} isActive={currentMonth === index + 1} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Arrows */}
      <button
        className="swiper-button-prev-custom nav-arrow nav-prev hidden md:flex"
        aria-label="Previous month"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="15,18 9,12 15,6"></polyline>
        </svg>
      </button>
      <button
        className="swiper-button-next-custom nav-arrow nav-next hidden md:flex"
        aria-label="Next month"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="9,6 15,12 9,18"></polyline>
        </svg>
      </button>

      {/* Bottom Navigation - Mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-base/80 backdrop-blur-md border-t border-border px-4 py-3 md:hidden">
        <div className="flex items-center justify-between max-w-lg mx-auto">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={onGoHome}
            className="btn btn-secondary text-sm px-4 py-2"
          >
            Home
          </motion.button>

          <div className="flex items-center gap-3">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => onMonthChange(Math.max(1, currentMonth - 1))}
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center"
              disabled={currentMonth === 1}
            >
              ←
            </motion.button>
            <span className="text-sm font-medium text-text min-w-[50px] text-center">
              {currentMonth} / 12
            </span>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => onMonthChange(Math.min(12, currentMonth + 1))}
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center"
              disabled={currentMonth === 12}
            >
              →
            </motion.button>
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={onGoToSummary}
            className="btn btn-primary text-sm px-4 py-2"
          >
            Summary
          </motion.button>
        </div>
      </div>

      {/* Desktop Bottom Buttons */}
      <div className="fixed bottom-6 left-6 z-40 hidden md:block">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onGoHome}
          className="btn btn-secondary text-sm"
        >
          ← Home
        </motion.button>
      </div>
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 hidden md:block">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onGoToSummary}
          className="btn btn-primary text-sm"
        >
          View Summary →
        </motion.button>
      </div>
    </div>
  );
}
