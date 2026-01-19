import { motion } from 'framer-motion';
import type { MonthEntry } from '../types';

interface MonthCardProps {
  entry: MonthEntry;
  isActive: boolean;
}

const badgeColors = [
  'badge-red',
  'badge-green',
  'badge-blue',
  'badge-purple',
  'badge-pink'
];

export function MonthCard({ entry, isActive }: MonthCardProps) {
  const badgeColor = badgeColors[(entry.month - 1) % badgeColors.length];

  return (
    <div className="min-h-full flex items-center justify-center p-6 sm:p-12 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: isActive ? 1 : 0.5, y: isActive ? 0 : 20 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl w-full"
      >
        {/* Header */}
        <div className="mb-8">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className={`badge ${badgeColor} mb-4`}
          >
            {entry.monthName.toUpperCase()}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="section-title text-text text-3xl sm:text-4xl md:text-5xl"
          >
            {entry.title}
          </motion.h2>

          {entry.description && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-text-muted text-lg mt-3"
            >
              {entry.description}
            </motion.p>
          )}
        </div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-4"
        >
          {entry.highlights.map((task, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="highlight-item"
            >
              <span className="highlight-number">{index + 1}</span>
              <div>
                <p className="text-lg sm:text-xl font-medium text-text">{task}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Outcomes */}
        {entry.outcomes && entry.outcomes.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-8 pt-6 border-t border-border"
          >
            <h4 className="text-sm font-semibold text-text-muted uppercase tracking-wide mb-3">
              Outcomes
            </h4>
            <div className="flex flex-wrap gap-2">
              {entry.outcomes.map((outcome, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-secondary rounded-full text-sm text-text"
                >
                  {outcome}
                </span>
              ))}
            </div>
          </motion.div>
        )}

        {/* Advice */}
        {entry.advice && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-6 p-5 bg-secondary/50 rounded-xl"
          >
            <h4 className="text-sm font-semibold text-accent uppercase tracking-wide mb-2">
              💡 Lesson Learned
            </h4>
            <p className="text-text">{entry.advice.lesson}</p>
            {entry.advice.recommendation && (
              <p className="text-text-muted text-sm mt-2">
                → {entry.advice.recommendation}
              </p>
            )}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
