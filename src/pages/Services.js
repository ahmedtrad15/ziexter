import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Services = () => {
  const services = [
    {
      title: 'Service Client',
      description: 'Accueil téléphonique, support multicanal (email, chat, réseaux sociaux), gestion des réclamations, fidélisation client.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
      ),
      link: '/services/service-client',
      color: 'primary'
    },
    {
      title: 'Call Center B2B',
      description: 'Prospection commerciale, prise de rendez-vous qualifiés, qualification de leads, relance de clients professionnels.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      ),
      link: '/services/call-center-b2b',
      color: 'secondary'
    },
    {
      title: 'Call Center pour Centres de Formation',
      description: 'Prise de RDV, inscription, suivi des formations, relances, gestion des plannings.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      ),
      link: '/services/call-center-centres-de-formation',
      color: 'accent'
    },
    {
      title: 'Externalisation appels AirBnB',
      description: 'Réponses aux demandes locataires, gestion des réservations, suivi check-in/check-out, support multilingue 24/7.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      ),
      link: '/services/externalisation-appels-airbnb',
      color: 'primary'
    },
    {
      title: 'BPO (Business Process Outsourcing)',
      description: 'Saisie de données, traitement de commandes, gestion administrative, back-office complet.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      ),
      link: '/services/bpo',
      color: 'secondary'
    },
    {
      title: 'Intégrateur Informatique',
      description: 'Support technique, hotline IT, gestion des incidents, assistance utilisateurs.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      ),
      link: '/services/integrateur-informatique',
      color: 'accent'
    },
    {
      title: 'Maintenance & Gestion pour installateurs de bornes IRVE',
      description: 'Hotline technique, diagnostic à distance, planification interventions, support utilisateurs finaux.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      ),
      link: '/services/irve-maintenance-gestion',
      color: 'primary'
    },
    {
      title: 'Answering Service (Secrétariat Téléphonique Virtuel)',
      description: 'Réception d\'appels 24/7, filtrage d\'appels, prise de messages, transfert d\'appels intelligents.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      ),
      link: '/services/answering-service',
      color: 'secondary'
    },
    {
      title: 'Réseaux sociaux',
      description: 'Modération de commentaires, réponses aux messages privés, community management, gestion de la e-réputation.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      ),
      link: '/services/reseaux-sociaux',
      color: 'accent'
    },
    {
      title: 'Secrétariat Médical',
      description: 'Gestion d\'agenda médical, prise de rendez-vous patients, rappels automatiques, permanence téléphonique médicale.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      ),
      link: '/services/secretariat-medical',
      color: 'primary'
    },
    {
      title: 'Gestion des tickets',
      description: 'Traitement de tickets support, catégorisation, escalade, suivi jusqu\'à résolution complète.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      ),
      link: '/services/gestion-des-tickets',
      color: 'secondary'
    },
    {
      title: 'Gardiennage et Sécurité Privée',
      description: 'Centre d\'appels dédié à la télésurveillance, gestion d\'alarmes, dispatching d\'interventions, support 24/7.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      ),
      link: '/services/gardiennage-securite-privee',
      color: 'accent'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Nos Services - ZiExter | Call Center, BPO, Secrétariat Virtuel</title>
        <meta
          name="description"
          content="Découvrez tous nos services : service client, call center B2B, BPO, secrétariat médical, answering service, gestion de tickets, télésurveillance et plus."
        />
        <link rel="canonical" href="https://ziexter.com/services" />
      </Helmet>

      {/* Hero */}
      <section className="page-hero bg-gradient-to-br from-secondary to-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl animate-fade-in-up">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Nos services
            </h1>
            <p className="text-xl text-gray-100">
              Des solutions complètes pour externaliser vos opérations avec confiance. Made with 🌶️ piments en Tunisie.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in-up">
            <h2 className="section-title">Une gamme complète de services</h2>
            <p className="section-subtitle">
              De l'accueil téléphonique au BPO complet, nous couvrons tous vos besoins d'externalisation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="card hover-lift group animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className={`w-14 h-14 bg-${service.color}/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <svg className={`w-7 h-7 text-${service.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {service.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {service.description}
                </p>
                <span className="text-primary font-medium inline-flex items-center text-sm">
                  En savoir plus
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi externaliser */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in-up">
            <h2 className="section-title">Pourquoi externaliser avec ZiExter ?</h2>
            <p className="section-subtitle">
              Des avantages concrets pour votre entreprise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card hover-lift animate-fade-in-up">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Réduction des coûts</h3>
              <p className="text-gray-600 text-sm">
                Jusqu'à 60% d'économies sur vos coûts opérationnels, sans compromis sur la qualité.
              </p>
            </div>

            <div className="card hover-lift animate-fade-in-up animation-delay-100">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Flexibilité et scalabilité</h3>
              <p className="text-gray-600 text-sm">
                Adaptez vos ressources selon vos besoins, sans contrainte de recrutement.
              </p>
            </div>

            <div className="card hover-lift animate-fade-in-up animation-delay-200">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Expertise reconnue</h3>
              <p className="text-gray-600 text-sm">
                +200 experts formés, +500 projets réalisés, 98% de satisfaction client.
              </p>
            </div>

            <div className="card hover-lift animate-fade-in-up">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Disponibilité 24/7</h3>
              <p className="text-gray-600 text-sm">
                Nos équipes assurent une permanence totale, week-ends et jours fériés inclus.
              </p>
            </div>

            <div className="card hover-lift animate-fade-in-up animation-delay-100">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Multilinguisme</h3>
              <p className="text-gray-600 text-sm">
                Français, anglais, arabe, espagnol... 8+ langues pour servir vos clients internationaux.
              </p>
            </div>

            <div className="card hover-lift animate-fade-in-up animation-delay-200">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Sécurité et conformité</h3>
              <p className="text-gray-600 text-sm">
                RGPD & ISO 27001 compatibles. Vos données sont protégées avec le plus grand soin.
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

export default Services;

