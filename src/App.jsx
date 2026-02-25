import React from 'react';
import { Helmet } from 'react-helmet';

import Navbar from "@/components/Navbar";

import Hero from '@/components/Hero';
import ProblemIdentification from '@/components/ProblemIdentification';
import ValueProposition from '@/components/ValueProposition';
import CoreServices from '@/components/CoreServices';
import WhatYouGet from '@/components/WhatYouGet';
import ProofTrust from '@/components/ProofTrust';
import ServicesCatalog from '@/components/ServicesCatalog';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <>
      <Helmet>
        <title>OptimizApp - Intelligent Cloud & AI Solutions</title>
        <meta
          name="description"
          content="Transforming business complexity into clear results with Cloud & AI. dynamic, modern, and experience-focused consulting."
        />
      </Helmet>

      {/* NAVBAR FIJO */}
      <Navbar />

      {/* CONTENIDO */}
      <main className="relative min-h-screen bg-[#030711] text-white selection:bg-blue-500/30 selection:text-blue-200 pt-24">
        
        <section id="inicio">
          <Hero />
        </section>

        <div className="relative z-10 space-y-0">
          
          <section id="problema">
            <ProblemIdentification />
          </section>

          <section id="propuesta">
            <ValueProposition />
          </section>

          <section id="servicios">
            <CoreServices />
          </section>

          <section id="beneficios">
            <WhatYouGet />
          </section>

          <section id="confianza">
            <ProofTrust />
          </section>

          <section id="soluciones">
            <ServicesCatalog />
          </section>

          <section id="faq">
            <FAQ />
          </section>

          <section id="contacto">
            <Contact />
          </section>

        </div>

        <Footer />
        <Toaster />
      </main>
    </>
  );
}

export default App;
