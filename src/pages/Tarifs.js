import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Tarifs = () => {
  const formules = [
    {
      name: 'Starter',
      description: 'Idéal pour tester nos services',
      price: 'Sur devis',
      popular: false,
      features: [
        'Jusqu\'à 100 appels/mois',
        '1 langue au choix',
        'Horaires de bureau (8h-18h)',
        'Accès dashboard basique',
        'Reporting mensuel',
        'Support email',
        'Formation des agents incluse'
      ]
    },
    {
      name: 'Business',
      description: 'La solution complète pour les PME',
      price: 'À partir de 2 500 €/mois',
      popular: true,
      features: [
        'Jusqu\'à 500 appels/mois',
        '2-3 langues',
        'Horaires étendus (8h-20h)',
        'Accès dashboard avancé',
        'Reporting hebdomadaire',
        'Support prioritaire',
        'Chef de projet dédié',
        'Intégration CRM',
        'Scripts personnalisés'
      ]
    },
    {
      name: 'Enterprise',
      description: 'Pour les volumes importants',
      price: 'Sur devis',
      popular: false,
      features: [
        'Volume illimité',
        'Multilingue (8+ langues)',
        'Disponibilité 24/7',
        'Dashboard personnalisé',
        'Reporting temps réel',
        'Account manager dédié',
        'Équipe dédiée',
        'Intégrations sur mesure',
        'SLA garanti',
        'Audit qualité trimestriel'
      ]
    }
  ];

  const services = [
    {
      name: 'Service Client',
      tarif: 'À partir de 12 €/heure',
      description: 'Accueil téléphonique, support multicanal, gestion des réclamations'
    },
    {
      name: 'Call Center B2B',
      tarif: 'À partir de 15 €/heure',
      description: 'Prospection, qualification de leads, prise de RDV'
    },
    {
      name: 'Answering Service',
      tarif: 'À partir de 300 €/mois',
      description: 'Permanence téléphonique 24/7, filtrage d\'appels'
    },
    {
      name: 'Secrétariat Médical',
      tarif: 'À partir de 500 €/mois',
      description: 'Gestion d\'agenda, prise de RDV patients, rappels'
    },
    {
      name: 'BPO',
      tarif: 'Sur devis',
      description: 'Saisie de données, traitement de commandes, back-office'
    },
    {
      name: 'Gestion des tickets',
      tarif: 'À partir de 8 €/ticket',
      description: 'Traitement, catégorisation, escalade'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Tarifs - ZiExter | Prix Call Center, BPO, Secrétariat</title>
        <meta
          name="description"
          content="Découvrez nos tarifs transparents pour call center, BPO et secrétariat virtuel. Formules adaptées aux TPE, PME et grandes entreprises. Devis gratuit."
        />
        <link rel="canonical" href="https://ziexter.com/tarifs" />
      </Helmet>

      {/* Hero */}
      <section className="page-hero bg-gradient-to-br from-secondary to-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl animate-fade-in-up">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Nos tarifs
            </h1>
            <p className="text-xl text-gray-100">
              Des formules flexibles et transparentes, adaptées à votre activité et votre budget.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in-up">
            <h2 className="section-title">Formules par volume</h2>
            <p className="section-subtitle">
              Choisissez la formule adaptée à vos besoins. Tous nos forfaits sont sans engagement long terme.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {formules.map((formule, index) => (
              <div
                key={index}
                className={`card hover-lift animate-fade-in-up ${
                  formule.popular ? 'ring-2 ring-primary relative' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {formule.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Le plus populaire
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="font-heading text-2xl font-bold mb-2">{formule.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{formule.description}</p>
                  <div className="text-3xl font-bold text-primary">{formule.price}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {formule.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/devis"
                  className={`btn w-full ${formule.popular ? 'btn-primary' : 'btn-outline'}`}
                >
                  Demander un devis
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Pricing */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in-up">
            <h2 className="section-title">Tarifs par service</h2>
            <p className="section-subtitle">
              Tarifs indicatifs. Chaque projet est unique, contactez-nous pour un devis personnalisé.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="card hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <h3 className="font-heading font-semibold text-lg mb-2">{service.name}</h3>
                <div className="text-2xl font-bold text-primary mb-3">{service.tarif}</div>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in-up">
            <Link to="/services" className="btn btn-outline btn-lg">
              Voir tous nos services
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Factors */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in-up">
            <h2 className="section-title">Qu'est-ce qui influence le tarif ?</h2>
            <p className="section-subtitle">
              Plusieurs critères entrent en compte pour établir votre devis personnalisé
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in-up">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Volume</h3>
              <p className="text-sm text-gray-600">
                Nombre d'appels, tickets ou heures par mois
              </p>
            </div>

            <div className="text-center animate-fade-in-up animation-delay-100">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Langues</h3>
              <p className="text-sm text-gray-600">
                Nombre et type de langues requises
              </p>
            </div>

            <div className="text-center animate-fade-in-up animation-delay-200">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Horaires</h3>
              <p className="text-sm text-gray-600">
                Bureau, étendus ou 24/7
              </p>
            </div>

            <div className="text-center animate-fade-in-up animation-delay-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Complexité</h3>
              <p className="text-sm text-gray-600">
                Scripts, intégrations, formation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in-up">
            <h2 className="section-title">Pourquoi choisir ZiExter ?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card hover-lift animate-fade-in-up">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Tarifs compétitifs</h3>
              <p className="text-sm text-gray-600">
                Jusqu'à 60% d'économies par rapport à une équipe en interne, sans compromis sur la qualité.
              </p>
            </div>

            <div className="card hover-lift animate-fade-in-up animation-delay-100">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Transparence totale</h3>
              <p className="text-sm text-gray-600">
                Aucun frais caché. Tous les coûts sont détaillés dans votre devis.
              </p>
            </div>

            <div className="card hover-lift animate-fade-in-up animation-delay-200">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Flexibilité</h3>
              <p className="text-sm text-gray-600">
                Augmentez ou réduisez vos ressources en fonction de vos besoins, sans contrainte.
              </p>
            </div>

            <div className="card hover-lift animate-fade-in-up">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Sans engagement</h3>
              <p className="text-sm text-gray-600">
                Période d'essai possible. Contrats flexibles de 3 à 12 mois.
              </p>
            </div>

            <div className="card hover-lift animate-fade-in-up animation-delay-100">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Réponse rapide</h3>
              <p className="text-sm text-gray-600">
                Devis personnalisé sous 24h. Démarrage possible sous 2-3 semaines.
              </p>
            </div>

            <div className="card hover-lift animate-fade-in-up animation-delay-200">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">98% de satisfaction</h3>
              <p className="text-sm text-gray-600">
                +500 projets réalisés. Nos clients nous font confiance et nous recommandent.
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
              Prêt à obtenir votre devis personnalisé ?
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Réponse sous 24h • Gratuit et sans engagement • Proposition détaillée
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

export default Tarifs;

