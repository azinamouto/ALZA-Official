/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { MotionConfig, AnimatePresence, motion } from 'framer-motion';
import { PageRoute, ProjectItem, ServiceItem } from './types';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/home/Hero';
import { ExpertiseStrip } from './components/home/ExpertiseStrip';
import { WhatWeDo } from './components/home/WhatWeDo';
import { SelectedWork } from './components/home/SelectedWork';
import { HowWeWork } from './components/home/HowWeWork';
import { AboutSection } from './components/home/AboutSection';
import { LeadershipSection } from './components/home/LeadershipSection';
import { ClosingCTA } from './components/home/ClosingCTA';

import { ServicesPage } from './pages/ServicesPage';
import { WorkPage } from './pages/WorkPage';
import { ApproachPage } from './pages/ApproachPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

import { ProjectModal } from './components/modals/ProjectModal';
import { ServiceModal } from './components/modals/ServiceModal';
import { PrivacyModal } from './components/modals/PrivacyModal';

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

function AppContent() {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  // Sync with URL hash / popstate for browser navigation
  useEffect(() => {
    const parseRouteFromUrl = (): PageRoute => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['services', 'work', 'approach', 'about', 'contact'].includes(hash)) {
        return hash as PageRoute;
      }
      return 'home';
    };

    setCurrentPage(parseRouteFromUrl());

    const handlePopState = () => {
      setCurrentPage(parseRouteFromUrl());
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (page: PageRoute) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExploreWork = () => {
    const workSection = document.getElementById('selected-work-section');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      handleNavigate('work');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] dark:bg-[#050506] text-[#0E0E10] dark:text-[#F5F5F7] transition-colors duration-300">
      {/* Top Bar Navigation */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Content Area with Smooth Route Transitions */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.32, ease: EASE_OUT_EXPO }}
          >
            {currentPage === 'home' && (
              <>
                <Hero onNavigate={handleNavigate} onExploreWork={handleExploreWork} />
                <ExpertiseStrip />
                <WhatWeDo
                  onNavigate={handleNavigate}
                  onSelectService={(service) => setSelectedService(service)}
                />
                <div id="selected-work-section">
                  <SelectedWork
                    onNavigate={handleNavigate}
                    onSelectProject={(project) => setSelectedProject(project)}
                  />
                </div>
                <HowWeWork onNavigate={handleNavigate} />
                <AboutSection onNavigate={handleNavigate} />
                <LeadershipSection />
                <ClosingCTA onNavigate={handleNavigate} />
              </>
            )}

            {currentPage === 'services' && (
              <ServicesPage
                onNavigate={handleNavigate}
                onSelectService={(service) => setSelectedService(service)}
              />
            )}

            {currentPage === 'work' && (
              <WorkPage
                onNavigate={handleNavigate}
                onSelectProject={(project) => setSelectedProject(project)}
              />
            )}

            {currentPage === 'approach' && <ApproachPage onNavigate={handleNavigate} />}

            {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}

            {currentPage === 'contact' && (
              <ContactPage onOpenPrivacy={() => setPrivacyModalOpen(true)} />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenPrivacy={() => setPrivacyModalOpen(true)}
      />

      {/* Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onDiscussProject={() => handleNavigate('contact')}
      />

      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onInquire={() => handleNavigate('contact')}
      />

      <PrivacyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </MotionConfig>
  );
}
