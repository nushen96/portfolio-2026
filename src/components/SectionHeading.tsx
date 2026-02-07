'use client';

import { motion } from 'framer-motion';

export function SectionHeading({ label }: { label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      className="flex items-center gap-4 mb-12"
    >
      <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#0033ff] dark:text-[#4d6fff]">
        {label}
      </span>
      <div className="h-px bg-[#0033ff]/20 dark:bg-[#4d6fff]/20 flex-1" />
    </motion.div>
  );
}
