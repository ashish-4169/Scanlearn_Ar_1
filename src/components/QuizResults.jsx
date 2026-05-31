import React, { useState } from 'react';

export default function QuizResults({ onNavigate }) {
  const [filter, setFilter] = useState('all'); // all, correct, incorrect

  const questions = [
    {
      id: 1,
      correct: true,
      text: "According to Kepler's First Law, what is the shape of a planet's orbit around the Sun?",
      score: "1/1 pt",
      chosenAnswer: "Ellipse",
      isCorrectAnswer: "Ellipse",
      explanation: "Kepler's First Law states that all planets move in elliptical orbits, with the Sun at one focus."
    },
    {
      id: 2,
      correct: false,
      text: "If the distance between two masses is doubled, how does the gravitational force between them change?",
      score: "0/1 pt",
      chosenAnswer: "It is halved.",
      correctAnswer: "It becomes one-fourth as strong.",
      explanation: "According to Newton's Law of Universal Gravitation, force is inversely proportional to the square of the distance (F ∝ 1/r²). If distance (r) is doubled (2r), the square is 4, making the force 1/4th of the original."
    },
    {
      id: 3,
      correct: true,
      text: "What is the approximate value of standard gravity (g) on Earth's surface?",
      score: "1/1 pt",
      chosenAnswer: "9.8 m/s²",
      isCorrectAnswer: "9.8 m/s²",
      explanation: "The acceleration due to gravity on Earth is approximately 9.8 m/s² (32.2 ft/s²)."
    }
  ];

  const filteredQuestions = questions.filter(q => {
    if (filter === 'correct') return q.correct;
    if (filter === 'incorrect') return !q.correct;
    return true;
  });

  return (
    <div className="bg-[#f7f9fb] text-on-background font-sans min-h-screen pb-24 md:pb-12 pt-20">
      {/* Background patterns */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-40">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary-container/10 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-container/10 rounded-full blur-[80px]"></div>
      </div>

      {/* TopAppBar */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-mobile py-xs md:px-margin-desktop bg-surface/60 backdrop-blur-xl border-b border-white/20 shadow-sm shadow-primary/10">
        <div className="flex items-center gap-2">
          <button onClick={() => onNavigate('dashboard')} className="p-2 text-on-surface-variant hover:bg-white/10 transition-colors rounded-full md:hidden">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <span className="font-sans text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hidden md:block cursor-pointer" onClick={() => onNavigate('home')}>
            ScanLearn AR
          </span>
          <span className="font-bold text-primary md:hidden">ScanLearn AR</span>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={() => onNavigate('dashboard')} className="hidden md:flex gap-1.5 items-center text-sm font-semibold text-on-surface-variant hover:bg-white/10 px-3 py-1.5 rounded-full border border-outline-variant/30">
            <span className="material-symbols-outlined text-[18px]">dashboard</span> Dashboard
          </button>
          <button className="p-2 text-on-surface-variant hover:bg-white/10 transition-colors rounded-full">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <div className="w-10 h-10 rounded-full bg-surface-container-highest border border-white/20 overflow-hidden cursor-pointer" onClick={() => onNavigate('dashboard')}>
            <img 
              alt="User Profile" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQJvPERck7QnoLM4L2-t929ugaGAfow_90ekBLQxBDaEoaancY0uhP-fma9uPPpb4hDsUJOBA_Oy5mv4SDS6XF-JWGG-BOgE7Dj0CamoNgUZ41Lnt3sAHYY36hiYXA6q67Wz47YxvtGSzWU4-ca_s6hhrHeUSH41q_uPoeIIPigDBIhLz8hEmMyENdXiCZrp39WgryF0OfLGqEdXby6MDjiRhkZup4N3YgaLFrV-QN5AJsrLPSAIJjalGwDZSoLodMJwxvfSZYhvR6" 
            />
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop pt-6 pb-lg space-y-lg relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-md px-4">
          <div>
            <p className="text-xs font-bold text-secondary uppercase tracking-wider mb-1">Quiz Completed</p>
            <h1 className="text-2xl md:text-4xl font-bold text-on-surface">Planetary Motion &amp; Gravity</h1>
          </div>
          <button 
            onClick={() => onNavigate('dashboard')} 
            className="inline-flex items-center gap-2 bg-white/60 border border-outline-variant rounded-full px-5 py-2.5 hover:bg-white/90 transition-all font-semibold text-xs text-on-surface-variant shadow-sm active:scale-95 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">dashboard</span>
            Back to Dashboard
          </button>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter px-4">
          
          {/* Left Column: Score & Summary */}
          <div className="md:col-span-4 flex flex-col gap-gutter">
            
            {/* Score Ring Card */}
            <div className="glass-card rounded-2xl p-6 text-center flex flex-col items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h2 className="text-sm font-bold text-on-surface mb-6 relative z-10">Final Score</h2>
              
              {/* Circular Progress Ring */}
              <div className="relative w-40 h-40 flex items-center justify-center mb-6 z-10">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  {/* Track */}
                  <circle className="text-surface-container-high stroke-current" cx="50" cy="50" fill="transparent" r="40" strokeWidth="8"></circle>
                  {/* Progress Ring (Dash Offset: 251.2 * (1 - 0.8) = 50.24) */}
                  <circle 
                    className="text-primary stroke-current progress-ring__circle" 
                    cx="50" 
                    cy="50" 
                    fill="transparent" 
                    r="40" 
                    strokeWidth="8"
                    strokeDasharray="251.2"
                    strokeDashoffset="50.24"
                    strokeLinecap="round"
                  ></circle>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">80%</span>
                  <span className="text-[10px] font-semibold text-on-surface-variant">8 / 10 Points</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-secondary bg-secondary-fixed/50 px-4 py-2 rounded-full z-10 border border-secondary/10 shadow-sm">
                <span className="material-symbols-outlined text-[20px]">workspace_premium</span>
                <span className="text-xs font-bold">Great Job!</span>
              </div>
            </div>

            {/* AI Insights Card */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-base font-bold text-on-surface mb-3 flex items-center gap-2 border-b border-outline-variant/20 pb-2">
                <span className="material-symbols-outlined text-tertiary">lightbulb</span>
                AI Insights
              </h3>
              <p className="text-xs md:text-sm text-on-surface-variant mb-6 leading-relaxed">
                You demonstrated a strong grasp of Kepler's laws and gravitational constants, but you struggled slightly with calculations regarding Newton's inverse-square scaling laws.
              </p>
              <div className="bg-white/80 border border-surface-container-high rounded-xl p-4 shadow-inner">
                <p className="text-[9px] font-bold text-secondary uppercase mb-2">Recommended Revision</p>
                <button 
                  onClick={() => onNavigate('ar-viewer', { isEnhanced: true })}
                  className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-primary/5 transition-colors group text-left cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shadow-sm">
                      <span className="material-symbols-outlined text-[16px]">play_circle</span>
                    </div>
                    <span className="text-xs font-bold text-on-surface">Review Orbital Mechanics</span>
                  </div>
                  <span className="material-symbols-outlined text-outline group-hover:text-primary group-hover:translate-x-1 transition-all">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Question Review */}
          <div className="md:col-span-8 glass-card rounded-2xl p-6 flex flex-col">
            <div className="flex justify-between items-center mb-6 border-b border-outline-variant/30 pb-4">
              <h2 className="text-lg font-bold text-on-surface">Question Review</h2>
              <div className="flex gap-2">
                <button 
                  onClick={() => setFilter('all')}
                  className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                    filter === 'all' ? 'bg-primary text-white border-primary' : 'bg-white text-on-surface-variant border-outline-variant/30'
                  }`}
                >
                  All (3)
                </button>
                <button 
                  onClick={() => setFilter('correct')}
                  className={`px-3 py-1 rounded-full text-xs font-semibold border flex items-center gap-1 ${
                    filter === 'correct' ? 'bg-green-600 text-white border-green-600' : 'bg-white text-green-700 border-green-200'
                  }`}
                >
                  <span className="material-symbols-outlined text-[14px]">check</span> 2 Correct
                </button>
                <button 
                  onClick={() => setFilter('incorrect')}
                  className={`px-3 py-1 rounded-full text-xs font-semibold border flex items-center gap-1 ${
                    filter === 'incorrect' ? 'bg-error text-white border-error' : 'bg-white text-error border-error-container'
                  }`}
                >
                  <span className="material-symbols-outlined text-[14px]">close</span> 1 Incorrect
                </button>
              </div>
            </div>

            <div className="space-y-6 overflow-y-auto pr-2 custom-scrollbar max-h-[580px]">
              {filteredQuestions.map((q) => (
                <div 
                  key={q.id} 
                  className={`glass-panel p-5 rounded-xl flex gap-4 items-start border-l-[4px] ${
                    q.correct ? 'border-l-green-500' : 'border-l-error'
                  }`}
                >
                  <div 
                    className={`mt-1 w-6 h-6 rounded-full flex items-center justify-center shrink-0 shadow-sm ${
                      q.correct ? 'bg-green-100 text-green-700' : 'bg-error-container text-on-error-container'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[14px] font-bold">
                      {q.correct ? 'check' : 'close'}
                    </span>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex justify-between items-start gap-4 mb-3">
                      <h4 className="text-sm font-semibold text-on-surface leading-relaxed">
                        {q.id}. {q.text}
                      </h4>
                      <span className={`text-[10px] font-bold uppercase shrink-0 px-2 py-0.5 rounded ${
                        q.correct ? 'bg-green-100 text-green-800' : 'bg-error-container text-error'
                      }`}>
                        {q.score}
                      </span>
                    </div>

                    {q.correct ? (
                      /* Correct Question Answer Panel */
                      <div className="bg-green-50/50 border border-green-200 rounded-lg p-3 mb-3 flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px] text-green-600">check_circle</span>
                        <span className="text-xs font-semibold text-on-surface">{q.chosenAnswer}</span>
                      </div>
                    ) : (
                      /* Incorrect Question Answer Panel */
                      <div className="flex flex-col gap-2 mb-3">
                        <div className="bg-error-container/20 border border-error/25 rounded-lg p-3 flex items-center justify-between">
                          <p className="text-xs font-semibold text-on-surface flex items-center gap-2 line-through opacity-70">
                            <span className="material-symbols-outlined text-[18px] text-error">cancel</span>
                            {q.chosenAnswer}
                          </p>
                          <span className="text-[9px] font-bold text-error uppercase">Your Answer</span>
                        </div>
                        <div className="bg-green-50/50 border border-green-200 rounded-lg p-3 flex items-center justify-between">
                          <p className="text-xs font-semibold text-on-surface flex items-center gap-2">
                            <span className="material-symbols-outlined text-[18px] text-green-600">check_circle</span>
                            {q.correctAnswer}
                          </p>
                          <span className="text-[9px] font-bold text-green-700 uppercase">Correct Answer</span>
                        </div>
                      </div>
                    )}

                    {/* Explanation details */}
                    <div className="bg-white/80 border border-outline-variant/35 p-4 rounded-xl shadow-inner mt-4">
                      <p className="text-[9px] font-bold text-secondary uppercase mb-2 flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">smart_toy</span> AI Tutor Explanation
                      </p>
                      <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">
                        {q.explanation}
                      </p>
                      {!q.correct && (
                        <button 
                          onClick={() => onNavigate('ar-viewer', { isEnhanced: true })}
                          className="mt-3 text-primary font-bold text-xs hover:underline flex items-center gap-1 cursor-pointer"
                        >
                          View AR Model <span className="material-symbols-outlined text-[16px] fill-icon">view_in_ar</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      {/* BottomNavBar (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-4 pt-2 bg-surface-container-low/40 backdrop-blur-xl border-t border-white/20 shadow-lg shadow-secondary/10 rounded-t-lg">
        <button onClick={() => onNavigate('home')} className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-white/5 transition-all active:scale-90 duration-150">
          <span className="material-symbols-outlined">home</span>
          <span className="text-[10px] mt-1 font-semibold">Home</span>
        </button>
        <button onClick={() => onNavigate('scan')} className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-white/5 transition-all active:scale-90 duration-150">
          <span className="material-symbols-outlined">document_scanner</span>
          <span className="text-[10px] mt-1 font-semibold">Scan</span>
        </button>
        <button onClick={() => onNavigate('ai-tutor')} className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-white/5 transition-all active:scale-90 duration-150">
          <span className="material-symbols-outlined">smart_toy</span>
          <span className="text-[10px] mt-1 font-semibold">AI Tutor</span>
        </button>
        <button onClick={() => onNavigate('dashboard')} className="flex flex-col items-center justify-center bg-gradient-to-br from-primary to-secondary text-on-primary rounded-xl p-2 shadow-md hover:bg-white/5 transition-all active:scale-90 duration-150 w-20 transform -translate-y-2 border border-white/20">
          <span className="material-symbols-outlined fill-icon">dashboard</span>
          <span className="text-[10px] font-bold">Dashboard</span>
        </button>
      </nav>
    </div>
  );
}
