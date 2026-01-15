import { motion } from 'framer-motion';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onToggle}
      className="pixel-border bg-base px-3 py-2 flex items-center gap-2"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.span
        key={isDark ? 'sun' : 'moon'}
        initial={{ rotate: -180, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 180, opacity: 0 }}
        className="font-pixel text-sm"
      >
        {isDark ? '☀️' : '🌙'}
      </motion.span>
      <span className="font-pixel text-xs text-text hidden sm:inline">
        {isDark ? 'LIGHT' : 'DARK'}
      </span>
    </motion.button>
  );
}
