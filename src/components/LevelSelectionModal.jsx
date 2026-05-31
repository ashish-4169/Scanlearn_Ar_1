import React, { useState } from 'react';

export default function LevelSelectionModal({ onSelectLevel, onClose }) {
  const [selected, setSelected] = useState('Engineering');

  const levels = [
    { id: 'Class 5', label: 'Class 5', icon: 'child_care' },
    { id: 'Class 10', label: 'Class 10', icon: 'school' },
    { id: 'Class 12', label: 'Class 12', icon: 'auto_stories' },
    { id: 'Engineering', label: 'Engineering', icon: 'engineering' },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-surface/90 backdrop-blur-2xl w-full max-w-md rounded-lg border border-white/40 shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-md text-center border-b border-white/20 relative">
          <button onClick={onClose} className="absolute right-4 top-4 p-1 text-on-surface-variant hover:bg-white/20 rounded-full transition-colors">
            <span className="material-symbols-outlined text-base">close</span>
          </button>
          <h2 className="text-xl text-on-surface font-bold">Choose Your Learning Level</h2>
          <p className="text-xs text-on-surface-variant mt-2 px-2 leading-relaxed">
            The AI will adapt explanations, examples, quizzes, and complexity according to the selected learning level.
          </p>
        </div>

        {/* Options Grid */}
        <div className="p-md grid grid-cols-2 gap-md">
          {levels.map((level) => {
            const isSelected = selected === level.id;
            return (
              <button
                key={level.id}
                onClick={() => setSelected(level.id)}
                className={`flex flex-col items-center justify-center p-md transition-all border rounded-lg active:scale-95 group ${
                  isSelected
                    ? 'bg-primary/20 border-primary shadow-md'
                    : 'bg-white/20 hover:bg-white/40 border-white/20'
                }`}
              >
                <div 
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-sm transition-all ${
                    isSelected
                      ? 'bg-primary text-white scale-105 shadow-sm'
                      : 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white'
                  }`}
                >
                  <span className="material-symbols-outlined">{level.icon}</span>
                </div>
                <span className="text-xs text-on-surface font-semibold">{level.label}</span>
              </button>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="p-md pt-0">
          <button 
            onClick={() => onSelectLevel(selected)} 
            className="w-full bg-gradient-to-r from-primary to-secondary text-on-primary font-semibold py-3 rounded-full shadow-lg hover:shadow-primary/30 transition-all active:scale-[0.98] cursor-pointer"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
