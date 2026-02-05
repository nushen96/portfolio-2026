# Design System — Minimal Monochrome (Swiss/Bauhaus)

## Reference Implementation

```tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, MapPin, Cpu, ShieldCheck, Zap, Globe } from 'lucide-react';

const PortfolioHero = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: 'Africa/Dakar' }));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: 'Africa/Dakar' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Animation Variants
  const containerVars = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const itemVars = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const lineVars = {
    initial: { scaleX: 0 },
    animate: { scaleX: 1, transition: { duration: 1, ease: "circOut" } }
  };

  return (
    <div className="relative min-h-screen w-full bg-white text-black selection:bg-[#0033ff] selection:text-white font-sans antialiased overflow-hidden">
      {/* Background Grid Pattern - Swiss Grid */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Top Navigation / Status Bar */}
      <nav className="relative z-10 flex justify-between items-start p-6 md:p-10 border-b border-black/5">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col gap-1"
        >
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-black/40">Location</span>
          <div className="flex items-center gap-2">
            <MapPin size={12} className="text-[#0033ff]" />
            <span className="text-xs font-medium tracking-tight">Dakar, Senegal</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-end gap-1"
        >
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-black/40">Local Time (GMT)</span>
          <span className="text-xs font-mono font-medium tracking-widest">{time}</span>
        </motion.div>
      </nav>

      <main className="relative z-10 flex flex-col justify-center px-6 md:px-10 py-20 max-w-7xl mx-auto min-h-[calc(100vh-200px)]">
        <motion.div
          variants={containerVars}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0"
        >
          {/* Main Title Section */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            <motion.div variants={itemVars} className="mb-4">
              <span className="inline-block py-1 px-2 bg-black text-white text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
                Portfolio 2024
              </span>
            </motion.div>

            <motion.h1
              variants={itemVars}
              className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.85] mb-8"
            >
              Abdoulaye<br />Diagne<span className="text-[#0033ff]">.</span>
            </motion.h1>

            <motion.div variants={lineVars} className="h-px bg-black/10 w-full origin-left mb-8" />

            <div className="flex flex-col md:flex-row gap-8 md:gap-24 items-start">
              <motion.div variants={itemVars} className="max-w-xs">
                <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-black/40 mb-4">Core Focus</h2>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 group cursor-default">
                    <div className="w-5 h-5 flex items-center justify-center border border-black/10 group-hover:border-[#0033ff] transition-colors">
                      <Cpu size={10} className="group-hover:text-[#0033ff] transition-colors" />
                    </div>
                    <span className="text-[13px] font-medium tracking-tight">Fintech Architecture</span>
                  </li>
                  <li className="flex items-center gap-3 group cursor-default">
                    <div className="w-5 h-5 flex items-center justify-center border border-black/10 group-hover:border-[#0033ff] transition-colors">
                      <Zap size={10} className="group-hover:text-[#0033ff] transition-colors" />
                    </div>
                    <span className="text-[13px] font-medium tracking-tight">Solar Energy Systems</span>
                  </li>
                  <li className="flex items-center gap-3 group cursor-default">
                    <div className="w-5 h-5 flex items-center justify-center border border-black/10 group-hover:border-[#0033ff] transition-colors">
                      <ShieldCheck size={10} className="group-hover:text-[#0033ff] transition-colors" />
                    </div>
                    <span className="text-[13px] font-medium tracking-tight">Banking Security</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div variants={itemVars} className="max-w-sm">
                <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-black/40 mb-4">Biography</h2>
                <p className="text-base md:text-lg leading-relaxed font-normal tracking-tight text-black/80">
                  Lead Developer and Head of Digital Banking with over 5 years of experience.
                  Architecting robust financial ecosystems and sustainable energy solutions
                  with a surgical focus on performance, security, and scalability.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Right Sidebar Section */}
          <div className="lg:col-span-4 flex flex-col justify-end lg:items-end lg:pb-8">
            <motion.div variants={itemVars} className="space-y-12">
              <div className="flex flex-col lg:items-end gap-2">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-black/40">Current Position</span>
                <span className="text-sm font-semibold text-right">Lead Developer</span>
                <span className="text-[11px] font-mono tracking-tighter text-black/60 bg-black/5 px-2 py-0.5">@ HEAD OF DIGITAL BANKING</span>
              </div>

              <div className="flex flex-col lg:items-end gap-6">
                <button className="group relative flex items-center justify-center gap-3 bg-black text-white px-8 py-4 transition-all hover:bg-[#0033ff] active:scale-95 overflow-hidden">
                  <span className="relative z-10 text-[11px] font-bold tracking-[0.2em] uppercase">Inquire Project</span>
                  <ArrowUpRight size={14} className="relative z-10 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>

                <div className="flex items-center gap-6 text-black/40">
                  <a href="#" className="hover:text-[#0033ff] transition-colors text-[10px] font-bold tracking-widest uppercase underline underline-offset-4">LinkedIn</a>
                  <a href="#" className="hover:text-[#0033ff] transition-colors text-[10px] font-bold tracking-widest uppercase underline underline-offset-4">GitHub</a>
                  <a href="#" className="hover:text-[#0033ff] transition-colors text-[10px] font-bold tracking-widest uppercase underline underline-offset-4">CV</a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </main>

      {/* Bottom Information Ticker */}
      <footer className="absolute bottom-0 left-0 w-full p-6 md:p-10 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <div className="w-2 h-2 rounded-full bg-[#0033ff] animate-pulse" />
          <span className="text-[10px] font-bold tracking-[0.1em] uppercase">Available for select collaborations</span>
        </div>

        <div className="flex gap-12 overflow-hidden whitespace-nowrap opacity-20 hover:opacity-100 transition-opacity duration-500">
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase">React.js</span>
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase">Node.js</span>
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase">Cloud Infra</span>
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase">Security</span>
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase">PostgreSQL</span>
        </div>
      </footer>

      {/* Decorative Bauhaus Element */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 0.1, x: 0 }}
        transition={{ duration: 1.5, delay: 1 }}
        className="absolute top-1/2 -right-20 -translate-y-1/2 hidden xl:block select-none pointer-events-none"
      >
        <div className="flex flex-col items-end rotate-90 origin-right translate-y-full translate-x-1/2">
          <span className="text-[12rem] font-black leading-none text-transparent border-text stroke-black/20" style={{ WebkitTextStroke: '1px black' }}>
            ENGINEER
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default PortfolioHero;
```

