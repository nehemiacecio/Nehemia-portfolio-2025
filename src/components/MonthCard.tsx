import { motion } from 'framer-motion';
import type { MonthEntry, TaskItem } from '../types';

interface MonthCardProps {
  entry: MonthEntry;
  isActive: boolean;
}

export function MonthCard({ entry, isActive }: MonthCardProps) {
  const getTaskTitle = (task: string | TaskItem): string => {
    return typeof task === 'string' ? task : task.title;
  };

  // Get main project for this month
  const getMainProject = (): string => {
    const firstTask = getTaskTitle(entry.highlights[0]).toLowerCase();
    if (firstTask.includes('mti') || firstTask.includes('linux')) return 'MTI Linux';
    if (firstTask.includes('bckg')) return 'BCKG';
    if (firstTask.includes('bcvn')) return 'BCVN';
    if (firstTask.includes('personal')) return 'Personal';
    return 'Project';
  };

  // Clean task name
  const cleanTask = (task: string): string => {
    return task
      .replace(/^BCKG:\s*/i, '')
      .replace(/^BCVN:\s*/i, '')
      .replace(/^Personal Project:\s*/i, '')
      .replace(/\s*\[.*?\]\s*/g, ''); // Remove ticket numbers like [432]
  };

  return (
    <div className="min-h-full flex items-start justify-center p-4 sm:p-8 pb-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isActive ? 1 : 0.5, y: isActive ? 0 : 10 }}
        transition={{ duration: 0.4 }}
        className="max-w-2xl w-full"
      >
        {/* Month Header */}
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="pixel-border bg-primary p-6 sm:p-8 mb-4"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="font-pixel text-accent text-lg sm:text-xl">
              {entry.monthName.toUpperCase()}
            </span>
            <span className="font-pixel text-white/70 text-sm">
              {getMainProject()}
            </span>
          </div>
          <h2 className="font-retro text-3xl sm:text-4xl md:text-5xl text-white">
            {entry.title}
          </h2>
        </motion.div>

        {/* Key Tasks - Simple List */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="pixel-border bg-secondary p-5 sm:p-6"
        >
          <div className="space-y-3">
            {entry.highlights.slice(0, 4).map((task, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="font-pixel text-primary text-lg">▸</span>
                <span className="font-retro text-xl sm:text-2xl text-black">
                  {cleanTask(getTaskTitle(task))}
                </span>
              </div>
            ))}
            {entry.highlights.length > 4 && (
              <div className="font-pixel text-sm text-black/60 pt-2">
                +{entry.highlights.length - 4} more tasks
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
