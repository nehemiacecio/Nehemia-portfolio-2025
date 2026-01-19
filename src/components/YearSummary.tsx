import { motion } from 'framer-motion';
import type { YearSummary as YearSummaryType } from '../types';

interface YearSummaryProps {
  summary: YearSummaryType;
  year: number;
  onBackToTimeline: () => void;
}

export function YearSummary({ summary, year, onBackToTimeline }: YearSummaryProps) {
  return (
    <div className="min-h-screen bg-base py-20 px-6 sm:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="badge badge-red mb-4">{year} COMPLETE</span>
          <h1 className="hero-title text-text">
            Year in Review
          </h1>
        </motion.div>

        {/* Key Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="card mb-6"
        >
          <h2 className="text-sm font-semibold text-accent uppercase tracking-wide mb-6">
            Key Achievements
          </h2>
          <div className="space-y-4">
            {summary.keyAchievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex items-start gap-4"
              >
                <span className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                  ✓
                </span>
                <p className="text-lg text-text">{achievement}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="card mb-6"
        >
          <h2 className="text-sm font-semibold text-accent uppercase tracking-wide mb-6">
            Skills Improved
          </h2>
          <div className="flex flex-wrap gap-3">
            {summary.skillsImproved.map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="px-4 py-2 bg-secondary rounded-full text-text font-medium"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Next Year Goals */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="card mb-10"
        >
          <h2 className="text-sm font-semibold text-accent uppercase tracking-wide mb-6">
            {year + 1} Goals
          </h2>
          <div className="space-y-4">
            {summary.nextYearGoals.map((goal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="highlight-item"
              >
                <span className="highlight-number">{index + 1}</span>
                <p className="text-lg text-text">{goal}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onBackToTimeline}
            className="btn btn-secondary"
          >
            ← Back to Timeline
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
