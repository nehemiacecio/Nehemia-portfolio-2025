import { motion } from 'framer-motion';
import type { YearSummary as YearSummaryType } from '../types';

interface YearSummaryProps {
  summary: YearSummaryType;
  year: number;
  onBackToTimeline: () => void;
}

export function YearSummary({ summary, year, onBackToTimeline }: YearSummaryProps) {
  return (
    <div className="h-screen bg-base py-16 px-6 sm:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto h-full flex flex-col">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <span className="badge badge-red mb-2">{year} COMPLETE</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-text">
            Year in Review
          </h1>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 flex-1 min-h-0">
          {/* Left Column */}
          <div className="space-y-4">
            {/* Key Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="card !p-4"
            >
              <h2 className="text-xs font-semibold text-accent uppercase tracking-wide mb-3">
                Key Achievements
              </h2>
              <div className="space-y-2">
                {summary.keyAchievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <span className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      ✓
                    </span>
                    <p className="text-sm text-text">{achievement}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {/* Next Year Goals */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="card !p-4"
            >
              <h2 className="text-xs font-semibold text-accent uppercase tracking-wide mb-3">
                {year + 1} Goals
              </h2>
              <div className="space-y-2">
                {summary.nextYearGoals.map((goal, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <span className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-base text-xs font-bold flex-shrink-0">
                      {index + 1}
                    </span>
                    <p className="text-sm text-text">{goal}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-center mt-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onBackToTimeline}
            className="btn btn-secondary !py-2 !px-6 text-sm"
          >
            ← Back to Timeline
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
