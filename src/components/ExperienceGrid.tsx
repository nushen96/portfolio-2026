'use client';

import { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { portfolio } from '@/data/portfolio';
import { ExperienceModal } from './ExperienceModal';
import { SectionHeading } from './SectionHeading';
import type { ExperienceItem, Locale } from '@/data/portfolio';

export function ExperienceGrid({ locale }: { locale: Locale }) {
  const [selected, setSelected] = useState<ExperienceItem | null>(null);

  return (
    <section id="experience" className="px-6 md:px-10 max-w-7xl mx-auto py-24 lg:py-32">
      <SectionHeading
        label={locale === 'en' ? 'Experience' : 'Expérience'}
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-black/5 border border-black/5">
        {portfolio.experience.map((exp, i) => (
          <motion.button
            key={exp.company}
            type="button"
            onClick={() => setSelected(exp)}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className="group relative text-left bg-white p-8 cursor-pointer transition-all hover:border-[#0033ff]/30 hover:shadow-xl"
          >
            <div className="flex justify-between items-start mb-6">
              <span className="text-[10px] font-mono tracking-tighter text-black/40">
                {exp.period}
              </span>
              <ArrowUpRight
                size={14}
                className="text-black/20 group-hover:text-[#0033ff] transition-colors"
              />
            </div>
            <h3 className="text-2xl font-bold tracking-tighter mb-1 group-hover:text-[#0033ff] transition-colors">
              {exp.company}
            </h3>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/60 mb-6">
              {exp.role}
            </p>
            <p className="text-sm text-black/60 mb-8 line-clamp-2 leading-relaxed">
              {(exp.highlights[locale] as string[])[0]}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {exp.tools.slice(0, 4).map((tool) => (
                <span
                  key={tool}
                  className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 border border-black/5"
                >
                  {tool}
                </span>
              ))}
              {exp.tools.length > 4 && (
                <span className="text-[9px] font-bold text-black/30">
                  +{exp.tools.length - 4}
                </span>
              )}
            </div>
          </motion.button>
        ))}
      </div>

      {typeof document !== 'undefined' &&
        createPortal(
          <ExperienceModal
            project={selected}
            locale={locale}
            onClose={() => setSelected(null)}
          />,
          document.body
        )}
    </section>
  );
}