## Design Tokens

### Colors
- **Background:** `#ffffff` (white)
- **Text:** `#000000` (black)
- **Accent:** `#0033ff` (electric blue)
- **Muted text:** `text-black/40` (40% opacity black)
- **Borders:** `border-black/5` to `border-black/10`
- **Tags/badges:** `bg-black text-white` or `bg-black/5`

### Typography
- **Font:** Inter (geometric sans-serif) — `font-sans`
- **Headings:** Bold, tracking-tighter, leading-[0.85]
- **Labels:** `text-[10px] font-bold tracking-[0.2em] uppercase`
- **Body:** `text-base md:text-lg leading-relaxed font-normal tracking-tight`
- **Mono accents:** `font-mono text-[10px] tracking-widest`

### Spacing (Refined Scale)
- **Page padding:** `p-6 md:p-10`
- **Section gaps:** `gap-8 md:gap-24`
- **Component spacing:** `space-y-3` to `space-y-12`
- **Small elements:** `gap-2` to `gap-6`

### Interactions
- **Hover:** `hover:bg-[#0033ff]`, `hover:text-[#0033ff]`
- **Active:** `active:scale-95`
- **Transitions:** `transition-colors`, `transition-transform`
- **Buttons:** `bg-black text-white px-8 py-4` with hover to accent

### Layout Patterns
- **Grid:** 12-column grid (`grid-cols-12`)
- **Max width:** `max-w-7xl`
- **Background:** Subtle grid pattern at `opacity-[0.03]`
- **Decorative:** Thin 1px horizontal lines, status indicators with pulse animation

### Animation
- **Stagger children:** 0.1s delay between items
- **Item entrance:** `y: 20 → 0`, `opacity: 0 → 1`, duration 0.8s
- **Easing:** `[0.16, 1, 0.3, 1]` (custom spring-like)
- **Line reveal:** `scaleX: 0 → 1`, origin-left
