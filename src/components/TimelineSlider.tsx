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
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onGoToSummary]);

  const monthAbbreviations = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

  return (
    <div className="min-h-screen bg-base pt-16 sm:pt-20 relative">
      {/* Stage Selector Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-primary border-t-4 border-border px-2 sm:px-4 py-2 sm:py-3">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between gap-1 sm:gap-2">
            {/* Home Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onGoHome}
              className="font-pixel text-[10px] sm:text-xs px-2 sm:px-4 py-2 bg-secondary text-black border-2 border-border hover:bg-opacity-90"
            >
              HOME
            </motion.button>

            {/* Desktop: Month buttons */}
            <div className="hidden lg:flex items-center gap-1 overflow-x-auto flex-1 justify-center">
              {monthAbbreviations.map((abbr, index) => (
                <motion.button
                  key={abbr}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => onMonthChange(index + 1)}
                  className={`font-pixel text-[10px] sm:text-xs px-2 sm:px-3 py-2 border-2 border-border transition-all ${
                    currentMonth === index + 1
                      ? 'bg-accent text-black'
                      : 'bg-base text-text hover:bg-secondary hover:text-black'
                  }`}
                >
                  {abbr}
                </motion.button>
              ))}
            </div>

            {/* Tablet: Compact month selector */}
            <div className="hidden sm:flex lg:hidden items-center gap-1 flex-1 justify-center overflow-x-auto px-2">
              {monthAbbreviations.map((abbr, index) => (
                <motion.button
                  key={abbr}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => onMonthChange(index + 1)}
                  className={`font-pixel text-[8px] px-1.5 py-1.5 border border-border transition-all ${
                    currentMonth === index + 1
                      ? 'bg-accent text-black'
                      : 'bg-base text-text'
                  }`}
                >
                  {index + 1}
                </motion.button>
              ))}
            </div>

            {/* Mobile: Stage counter with prev/next */}
            <div className="flex sm:hidden items-center gap-2 flex-1 justify-center">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => onMonthChange(Math.max(1, currentMonth - 1))}
                className="font-pixel text-white text-lg px-2"
                disabled={currentMonth === 1}
              >
                ◀
              </motion.button>
              <span className="font-pixel text-[10px] text-white min-w-[60px] text-center">
                {currentMonth} / 12
              </span>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => onMonthChange(Math.min(12, currentMonth + 1))}
                className="font-pixel text-white text-lg px-2"
                disabled={currentMonth === 12}
              >
                ▶
              </motion.button>
            </div>

            {/* Summary Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onGoToSummary}
              className="font-pixel text-[10px] sm:text-xs px-2 sm:px-4 py-2 bg-accent text-black border-2 border-border hover:bg-opacity-90"
            >
              <span className="hidden sm:inline">SUMMARY →</span>
              <span className="sm:hidden">END</span>
            </motion.button>
          </div>
        </div>
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
            translate: ['-100%', 0, 0],
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
        className="h-[calc(100vh-120px)] sm:h-[calc(100vh-140px)]"
      >
        {months.map((month, index) => (
          <SwiperSlide key={month.month} className="h-full overflow-y-auto bg-base">
            <MonthCard entry={month} isActive={currentMonth === index + 1} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Arrows - Desktop only */}
      <button className="swiper-button-prev-custom fixed left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 pixel-border bg-secondary p-2 sm:p-3 hover:bg-accent transition-colors hidden md:block">
        <span className="font-pixel text-black text-lg sm:text-xl">◀</span>
      </button>
      <button className="swiper-button-next-custom fixed right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 pixel-border bg-secondary p-2 sm:p-3 hover:bg-accent transition-colors hidden md:block">
        <span className="font-pixel text-black text-lg sm:text-xl">▶</span>
      </button>
    </div>
  );
}
