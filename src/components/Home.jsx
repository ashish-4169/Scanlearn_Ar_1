import React from 'react';

export default function Home({ onStartScanning, onNavigate }) {
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col">
      {/* TopAppBar */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-mobile py-xs md:px-margin-desktop bg-surface/60 backdrop-blur-xl border-b border-white/20 shadow-sm shadow-primary/10 transition-all duration-300">
        <div className="flex items-center gap-base">
          <span className="font-sans text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent cursor-pointer" onClick={() => onNavigate('home')}>
            ScanLearn AR
          </span>
        </div>
        <div className="hidden md:flex items-center gap-md">
          <button className="text-primary font-bold hover:bg-white/10 transition-colors px-3 py-2 rounded-lg duration-200" onClick={() => onNavigate('home')}>Home</button>
          <a className="text-on-surface-variant hover:bg-white/10 transition-colors px-3 py-2 rounded-lg duration-200" href="#how-it-works">How It Works</a>
          <a className="text-on-surface-variant hover:bg-white/10 transition-colors px-3 py-2 rounded-lg duration-200" href="#subjects">Subjects</a>
          <button className="text-on-surface-variant hover:bg-white/10 transition-colors px-3 py-2 rounded-lg duration-200" onClick={() => onNavigate('dashboard')}>Dashboard</button>
        </div>
        <div className="flex items-center gap-sm">
          <button aria-label="notifications" className="p-2 rounded-full hover:bg-white/10 transition-colors duration-200 text-on-surface-variant">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button onClick={onStartScanning} className="hidden md:flex bg-gradient-to-r from-primary to-secondary text-on-primary font-semibold px-4 py-2 rounded-full shadow-md shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
            Get Started
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-[80px] pb-[100px] md:pb-lg flex flex-col items-center">
        {/* Hero Section */}
        <section className="relative w-full min-h-[800px] flex flex-col items-center justify-center px-margin-mobile md:px-margin-desktop overflow-hidden">
          {/* Atmospheric AR Background Blobs */}
          <div className="absolute top-1/4 left-1/4 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-primary/20 rounded-full blur-[60px] md:blur-[100px] -z-10 mix-blend-multiply opacity-70"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-secondary/20 rounded-full blur-[60px] md:blur-[100px] -z-10 mix-blend-multiply opacity-70"></div>

          <div className="text-center max-w-4xl flex flex-col items-center gap-md z-10 px-4 mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-primary font-semibold text-xs tracking-wide mb-4">
              <span className="material-symbols-outlined text-[16px]">new_releases</span>
              Introducing AI Vision 2.0
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-on-background tracking-tight leading-tight">
              Turn Any Textbook Into an <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-primary to-secondary text-gradient">Interactive AR Classroom</span>
            </h1>
            <p className="text-base md:text-lg text-on-surface-variant max-w-2xl mt-4 leading-relaxed">
              Experience the future of learning with AI-powered 3D visualizations and instant tutoring. Simply scan your physical book and watch the concepts come to life in your room.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-sm mt-8 w-full sm:w-auto">
              <button onClick={onStartScanning} className="w-full sm:w-auto bg-gradient-to-r from-primary to-secondary text-on-primary font-semibold px-8 py-4 rounded-full shadow-lg shadow-primary/30 hover:scale-[1.02] transition-all duration-300 active:scale-95 flex items-center justify-center gap-2">
                <span className="material-symbols-outlined fill-icon">document_scanner</span>
                Start Scanning
              </button>
              <button className="w-full sm:w-auto glass-card text-primary font-semibold px-8 py-4 rounded-full hover:bg-white/50 transition-all duration-300 active:scale-95 flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">play_circle</span>
                Watch Demo
              </button>
            </div>
          </div>

          {/* Hero Image/Graphic */}
          <div className="w-full max-w-5xl mt-12 relative z-10 glass-card rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/10 px-2 py-2">
            <img 
              alt="Student using tablet for AR learning" 
              className="w-full h-[300px] md:h-[450px] object-cover rounded-[1.8rem] opacity-90" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBocIZAJ7TKu6P0RRL8RDcsJ_BHIYxs81vf-hgjsgv6X8gr2xOozpgHHuA1-30ZhMQKBMkI9FmQnknjo0h8HB7-22ARenNRC39TJgDRuJa5fUrzuiKiz2W3V_w75NoU1rOHpJlZRRCXN27YN0Bmq0MvAfd7orbuK1EMHG7Onbw-ucHAIB0BH_9w-EIGijRLP799yK62wpRAgD1OsTZBvXISPoTNEsHr-229Ytc1S1QKQiaFBDFE-7IMwpk_3W_3oUSvk-pWidSm_-su" 
            />
            {/* AR UI Overlay Hint */}
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent opacity-80 pointer-events-none"></div>
            <div className="absolute bottom-6 left-6 md:left-10 flex justify-between items-end">
              <div className="glass-card px-4 md:px-6 py-3 rounded-xl border border-white/40">
                <p className="text-[10px] font-bold text-primary uppercase tracking-wider mb-0.5">Scanning Context</p>
                <p className="text-sm md:text-base font-semibold text-on-surface">Cellular Biology Ch. 4</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="w-full max-w-[1440px] px-margin-mobile md:px-margin-desktop py-12 mt-12 flex flex-col items-center" id="how-it-works">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-on-background">Three Steps to Mastery</h2>
            <p className="text-sm md:text-base text-on-surface-variant mt-2">Frictionless learning, powered by vision.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md w-full px-4">
            {/* Step 1 */}
            <div className="glass-card rounded-[2rem] p-8 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-20 h-20 rounded-full bg-primary-container/20 flex items-center justify-center mb-6 shadow-inner">
                <span className="material-symbols-outlined text-[40px] text-primary fill-icon">document_scanner</span>
              </div>
              <h3 className="text-lg font-bold text-on-surface mb-2">1. Scan</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">Point your device at any textbook diagram or complex equation to lock onto the subject matter.</p>
            </div>
            {/* Step 2 */}
            <div className="glass-card rounded-[2rem] p-8 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-20 h-20 rounded-full bg-secondary-container/20 flex items-center justify-center mb-6 shadow-inner">
                <span className="material-symbols-outlined text-[40px] text-secondary fill-icon">view_in_ar</span>
              </div>
              <h3 className="text-lg font-bold text-on-surface mb-2">2. Learn</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">Interact with a high-fidelity 3D model that materializes in your physical space. Rotate, dissect, and explore.</p>
            </div>
            {/* Step 3 */}
            <div className="glass-card rounded-[2rem] p-8 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-20 h-20 rounded-full bg-tertiary-container/20 flex items-center justify-center mb-6 shadow-inner">
                <span className="material-symbols-outlined text-[40px] text-tertiary fill-icon">smart_toy</span>
              </div>
              <h3 className="text-lg font-bold text-on-surface mb-2">3. Master</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">Ask the integrated AI Tutor questions in real-time context about the specific model you are viewing.</p>
            </div>
          </div>
        </section>

        {/* Subject Categories (Bento Grid) */}
        <section className="w-full max-w-[1440px] px-margin-mobile md:px-margin-desktop py-12 flex flex-col" id="subjects">
          <h2 className="text-2xl md:text-4xl font-bold text-on-background mb-8 px-4">Explore Subjects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md auto-rows-[250px] md:auto-rows-[300px] px-4">
            {/* Science (Large) */}
            <div onClick={onStartScanning} className="md:col-span-2 glass-card rounded-[2rem] p-6 relative overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-transparent z-0"></div>
              <img 
                alt="Chemistry lab visualization" 
                className="absolute right-0 bottom-0 w-2/3 h-full object-cover object-left opacity-30 md:opacity-40 mix-blend-luminosity group-hover:scale-105 transition-transform duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2XLCc-gGVWdomBTDnhiAIrPRxK9mtL7RKF5cq55oZ0WV4fJkX-9JNqk0PPHP1j9OJ4YZjfz7imB1332td9-eH23HPvr5EYgSxmKVwCAnlEb9yLoGZhW3FoVC99Uqlb59voNlFRp20FhZsevK4LNndNpyt6im7pyXlTC_VZckCqyUAe8tZdVVS2bBc_LrjDkb99U_Hh2wI-JnfsbFPrwchd4JKnS_y6xOqVvqGSLVapkmzW2SjX5D10HMw7BzeKKbg9iJ8XGgrmh81" 
              />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <span className="inline-block px-3 py-1 bg-white/60 border border-white/40 rounded-full text-xs font-semibold text-primary mb-2 shadow-sm">Popular</span>
                  <h3 className="text-xl md:text-3xl font-bold text-on-background">Science &amp; Chemistry</h3>
                </div>
                <button className="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </div>
            {/* Engineering */}
            <div onClick={onStartScanning} className="glass-card rounded-[2rem] p-6 relative overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-bl from-secondary/15 to-transparent z-0"></div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <h3 className="text-xl font-bold text-on-background">Engineering</h3>
                <div className="flex justify-between items-end">
                  <span className="material-symbols-outlined text-[48px] text-secondary/40">architecture</span>
                  <button className="w-10 h-10 rounded-full bg-surface-container text-on-surface flex items-center justify-center group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                    <span class="material-symbols-outlined">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
            {/* Biology */}
            <div onClick={onStartScanning} className="glass-card rounded-[2rem] p-6 relative overflow-hidden group cursor-pointer md:col-start-3 md:row-start-2">
              <div className="absolute inset-0 bg-gradient-to-tr from-tertiary/15 to-transparent z-0"></div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <h3 className="text-xl font-bold text-on-background">Biology</h3>
                <div className="flex justify-between items-end">
                  <span className="material-symbols-outlined text-[48px] text-tertiary/40">biotech</span>
                  <button className="w-10 h-10 rounded-full bg-surface-container text-on-surface flex items-center justify-center group-hover:bg-tertiary group-hover:text-on-tertiary transition-colors">
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* BottomNavBar (Mobile Only) */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-4 pt-2 md:hidden bg-surface-container-low/40 backdrop-blur-xl border-t border-white/20 shadow-lg shadow-secondary/10 rounded-t-lg">
        <button onClick={() => onNavigate('home')} className="flex flex-col items-center justify-center bg-gradient-to-br from-primary to-secondary text-on-primary rounded-xl p-2 shadow-md transition-transform duration-150 group">
          <span className="material-symbols-outlined fill-icon">home</span>
          <span className="text-[10px] font-bold mt-1">Home</span>
        </button>
        <button onClick={onStartScanning} className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-white/5 transition-all duration-150">
          <span className="material-symbols-outlined">document_scanner</span>
          <span className="text-[10px] mt-1 font-semibold">Scan</span>
        </button>
        <button onClick={() => onNavigate('ai-tutor')} className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-white/5 transition-all duration-150">
          <span className="material-symbols-outlined">smart_toy</span>
          <span className="text-[10px] mt-1 font-semibold">AI Tutor</span>
        </button>
        <button onClick={() => onNavigate('dashboard')} className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-white/5 transition-all duration-150">
          <span className="material-symbols-outlined">dashboard</span>
          <span className="text-[10px] mt-1 font-semibold">Dashboard</span>
        </button>
      </nav>
    </div>
  );
}
