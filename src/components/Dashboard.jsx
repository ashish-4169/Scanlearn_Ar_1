import React from 'react';

export default function Dashboard({ onNavigate }) {
  const stats = [
    { id: 1, val: '42', label: 'Topics Scanned', icon: 'explore', bg: 'bg-primary-fixed', text: 'text-primary' },
    { id: 2, val: '28', label: 'Quizzes Passed', icon: 'quiz', bg: 'bg-secondary-fixed', text: 'text-secondary' },
    { id: 3, val: '94%', label: 'Average Score', icon: 'trending_up', bg: 'bg-tertiary-fixed', text: 'text-tertiary' },
    { id: 4, val: '12h', label: 'Total Learning Time', icon: 'schedule', bg: 'bg-surface-variant', text: 'text-on-surface-variant' }
  ];

  const progress = [
    { name: 'Biology', val: 85, icon: 'biotech', color: 'bg-secondary-container' },
    { name: 'Astronomy', val: 62, icon: 'rocket_launch', color: 'bg-primary-container' },
    { name: 'History', val: 90, icon: 'architecture', color: 'bg-tertiary-container' }
  ];

  const badges = [
    { id: 1, name: 'Science Explorer', icon: 'biotech', grad: 'from-yellow-300 to-orange-400', active: true },
    { id: 2, name: 'Space Expert', icon: 'rocket_launch', grad: 'from-purple-400 to-indigo-500', active: true },
    { id: 3, name: 'Quick Learner', icon: 'psychology', grad: 'from-green-300 to-emerald-500', active: true },
    { id: 4, name: 'History Buff', icon: 'lock', grad: 'bg-surface-variant', active: false }
  ];

  const activities = [
    {
      id: 1,
      title: 'Scanned Human Heart',
      subject: 'Biology',
      time: '2 hours ago',
      icon: 'view_in_ar',
      iconBg: 'bg-primary/10 text-primary',
      badge: 'Quiz Passed: 100%',
      badgeBg: 'bg-green-100 text-green-700'
    },
    {
      id: 2,
      title: 'Chat with AI Tutor',
      subject: 'Physics',
      time: 'Yesterday',
      icon: 'smart_toy',
      iconBg: 'bg-secondary/10 text-secondary',
      badge: null
    },
    {
      id: 3,
      title: 'Scanned Solar System',
      subject: 'Astronomy',
      time: '3 days ago',
      icon: 'view_in_ar',
      iconBg: 'bg-primary/10 text-primary',
      badge: 'Quiz Pending',
      badgeBg: 'bg-yellow-100 text-yellow-700',
      action: () => onNavigate('ar-viewer', { isEnhanced: true })
    }
  ];

  return (
    <div className="bg-background text-on-background min-h-screen pb-32 md:pb-12 pt-20 md:pt-24 font-sans">
      {/* Background radial gradients for ambient blur */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px]"></div>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-tertiary/5 rounded-full blur-[80px]"></div>
      </div>

      {/* TopAppBar */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-mobile py-xs md:px-margin-desktop bg-surface/60 backdrop-blur-xl border-b border-white/20 shadow-sm shadow-primary/10">
        <div className="flex items-center gap-4">
          <span 
            className="font-sans text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            ScanLearn AR
          </span>
        </div>
        <nav className="hidden md:flex gap-8 items-center">
          <button onClick={() => onNavigate('home')} className="text-on-surface-variant hover:bg-white/10 px-4 py-2 rounded-lg flex flex-col items-center cursor-pointer text-xs font-semibold">
            <span className="material-symbols-outlined mb-1">home</span>
            Home
          </button>
          <button onClick={() => onNavigate('scan')} className="text-on-surface-variant hover:bg-white/10 px-4 py-2 rounded-lg flex flex-col items-center cursor-pointer text-xs font-semibold">
            <span className="material-symbols-outlined mb-1">document_scanner</span>
            Scan
          </button>
          <button onClick={() => onNavigate('ai-tutor')} className="text-on-surface-variant hover:bg-white/10 px-4 py-2 rounded-lg flex flex-col items-center cursor-pointer text-xs font-semibold">
            <span className="material-symbols-outlined mb-1">smart_toy</span>
            AI Tutor
          </button>
          <button className="text-primary font-bold hover:bg-white/10 px-4 py-2 rounded-lg flex flex-col items-center border-b-2 border-primary text-xs cursor-pointer">
            <span className="material-symbols-outlined mb-1 fill-icon">dashboard</span>
            Dashboard
          </button>
        </nav>
        <div className="flex items-center gap-4">
          <button className="text-primary hover:bg-white/10 p-2 rounded-full transition-colors">
            <span className="material-symbols-outlined text-2xl">notifications</span>
          </button>
          <div className="w-10 h-10 rounded-full bg-surface-container-high border-2 border-primary/20 overflow-hidden cursor-pointer hover:border-primary transition-colors">
            <img 
              alt="User Profile" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAX60kbpT6OZ1sR1V37MgHunYjLJ7Sj0bguvNbTt0RrfLmmjb61qHIaXwfnNlvebuIhNDf8bY8mRkqXPoptm9hHxxJoro8PFKN4cYnljqG2JGLtECRfXMK4utx_26XMalfBrURZ18UGr6xgg83vbHOhFxFhiCRy4Cda3LtDQktqpb5sP4fZyAEgVprFhly7_RW6pR6tdIYyW0w8z3M8q1rkYgKEgdEjpFr8ds_YX4kAJwipMCTRlFqBSQ_Xd0UxkoiduGog57BzCa-n" 
            />
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-md relative z-10">
        
        {/* Dashboard Header Title */}
        <div className="mb-lg flex flex-col md:flex-row md:items-end justify-between gap-4 px-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-on-surface mb-2">My Learning Journey</h2>
            <p className="text-xs md:text-sm text-on-surface-variant font-semibold">Track your AR explorations and knowledge growth.</p>
          </div>
          {/* Streak Card */}
          <div className="glass-card rounded-xl p-4 flex items-center gap-4 shadow-sm w-full md:w-auto border border-white/40">
            <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center shadow-inner">
              <span className="material-symbols-outlined text-orange-500 text-2xl fill-icon">local_fire_department</span>
            </div>
            <div>
              <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Current Streak</p>
              <p className="text-lg font-bold text-on-surface">14 Days</p>
            </div>
          </div>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-md px-4 mt-6">
          
          {/* Stats Row */}
          <div className="md:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-md">
            {stats.map((s) => (
              <div key={s.id} className="glass-card rounded-2xl p-6 transition-transform hover:-translate-y-1 duration-300 border border-white/30">
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-3 ${s.bg} rounded-xl ${s.text} shadow-sm`}>
                    <span className="material-symbols-outlined">{s.icon}</span>
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-on-surface mb-1">{s.val}</h3>
                <p className="text-xs font-semibold text-on-surface-variant">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Subject Mastery Panel */}
          <div className="md:col-span-8 flex flex-col gap-md">
            <div className="glass-card rounded-3xl p-6 md:p-8 flex-1 border border-white/40 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-base md:text-lg font-bold text-on-surface">Subject Mastery</h3>
                  <button className="text-primary font-bold text-xs hover:underline cursor-pointer">View Details</button>
                </div>
                <div className="space-y-6 mt-4">
                  {progress.map((p) => (
                    <div key={p.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs md:text-sm font-semibold text-on-surface flex items-center gap-2">
                          <span className="material-symbols-outlined text-secondary text-base">{p.icon}</span>
                          {p.name}
                        </span>
                        <span className="text-xs font-bold text-on-surface">{p.val}%</span>
                      </div>
                      <div className="w-full bg-surface-container-high/60 h-3 rounded-full overflow-hidden border border-white/10">
                        <div 
                          className="h-full rounded-full bg-gradient-to-r from-primary to-secondary" 
                          style={{ width: `${p.val}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Achievements Sidebar */}
          <div className="md:col-span-4 flex flex-col gap-md">
            <div className="glass-card rounded-3xl p-6 border border-white/40">
              <h3 className="text-base font-bold text-on-surface mb-6 border-b border-outline-variant/20 pb-2">Badges</h3>
              <div className="grid grid-cols-2 gap-4">
                {badges.map((b) => (
                  <div 
                    key={b.id} 
                    className={`flex flex-col items-center text-center p-4 rounded-2xl border transition-all duration-300 ${
                      b.active 
                        ? 'bg-white/50 border-white/40 hover:bg-white/80 cursor-pointer hover:shadow-md' 
                        : 'bg-surface-container/30 border-dashed border-outline-variant/60 opacity-60'
                    }`}
                  >
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${b.grad} flex items-center justify-center mb-3 shadow-md border border-white/20`}>
                      <span className={`material-symbols-outlined text-white text-3xl ${b.active ? 'fill-icon' : ''}`}>
                        {b.icon}
                      </span>
                    </div>
                    <p className="text-[10px] font-bold text-on-surface leading-tight">{b.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Activity Timeline */}
          <div className="md:col-span-12 glass-card rounded-3xl p-6 md:p-8 border border-white/40">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-base md:text-lg font-bold text-on-surface">Recent Activity</h3>
              <button className="flex items-center gap-1 text-primary hover:text-primary-container transition-colors text-xs font-bold cursor-pointer">
                See All <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
            <div className="space-y-4">
              {activities.map((act) => (
                <div 
                  key={act.id} 
                  onClick={act.action ? act.action : undefined}
                  className={`flex items-center justify-between p-4 bg-white/40 hover:bg-white/80 transition-all rounded-2xl border border-white/30 ${
                    act.action ? 'cursor-pointer shadow-sm hover:translate-x-0.5' : ''
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-inner ${act.iconBg}`}>
                      <span className="material-symbols-outlined fill-icon">{act.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-on-surface">{act.title}</h4>
                      <p className="text-[10px] text-on-surface-variant font-semibold mt-0.5">{act.subject} • {act.time}</p>
                    </div>
                  </div>
                  
                  {act.badge ? (
                    <div className={`hidden md:flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold shadow-sm ${act.badgeBg}`}>
                      <span className="material-symbols-outlined text-sm fill-icon">
                        {act.badge.includes('Passed') ? 'check_circle' : 'pending'}
                      </span>
                      {act.badge}
                    </div>
                  ) : (
                    <span className="material-symbols-outlined text-on-surface-variant text-base">chevron_right</span>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      {/* BottomNavBar (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-4 pt-2 bg-surface-container-low/40 backdrop-blur-xl border-t border-white/20 shadow-lg shadow-secondary/10 rounded-t-lg">
        <button onClick={() => onNavigate('home')} className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-white/5 transition-all active:scale-90 duration-150">
          <span className="material-symbols-outlined mb-1">home</span>
          <span className="text-[10px] font-semibold">Home</span>
        </button>
        <button onClick={() => onNavigate('scan')} className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-white/5 transition-all active:scale-90 duration-150">
          <span className="material-symbols-outlined mb-1">document_scanner</span>
          <span className="text-[10px] font-semibold">Scan</span>
        </button>
        <button onClick={() => onNavigate('ai-tutor')} className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-white/5 transition-all active:scale-90 duration-150">
          <span className="material-symbols-outlined mb-1">smart_toy</span>
          <span className="text-[10px] font-semibold">AI Tutor</span>
        </button>
        <button onClick={() => onNavigate('dashboard')} className="flex flex-col items-center justify-center bg-gradient-to-br from-primary to-secondary text-on-primary rounded-xl p-2 shadow-md hover:bg-white/5 transition-all active:scale-90 duration-150 w-20 transform -translate-y-2 border border-white/20">
          <span className="material-symbols-outlined mb-1 fill-icon">dashboard</span>
          <span className="text-[10px] font-bold">Dashboard</span>
        </button>
      </nav>
    </div>
  );
}
