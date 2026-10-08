import React, { useState, useEffect } from 'react';
import { CODEKINGS_CONTENT } from './data/content';
import { ThemeToggle } from './components/ThemeToggle';
import { 
  Mail, 
  Linkedin, 
  Github, 
  ExternalLink, 
  Menu, 
  X, 
  Bike, 
  Leaf, 
  Quote, 
  ArrowRight,
  CheckCircle2,
  Copy,
  Check
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const content = CODEKINGS_CONTENT;

  const copyEmail = () => {
    navigator.clipboard.writeText(content.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-300">
      {/* ===== NAVIGATION ===== */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-3.5 bg-[var(--nav-bg)] backdrop-blur-md border-b border-[var(--border)] transition-colors duration-300">
        <div className="max-w-[900px] mx-auto flex items-center justify-between">
          {/* Logo from codekings.be */}
          <a href="#" className="flex items-center gap-3 focus:outline-none group">
            <img
              src="./images/logo_white.png"
              alt="CodeKings"
              className="h-11 sm:h-12 w-auto object-contain logo-dark transition-opacity duration-200 group-hover:opacity-90"
            />
            <img
              src="./images/logo_dark.png"
              alt="CodeKings"
              className="h-11 sm:h-12 w-auto object-contain logo-light transition-opacity duration-200 group-hover:opacity-90"
            />
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-7">
            <div className="flex items-center gap-6 text-sm font-medium text-[var(--text-muted)]">
              <a href="#about" className="hover:text-[var(--accent)] transition-colors">
                {content.nav.about}
              </a>
              <a href="#services" className="hover:text-[var(--accent)] transition-colors">
                {content.nav.services}
              </a>
              <a href="#tech" className="hover:text-[var(--accent)] transition-colors">
                {content.nav.tech}
              </a>
              <a href="#consulting" className="hover:text-[var(--accent)] transition-colors">
                {content.nav.consulting}
              </a>
              <a href="#clients" className="hover:text-[var(--accent)] transition-colors">
                {content.nav.clients}
              </a>
              <a href="#contact" className="hover:text-[var(--accent)] transition-colors">
                {content.nav.contact}
              </a>
            </div>

            {/* Theme Toggle */}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[var(--text-muted)] hover:text-[var(--text)] rounded-lg focus:outline-none"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 border-t border-[var(--border)] mt-3 flex flex-col gap-3 text-sm font-medium text-[var(--text-muted)]">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[var(--accent)]"
            >
              {content.nav.about}
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[var(--accent)]"
            >
              {content.nav.services}
            </a>
            <a
              href="#tech"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[var(--accent)]"
            >
              {content.nav.tech}
            </a>
            <a
              href="#consulting"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[var(--accent)]"
            >
              {content.nav.consulting}
            </a>
            <a
              href="#clients"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[var(--accent)]"
            >
              {content.nav.clients}
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[var(--accent)]"
            >
              {content.nav.contact}
            </a>
          </div>
        )}
      </nav>

      {/* Main Container */}
      <main className="max-w-[900px] mx-auto px-6">
        {/* ===== HERO ===== */}
        <section className="pt-36 pb-20 md:pt-44 md:pb-24 flex flex-col justify-center">
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--accent-dim)] text-[var(--accent)] text-xs font-semibold uppercase tracking-wider mb-6 w-fit">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
            <span>{content.hero.label}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
            I craft{' '}
            <span className="highlight-text">Android apps</span>{' '}
            that people love to use.
          </h1>

          <p className="text-lg sm:text-xl text-[var(--text-muted)] max-w-2xl leading-relaxed mb-8">
            {content.hero.p}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-semibold text-white bg-[var(--accent)] hover:opacity-90 transition-all shadow-sm"
            >
              {content.hero.ctaPrimary}
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-semibold text-[var(--text)] border border-[var(--border)] hover:bg-[var(--bg-card)] hover:border-[var(--text-muted)] transition-all"
            >
              {content.hero.ctaOutline}
            </a>
          </div>
        </section>

        {/* ===== STATS BAR ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-20">
          <div className="card-surface rounded-xl p-6 text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-[var(--accent)] tracking-tight">
              {content.stats.yearsNumber}
            </div>
            <div className="text-xs text-[var(--text-muted)] mt-1 font-medium">
              {content.stats.yearsLabel}
            </div>
          </div>
          <div className="card-surface rounded-xl p-6 text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-[var(--accent)] tracking-tight">
              {content.stats.langNumber}
            </div>
            <div className="text-xs text-[var(--text-muted)] mt-1 font-medium">
              {content.stats.langLabel}
            </div>
          </div>
          <div className="card-surface rounded-xl p-6 text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-[var(--accent)] tracking-tight">
              {content.stats.ratingNumber}
            </div>
            <div className="text-xs text-[var(--text-muted)] mt-1 font-medium">
              {content.stats.ratingLabel}
            </div>
          </div>
        </div>

        <hr className="divider mb-20" />

        {/* ===== ABOUT ===== */}
        <section id="about" className="mb-20 scroll-mt-24">
          <div className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)] mb-2">
            {content.about.label}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6">
            {content.about.title}
          </h2>

          <div className="space-y-4 text-base text-[var(--text-muted)] leading-relaxed max-w-2xl">
            <p>
              I’m <strong className="text-[var(--text)]">Bram</strong>, a freelance Android developer based in Belgium, working under the name <strong className="text-[var(--text)]">CodeKings</strong>. Although I started years ago with a great interest in web development, the rise of smartphones brought a real passion for Android. For over a decade I’ve been designing and developing native Android applications — from early-stage prototypes to mission-critical banking apps.
            </p>
            <p>
              I focus on writing <strong className="text-[var(--text)]">user-friendly, secure, and maintainable Kotlin code</strong>. Even in my spare time, I love doing development and working outside my comfort zone with <strong className="text-[var(--text)]">Android TV, Google Home, Google Cast</strong>, and the occasional backend.
            </p>

            {/* Green / Ecology Section from codekings.be */}
            <div className="mt-6 p-5 rounded-xl card-surface flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0 mt-0.5">
                <Bike className="w-5 h-5" />
              </div>
              <div className="text-sm">
                <div className="font-semibold text-[var(--text)] flex items-center gap-1.5 mb-1">
                  <span>{content.about.greenTitle}</span>
                  <Leaf className="w-3.5 h-3.5 text-emerald-500" />
                </div>
                <p className="text-[var(--text-muted)] leading-relaxed">
                  Not only the Android robot is green, but I try to limit our ecological footprint too. One of the things I do is limit the impact of going to work: I do this by compensating my CO² at{' '}
                  <a
                    href="https://www.treecological.be"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--accent)] hover:underline font-medium inline-flex items-center gap-0.5"
                  >
                    Treecological
                    <ExternalLink className="w-3 h-3 inline" />
                  </a>
                  , but also by going to work by bike!
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className="divider mb-20" />

        {/* ===== SERVICES ===== */}
        <section id="services" className="mb-20 scroll-mt-24">
          <div className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)] mb-2">
            {content.services.label}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
            {content.services.title}
          </h2>
          <p className="text-[var(--text-muted)] text-base max-w-xl mb-8 leading-relaxed">
            {content.services.desc}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {content.services.items.map((service, idx) => (
              <div
                key={idx}
                className="card-surface rounded-xl p-6 hover:-translate-y-0.5 transition-transform"
              >
                <div className="w-11 h-11 rounded-lg bg-[var(--accent-dim)] text-xl flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-base font-semibold text-[var(--text)] mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <hr className="divider mb-20" />

        {/* ===== TECH STACK ===== */}
        <section id="tech" className="mb-20 scroll-mt-24">
          <div className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)] mb-2">
            {content.tech.label}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
            {content.tech.title}
          </h2>
          <p className="text-[var(--text-muted)] text-base max-w-xl mb-8 leading-relaxed">
            {content.tech.desc}
          </p>

          <div className="flex flex-wrap gap-2.5">
            {content.tech.tags.map((tag) => (
              <span
                key={tag}
                className="card-surface px-4 py-2 rounded-full text-xs font-medium text-[var(--text-muted)] hover:text-[var(--accent)] cursor-default transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        <hr className="divider mb-20" />

        {/* ===== CONSULTING ===== */}
        <section id="consulting" className="mb-20 scroll-mt-24">
          <div className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)] mb-2">
            {content.consulting.label}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
            {content.consulting.title}
          </h2>
          <p className="text-[var(--text-muted)] text-base max-w-xl mb-8 leading-relaxed">
            {content.consulting.desc}
          </p>

          <div className="space-y-4">
            {content.consulting.items.map((team, idx) => (
              <div
                key={idx}
                className="card-surface rounded-xl p-5 sm:p-6 flex items-start sm:items-center gap-5 hover:-translate-y-0.5 transition-transform"
              >
                <img
                  src={team.image}
                  alt={team.title}
                  className="w-14 h-14 rounded-xl object-contain bg-white p-1.5 shrink-0 border border-[var(--border)] shadow-xs"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-base font-semibold text-[var(--text)]">
                      {team.title}
                    </h3>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--accent)] bg-[var(--accent-dim)] px-2 py-0.5 rounded-full">
                      {team.badge}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    {team.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="divider mb-20" />

        {/* ===== CLIENT TESTIMONIALS ===== */}
        <section id="clients" className="mb-20 scroll-mt-24">
          <div className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)] mb-2">
            {content.clients.label}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
            {content.clients.title}
          </h2>
          <p className="text-[var(--text-muted)] text-base max-w-xl mb-8 leading-relaxed">
            {content.clients.desc}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {content.clients.items.map((item, idx) => (
              <div
                key={idx}
                className="card-surface rounded-xl p-6 flex flex-col justify-between space-y-6 hover:-translate-y-0.5 transition-transform"
              >
                <div className="space-y-3">
                  <Quote className="w-6 h-6 text-[var(--accent)] opacity-80" />
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed italic">
                    "{item.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-[var(--border)]">
                  <img
                    src={item.image}
                    alt={item.company}
                    className="w-10 h-10 rounded-full object-contain bg-white p-1 shrink-0 border border-[var(--border)]"
                  />
                  <div>
                    <div className="font-semibold text-sm text-[var(--text)]">
                      {item.author}
                    </div>
                    <div className="text-xs text-[var(--text-muted)]">
                      {item.role} · <strong className="text-[var(--accent)]">{item.company}</strong>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="divider mb-20" />

        {/* ===== CONTACT ===== */}
        <section id="contact" className="mb-28 scroll-mt-24">
          <div className="card-surface rounded-2xl p-8 sm:p-10 text-center max-w-2xl mx-auto space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              {content.contact.title}
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed max-w-md mx-auto">
              {content.contact.desc}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href={`mailto:${content.contact.email}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-[var(--accent)] hover:opacity-90 transition-all shadow-sm"
              >
                <Mail className="w-4 h-4" />
                <span>{content.contact.email}</span>
              </a>

              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-medium border border-[var(--border)] hover:bg-[var(--bg-card)] hover:border-[var(--text-muted)] transition-all cursor-pointer"
                title="Copy email to clipboard"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
              </button>

              <a
                href={content.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-medium border border-[var(--border)] hover:bg-[var(--bg-card)] hover:border-[var(--text-muted)] transition-all"
              >
                <Linkedin className="w-4 h-4 text-sky-500" />
                <span>LinkedIn</span>
              </a>

              <a
                href={content.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-medium border border-[var(--border)] hover:bg-[var(--bg-card)] hover:border-[var(--text-muted)] transition-all"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-[var(--border)] py-10 text-center text-xs text-[var(--text-muted)] font-mono transition-colors duration-300">
        <a href="#" className="inline-block mb-3 focus:outline-none">
          <img
            src="./images/logo_white.png"
            alt="CodeKings"
            className="h-9 w-auto mx-auto object-contain logo-dark opacity-75 hover:opacity-100 transition-opacity"
          />
          <img
            src="./images/logo_dark.png"
            alt="CodeKings"
            className="h-9 w-auto mx-auto object-contain logo-light opacity-75 hover:opacity-100 transition-opacity"
          />
        </a>
        <p>{content.footer}</p>
      </footer>
    </div>
  );
}
