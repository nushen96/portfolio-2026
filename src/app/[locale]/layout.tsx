import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Inter } from 'next/font/google';
import { routing } from '@/i18n/routing';
import { SetLocaleLang } from '@/components/SetLocaleLang';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === 'en';
  return {
    title: 'Abdoulaye Diagne — Lead Developer',
    description: isEn
      ? '5+ years experienced software engineer. MERN, Python, FastAPI. Dakar, Senegal.'
      : "Ingénieur logiciel 5+ ans d'expérience. MERN, Python, FastAPI. Dakar, Sénégal.",
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as 'en' | 'fr')) notFound();
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <SetLocaleLang locale={locale} />
      <div className={`${inter.variable} font-sans antialiased`}>
        {children}
      </div>
    </NextIntlClientProvider>
  );
}
