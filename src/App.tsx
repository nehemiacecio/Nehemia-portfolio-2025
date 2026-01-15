import { useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { HUD, LandingPage, TimelineSlider, YearSummary } from './components';
import { timelineData } from './data/timeline';
import { useTheme } from './hooks/useTheme';

type ViewState = 'landing' | 'timeline' | 'summary';

function App() {
  const [view, setView] = useState<ViewState>('landing');
  const [currentMonth, setCurrentMonth] = useState(1);
  const { isDark, toggleTheme } = useTheme();

  const handleStart = useCallback(() => {
    setView('timeline');
    setCurrentMonth(1);
  }, []);

  const handleMonthChange = useCallback((month: number) => {
    setCurrentMonth(month);
  }, []);

  const handleGoToSummary = useCallback(() => {
    setView('summary');
  }, []);

  const handleBackToTimeline = useCallback(() => {
    setView('timeline');
  }, []);

  const handleGoHome = useCallback(() => {
    setView('landing');
  }, []);

  const getStageNumber = () => {
    if (view === 'landing') return 0;
    if (view === 'summary') return 13;
    return currentMonth;
  };

  return (
    <div className="min-h-screen bg-base transition-colors duration-300">
      {/* HUD - Always visible except on landing */}
      {view !== 'landing' && (
        <HUD
          playerName={timelineData.playerName}
          currentStage={getStageNumber()}
          totalStages={12}
          year={timelineData.year}
          isDark={isDark}
          onToggleTheme={toggleTheme}
        />
      )}

      {/* Main Content with Page Transitions */}
      <AnimatePresence mode="wait">
        {view === 'landing' && (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <LandingPage
              data={timelineData}
              onStart={handleStart}
              isDark={isDark}
              onToggleTheme={toggleTheme}
            />
          </motion.div>
        )}

        {view === 'timeline' && (
          <motion.div
            key="timeline"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <TimelineSlider
              months={timelineData.months}
              currentMonth={currentMonth}
              onMonthChange={handleMonthChange}
              onGoToSummary={handleGoToSummary}
              onGoHome={handleGoHome}
            />
          </motion.div>
        )}

        {view === 'summary' && (
          <motion.div
            key="summary"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <YearSummary
              summary={timelineData.summary}
              year={timelineData.year}
              onBackToTimeline={handleBackToTimeline}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
