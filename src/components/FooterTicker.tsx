'use client';

import { portfolio } from '@/data/portfolio';
import type { Locale } from '@/data/portfolio';

export function FooterTicker({ locale }: { locale: Locale }) {
  const skills = portfolio.skills;
  const doubled = [...skills, ...skills];

  return (
    <footer className="fixed bottom-0 left-0 w-full z-40 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-sm border-t border-black/5 dark:border-white/5 px-4 py-3 flex justify-between items-center overflow-hidden">
      <div className="flex items-center gap-3 whitespace-nowrap px-2 shrink-0">
        <div className="w-2 h-2 rounded-full bg-[#0033ff] dark:bg-[#4d6fff] animate-pulse" />
        <span className="text-[10px] font-bold tracking-[0.1em] uppercase">
          {locale === 'en'
            ? 'Available for collaborations'
            : 'Disponible pour collaborations'}
        </span>
      </div>

      <div className="hidden md:flex overflow-hidden ml-8">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {doubled.map((skill, i) => (
            <span
              key={`${skill}-${i}`}
              className="text-[10px] font-mono tracking-[0.3em] uppercase opacity-30"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
