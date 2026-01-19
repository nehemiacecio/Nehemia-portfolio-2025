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
  return (
    <div className="min-h-screen bg-base flex flex-col items-center justify-center p-6 sm:p-8 relative overflow-hidden">
      {/* Theme Toggle */}
      <div className="absolute top-6 right-6 z-10">
        <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
      </div>

      {/* Floating Circles Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="circle bg-accent/20 w-20 h-20 sm:w-32 sm:h-32"
          style={{ top: '20%', right: '10%' }}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="circle bg-accent/30 w-32 h-32 sm:w-48 sm:h-48"
          style={{ top: '60%', right: '20%' }}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        <motion.div
          className="circle bg-green-400/20 w-16 h-16 sm:w-24 sm:h-24"
          style={{ top: '40%', left: '5%' }}
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        <motion.div
          className="circle bg-blue-400/20 w-24 h-24 sm:w-36 sm:h-36"
          style={{ bottom: '20%', left: '15%' }}
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl w-full relative z-10"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <span className="badge badge-red">
            {data.year} YEAR IN REVIEW
          </span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="hero-title text-text mb-6"
        >
          My Journey at<br />
          <span className="text-accent">BCCard Asia Pacific</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl sm:text-2xl text-text-muted mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          {data.intro}
        </motion.p>

        {/* Player Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="card inline-block mb-10 text-left"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center text-white text-xl font-bold">
              {data.playerName.charAt(0)}
            </div>
            <div>
              <h3 className="text-xl font-bold text-text">{data.playerName}</h3>
              <p className="text-text-muted">{data.playerTitle}</p>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 max-w-2xl mx-auto"
        >
          {[
            { value: '12', label: 'Months' },
            { value: data.summary.keyAchievements.length.toString(), label: 'Achievements' },
            { value: data.summary.skillsImproved.length.toString(), label: 'Skills' },
            { value: '3', label: 'Projects' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold text-accent">{stat.value}</div>
              <div className="text-sm text-text-muted uppercase tracking-wide">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onStart}
          className="btn btn-primary text-lg px-10 py-4"
        >
          Start Timeline →
        </motion.button>

        {/* Hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-6 text-sm text-text-muted"
        >
          Use arrow keys or swipe to navigate
        </motion.p>
      </motion.div>
    </div>
  );
}
