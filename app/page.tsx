'use client';

import { useState } from 'react';
import { HeroSection } from '@/components/sections/hero-section';
import { PillarsSection } from '@/components/sections/pillars-section';
import { LifeGallerySection } from '@/components/sections/life-gallery-section';
import { BlogSection } from '@/components/sections/blog-section';
import { CalendarSection } from '@/components/sections/calendar-section';
import { TeamSection } from '@/components/sections/team-section';
import { ContactSection } from '@/components/sections/contact-section';
import { TrustSection } from '@/components/sections/trust-section';
import { PersonalizationWizard } from '@/components/personalization-wizard';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ChatWidget } from '@/components/chat-widget';

export default function Home() {
  const [showWizard, setShowWizard] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header onStartWizard={() => setShowWizard(true)} />
      
      <main className="relative">
        <HeroSection onStartWizard={() => setShowWizard(true)} />
        <PillarsSection />
        <LifeGallerySection />
        <BlogSection />
        <CalendarSection onStartWizard={() => setShowWizard(true)} />
        <TeamSection />
        <TrustSection />
        <ContactSection onStartWizard={() => setShowWizard(true)} />
      </main>

      <Footer />
      
      <PersonalizationWizard 
        open={showWizard} 
        onClose={() => setShowWizard(false)} 
      />
      
      <ChatWidget />
    </div>
  );
}