import React from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  progress: number;
  className?: string;
  showText?: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, className = '', showText = false }) => {
  return (
    <div className={`w-full ${className}`}>
      {showText && (
        <div className="flex justify-between mb-1 text-xs font-medium text-gold">
          <span>{progress}%</span>
        </div>
      )}
      <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2 overflow-hidden">
        <motion.div 
          className="bg-gold h-full rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
