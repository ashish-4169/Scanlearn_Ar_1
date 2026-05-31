import React, { useState } from 'react';

export default function ARViewer({ isEnhanced = false, onNavigate, onAskAI, onGenerateQuiz }) {
  const [scale, setScale] = useState(1);
  const [orbitsActive, setOrbitsActive] = useState(true);
  const [audioActive, setAudioActive] = useState(false);
  const [selectedPlanet, setSelectedPlanet] = useState('Mars'); // Mars or Sun

  const zoomIn = () => setScale(prev => Math.min(prev + 0.1, 1.5));
  const zoomOut = () => setScale(prev => Math.max(prev - 0.1, 0.7));
  const toggleOrbits = () => setOrbitsActive(!orbitsActive);
  const toggleAudio = () => setAudioActive(!audioActive);

  // Planet specifications
  const planets = {
    Mars: {
      name: 'Mars',
      tag: 'Planet',
      description: 'The fourth planet from the Sun, often called the "Red Planet" due to iron oxide prevalent on its surface.',
      gravity: '3.721 m/s²',
      moons: 'Phobos & Deimos',
    },
    Sun: {
      name: 'The Sun',
      tag: 'Star',
      description: 'The star at the center of the Solar System. It is a nearly perfect ball of hot plasma heated to incandescence by nuclear fusion reactions.',
      gravity: '274 m/s²',
      moons: '8 Planets',
    }
  };

  const currentPlanet = planets[selectedPlanet];

  return (
    <div className="bg-surface text-on-surface h-screen w-screen overflow-hidden relative antialiased font-sans">
      {/* Simulated AR Camera Background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-all duration-500" 
        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA_toULdw_KIUZz3xBklJzd3G97TJmn_UKtFQnAlZ0rCBdNZbWBOl4-qs9mMIFP_ZQvPweNFsT8Ro81bMG4QSjuLu0JjMlmLwnr09LsM8gPd19mlAeKsGy8iOKUu7s0dI4_Yv33ZPD88yg6nDYZPhZgZT61SAHnc7xu4ozwpgFFu7caLUTRT0EvQY5koTXDM-0li8AJEopnFmIPmKClGZVsVY0cxQK838yKmFnt8UZkpkQ-l2kff7ULFyJ1PsNVr4lx5TWXqGBg48un')" }}
      >
        {/* 3D Model Placeholder Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div 
            style={{ transform: `scale(${scale})` }}
            className={`w-[80vw] h-[80vw] max-w-[450px] max-h-[450px] md:max-w-2xl md:max-h-2xl rounded-full bg-gradient-to-tr from-primary/10 to-secondary/10 backdrop-blur-sm border border-white/10 flex items-center justify-center relative shadow-[0_0_100px_rgba(107,56,212,0.2)] transition-transform duration-300 ${
              orbitsActive ? 'animate-[spin_60s_linear_infinite]' : ''
            }`}
          >
            {/* Sun Hotspot */}
            <div 
              onClick={() => setSelectedPlanet('Sun')}
              className={`w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-r from-yellow-300 to-orange-500 shadow-[0_0_50px_rgba(252,211,77,0.5)] flex items-center justify-center relative z-20 cursor-pointer hover:brightness-110 active:scale-95 transition-transform ${
                selectedPlanet === 'Sun' ? 'border-[3px] border-white shadow-[0_0_60px_rgba(252,211,77,0.8)]' : ''
              }`}
            >
              <div className="absolute text-[10px] text-white font-bold opacity-0 hover:opacity-100 transition-opacity bg-black/60 px-2 py-0.5 rounded-full pointer-events-none">SUN</div>
            </div>

            {/* Orbit paths */}
            <div className={`absolute inset-10 rounded-full border border-white/20 border-dashed ${orbitsActive ? 'animate-[spin_4s_linear_infinite_reverse]' : ''}`}></div>
            <div className={`absolute inset-24 rounded-full border border-white/15 border-dashed ${orbitsActive ? 'animate-[spin_3s_linear_infinite]' : ''}`}></div>

            {/* Mars Hotspot */}
            <div 
              onClick={() => setSelectedPlanet('Mars')}
              className={`absolute top-[20%] right-[20%] w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-red-400 to-red-600 shadow-[0_0_20px_rgba(239,68,68,0.4)] border border-white/30 z-30 animate-pulse cursor-pointer hover:brightness-110 active:scale-95 transition-transform ${
                selectedPlanet === 'Mars' ? 'border-[3px] border-white shadow-[0_0_30px_rgba(239,68,68,0.8)]' : ''
              }`}
            >
              <div className="absolute text-[10px] text-white font-bold opacity-0 hover:opacity-100 transition-opacity bg-black/60 px-2 py-0.5 rounded-full pointer-events-none translate-y-12 translate-x-1">MARS</div>
            </div>
          </div>
        </div>
      </div>

      {/* TopAppBar */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-mobile py-xs md:px-margin-desktop bg-surface/60 backdrop-blur-xl border-b border-white/20 shadow-sm shadow-primary/10 text-primary transition-all">
        <div 
          className="font-sans text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent cursor-pointer"
          onClick={() => onNavigate('home')}
        >
          ScanLearn AR
        </div>
        {/* Desktop Navigation Integration (Hidden on Mobile) */}
        <nav className="hidden md:flex items-center gap-md">
          <button onClick={() => onNavigate('home')} className="text-on-surface-variant hover:bg-white/10 transition-colors px-4 py-2 rounded-lg text-sm font-semibold">Home</button>
          <button onClick={() => onNavigate('scan')} className="text-primary font-bold bg-white/10 px-4 py-2 rounded-lg text-sm flex items-center gap-2 shadow-inner"><span className="material-symbols-outlined fill-icon text-[18px]">document_scanner</span> Scan</button>
          <button onClick={() => onAskAI()} className="text-on-surface-variant hover:bg-white/10 transition-colors px-4 py-2 rounded-lg text-sm font-semibold">AI Tutor</button>
          <button onClick={() => onNavigate('dashboard')} className="text-on-surface-variant hover:bg-white/10 transition-colors px-4 py-2 rounded-lg text-sm font-semibold">Dashboard</button>
        </nav>
        <button onClick={() => onNavigate('dashboard')} className="hover:bg-white/10 transition-colors active:scale-95 duration-200 p-2 rounded-full text-primary flex items-center justify-center">
          <span className="material-symbols-outlined">notifications</span>
        </button>
      </header>

      {/* Floating Info Card: Planet Mars / Sun */}
      <div className="absolute top-24 md:top-28 left-margin-mobile md:left-margin-desktop z-40 w-full max-w-[320px] md:max-w-sm px-4">
        <div className="bg-surface/75 backdrop-blur-[12px] border border-white/30 rounded-xl shadow-lg shadow-primary/10 p-md flex flex-col gap-sm relative overflow-hidden">
          {/* Glassmorphism Highlight */}
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
          <div className="flex justify-between items-start z-10">
            <div>
              <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">{currentPlanet.tag}</span>
              <h2 className="text-xl md:text-2xl font-bold text-on-surface mt-1">{currentPlanet.name}</h2>
            </div>
            <button className="text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined">bookmark_add</span>
            </button>
          </div>
          <p className="text-xs md:text-sm text-on-surface-variant z-10 leading-relaxed">
            {currentPlanet.description}
          </p>
          <div className="grid grid-cols-2 gap-sm mt-2 z-10">
            <div className="bg-surface-container-low/60 rounded-lg p-3 border border-white/20">
              <div className="text-[10px] font-semibold text-on-surface-variant mb-1">Gravity</div>
              <div className="text-sm font-bold text-on-surface">{currentPlanet.gravity}</div>
            </div>
            <div className="bg-surface-container-low/60 rounded-lg p-3 border border-white/20">
              <div className="text-[10px] font-semibold text-on-surface-variant mb-1">{selectedPlanet === 'Mars' ? 'Moons' : 'System'}</div>
              <div className="text-xs md:text-sm font-bold text-on-surface">{currentPlanet.moons}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar Controls */}
      <div className="absolute right-margin-mobile md:right-margin-desktop top-1/2 -translate-y-1/2 z-40 flex flex-col gap-sm">
        <button onClick={zoomIn} aria-label="Zoom In" className="w-12 h-12 rounded-full bg-surface/75 backdrop-blur-[12px] border border-white/20 flex items-center justify-center text-on-surface shadow-md hover:bg-white/50 hover:scale-105 active:scale-95 transition-all group">
          <span className="material-symbols-outlined group-hover:text-primary transition-colors">zoom_in</span>
        </button>
        <button onClick={zoomOut} aria-label="Zoom Out" className="w-12 h-12 rounded-full bg-surface/75 backdrop-blur-[12px] border border-white/20 flex items-center justify-center text-on-surface shadow-md hover:bg-white/50 hover:scale-105 active:scale-95 transition-all group">
          <span className="material-symbols-outlined group-hover:text-primary transition-colors">zoom_out</span>
        </button>
        <div className="h-px w-8 bg-white/20 my-1 mx-auto"></div>
        <button onClick={toggleOrbits} aria-label="Toggle Orbit" className={`w-12 h-12 rounded-full bg-surface/75 backdrop-blur-[12px] border border-white/20 flex items-center justify-center shadow-md hover:bg-white/50 hover:scale-105 active:scale-95 transition-all group ${!orbitsActive ? 'text-secondary border-secondary/40' : 'text-on-surface'}`}>
          <span className="material-symbols-outlined group-hover:text-primary transition-colors">360</span>
        </button>
        <button onClick={toggleAudio} aria-label="Audio Narration" className={`w-12 h-12 rounded-full bg-surface/75 backdrop-blur-[12px] border border-white/20 flex items-center justify-center shadow-md hover:bg-white/50 hover:scale-105 active:scale-95 transition-all group ${audioActive ? 'text-primary border-primary/40 bg-primary/10' : 'text-on-surface'}`}>
          <span className={`material-symbols-outlined ${audioActive ? 'fill-icon text-primary' : 'group-hover:text-primary'} transition-colors`}>volume_up</span>
        </button>
      </div>

      {/* Soundwave animation hint */}
      {audioActive && (
        <div className="absolute right-20 top-1/2 -translate-y-1/2 bg-primary-container text-on-primary-container px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-2 border border-primary/20 shadow-md">
          <span className="flex gap-0.5 h-3 items-end">
            <span className="w-[2px] bg-primary animate-pulse h-full"></span>
            <span className="w-[2px] bg-primary animate-pulse h-[60%]"></span>
            <span className="w-[2px] bg-primary animate-pulse h-[80%]"></span>
          </span>
          Audio active
        </div>
      )}

      {/* Interactive Bottom Actions Bar */}
      {isEnhanced ? (
        <>
          {/* Enhanced Version Options Bar */}
          <div className="absolute bottom-44 md:bottom-28 left-1/2 -translate-x-1/2 z-40 flex flex-wrap justify-center gap-2 w-full max-w-lg px-margin-mobile">
            {['Explain Simply', 'Exam Mode', 'Real Life Example', 'Fun Facts'].map((tag) => (
              <button 
                key={tag}
                onClick={() => onAskAI(tag)}
                className="px-4 py-2 rounded-full bg-surface/70 backdrop-blur-[12px] border border-white/20 text-on-surface text-xs font-medium hover:bg-white/50 hover:scale-105 active:scale-95 transition-all shadow-md shadow-primary/5 cursor-pointer"
              >
                {tag}
              </button>
            ))}
          </div>
          
          <div className="absolute bottom-28 md:bottom-12 left-1/2 -translate-x-1/2 z-40">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <button 
                onClick={() => onAskAI()} 
                className="bg-gradient-to-r from-primary to-secondary text-on-primary font-bold uppercase tracking-wider px-xl py-4 rounded-full shadow-lg shadow-secondary/30 flex items-center gap-2 hover:scale-[1.02] active:scale-95 transition-all border border-white/20 relative overflow-hidden group cursor-pointer"
              >
                <span className="material-symbols-outlined fill-icon">smart_toy</span>
                Ask AI Tutor
              </button>
              <button 
                onClick={onGenerateQuiz} 
                className="bg-tertiary text-on-tertiary font-bold uppercase tracking-wider px-xl py-4 rounded-full shadow-lg shadow-tertiary/30 flex items-center gap-2 hover:scale-[1.02] active:scale-95 transition-all border border-white/20 relative overflow-hidden group cursor-pointer"
              >
                <span className="material-symbols-outlined">quiz</span>
                Generate Quiz
              </button>
            </div>
          </div>
        </>
      ) : (
        /* Base Version Shutter Bar */
        <div className="absolute bottom-28 md:bottom-12 left-1/2 -translate-x-1/2 z-40">
          <button 
            onClick={() => onAskAI()} 
            className="bg-gradient-to-r from-primary to-secondary text-on-primary font-bold uppercase tracking-wider px-xl py-4 rounded-full shadow-lg shadow-secondary/30 flex items-center gap-2 hover:scale-[1.02] active:scale-95 transition-all border border-white/20 relative overflow-hidden group cursor-pointer"
          >
            <span className="material-symbols-outlined fill-icon">smart_toy</span>
            Ask AI Tutor
          </button>
        </div>
      )}

      {/* BottomNavBar (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-4 pt-2 bg-surface-container-low/40 backdrop-blur-xl border-t border-white/20 shadow-lg shadow-secondary/10">
        <button onClick={() => onNavigate('home')} className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-white/5 transition-all active:scale-90 duration-150 group">
          <span className="material-symbols-outlined group-hover:text-primary transition-colors">home</span>
          <span className="text-[10px] mt-1 font-semibold">Home</span>
        </button>
        <button onClick={() => onNavigate('scan')} className="flex flex-col items-center justify-center bg-gradient-to-br from-primary to-secondary text-on-primary rounded-xl p-2 shadow-md active:scale-90 transition-transform duration-150 relative -top-2">
          <span className="material-symbols-outlined fill-icon">document_scanner</span>
          <span className="text-[10px] font-bold mt-1">Scan</span>
        </button>
        <button onClick={() => onAskAI()} className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-white/5 transition-all active:scale-90 duration-150 group">
          <span className="material-symbols-outlined group-hover:text-primary transition-colors">smart_toy</span>
          <span className="text-[10px] mt-1 font-semibold">AI Tutor</span>
        </button>
        <button onClick={() => onNavigate('dashboard')} className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-white/5 transition-all active:scale-90 duration-150 group">
          <span className="material-symbols-outlined group-hover:text-primary transition-colors">dashboard</span>
          <span className="text-[10px] mt-1 font-semibold">Dashboard</span>
        </button>
      </nav>
    </div>
  );
}
