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

export function HUD({ playerName, currentStage, totalStages, year, isDark, onToggleTheme }: HUDProps) {
  const progress = ((currentStage) / totalStages) * 100;

  const monthNames = [
    'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
    'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className="fixed top-0 left-0 right-0 z-50 bg-primary border-b-4 border-border"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2 sm:py-3">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          {/* Player Info - Hidden on very small screens */}
          <div className="hidden xs:flex items-center gap-2 sm:gap-4">
            <div className="pixel-border bg-secondary px-2 sm:px-3 py-1">
              <span className="font-pixel text-[10px] sm:text-xs text-black truncate max-w-[80px] sm:max-w-none">
                {playerName}
              </span>
            </div>
          </div>

          {/* Stage Indicator */}
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="font-pixel text-[10px] sm:text-xs text-white hidden sm:block">STAGE:</span>
            <motion.div
              key={currentStage}
              initial={{ scale: 1.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="pixel-border bg-accent px-2 sm:px-4 py-1"
            >
              <span className="font-pixel text-xs sm:text-sm text-black">
                {currentStage === 0 ? 'INTRO' : currentStage === 13 ? 'END' : monthNames[currentStage - 1]}
              </span>
            </motion.div>
          </div>

          {/* Progress Bar */}
          <div className="flex items-center gap-2 sm:gap-3 flex-1 max-w-[120px] sm:max-w-xs">
            <span className="font-pixel text-[10px] sm:text-xs text-white hidden md:block">PROGRESS:</span>
            <div className="flex-1 h-4 sm:h-5 bg-base border-2 border-secondary relative overflow-hidden">
              <motion.div
                className="h-full bg-accent"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-pixel text-[8px] sm:text-xs text-white drop-shadow-lg">
                  {Math.round(progress)}%
                </span>
              </div>
            </div>
          </div>

          {/* Year Counter */}
          <div className="pixel-border bg-secondary px-2 sm:px-3 py-1 hidden sm:block">
            <span className="font-pixel text-[10px] sm:text-xs text-black">{year}</span>
          </div>

          {/* Theme Toggle */}
          <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
        </div>
      </div>
    </motion.header>
  );
}
