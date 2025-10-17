import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Accueil = () => {
  const [stats, setStats] = useState({
    pays: 0,
    projets: 0,
    satisfaction: 0,
    experts: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          animateStats();
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateStats = () => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const targets = {
      pays: 15,
      projets: 500,
      satisfaction: 98,
      experts: 200
    };

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setStats({
        pays: Math.floor(targets.pays * progress),
        projets: Math.floor(targets.projets * progress),
        satisfaction: Math.floor(targets.satisfaction * progress),
        experts: Math.floor(targets.experts * progress)
      });

      if (currentStep >= steps) {
        setStats(targets);
        clearInterval(timer);
      }
    }, interval);
  };

  return (
    <>
      <Helmet>
        <title>ZiExter - Call Center & BPO en Tunisie | Service Client Multilingue</title>
        <meta
          name="description"
          content="ZiExter : externalisation de service client, call center B2B, BPO, secrétariat médical et virtuel. Équipe multilingue basée en Tunisie. Made with 🌶️ piments."
        />
        <meta property="og:title" content="ZiExter - Call Center & BPO en Tunisie" />
        <meta property="og:description" content="Service client multilingue, call center B2B et BPO. Made with 🌶️" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziexter.com/" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary via-secondary/95 to-primary min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white animate-fade-in-up">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Votre centre d'appel et BPO de confiance
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                Service client, call center B2B, secrétariat médical, gestion de tickets… ZiExter – Made with 🌶️ piments en Tunisie – vous accompagne avec passion et professionnalisme.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/devis" className="btn btn-accent btn-lg">
                  Demandez un devis gratuit
                </Link>
                <Link to="/services" className="btn btn-outline-white btn-lg">
                  Découvrir nos services
                </Link>
              </div>
            </div>

            <div className="hidden lg:block animate-fade-in">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-full h-full bg-accent rounded-2xl opacity-20"></div>
                <img
                  src="/images/hero-team.jpg"
                  alt="Équipe ZiExter - Call center professionnel"
                  className="relative rounded-2xl shadow-2xl w-full"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in-up">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                +{stats.pays}
              </div>
              <div className="text-gray-600">Pays couverts</div>
            </div>
            <div className="text-center animate-fade-in-up animation-delay-100">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                +{stats.projets}
              </div>
              <div className="text-gray-600">Projets réalisés</div>
            </div>
            <div className="text-center animate-fade-in-up animation-delay-200">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stats.satisfaction}%
              </div>
              <div className="text-gray-600">Satisfaction client</div>
            </div>
            <div className="text-center animate-fade-in-up animation-delay-300">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                +{stats.experts}
              </div>
              <div className="text-gray-600">Experts formés</div>
            </div>
          </div>
        </div>
      </section>

      {/* Présentation */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in-up">
            <h2 className="section-title">Qui est ZiExter ?</h2>
            <p className="section-subtitle">
              Made with 🌶️ piments en Tunisie
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card hover-lift animate-fade-in-up">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Présence internationale</h3>
              <p className="text-gray-600">
                Implantés en Tunisie, nous servons des clients dans +15 pays avec une équipe multilingue de haut niveau.
              </p>
            </div>

            <div className="card hover-lift animate-fade-in-up animation-delay-100">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Expertise reconnue</h3>
              <p className="text-gray-600">
                +500 projets réalisés, +200 experts formés. Service client, BPO, secrétariat médical, gestion de tickets.
              </p>
            </div>

            <div className="card hover-lift animate-fade-in-up animation-delay-200">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Qualité garantie</h3>
              <p className="text-gray-600">
                98% de satisfaction client. RGPD & ISO 27001 compatibles. Processus rigoureux et transparents.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/qui-sommes-nous" className="btn btn-primary">
              En savoir plus sur ZiExter
            </Link>
          </div>
        </div>
      </section>

      {/* Services principaux */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in-up">
            <h2 className="section-title">Nos services</h2>
            <p className="section-subtitle">
              Des solutions complètes pour externaliser vos opérations avec confiance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/services/service-client" className="card hover-lift group animate-fade-in-up">
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3 group-hover:text-primary transition-colors">
                Service Client
              </h3>
              <p className="text-gray-600 mb-4">
                Accueil téléphonique, support multicanal (email, chat, réseaux sociaux), gestion des réclamations.
              </p>
              <span className="text-primary font-medium inline-flex items-center">
                En savoir plus
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>

            <Link to="/services/call-center-b2b" className="card hover-lift group animate-fade-in-up animation-delay-100">
              <div className="w-14 h-14 bg-gradient-to-br from-secondary to-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3 group-hover:text-primary transition-colors">
                Call Center B2B
              </h3>
              <p className="text-gray-600 mb-4">
                Prospection commerciale, prise de rendez-vous, qualification de leads, relance clients professionnels.
              </p>
              <span className="text-primary font-medium inline-flex items-center">
                En savoir plus
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>

            <Link to="/services/bpo" className="card hover-lift group animate-fade-in-up animation-delay-200">
              <div className="w-14 h-14 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3 group-hover:text-primary transition-colors">
                BPO (Business Process Outsourcing)
              </h3>
              <p className="text-gray-600 mb-4">
                Saisie de données, traitement de commandes, gestion administrative, back-office complet.
              </p>
              <span className="text-primary font-medium inline-flex items-center">
                En savoir plus
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>

            <Link to="/services/answering-service" className="card hover-lift group animate-fade-in-up">
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3 group-hover:text-primary transition-colors">
                Answering Service
              </h3>
              <p className="text-gray-600 mb-4">
                Secrétariat téléphonique virtuel 24/7, filtrage d'appels, prise de messages, transfert intelligent.
              </p>
              <span className="text-primary font-medium inline-flex items-center">
                En savoir plus
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>

            <Link to="/services/secretariat-medical" className="card hover-lift group animate-fade-in-up animation-delay-100">
              <div className="w-14 h-14 bg-gradient-to-br from-accent to-secondary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3 group-hover:text-primary transition-colors">
                Secrétariat Médical
              </h3>
              <p className="text-gray-600 mb-4">
                Gestion d'agenda médical, prise de rendez-vous, rappels patients, permanence téléphonique médicale.
              </p>
              <span className="text-primary font-medium inline-flex items-center">
                En savoir plus
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>

            <Link to="/services/gardiennage-securite-privee" className="card hover-lift group animate-fade-in-up animation-delay-200">
              <div className="w-14 h-14 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3 group-hover:text-primary transition-colors">
                Gardiennage et Sécurité
              </h3>
              <p className="text-gray-600 mb-4">
                Télésurveillance, gestion d'alarmes, dispatching d'interventions, centre d'appels sécurité 24/7.
              </p>
              <span className="text-primary font-medium inline-flex items-center">
                En savoir plus
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="btn btn-primary btn-lg">
              Voir tous nos services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Prêt à externaliser avec ZiExter ?
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Demandez un devis gratuit et découvrez comment nous pouvons transformer vos opérations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/devis" className="btn btn-accent btn-lg">
                Obtenir un devis gratuit
              </Link>
              <Link to="/contact" className="btn btn-outline-white btn-lg">
                Contactez-nous
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Accueil;

