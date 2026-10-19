/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
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
    <div className="min-h-screen flex flex-col bg-[#FAFAF8] dark:bg-[#0C0D0F] text-[#17191D] dark:text-[#F7F7F8] transition-colors duration-300">
      {/* Top Bar Navigation */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <>
            {/* Section 02 — Hero */}
            <Hero onNavigate={handleNavigate} onExploreWork={handleExploreWork} />

            {/* Section 03 — Expertise Strip */}
            <ExpertiseStrip />

            {/* Section 04 — What We Do */}
            <WhatWeDo
              onNavigate={handleNavigate}
              onSelectService={(service) => setSelectedService(service)}
            />

            {/* Section 05 — Selected Work */}
            <div id="selected-work-section">
              <SelectedWork
                onNavigate={handleNavigate}
                onSelectProject={(project) => setSelectedProject(project)}
              />
            </div>

            {/* Section 06 — How We Work */}
            <HowWeWork onNavigate={handleNavigate} />

            {/* Section 07 — About ALZA */}
            <AboutSection onNavigate={handleNavigate} />

            {/* Section 08 — Leadership */}
            <LeadershipSection />

            {/* Section 09 — Closing CTA */}
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
      </main>

      {/* Section 10 — Footer */}
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
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
