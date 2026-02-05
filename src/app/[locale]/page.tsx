import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { portfolio } from '@/data/portfolio';
import { NavBar } from '@/components/NavBar';
import { HeroSection } from '@/components/HeroSection';
import { ExperienceGrid } from '@/components/ExperienceGrid';
import { SectionHeading } from '@/components/SectionHeading';
import { FooterTicker } from '@/components/FooterTicker';
import type { Locale } from '@/data/portfolio';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

type Props = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const validLocale = (locale === 'fr' ? 'fr' : 'en') as Locale;
  setRequestLocale(locale);
  const t = await getTranslations('section');

  return (
    <div className="relative min-h-screen w-full bg-white text-black selection:bg-[#0033ff] selection:text-white overflow-x-hidden">
      {/* Swiss Grid Background */}
      <div
        className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <NavBar location={portfolio.profile.location} />

      <main className="relative z-10">
        <HeroSection
          name={portfolio.profile.name}
          titles={portfolio.profile.titles.join(' · ')}
          summary={portfolio.profile.summary[validLocale]}
          locale={validLocale}
        />

        <ExperienceGrid locale={validLocale} />

        {/* Education */}
        <section
          id="education"
          className="px-6 md:px-10 max-w-7xl mx-auto py-24 lg:py-32"
        >
          <SectionHeading label={t('education')} />
          <div>
            {portfolio.education.map((edu) => (
              <div
                key={edu.school}
                className="flex flex-col md:flex-row justify-between py-8 border-b border-black/5 items-start md:items-center"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#0033ff]">
                    {edu.school}
                  </span>
                  <h4 className="text-xl font-bold tracking-tight">
                    {edu.degree}
                  </h4>
                </div>
                <span className="text-xs font-mono font-medium text-black/40 mt-2 md:mt-0">
                  {edu.year}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section
          id="skills"
          className="px-6 md:px-10 max-w-7xl mx-auto py-24 lg:py-32"
        >
          <SectionHeading label={t('skills')} />
          <div className="flex flex-wrap gap-3">
            {portfolio.skills.map((skill) => (
              <span
                key={skill}
                className="px-5 py-3 border border-black/10 hover:border-[#0033ff] transition-colors text-sm font-medium tracking-tight cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="px-6 md:px-10 max-w-7xl mx-auto py-24 lg:py-32 mb-16"
        >
          <SectionHeading label={t('contact')} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-black/5">
            <a
              href={`mailto:${portfolio.profile.contact.email}`}
              className="group flex flex-col gap-4 p-8 bg-white hover:bg-black hover:text-white transition-all"
            >
              <Mail size={20} className="text-[#0033ff]" />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-black/40 group-hover:text-white/40">
                Email
              </span>
              <span className="text-sm font-bold truncate">
                {portfolio.profile.contact.email}
              </span>
            </a>
            <a
              href={`tel:${portfolio.profile.contact.phone.replace(/\s/g, '')}`}
              className="group flex flex-col gap-4 p-8 bg-white hover:bg-black hover:text-white transition-all"
            >
              <Phone size={20} className="text-[#0033ff]" />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-black/40 group-hover:text-white/40">
                {validLocale === 'en' ? 'Phone' : 'Téléphone'}
              </span>
              <span className="text-sm font-bold">
                {portfolio.profile.contact.phone}
              </span>
            </a>
            <a
              href={`https://github.com/${portfolio.profile.contact.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-4 p-8 bg-white hover:bg-black hover:text-white transition-all"
            >
              <Github size={20} className="text-[#0033ff]" />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-black/40 group-hover:text-white/40">
                GitHub
              </span>
              <span className="text-sm font-bold">
                {portfolio.profile.contact.github}
              </span>
            </a>
            <a
              href={`https://linkedin.com/in/${portfolio.profile.contact.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-4 p-8 bg-white hover:bg-black hover:text-white transition-all"
            >
              <Linkedin size={20} className="text-[#0033ff]" />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-black/40 group-hover:text-white/40">
                LinkedIn
              </span>
              <span className="text-sm font-bold">
                {portfolio.profile.contact.linkedin}
              </span>
            </a>
          </div>
        </section>
      </main>

      <FooterTicker locale={validLocale} />
    </div>
  );
}
