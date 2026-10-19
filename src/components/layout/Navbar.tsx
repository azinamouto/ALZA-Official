import React, { useState, useEffect } from 'react';
import { PageRoute } from '../../types';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface NavbarProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key
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
          ? 'glass-nav shadow-xs'
          : 'bg-[#FAFAF8]/85 dark:bg-[#0C0D0F]/85 backdrop-blur-md border-b border-[#E2E5EB]/60 dark:border-[#242830]/60'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Monochromatic, single text element wordmark) */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-left font-bold text-xl tracking-tight text-[#17191D] dark:text-[#F7F7F8] hover:text-[#5F6573] dark:hover:text-[#9CA3AF] transition-colors whitespace-nowrap shrink-0 flex items-center gap-1 focus-visible:ring-2 focus-visible:ring-[#17191D] dark:focus-visible:ring-white rounded-sm py-1 cursor-pointer"
          aria-label="ALZA.Net IT Solutions Homepage"
        >
          <span className="tracking-tight font-extrabold">ALZA</span>
          <span className="text-[#5F6573] dark:text-[#9CA3AF] font-medium text-sm">.Net</span>
        </button>

        {/* Zone 2: 5–6 Clean single-line nav links */}
        <nav
          className="hidden md:flex items-center gap-7 text-[13.5px] font-medium text-[#5F6573] dark:text-[#9CA3AF]"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const isActive = currentPage === link.page;
            return (
              <button
                key={link.page}
                onClick={() => handleNavClick(link.page)}
                className={`relative py-1 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? 'text-[#17191D] dark:text-[#F7F7F8] font-semibold'
                    : 'text-[#5F6573] dark:text-[#9CA3AF] hover:text-[#17191D] dark:hover:text-[#F7F7F8]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span
                    className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#17191D] dark:bg-white rounded-full"
                    aria-hidden="true"
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Theme Toggle & 1 Primary Action */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          {/* Light / Dark Theme Button */}
          <button
            onClick={toggleTheme}
            className="p-2 text-[#5F6573] dark:text-[#9CA3AF] hover:text-[#17191D] dark:hover:text-[#F7F7F8] hover:bg-[#E2E5EB]/50 dark:hover:bg-[#242830] rounded-lg transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#17191D] dark:focus-visible:ring-white"
            aria-label={isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
            title={isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-white dark:text-[#0C0D0F] bg-[#17191D] dark:bg-white hover:bg-[#2B2F38] dark:hover:bg-[#E5E7EB] transition-colors rounded-lg shadow-xs whitespace-nowrap shrink-0 focus-visible:ring-2 focus-visible:ring-[#17191D] dark:focus-visible:ring-white cursor-pointer"
          >
            Start a Project
            <ArrowUpRight className="w-3.5 h-3.5 text-white/80 dark:text-[#0C0D0F]/80" aria-hidden="true" />
          </button>
        </div>

        {/* Mobile Actions: Theme Toggle + Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 text-[#5F6573] dark:text-[#9CA3AF] hover:text-[#17191D] dark:hover:text-[#F7F7F8] rounded-lg transition-colors cursor-pointer"
            aria-label={isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#17191D] dark:text-[#F7F7F8] hover:bg-[#E2E5EB]/40 dark:hover:bg-[#242830] rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-[#17191D] dark:focus-visible:ring-white cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-18 z-40 bg-[#17191D]/50 dark:bg-black/70 backdrop-blur-sm md:hidden animate-fade-in"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="bg-[#FFFFFF] dark:bg-[#141619] border-b border-[#E2E5EB] dark:border-[#242830] p-6 shadow-xl max-h-[calc(100vh-4.5rem)] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = currentPage === link.page;
                return (
                  <button
                    key={link.page}
                    onClick={() => handleNavClick(link.page)}
                    className={`text-left text-sm py-3 px-3 rounded-lg transition-colors font-medium flex items-center justify-between ${
                      isActive
                        ? 'bg-[#F2F4F7] dark:bg-[#1D2026] text-[#17191D] dark:text-white font-semibold'
                        : 'text-[#5F6573] dark:text-[#9CA3AF] hover:bg-[#FAFAF8] dark:hover:bg-[#1A1D23] hover:text-[#17191D] dark:hover:text-white'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#17191D] dark:bg-white" />}
                  </button>
                );
              })}
            </div>

            <div className="pt-6 mt-4 border-t border-[#E2E5EB] dark:border-[#242830] space-y-3">
              <div className="flex items-center justify-between px-3 py-2 bg-[#FAFAF8] dark:bg-[#1D2026] rounded-lg">
                <span className="text-xs text-[#5F6573] dark:text-[#9CA3AF] font-medium">Appearance</span>
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-1.5 text-xs font-semibold text-[#17191D] dark:text-white py-1 px-2.5 rounded bg-white dark:bg-[#141619] border border-[#E2E5EB] dark:border-[#242830]"
                >
                  {isDark ? <Sun className="w-3.5 h-3.5 text-amber-300" /> : <Moon className="w-3.5 h-3.5" />}
                  <span>{isDark ? 'Dark Mode' : 'Light Mode'}</span>
                </button>
              </div>

              <button
                onClick={() => handleNavClick('contact')}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-white dark:text-[#0C0D0F] bg-[#17191D] dark:bg-white hover:bg-[#2B2F38] dark:hover:bg-[#E5E7EB] rounded-lg transition-colors shadow-xs"
              >
                Start a Project
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
              <div className="mt-4 text-center text-xs text-[#8B92A0] font-mono">
                Bohol, Philippines · WE FIND. WE SOLVE. WE LIFT.
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
