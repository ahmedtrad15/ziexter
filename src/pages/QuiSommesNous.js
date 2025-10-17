import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const QuiSommesNous = () => {
  return (
    <>
      <Helmet>
        <title>Qui sommes-nous - ZiExter | Call Center & BPO en Tunisie</title>
        <meta
          name="description"
          content="ZiExter : une équipe internationale et multilingue basée en Tunisie. +15 pays, +500 projets, 98% de satisfaction. Made with 🌶️ piments."
        />
        <link rel="canonical" href="https://ziexter.com/qui-sommes-nous" />
      </Helmet>

      {/* Hero */}
      <section className="page-hero bg-gradient-to-br from-secondary to-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl animate-fade-in-up">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Qui sommes-nous ?
            </h1>
            <p className="text-xl text-gray-100">
              ZiExter – Made with 🌶️ piments en Tunisie
            </p>
          </div>
        </div>
      </section>

      {/* Notre histoire */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="section-title text-left">Notre histoire</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  ZiExter est née d'une conviction forte : <strong className="text-gray-900">l'externalisation doit être synonyme de qualité, d'humanité et de performance</strong>.
                </p>
                <p>
                  Basée en Tunisie, à Ksibet El Mediouni, notre entreprise s'est imposée comme un acteur incontournable dans le domaine du call center, du BPO et du secrétariat virtuel. Nous servons des clients dans plus de 15 pays, en français, anglais, arabe, espagnol et bien d'autres langues.
                </p>
                <p>
                  Notre équipe est composée de <strong className="text-gray-900">plus de 200 experts formés</strong>, passionnés par le service client et la satisfaction des utilisateurs finaux.
                </p>
                <p>
                  <strong className="text-primary">Made with 🌶️ piments en Tunisie</strong> n'est pas qu'un slogan : c'est notre signature, notre engagement à apporter chaleur, énergie et excellence dans chaque interaction.
                </p>
              </div>
            </div>

            <div className="animate-fade-in">
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-full h-full bg-primary/10 rounded-2xl"></div>
                <img
                  src="/images/team-office.jpg"
                  alt="Équipe ZiExter au bureau"
                  className="relative rounded-2xl shadow-xl w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos valeurs */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in-up">
            <h2 className="section-title">Nos valeurs</h2>
            <p className="section-subtitle">
              Ce qui nous guide au quotidien
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card text-center hover-lift animate-fade-in-up">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-lg mb-3">Excellence</h3>
              <p className="text-gray-600 text-sm">
                Nous visons l'excellence dans chaque appel, chaque email, chaque ticket traité.
              </p>
            </div>

            <div className="card text-center hover-lift animate-fade-in-up animation-delay-100">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-lg mb-3">Humanité</h3>
              <p className="text-gray-600 text-sm">
                Derrière chaque numéro, il y a une personne. Nous traitons chaque client avec respect et empathie.
              </p>
            </div>

            <div className="card text-center hover-lift animate-fade-in-up animation-delay-200">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-lg mb-3">Réactivité</h3>
              <p className="text-gray-600 text-sm">
                Temps de réponse ultra-rapides, disponibilité 24/7, adaptation à vos besoins en temps réel.
              </p>
            </div>

            <div className="card text-center hover-lift animate-fade-in-up animation-delay-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-lg mb-3">Confidentialité</h3>
              <p className="text-gray-600 text-sm">
                RGPD & ISO 27001 compatibles. Vos données et celles de vos clients sont protégées avec rigueur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Présence internationale */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in-up">
            <h2 className="section-title">Présence internationale</h2>
            <p className="section-subtitle">
              Une équipe locale, une portée globale
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center animate-fade-in-up">
              <div className="text-5xl font-bold text-primary mb-2">+15</div>
              <div className="text-gray-600">Pays couverts</div>
              <p className="text-sm text-gray-500 mt-2">
                France, Belgique, Suisse, Canada, Tunisie, Maroc, Sénégal, États-Unis, Royaume-Uni, Espagne...
              </p>
            </div>

            <div className="text-center animate-fade-in-up animation-delay-100">
              <div className="text-5xl font-bold text-accent mb-2">8+</div>
              <div className="text-gray-600">Langues parlées</div>
              <p className="text-sm text-gray-500 mt-2">
                Français, anglais, arabe, espagnol, allemand, italien, néerlandais, portugais.
              </p>
            </div>

            <div className="text-center animate-fade-in-up animation-delay-200">
              <div className="text-5xl font-bold text-secondary mb-2">24/7</div>
              <div className="text-gray-600">Disponibilité</div>
              <p className="text-sm text-gray-500 mt-2">
                Nos équipes assurent une permanence 24 heures sur 24, 7 jours sur 7.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg animate-fade-in-up">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-xl mb-2">Tunisie : notre base, notre force</h3>
                <p className="text-gray-600">
                  Implantés à Ksibet El Mediouni, nous bénéficions d'un écosystème favorable : main-d'œuvre qualifiée, infrastructure moderne, fuseau horaire compatible avec l'Europe et l'Afrique. Notre position nous permet de servir efficacement nos clients francophones, anglophones et arabophones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notre équipe */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in-up">
            <h2 className="section-title">Notre équipe</h2>
            <p className="section-subtitle">
              Des experts passionnés et multilingues
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="animate-fade-in-up">
              <img
                src="/images/team-meeting.jpg"
                alt="Réunion d'équipe ZiExter"
                className="rounded-2xl shadow-xl w-full"
                loading="lazy"
              />
            </div>

            <div className="space-y-6 animate-fade-in-up animation-delay-100">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-2">Formation continue</h3>
                  <p className="text-gray-600 text-sm">
                    Nos agents suivent des formations régulières : techniques de communication, outils CRM, gestion de conflits, connaissance produit.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-2">Multilinguisme</h3>
                  <p className="text-gray-600 text-sm">
                    Français, anglais, arabe, espagnol... Notre équipe parle plus de 8 langues pour servir vos clients internationaux.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-2">Culture du service</h3>
                  <p className="text-gray-600 text-sm">
                    Chaque membre de ZiExter partage la même passion : satisfaire vos clients et vous faire briller.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications et qualité */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in-up">
            <h2 className="section-title">Certifications et qualité</h2>
            <p className="section-subtitle">
              Conformité, sécurité, excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center hover-lift animate-fade-in-up">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-lg mb-3">ISO 27001 compatible</h3>
              <p className="text-gray-600 text-sm">
                Gestion de la sécurité de l'information selon les standards internationaux.
              </p>
            </div>

            <div className="card text-center hover-lift animate-fade-in-up animation-delay-100">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-lg mb-3">Conformité RGPD</h3>
              <p className="text-gray-600 text-sm">
                Protection des données personnelles selon le règlement européen.
              </p>
            </div>

            <div className="card text-center hover-lift animate-fade-in-up animation-delay-200">
              <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-lg mb-3">98% de satisfaction</h3>
              <p className="text-gray-600 text-sm">
                Mesure continue de la qualité et amélioration permanente de nos processus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Prêt à travailler avec nous ?
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Découvrez comment ZiExter peut transformer votre service client et vos opérations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/devis" className="btn btn-accent btn-lg">
                Demandez un devis gratuit
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

export default QuiSommesNous;

