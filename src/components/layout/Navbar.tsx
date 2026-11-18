import React, { useState, useEffect } from 'react';
import { PageRoute } from '../../types';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

interface NavbarProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
}

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks: { label: string; page: PageRoute }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Services', page: 'services' },
    { label: 'Work', page: 'work' },
    { label: 'Approach', page: 'approach' },
    { label: 'About', page: 'about' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleNavClick = (page: PageRoute) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav'
          : 'bg-[#FAFAFA]/72 dark:bg-[#050506]/72 backdrop-blur-xl border-b border-[var(--border)]'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-left font-bold text-xl tracking-tight text-[#0E0E10] dark:text-[#F5F5F7] hover:opacity-75 transition-opacity whitespace-nowrap shrink-0 flex items-center gap-0.5 focus-visible:ring-2 focus-visible:ring-[#0E0E10] dark:focus-visible:ring-white rounded-md py-1 cursor-pointer"
          aria-label="ALZA.Net IT Solutions Homepage"
        >
          <span className="tracking-[-0.03em] font-bold">ALZA</span>
          <span className="text-[#585860] dark:text-[#9898A2] font-medium text-sm">.Net</span>
        </button>

        {/* Zone 2: Clean single-line nav links with animated underline */}
        <nav
          className="hidden md:flex items-center gap-7 text-[13.5px] font-medium text-[#585860] dark:text-[#9898A2]"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const isActive = currentPage === link.page;
            return (
              <button
                key={link.page}
                onClick={() => handleNavClick(link.page)}
                className={`relative py-1.5 transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? 'text-[#0E0E10] dark:text-[#F5F5F7] font-semibold'
                    : 'text-[#585860] dark:text-[#9898A2] hover:text-[#0E0E10] dark:hover:text-[#F5F5F7]'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId={prefersReduced ? undefined : 'nav-active-underline'}
                    transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#0E0E10] dark:bg-[#F5F5F7] rounded-full"
                    aria-hidden="true"
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Polished Monochrome Theme Toggle & 1 Primary Action */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <button
            onClick={toggleTheme}
            className="btn-frosted relative w-9 h-9 flex items-center justify-center rounded-xl text-[#0E0E10] dark:text-[#F5F5F7] cursor-pointer focus-visible:ring-2 focus-visible:ring-[#0E0E10] dark:focus-visible:ring-white overflow-hidden"
            aria-label={isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
            title={isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={isDark ? 'sun' : 'moon'}
                initial={prefersReduced ? false : { y: -8, opacity: 0, rotate: -20 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                exit={prefersReduced ? undefined : { y: 8, opacity: 0, rotate: 20 }}
                transition={{ duration: 0.22, ease: EASE_OUT_EXPO }}
                className="flex items-center justify-center"
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </motion.span>
            </AnimatePresence>
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            className="group btn-primary-depth inline-flex items-center justify-center gap-1.5 px-4.5 py-2 text-xs font-semibold text-white dark:text-[#050506] bg-[#0E0E10] dark:bg-[#F5F5F7] hover:bg-[#1E1E22] dark:hover:bg-white rounded-xl whitespace-nowrap shrink-0 focus-visible:ring-2 focus-visible:ring-[#0E0E10] dark:focus-visible:ring-white cursor-pointer"
          >
            <span>Start a Project</span>
            <ArrowUpRight
              className="w-3.5 h-3.5 text-white/80 dark:text-[#050506]/80 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </button>
        </div>

        {/* Mobile Actions: Theme Toggle + Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="btn-frosted w-10 h-10 flex items-center justify-center rounded-xl text-[#0E0E10] dark:text-[#F5F5F7] cursor-pointer"
            aria-label={isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="btn-frosted w-10 h-10 flex items-center justify-center rounded-xl text-[#0E0E10] dark:text-[#F5F5F7] focus-visible:ring-2 focus-visible:ring-[#0E0E10] dark:focus-visible:ring-white cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={prefersReduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={prefersReduced ? undefined : { opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-18 z-40 bg-black/50 dark:bg-black/75 backdrop-blur-md md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={prefersReduced ? false : { y: -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={prefersReduced ? undefined : { y: -12, opacity: 0 }}
              transition={{ duration: 0.3, ease: EASE_OUT_EXPO }}
              className="bg-[#FFFFFF]/95 dark:bg-[#0D0D0F]/95 backdrop-blur-2xl border-b border-[var(--border)] p-6 shadow-2xl max-h-[calc(100vh-4.5rem)] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation"
            >
              <div className="flex flex-col gap-1.5">
                {navLinks.map((link) => {
                  const isActive = currentPage === link.page;
                  return (
                    <button
                      key={link.page}
                      onClick={() => handleNavClick(link.page)}
                      className={`text-left text-sm py-3 px-4 rounded-xl transition-colors font-medium flex items-center justify-between ${
                        isActive
                          ? 'bg-[#EFEFF2] dark:bg-[#18181B] text-[#0E0E10] dark:text-[#F5F5F7] font-semibold'
                          : 'text-[#585860] dark:text-[#9898A2] hover:bg-[#F5F5F7] dark:hover:bg-[#141417] hover:text-[#0E0E10] dark:hover:text-[#F5F5F7]'
                      }`}
                    >
                      <span>{link.label}</span>
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#0E0E10] dark:bg-white" />}
                    </button>
                  );
                })}
              </div>

              <div className="pt-6 mt-4 border-t border-[var(--border)] space-y-3">
                <div className="flex items-center justify-between px-4 py-2.5 bg-[#F5F5F7] dark:bg-[#141417] rounded-xl border border-[var(--border)]">
                  <span className="text-xs text-[#585860] dark:text-[#9898A2] font-medium">Appearance</span>
                  <button
                    onClick={toggleTheme}
                    className="flex items-center gap-1.5 text-xs font-semibold text-[#0E0E10] dark:text-[#F5F5F7] py-1.5 px-3 rounded-lg bg-white dark:bg-[#0D0D0F] border border-[var(--border)] cursor-pointer"
                  >
                    {isDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
                    <span>{isDark ? 'Dark Mode' : 'Light Mode'}</span>
                  </button>
                </div>

                <button
                  onClick={() => handleNavClick('contact')}
                  className="btn-primary-depth w-full flex items-center justify-center gap-2 py-3.5 px-4 text-xs font-semibold text-white dark:text-[#050506] bg-[#0E0E10] dark:bg-[#F5F5F7] rounded-xl cursor-pointer"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
                <div className="mt-4 text-center text-xs text-[#868690] dark:text-[#64646E] font-mono">
                  Bohol, Philippines · WE FIND. WE SOLVE. WE LIFT.
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
