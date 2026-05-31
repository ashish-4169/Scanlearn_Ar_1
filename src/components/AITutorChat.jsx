import React, { useState, useEffect, useRef } from 'react';

export default function AITutorChat({ isEnhanced = false, defaultQuery = '', onNavigate, onTakeQuiz }) {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'ai', text: "Hello! I see you're exploring the Solar System model. I'm here to answer any questions you have. Where should we start?" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [selectedPlanet, setSelectedPlanet] = useState('Mars');
  
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Handle preset filters or default query
  useEffect(() => {
    if (defaultQuery) {
      handleSend(defaultQuery);
    }
  }, [defaultQuery]);

  const handleSend = (textToSend) => {
    const text = textToSend || inputValue;
    if (!text.trim()) return;

    // Add user message
    const userMsg = { id: Date.now(), sender: 'user', text };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Simulated AI response
    setTimeout(() => {
      let aiResponseText = "That's an interesting question! Gravity acts as the centering force keeping planets in orbit, and depending on your learning level, we can calculate orbits using Kepler's laws or Newtonian gravitation.";
      
      const queryLower = text.toLowerCase();
      if (queryLower.includes('mars') && queryLower.includes('red')) {
        aiResponseText = "Mars is red because of iron oxide (rust) on its surface. The iron in the soil reacts with trace oxygen, forming iron oxide, which absorbs blue and green wavelengths and reflects red, giving it a rusty appearance.";
      } else if (queryLower.includes('jupiter')) {
        aiResponseText = "Jupiter is the largest planet in our solar system—more than 11 times the diameter of Earth, and over 300 times its mass! It is a gas giant primarily composed of hydrogen and helium.";
      } else if (queryLower.includes('explain') || queryLower.includes('10')) {
        aiResponseText = "Imagine gravity like a heavy bowling ball sitting on a trampoline. It bends the fabric, and smaller balls roll around it. That's how the Sun pulls the planets around it!";
      } else if (queryLower.includes('exam')) {
        aiResponseText = "For exams, remember Newton's Law: F = G * (m1*m2)/r^2. If you double the distance, the gravitational force drops to 1/4th. This is the inverse-square law.";
      } else if (queryLower.includes('flashcard') || queryLower.includes('note')) {
        aiResponseText = "Flashcard generated:\n• Front: Kepler's First Law\n• Back: All planets orbit the Sun in elliptical paths, with the Sun at one focus.";
      }

      setMessages(prev => [...prev, { id: Date.now() + 1, sender: 'ai', text: aiResponseText }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="bg-background text-on-background font-sans min-h-screen flex flex-col relative overflow-hidden">
      {/* TopAppBar */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-mobile py-xs md:px-margin-desktop bg-surface/60 dark:bg-surface-container/60 backdrop-blur-xl border-b border-white/20 shadow-sm shadow-primary/10 transition-colors">
        <span 
          className="font-sans text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent cursor-pointer"
          onClick={() => onNavigate('home')}
        >
          ScanLearn AR
        </span>
        <div className="hidden md:flex gap-md items-center">
          <nav className="flex gap-md">
            <button onClick={() => onNavigate('home')} className="text-on-surface-variant hover:bg-white/10 transition-colors font-semibold text-sm px-4 py-2 rounded-full">Home</button>
            <button onClick={() => onNavigate('scan')} className="text-on-surface-variant hover:bg-white/10 transition-colors font-semibold text-sm px-4 py-2 rounded-full">Scan</button>
            <button className="text-primary font-bold hover:bg-white/10 transition-colors font-semibold text-sm px-4 py-2 rounded-full active:scale-95 duration-200">AI Tutor</button>
            <button onClick={() => onNavigate('dashboard')} className="text-on-surface-variant hover:bg-white/10 transition-colors font-semibold text-sm px-4 py-2 rounded-full">Dashboard</button>
          </nav>
        </div>
        <div className="flex items-center gap-sm">
          <button aria-label="notifications" className="p-2 rounded-full hover:bg-white/10 transition-colors text-primary">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-fixed cursor-pointer" onClick={() => onNavigate('dashboard')}>
            <img 
              alt="User Profile" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3CjwwwFPxK9Os6B9wvkJhm9W47x1-lemrcamNArI14enNGmBtfDu2-tST9u5vBSsjOQldwrAWDNRn9PrwsijjXJFketO6wLcq-ShOmVK-4ueXqAw5DiuNtKUeYNNIT2FI_tc4E7ADS-HwQ9HYKutpQ-r43-0xJnIhuXrproUpgERuqjKS3H_rIiYgiMCfc6dRrTD-f5-B1fEf3pwb0p--zAIqo_8gMZAdFk1ZaDLMXTygIFtX6A1XyACXRQFIa0qaJPjP15QitRdN" 
            />
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 pt-[72px] pb-[88px] md:pb-0 flex flex-col md:flex-row h-screen relative">
        
        {/* AI Tutor Chat Interface (Left Side on Desktop, Scrollable overlay/tab on Mobile) */}
        <div className="z-20 w-full md:w-[420px] lg:w-[500px] h-full flex flex-col bg-surface/80 md:bg-surface backdrop-blur-xl border-r border-white/20 relative shadow-xl shrink-0">
          
          {/* Chat Header */}
          <div className="px-md py-sm border-b border-outline-variant/30 flex justify-between items-center bg-surface-container-lowest/50">
            <div className="flex items-center gap-sm">
              <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container shadow-inner">
                <span className="material-symbols-outlined">smart_toy</span>
              </div>
              <div>
                <h1 className="text-sm font-bold text-on-surface">AI Tutor</h1>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-green-500 inline-block animate-pulse"></span>
                  <span className="text-[10px] text-on-surface-variant font-medium">Online</span>
                  {isEnhanced && (
                    <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[8px] font-bold bg-secondary/15 text-secondary border border-secondary/20 uppercase tracking-wider">
                      Context: Solar System
                    </span>
                  )}
                </div>
              </div>
            </div>
            
            {isEnhanced ? (
              <button 
                onClick={onTakeQuiz} 
                className="bg-gradient-to-r from-primary to-secondary text-white px-3 py-1.5 rounded-lg text-xs font-semibold shadow-md hover:scale-105 transition-transform flex items-center gap-1 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[14px]">auto_awesome</span> 
                Generate Quiz
              </button>
            ) : (
              <button 
                onClick={onTakeQuiz} 
                className="bg-gradient-to-r from-primary to-secondary text-white px-3 py-1.5 rounded-lg text-xs font-semibold shadow-md hover:scale-105 transition-transform flex items-center gap-1 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[14px]">quiz</span> 
                Take Quiz
              </button>
            )}
          </div>

          {/* Chat History */}
          <div className="flex-1 overflow-y-auto p-md flex flex-col gap-md custom-scrollbar bg-slate-50/50">
            <div className="text-center text-[10px] text-on-surface-variant/70 font-semibold my-2">
              Today, 10:42 AM
            </div>
            
            {messages.map((msg) => (
              <div key={msg.id} className={`flex gap-sm items-start max-w-[85%] ${msg.sender === 'user' ? 'self-end flex-row-reverse' : ''}`}>
                {msg.sender === 'ai' ? (
                  <div className="w-8 h-8 rounded-full bg-primary-container flex-shrink-0 flex items-center justify-center text-on-primary-container mt-1 shadow-sm">
                    <span className="material-symbols-outlined text-xs">smart_toy</span>
                  </div>
                ) : (
                  <div className="w-8 h-8 rounded-full border border-primary-fixed flex-shrink-0 overflow-hidden mt-1 shadow-sm">
                    <img 
                      alt="User" 
                      className="w-full h-full object-cover" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhbQNq3VYIw-soHvF2pF6n-mifX2vIweBlsKvRawINMoxK4Cttyt2RUQSdxy5825o3XxsYRMi8xTAB4y6D5QWLqXBas2v7mlMC2VCKaBjysoAoeFjkMNWzRZsTEZNcjcWo9t5xvgyL8E2T5nzTKAomGHKQf19oA0XXNOp6Nl6TXMFo4p1FayIZ5wRyLVqkepwEO9UgzVTTIIoL8nfIDTCj7DYlH-CidVM2ur42lqh2UgxkQZvJ16CJlcVYtu6QwKYn8vL5VKkkMOos" 
                    />
                  </div>
                )}
                <div 
                  className={`p-3 rounded-2xl text-xs md:text-sm shadow-sm whitespace-pre-wrap leading-relaxed ${
                    msg.sender === 'user' 
                      ? 'chat-bubble-user bg-gradient-to-r from-primary to-secondary text-white rounded-br-none' 
                      : 'chat-bubble-ai bg-white/80 border border-white/50 rounded-bl-none text-on-surface'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Suggested Prompts (Static/Dynamic toggle) */}
            {messages.length === 1 && (
              <div className="flex flex-wrap gap-2 ml-10 mt-1">
                {['Why is Mars red?', 'How big is Jupiter?'].map((prompt) => (
                  <button 
                    key={prompt}
                    onClick={() => handleSend(prompt)}
                    className="glass-panel px-3 py-1.5 rounded-full text-xs font-semibold text-primary border border-primary/20 hover:bg-primary-fixed hover:text-primary transition-all duration-200 cursor-pointer shadow-sm"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            )}

            {isTyping && (
              <div className="flex gap-sm items-start max-w-[85%] mt-1">
                <div className="w-8 h-8 rounded-full bg-primary-container flex-shrink-0 flex items-center justify-center text-on-primary-container mt-1">
                  <span className="material-symbols-outlined text-xs">smart_toy</span>
                </div>
                <div className="chat-bubble-ai p-3 rounded-2xl rounded-bl-none bg-white/80 border border-white/40 flex gap-1 items-center h-10 shadow-sm">
                  <span className="w-2 h-2 bg-primary/60 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                  <span className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                </div>
              </div>
            )}
            
            <div ref={chatEndRef} />
          </div>

          {/* Chat Input */}
          <div className="p-md border-t border-outline-variant/30 bg-surface-container-lowest/90 backdrop-blur-md">
            {isEnhanced && (
              <div className="flex flex-wrap gap-2 mb-4 overflow-x-auto pb-2 scrollbar-hide">
                {['Explain Like I\'m 10', 'Exam Prep', 'Real World Apps', 'Generate Notes', 'Create Flashcards'].map((filter) => (
                  <button 
                    key={filter}
                    onClick={() => handleSend(filter)}
                    className="glass-panel px-3 py-1.5 rounded-full text-[10px] font-bold text-primary hover:bg-primary/10 whitespace-nowrap border border-primary/10 cursor-pointer shadow-sm active:scale-95 transition-transform"
                  >
                    {filter}
                  </button>
                ))}
              </div>
            )}
            <div className="relative flex items-center">
              <button className="absolute left-3 text-outline hover:text-primary transition-colors">
                <span className="material-symbols-outlined">add_circle</span>
              </button>
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                className={`w-full bg-surface-container-low border-none rounded-full py-3 pl-11 text-xs md:text-sm text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary focus:bg-white transition-all shadow-inner ${
                  isEnhanced ? 'pr-24' : 'pr-12'
                }`}
                placeholder="Ask anything about the model..." 
              />
              
              {isEnhanced && (
                <button 
                  onClick={() => handleSend('Tell me Fun Facts!')}
                  className="absolute right-12 text-outline hover:text-primary transition-colors pr-2 border-r border-outline/20"
                >
                  <span className="material-symbols-outlined">mic</span>
                </button>
              )}
              
              <button 
                onClick={() => handleSend()}
                className="absolute right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition-transform shadow-sm cursor-pointer"
              >
                <span className="material-symbols-outlined text-xs">send</span>
              </button>
            </div>
          </div>
        </div>

        {/* AR Preview (Right Side on Desktop, Hidden/Background on Mobile) */}
        <div className="absolute inset-0 md:relative md:flex-1 bg-cover bg-center z-0">
          <img 
            alt="AR view background"
            className="w-full h-full object-cover opacity-75"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA86dxiC3ukuXXIm_HER7DKpK9-l2BtD1hVyQ4fiCYysnZRIpRSbF5hIP2ccTrqFlbEimvB1Zky_VK8HUQ54pYV4COnofECNepZB0FBbV1-nGuzU95sknkgEF_XM3P0AZn5hOssJgTeY7KgvuiQU008TCmna9EfIdNw3EnNu3JuOHDSHB-3jdA-pW_XvAtqRrrRQhDiuuaSI1xMPk-iYm6fYaXf16kWEBi30odL6_-RunPtqDXpr0nk96ZjMmfhsOXiBe9olhIWWm96"
          />
          {/* Pulsing hot spots */}
          <div 
            onClick={() => {
              setSelectedPlanet('Mars');
              handleSend("Explain features of Mars.");
            }}
            className="absolute top-1/3 left-[60%] w-8 h-8 bg-secondary/80 rounded-full border-2 border-white flex items-center justify-center animate-pulse z-10 cursor-pointer shadow-[0_0_15px_rgba(107,56,212,0.8)]"
          >
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
          <div 
            onClick={() => {
              setSelectedPlanet('Sun');
              handleSend("Explain features of the Sun.");
            }}
            className="absolute top-1/2 left-[75%] w-8 h-8 bg-secondary/80 rounded-full border-2 border-white flex items-center justify-center animate-pulse z-10 cursor-pointer shadow-[0_0_15px_rgba(107,56,212,0.8)]" 
            style={{ animationDelay: '0.5s' }}
          >
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
          {/* Contextual float tag */}
          <div className="absolute bottom-6 right-6 glass-panel px-6 py-3 rounded-xl z-10 hidden md:block">
            <h2 className="text-base font-bold text-on-surface">The Solar System</h2>
            <p className="text-xs text-on-surface-variant font-semibold">Active Interactive 3D Model</p>
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
        <button onClick={() => onNavigate('ai-tutor')} className="flex flex-col items-center justify-center bg-gradient-to-br from-primary to-secondary text-on-primary rounded-xl p-2 shadow-md hover:bg-white/5 transition-all active:scale-90 duration-150 w-20 transform -translate-y-2 border border-white/20">
          <span className="material-symbols-outlined mb-1 fill-icon">smart_toy</span>
          <span className="text-[10px] font-bold">AI Tutor</span>
        </button>
        <button onClick={() => onNavigate('dashboard')} className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-white/5 transition-all active:scale-90 duration-150">
          <span className="material-symbols-outlined mb-1">dashboard</span>
          <span className="text-[10px] font-semibold">Dashboard</span>
        </button>
      </nav>
    </div>
  );
}
