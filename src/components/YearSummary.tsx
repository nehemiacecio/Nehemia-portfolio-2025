import { motion } from 'framer-motion';
import type { YearSummary as YearSummaryType } from '../types';

interface YearSummaryProps {
  summary: YearSummaryType;
  year: number;
  onBackToTimeline: () => void;
}

export function YearSummary({ summary, year, onBackToTimeline }: YearSummaryProps) {
  return (
    <div className="min-h-screen bg-base pt-20 sm:pt-24 pb-6 sm:pb-8 px-3 sm:px-4 relative">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="font-pixel text-xl sm:text-3xl text-primary mb-4">
            {year} COMPLETE!
          </h1>
        </motion.div>

        {/* Key Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="pixel-border bg-secondary p-5 sm:p-6 mb-4"
        >
          <h2 className="font-pixel text-xs sm:text-sm text-black mb-4">
            KEY ACHIEVEMENTS
          </h2>
          <ul className="space-y-3">
            {summary.keyAchievements.map((achievement, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-primary font-pixel">★</span>
                <span className="font-retro text-xl sm:text-2xl text-black">{achievement}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="pixel-border bg-primary p-5 sm:p-6 mb-4"
        >
          <h2 className="font-pixel text-xs sm:text-sm text-white mb-4">
            SKILLS IMPROVED
          </h2>
          <div className="flex flex-wrap gap-2">
            {summary.skillsImproved.map((skill, index) => (
              <span
                key={index}
                className="font-retro text-lg sm:text-xl text-black bg-accent px-3 py-1"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Next Year Goals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="pixel-border bg-accent p-5 sm:p-6 mb-8"
        >
          <h2 className="font-pixel text-xs sm:text-sm text-black mb-4">
            {year + 1} GOALS
          </h2>
          <ul className="space-y-2">
            {summary.nextYearGoals.map((goal, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="font-pixel text-black">{index + 1}.</span>
                <span className="font-retro text-xl sm:text-2xl text-black">{goal}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onBackToTimeline}
            className="retro-btn text-sm sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
          >
            ◀ BACK TO TIMELINE
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
