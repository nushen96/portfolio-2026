'use client';

import { motion } from 'framer-motion';
import { Cpu, Zap, ShieldCheck, ArrowUpRight } from 'lucide-react';
import type { Locale } from '@/data/portfolio';

type Props = {
  name: string;
  titles: string;
  summary: string;
  locale: Locale;
};

const itemVars = {
  initial: { y: 20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const lineVars = {
  initial: { scaleX: 0 },
  animate: { scaleX: 1, transition: { duration: 1, ease: 'circOut' } },
};

const focusItems = [
  { icon: Cpu, label: { en: 'Fintech Architecture', fr: 'Architecture Fintech' } },
  { icon: Zap, label: { en: 'Solar Energy Systems', fr: 'Systèmes Énergie Solaire' } },
  { icon: ShieldCheck, label: { en: 'Banking Security', fr: 'Sécurité Bancaire' } },
];

export function HeroSection({ name, titles, summary, locale }: Props) {
  const [firstName, lastName] = name.split(' ');

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-10 max-w-7xl mx-auto pt-24 pb-16">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
        className="flex flex-col"
      >
        <motion.div variants={itemVars} className="mb-6">
          <span className="inline-block py-1 px-2 bg-black text-white text-[10px] font-bold tracking-[0.3em] uppercase">
            Portfolio 2025
          </span>
        </motion.div>

        <motion.h1
          variants={itemVars}
          className="text-6xl md:text-8xl lg:text-[9rem] font-bold tracking-tighter leading-[0.85] mb-8"
        >
          {firstName}
          <br />
          {lastName}
          <span className="text-[#0033ff]">.</span>
        </motion.h1>

        <motion.div
          variants={lineVars}
          className="h-px bg-black/10 w-full origin-left mb-10"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <motion.div variants={itemVars} className="lg:col-span-4">
            <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-black/40 mb-4">
              {locale === 'en' ? 'Core Focus' : 'Domaines Clés'}
            </h2>
            <ul className="space-y-3">
              {focusItems.map(({ icon: Icon, label }) => (
                <li
                  key={label.en}
                  className="flex items-center gap-3 group cursor-default"
                >
                  <div className="w-5 h-5 flex items-center justify-center border border-black/10 group-hover:border-[#0033ff] transition-colors">
                    <Icon
                      size={10}
                      className="group-hover:text-[#0033ff] transition-colors"
                    />
                  </div>
                  <span className="text-[13px] font-medium tracking-tight">
                    {label[locale]}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVars} className="lg:col-span-5">
            <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-black/40 mb-4">
              {locale === 'en' ? 'About' : 'À propos'}
            </h2>
            <p className="text-base md:text-lg leading-relaxed tracking-tight text-black/80">
              {summary}
            </p>
            <p className="text-sm text-black/40 mt-4">{titles}</p>
          </motion.div>

          <motion.div
            variants={itemVars}
            className="lg:col-span-3 flex flex-col items-start lg:items-end justify-end gap-6"
          >
            <a
              href="#contact"
              className="group relative flex items-center justify-center gap-3 bg-black text-white px-8 py-4 transition-all hover:bg-[#0033ff] active:scale-95"
            >
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase">
                {locale === 'en' ? 'Get in Touch' : 'Me Contacter'}
              </span>
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
