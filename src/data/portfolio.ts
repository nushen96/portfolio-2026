export type Locale = 'en' | 'fr';

export interface Profile {
  name: string;
  titles: string[];
  location: string;
  contact: {
    email: string;
    phone: string;
    github: string;
    linkedin: string;
  };
  summary: Record<Locale, string>;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  highlights: Record<Locale, string[]>;
  tools: string[];
}

export interface EducationItem {
  degree: string;
  school: string;
  year: string;
}

export interface PortfolioData {
  profile: Profile;
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: string[];
}

export const portfolio: PortfolioData = {
  profile: {
    name: 'Abdoulaye Diagne',
    titles: ['Lead Developer', 'Head of Digital Banking'],
    location: 'Dakar, Senegal',
    contact: {
      email: 'abdiagne.dev@gmail.com',
      phone: '+221 77 434 47 60',
      github: 'nushen96',
      linkedin: 'papidiagne30',
    },
    summary: {
      en: '5+ years experienced software engineer specializing in MERN stack, Python, and FastAPI. Passionate about problem-solving, science, and building robust financial and industrial software.',
      fr: "Ingénieur logiciel avec plus de 5 ans d'expérience, spécialisé dans la stack MERN, Python et FastAPI. Passionné par la résolution de problèmes, la science et le développement de logiciels financiers et industriels robustes.",
    },
  },
  experience: [
    {
      company: 'Lucisun',
      role: 'Lead Developer (Freelance)',
      period: '10/2023 - Present',
      tools: ['Next.js', 'FastAPI', 'Python', 'TypeScript', 'Time-series / CSV processing'],
      highlights: {
        en: [
          'Designed a robust API for solar energy data (irradiance/meteo) with multi-million dollar revenue potential.',
          'Built a full-stack app for global sensor fleet management using Next.js and FastAPI.',
          'Optimized processing of large time-series CSVs.',
        ],
        fr: [
          "Conception d'une API robuste pour les données solaires avec un potentiel de revenus de plusieurs millions.",
          "Développement d'une application full-stack pour la gestion de capteurs avec Next.js et FastAPI.",
          'Optimisation du traitement de fichiers CSV volumineux.',
        ],
      },
    },
    {
      company: 'La Banque Outarde',
      role: 'Head of Digital Banking',
      period: '08/2022 - Present',
      tools: ['Groovy', 'Python', 'FastAPI', 'React', 'Oracle', 'UEMOA / BCEAO'],
      highlights: {
        en: [
          'Led UEMOA financial systems interoperability project initiated by BCEAO.',
          'Managed developer teams for internal banking tools (loan validation, mobile apps).',
          'Stack: Groovy, Python (FastAPI), React, Oracle.',
        ],
        fr: [
          'Direction du projet d\'interopérabilité des systèmes financiers UEMOA (BCEAO).',
          "Gestion d'équipes pour les outils bancaires internes (validation de prêts, applications mobiles).",
          'Stack: Groovy, Python (FastAPI), React, Oracle.',
        ],
      },
    },
    {
      company: 'Kalpay Inc.',
      role: 'Lead Developer',
      period: '01/2022 - 07/2022',
      tools: ['Visual Paradigm', 'Specifications', 'Digital Banking', 'Onboarding', 'Payments'],
      highlights: {
        en: [
          'Defined general specs and roadmap for digital banking creation.',
          'Designed specs for Onboarding, Accounts, and Payments using Visual Paradigm.',
        ],
        fr: [
          'Définition des spécifications et de la roadmap pour la création de la banque digitale.',
          'Conception des spécifications pour l\'Onboarding, les Comptes et les Paiements via Visual Paradigm.',
        ],
      },
    },
    {
      company: 'Weego',
      role: 'Full Stack Developer',
      period: '02/2019 - 12/2019',
      tools: ['Loopback', 'React Native', 'Storybook', 'Routing algorithms'],
      highlights: {
        en: [
          'Launched a ride-booking service with optimized routing algorithms (Loopback).',
          'Built mobile UI with React Native and Storybook.',
        ],
        fr: [
          'Lancement d\'un service de VTC avec algorithmes de routage optimisés (Loopback).',
          "Développement de l'UI mobile avec React Native et Storybook.",
        ],
      },
    },
  ],
  education: [
    {
      degree: 'Master of Engineering - Computer Science',
      school: 'Ecole Supérieure Polytechnique de Dakar',
      year: '2019',
    },
  ],
  skills: [
    'Next.js',
    'React',
    'TypeScript',
    'Python',
    'FastAPI',
    'Docker',
    'AWS',
    'Java',
    'Spring Boot',
  ],
};
