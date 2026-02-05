'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import type { ExperienceItem, Locale } from '@/data/portfolio';

type Props = {
  project: ExperienceItem | null;
  locale: Locale;
  onClose: () => void;
};

export function ExperienceModal({ project, locale, onClose }: Props) {
  useEffect(() => {
    if (!project) return;
    const handleEscape = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-white/90 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 20, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.98 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="w-full max-w-2xl bg-white border border-black/10 p-8 md:p-12 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 hover:bg-black/5 transition-colors"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <div className="mb-8">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#0033ff] mb-2 block">
                {project.period}
              </span>
              <h3 className="text-3xl font-bold tracking-tighter mb-1">
                {project.company}
              </h3>
              <p className="text-sm font-medium text-black/40 uppercase tracking-widest">
                {project.role}
              </p>
            </div>

            <div className="space-y-6 mb-10">
              <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-black/40">
                {locale === 'en' ? 'Key Highlights' : 'Réalisations'}
              </h4>
              <ul className="space-y-4">
                {(project.highlights[locale] as string[]).map((h, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex gap-4 text-sm leading-relaxed text-black/80"
                  >
                    <span className="text-[#0033ff] mt-0.5 shrink-0">
                      &bull;
                    </span>
                    {h}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-black/40">
                {locale === 'en' ? 'Technologies' : 'Technologies'}
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, i) => (
                  <motion.span
                    key={tool}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.15 + i * 0.03 }}
                    className="px-2 py-1 bg-black text-white text-[9px] font-bold uppercase tracking-wider"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
