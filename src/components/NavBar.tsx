'use client';

import { useState, useEffect } from 'react';
import { MapPin } from 'lucide-react';
import { Link, usePathname } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import { ThemeToggle } from './ThemeToggle';

export function NavBar({ location }: { location: string }) {
  const locale = useLocale();
  const pathname = usePathname();
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString('en-GB', {
          hour: '2-digit',
          minute: '2-digit',
          timeZone: 'Africa/Dakar',
        })
      );
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-40 flex justify-between items-center px-6 md:px-10 py-5 border-b border-black/5 dark:border-white/5 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-sm">
      <div className="flex flex-col gap-0.5">
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-black/40 dark:text-white/40">
          Location
        </span>
        <div className="flex items-center gap-2">
          <MapPin size={12} className="text-[#0033ff] dark:text-[#4d6fff]" />
          <span className="text-xs font-medium tracking-tight">{location}</span>
        </div>
      </div>

      <div className="flex items-center gap-4 md:gap-8">
        <div className="hidden md:flex flex-col items-end gap-0.5">
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-black/40 dark:text-white/40">
            GMT (Dakar)
          </span>
          <span className="text-xs font-mono font-medium tracking-widest">
            {time || '--:--'}
          </span>
        </div>
        <ThemeToggle />
        <div className="flex border border-black/10 dark:border-white/10 p-0.5">
          <Link
            href={pathname}
            locale="en"
            className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider transition-colors ${
              locale === 'en'
                ? 'bg-black text-white dark:bg-white dark:text-black'
                : 'hover:bg-black/5 dark:hover:bg-white/5'
            }`}
          >
            EN
          </Link>
          <Link
            href={pathname}
            locale="fr"
            className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider transition-colors ${
              locale === 'fr'
                ? 'bg-black text-white dark:bg-white dark:text-black'
                : 'hover:bg-black/5 dark:hover:bg-white/5'
            }`}
          >
            FR
          </Link>
        </div>
      </div>
    </nav>
  );
}
