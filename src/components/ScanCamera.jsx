import React from 'react';

export default function ScanCamera({ onScanShutterClick, onNavigate }) {
  return (
    <div className="bg-black text-on-surface w-full h-screen overflow-hidden font-sans relative">
      {/* Simulated AR Camera Background */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center z-0" 
        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAQnwyI5ZW_0gcs0soVPTS1QmO2Lgr27Eq1EJ4NNPtdp4TUqHVCUrd3Mo3xF1a_93Izie-AJ-wKoQJrFJssm2-hjxJfbC-Djj9ZEv8QR5N3d9lAO9bjDnrkk0ny8FsKbiFprpetye6yNcDXGXK6ilk7AtqRiYZig1dJEaJihVrLfCdaTdnvqreerPhHGIgPQFM5xCIxVqnOUgD5Nm2XB-qcdU5MuoBQlIcbIOMGWMfALxmmb_42nqjZBxCqv67OTPYriH6gtMZgTPJL')" }}
      >
        <div className="absolute inset-0 bg-black/25"></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-mobile py-xs md:px-margin-desktop bg-surface/60 backdrop-blur-xl border-b border-white/20 shadow-sm shadow-primary/10">
        <span 
          className="font-sans text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent cursor-pointer"
          onClick={() => onNavigate('home')}
        >
          ScanLearn AR
        </span>
        <div className="flex items-center gap-md">
          <button onClick={() => onNavigate('home')} className="text-on-surface-variant hover:bg-white/10 transition-colors p-2 rounded-full flex items-center justify-center">
            <span className="material-symbols-outlined">home</span>
          </button>
          <button className="text-primary hover:bg-white/10 transition-colors p-2 rounded-full flex items-center justify-center">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <div className="w-10 h-10 rounded-full border border-white/30 overflow-hidden shadow-sm cursor-pointer" onClick={() => onNavigate('dashboard')}>
            <img 
              alt="User Profile" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC76Ga8i5UBQe_z3GLsghxIKv_HS0442HHAI9Cfeii3itf-C2lsWpggBhc2hoeRlmOHF-voWggh5JOdRXX14vG9uarKnU5OlQumlKWo5EEgbt7lPQDnnIOyzJZOCpXfaNihhZKQeHopDG3hx122CP_o78pD303Ojs_HXu5_ILFtupI2bBxK16cKWrdemiNyjo6e7WrkIjqI8WhySeP9wQ4gPhzNkzyHykhNWX_Bk5NGTcG-suxn5t0KVSxW8RODz6yJV1J47FUdjxtO" 
            />
          </div>
        </div>
      </header>

      {/* AI Scanning Status Pill */}
      <div className="absolute top-[80px] md:top-[100px] left-1/2 -translate-x-1/2 z-40 bg-surface/85 backdrop-blur-xl px-4 py-2 rounded-full border border-white/40 shadow-lg flex items-center gap-sm">
        <div className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
        </div>
        <span className="font-semibold text-xs text-on-surface tracking-wider">AI Viewfinder Active...</span>
      </div>

      {/* Main Viewfinder Frame */}
      <main className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none mt-[-40px]">
        <div className="relative w-[280px] h-[400px] md:w-[480px] md:h-[600px]">
          {/* Target Corners */}
          <div className="absolute top-0 left-0 w-12 h-12 border-t-[3px] border-l-[3px] border-primary rounded-tl-2xl shadow-[inset_4px_4px_12px_rgba(0,88,190,0.15)]"></div>
          <div className="absolute top-0 right-0 w-12 h-12 border-t-[3px] border-r-[3px] border-primary rounded-tr-2xl shadow-[inset_-4px_4px_12px_rgba(0,88,190,0.15)]"></div>
          <div className="absolute bottom-0 left-0 w-12 h-12 border-b-[3px] border-l-[3px] border-primary rounded-bl-2xl shadow-[inset_4px_-4px_12px_rgba(0,88,190,0.15)]"></div>
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b-[3px] border-r-[3px] border-primary rounded-br-2xl shadow-[inset_-4px_-4px_12px_rgba(0,88,190,0.15)]"></div>
          
          {/* Semi-transparent Overlay */}
          <div className="absolute inset-0 bg-surface/5 backdrop-blur-[0.5px] rounded-xl border border-white/10 mix-blend-overlay"></div>
          
          {/* Animated Laser Scan Line */}
          <div className="absolute w-[120%] h-[2px] bg-gradient-to-r from-transparent via-secondary to-transparent left-[-10%] shadow-[0_0_16px_rgba(107,56,212,0.8)] animate-scan"></div>
          
          {/* Guide Text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/60 flex flex-col items-center gap-2 text-center w-full px-4">
            <span className="material-symbols-outlined text-[48px]">center_focus_strong</span>
            <span className="text-xs font-semibold uppercase tracking-wider">Align textbook page inside frame</span>
          </div>
        </div>
      </main>

      {/* Shutter Camera Actions Bar */}
      <div className="absolute bottom-[100px] md:bottom-12 left-1/2 -translate-x-1/2 z-40 flex items-center justify-center gap-lg bg-surface/75 backdrop-blur-xl px-10 py-4 rounded-full border border-white/30 shadow-lg shadow-black/10">
        <button className="w-12 h-12 rounded-full flex items-center justify-center bg-white/20 hover:bg-white/40 transition-colors border border-white/20 text-white">
          <span className="material-symbols-outlined">flash_on</span>
        </button>
        <button 
          onClick={onScanShutterClick} 
          className="relative w-20 h-20 rounded-full border-[3px] border-white/70 flex items-center justify-center p-1 hover:scale-105 active:scale-95 transition-transform duration-200 group cursor-pointer"
        >
          <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping group-hover:hidden"></div>
          <div className="w-full h-full bg-gradient-to-br from-primary to-secondary rounded-full shadow-[0_4px_16px_rgba(107,56,212,0.4)]"></div>
        </button>
        <button className="w-12 h-12 rounded-full flex items-center justify-center bg-white/20 hover:bg-white/40 transition-colors border border-white/20 text-white relative overflow-hidden group cursor-pointer">
          <span className="material-symbols-outlined">upload_file</span>
          <input className="absolute inset-0 opacity-0 cursor-pointer" type="file" onChange={onScanShutterClick} />
        </button>
      </div>

      {/* BottomNavBar (Mobile Only) */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-4 pt-2 bg-surface-container-low/40 backdrop-blur-xl border-t border-white/20 shadow-lg shadow-secondary/10 md:hidden">
        <button onClick={() => onNavigate('home')} className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-white/5 transition-all duration-150 group">
          <span className="material-symbols-outlined mb-1 group-hover:-translate-y-1 transition-transform">home</span>
          <span className="text-[10px] font-semibold">Home</span>
        </button>
        <button onClick={() => onNavigate('scan')} className="flex flex-col items-center justify-center bg-gradient-to-br from-primary to-secondary text-on-primary rounded-xl p-2 shadow-md hover:bg-white/5 transition-all duration-150 w-20 transform -translate-y-2 border border-white/20">
          <span className="material-symbols-outlined mb-1 fill-icon">document_scanner</span>
          <span className="text-[10px] font-bold">Scan</span>
        </button>
        <button onClick={() => onNavigate('ai-tutor')} className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-white/5 transition-all duration-150 group">
          <span className="material-symbols-outlined mb-1 group-hover:-translate-y-1 transition-transform">smart_toy</span>
          <span className="text-[10px] font-semibold">AI Tutor</span>
        </button>
        <button onClick={() => onNavigate('dashboard')} className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-white/5 transition-all duration-150 group">
          <span className="material-symbols-outlined mb-1 group-hover:-translate-y-1 transition-transform">dashboard</span>
          <span className="text-[10px] font-semibold">Dashboard</span>
        </button>
      </nav>
    </div>
  );
}
