import { motion } from 'framer-motion';
import { ThemeToggle } from './ThemeToggle';

interface HUDProps {
  playerName: string;
  currentStage: number;
  totalStages: number;
  year: number;
  isDark: boolean;
  onToggleTheme: () => void;
}

export function HUD({ currentStage, totalStages, year, isDark, onToggleTheme }: HUDProps) {
  const monthNames = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  const currentMonthName = currentStage === 0
    ? 'Intro'
    : currentStage === 13
      ? 'Summary'
      : monthNames[currentStage - 1];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className="fixed top-0 left-0 right-0 z-50 bg-base/80 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Left: Year & Month */}
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-text-muted">{year}</span>
            <motion.span
              key={currentStage}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="badge badge-red text-xs px-3 py-1"
            >
              {currentMonthName}
            </motion.span>
          </div>

          {/* Center: Progress */}
          <div className="hidden sm:flex items-center gap-2 flex-1 max-w-xs mx-8">
            <div className="flex-1 h-1.5 bg-secondary rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-accent rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${(currentStage / totalStages) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <span className="text-xs text-text-muted font-medium">
              {currentStage}/{totalStages}
            </span>
          </div>

          {/* Right: Theme Toggle */}
          <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
        </div>
      </div>
    </motion.header>
  );
}
