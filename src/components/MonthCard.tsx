import { motion } from 'framer-motion';
import type { MonthEntry } from '../types';

interface MonthCardProps {
  entry: MonthEntry;
  isActive: boolean;
}

export function MonthCard({ entry, isActive }: MonthCardProps) {
  // Different color for each task with good contrast
  const getTaskColor = (index: number) => {
    const colors = [
      { bg: 'bg-primary', text: 'text-white' },
      { bg: 'bg-secondary', text: 'text-black' },
      { bg: 'bg-accent', text: 'text-black' },
      { bg: 'bg-base border-4 border-secondary', text: 'text-text' },
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="min-h-full flex items-start justify-center p-4 sm:p-8 pb-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isActive ? 1 : 0.5, y: isActive ? 0 : 10 }}
        transition={{ duration: 0.4 }}
        className="max-w-2xl w-full"
      >
        {/* Month Title */}
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="pixel-border bg-primary p-6 sm:p-8 mb-6"
        >
          <div className="font-pixel text-accent text-sm sm:text-base mb-3">
            {entry.monthName.toUpperCase()}
          </div>
          <h2 className="font-retro text-4xl sm:text-5xl md:text-6xl text-white leading-tight">
            {entry.title}
          </h2>
        </motion.div>

        {/* Task List - Each with different color */}
        <div className="space-y-3">
          {entry.highlights.map((task, index) => {
            const colorStyle = getTaskColor(index);
            return (
              <motion.div
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className={`pixel-border ${colorStyle.bg} p-4 sm:p-5`}
              >
                <span className={`font-retro text-2xl sm:text-3xl ${colorStyle.text} leading-relaxed`}>
                  {task}
                </span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
