import { motion } from 'framer-motion';
import type { TimelineData } from '../types';
import { ThemeToggle } from './ThemeToggle';

interface LandingPageProps {
  data: TimelineData;
  onStart: () => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

export function LandingPage({ data, onStart, isDark, onToggleTheme }: LandingPageProps) {
  const stats = [
    { label: 'MONTHS', value: data.months.length },
    { label: 'ACHIEVEMENTS', value: data.summary.keyAchievements.length },
    { label: 'SKILLS', value: data.summary.skillsImproved.length },
    { label: 'GOALS', value: data.summary.nextYearGoals.length },
  ];

  return (
    <div className="min-h-screen bg-base flex flex-col items-center justify-center p-4 sm:p-6 relative overflow-hidden">
      {/* Theme Toggle - Top Right */}
      <div className="absolute top-4 right-4 z-10">
        <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
      </div>

      {/* Decorative pixel corners - Hidden on very small screens */}
      <div className="hidden sm:block absolute top-4 left-4 w-6 sm:w-8 h-6 sm:h-8 border-t-4 border-l-4 border-primary" />
      <div className="hidden sm:block absolute top-4 right-16 w-6 sm:w-8 h-6 sm:h-8 border-t-4 border-r-4 border-primary" />
      <div className="hidden sm:block absolute bottom-4 left-4 w-6 sm:w-8 h-6 sm:h-8 border-b-4 border-l-4 border-primary" />
      <div className="hidden sm:block absolute bottom-4 right-4 w-6 sm:w-8 h-6 sm:h-8 border-b-4 border-r-4 border-primary" />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl w-full px-2"
      >
        {/* Title */}
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
          className="mb-6 sm:mb-8"
        >
          <h1 className="font-pixel text-xl xs:text-2xl sm:text-4xl md:text-5xl text-primary mb-3 sm:mb-4 leading-relaxed">
            MY {data.year}
            <br />
            <span className="text-accent">JOURNEY</span>
          </h1>
          <div className="w-20 sm:w-32 h-1 bg-accent mx-auto" />
        </motion.div>

        {/* Player Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="pixel-border bg-secondary p-4 sm:p-6 mb-6 sm:mb-8 inline-block max-w-full"
        >
          <div className="font-pixel text-[10px] sm:text-xs text-black mb-2">SELECT YOUR PLAYER</div>
          <div className="font-pixel text-sm sm:text-lg text-primary break-words">{data.playerName}</div>
          <div className="font-retro text-lg sm:text-xl text-black mt-1 break-words">{data.playerTitle}</div>
        </motion.div>

        {/* Intro Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="font-retro text-xl sm:text-2xl text-text mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2"
        >
          {data.intro}
        </motion.p>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 mb-8 sm:mb-10"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.9 + index * 0.1, type: 'spring' }}
              className="pixel-border bg-primary p-3 sm:p-4"
            >
              <div className="font-pixel text-xl sm:text-2xl text-white mb-1">{stat.value}</div>
              <div className="font-pixel text-[8px] sm:text-xs text-accent">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Start Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onStart}
          className="retro-btn text-sm sm:text-lg px-6 sm:px-10 py-3 sm:py-4 glow-effect"
        >
          <span className="flex items-center gap-2 sm:gap-3">
            <span>START TIMELINE</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              ▶
            </motion.span>
          </span>
        </motion.button>

        {/* Controls Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-6 sm:mt-8 font-pixel text-[10px] sm:text-xs text-primary opacity-70 px-4"
        >
          <span className="hidden sm:inline">USE ARROW KEYS • SWIPE • OR CLICK TO NAVIGATE</span>
          <span className="sm:hidden">SWIPE OR TAP TO NAVIGATE</span>
        </motion.div>
      </motion.div>

      {/* Floating Pixels Decoration - Fewer on mobile */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 sm:w-4 h-3 sm:h-4 bg-accent opacity-30"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}
