import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const ServiceClient = () => {
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Accueil",
        "item": "https://ziexter.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://ziexter.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Service Client",
        "item": "https://ziexter.com/services/service-client"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Service Client externalisé - ZiExter | Call Center multicanal</title>
        <meta
          name="description"
          content="Externalisez votre service client avec ZiExter : accueil téléphonique, support email/chat, gestion réclamations. Multilingue, 24/7, +200 experts formés."
        />
        <link rel="canonical" href="https://ziexter.com/services/service-client" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLdBreadcrumb)}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="page-hero bg-gradient-to-br from-secondary to-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl animate-fade-in-up">
            <nav className="flex items-center space-x-2 text-sm mb-4 text-gray-200">
              <Link to="/" className="hover:text-white">Accueil</Link>
              <span>/</span>
              <Link to="/services" className="hover:text-white">Services</Link>
              <span>/</span>
              <span className="text-white">Service Client</span>
            </nav>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Service Client externalisé
            </h1>
            <p className="text-xl text-gray-100">
              Offrez une expérience client exceptionnelle avec notre équipe multilingue et passionnée.
            </p>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="section-title text-left">Votre service client, notre expertise</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Le service client est le cœur de votre relation avec vos clients. Chez ZiExter, nous comprenons l'importance de chaque interaction, chaque appel, chaque message.
                </p>
                <p>
                  Notre équipe de <strong>+200 experts formés</strong> prend en charge votre service client avec professionnalisme, empathie et réactivité. Que ce soit par téléphone, email, chat en direct ou réseaux sociaux, nous garantissons une expérience client de qualité.
                </p>
                <p>
                  <strong className="text-primary">Made with 🌶️ piments en Tunisie</strong>, nous servons des clients dans plus de 15 pays avec un taux de satisfaction de 98%.
                </p>
              </div>
            </div>

            <div className="animate-fade-in">
              <img
                src="/images/service-client.jpg"
                alt="Service client ZiExter"
                className="rounded-2xl shadow-xl w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services inclus */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in-up">
            <h2 className="section-title">Ce que nous prenons en charge</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card hover-lift animate-fade-in-up">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Accueil téléphonique</h3>
              <p className="text-sm text-gray-600">
                Réception d'appels entrants, traitement des demandes, information produit/service, orientation clients.
              </p>
            </div>

            <div className="card hover-lift animate-fade-in-up animation-delay-100">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Support email</h3>
              <p className="text-sm text-gray-600">
                Gestion de votre boîte de réception, réponses personnalisées, classification et priorisation.
              </p>
            </div>

            <div className="card hover-lift animate-fade-in-up animation-delay-200">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Chat en direct</h3>
              <p className="text-sm text-gray-600">
                Live chat sur votre site web, réponses instantanées, accompagnement parcours client.
              </p>
            </div>

            <div className="card hover-lift animate-fade-in-up">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Réseaux sociaux</h3>
              <p className="text-sm text-gray-600">
                Gestion des messages privés et commentaires sur Facebook, Instagram, Twitter/X, LinkedIn.
              </p>
            </div>

            <div className="card hover-lift animate-fade-in-up animation-delay-100">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Gestion des réclamations</h3>
              <p className="text-sm text-gray-600">
                Traitement des insatisfactions, résolution de litiges, suivi jusqu'à satisfaction complète.
              </p>
            </div>

            <div className="card hover-lift animate-fade-in-up animation-delay-200">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Fidélisation client</h3>
              <p className="text-sm text-gray-600">
                Suivi personnalisé, enquêtes de satisfaction, programmes de fidélité, relances proactives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in-up">
            <h2 className="section-title">Pourquoi externaliser votre service client avec ZiExter ?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4 animate-fade-in-up">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Disponibilité 24/7</h3>
                <p className="text-sm text-gray-600">
                  Vos clients peuvent nous joindre à toute heure, week-ends et jours fériés inclus.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 animate-fade-in-up animation-delay-100">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Multilingue</h3>
                <p className="text-sm text-gray-600">
                  Français, anglais, arabe, espagnol... 8+ langues pour servir vos clients internationaux.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 animate-fade-in-up animation-delay-200">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Réduction des coûts</h3>
                <p className="text-sm text-gray-600">
                  Jusqu'à 60% d'économies par rapport à une équipe interne, sans compromis sur la qualité.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 animate-fade-in-up">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Scalabilité</h3>
                <p className="text-sm text-gray-600">
                  Adaptez vos ressources selon vos pics d'activité sans contrainte de recrutement.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 animate-fade-in-up animation-delay-100">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Qualité garantie</h3>
                <p className="text-sm text-gray-600">
                  98% de satisfaction client. Formation continue, écoutes régulières, amélioration permanente.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 animate-fade-in-up animation-delay-200">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Reporting détaillé</h3>
                <p className="text-sm text-gray-600">
                  Dashboard temps réel, KPI suivis quotidiennement, rapports hebdomadaires et mensuels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Prêt à externaliser votre service client ?
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Demandez un devis gratuit et découvrez comment nous pouvons améliorer votre satisfaction client.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/devis" className="btn btn-accent btn-lg">
                Demander un devis gratuit
              </Link>
              <Link to="/rendez-vous" className="btn btn-outline-white btn-lg">
                Prendre rendez-vous
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceClient;

