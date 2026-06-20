import { useState, useEffect } from 'react';
import { useSecretTrigger } from './useSecretTrigger';
import { motion, AnimatePresence } from 'framer-motion';

const scrollbarStyles = `
  .custom-scrollbar::-webkit-scrollbar {
    width: 4px;
  }
  .custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: #27272a;
    border-radius: 10px;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #3f3f46;
  }
`;

export default function DevPanel() {
  const isActivated = useSecretTrigger();
  const [isOpen, setIsOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (isActivated) {
      setIsOpen(true);
      setShowToast(true);
      const timer = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [isActivated]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Check if already in devMode on mount
  useEffect(() => {
    if (typeof window !== 'undefined' && localStorage.getItem('devMode') === 'true') {
      // We don't necessarily want to open the panel on every refresh, 
      // but the guard should remain active.
    }
  }, []);

  return (
    <>
      <style>{scrollbarStyles}</style>
      <AnimatePresence>
        {showToast && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-8 left-8 z-[100] bg-emerald-500/10 border border-emerald-500/50 backdrop-blur-md text-emerald-400 px-6 py-3 rounded-2xl shadow-[0_0_30px_rgba(16,185,129,0.2)] font-mono text-xs uppercase tracking-widest pointer-events-none"
          >
            Dev Panel Activated
          </motion.div>
        )}
      </AnimatePresence>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-80 bg-zinc-950/95 backdrop-blur-3xl border-l border-white/5 z-[80] shadow-[-20px_0_50px_rgba(0,0,0,0.5)] overflow-hidden"
          >
            <div className="p-8 h-full flex flex-col">
              <div className="flex justify-between items-center mb-12">
                <div>
                  <div className="text-[9px] text-zinc-500 font-mono tracking-[0.3em] uppercase mb-1">Internal Protocol</div>
                  <h2 className="text-white text-lg font-black tracking-tighter uppercase">Developer <span className="text-emerald-500">Vault</span></h2>
                </div>
                <div className="flex gap-2">
                  <a 
                    href="/" 
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-all cursor-pointer border-0 flex items-center justify-center"
                    title="Return to Site"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                  </a>
                  <button 
                    onClick={() => setIsOpen(false)} 
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-all cursor-pointer border-0 flex items-center justify-center"
                    aria-label="Close"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  </button>
                </div>
              </div>

              <nav className="space-y-3 flex-1 overflow-y-auto pr-4 -mr-4 custom-scrollbar">
                {[
                  { name: 'ExpatBuildr X', href: '/internal/expatbuildr-x' },
                  { name: 'Tony Lead Strategy', href: '/internal/tony-lead-strategy' },
                  { name: 'LinkedIn OS', href: '/internal/linkedin-os' },
                  { name: 'X Strategy', href: '/internal/x-strategy' },
                  { name: 'LinkedIn Strategy', href: '/internal/linkedin-strategy' },
                  { name: 'Content Strategy', href: '/internal/content-strategy' },
                  { name: 'Tweet Remixer', href: '/internal/tweet-remixer' },
                  { name: 'Etsy Playbook', href: '/internal/etsy-playbook' },
                  { name: 'Upwork Blitz', href: '/internal/upwork-blitz-strategy' },
                  { name: 'YouTube Outliers', href: '/internal/youtube-outlier-architecture' }
                ].map((item) => (
                  <a 
                    key={item.href}
                    href={item.href} 
                    className="flex items-center group px-5 py-4 rounded-2xl bg-white/5 border border-white/5 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all text-sm font-medium no-underline"
                  >
                    <span className="text-zinc-400 group-hover:text-white transition-colors">{item.name}</span>
                    <svg className="ml-auto w-4 h-4 text-zinc-600 group-hover:text-emerald-500 transform group-hover:translate-x-1 transition-all" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </a>
                ))}
              </nav>

              <div className="mt-auto pt-8 border-t border-white/5 space-y-4">
                <button 
                  onClick={() => {
                    localStorage.removeItem('devMode');
                    window.location.href = '/';
                  }}
                  className="w-full py-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono uppercase tracking-widest hover:bg-red-500/20 transition-all cursor-pointer"
                >
                  Deactivate Admin Mode
                </button>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    <div className="absolute w-2 h-2 rounded-full bg-emerald-500 animate-ping"></div>
                  </div>
                  <div>
                    <div className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest">Access Mode</div>
                    <div className="text-emerald-500 text-xs font-bold font-mono">ENCRYPTED_AUTH</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
