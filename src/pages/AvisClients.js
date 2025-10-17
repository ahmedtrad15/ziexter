import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const AvisClients = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const temoignages = [
    {
      name: 'Sophie Dubois',
      company: 'E-Shop Mode',
      role: 'Directrice Marketing',
      avatar: '👩‍💼',
      rating: 5,
      text: 'ZiExter gère notre service client depuis 18 mois. Professionnalisme, réactivité, empathie : nos clients adorent ! Le taux de satisfaction est passé de 82% à 96%. Un partenaire de confiance, Made with 🌶️ comme ils disent !',
      service: 'Service Client'
    },
    {
      name: 'Marc Lefèvre',
      company: 'TechSolutions SARL',
      role: 'CEO',
      avatar: '👨‍💼',
      rating: 5,
      text: 'Nous avons externalisé notre hotline technique à ZiExter. Agents compétents, formés rapidement à nos produits, et un suivi quotidien impeccable. Nos tickets sont traités en moins de 4h en moyenne. Bravo à toute l\'équipe !',
      service: 'Support technique'
    },
    {
      name: 'Dr. Amina Ben Salem',
      company: 'Cabinet Médical Carthage',
      role: 'Médecin généraliste',
      avatar: '👩‍⚕️',
      rating: 5,
      text: 'Le secrétariat médical de ZiExter a transformé mon quotidien. Plus de téléphone qui sonne pendant les consultations, agenda parfaitement géré, patients rappelés systématiquement. Enfin je peux me concentrer sur mon cœur de métier !',
      service: 'Secrétariat médical'
    },
    {
      name: 'Jean-Pierre Martin',
      company: 'Formation Pro+',
      role: 'Responsable Commercial',
      avatar: '👨‍🏫',
      rating: 5,
      text: 'Excellent travail sur la prospection et la prise de rendez-vous pour nos formations. L\'équipe ZiExter a généré +40% de leads qualifiés en 6 mois. Des agents courtois, bien formés, et un ROI exceptionnel.',
      service: 'Call Center B2B'
    },
    {
      name: 'Laura Rossi',
      company: 'AirBnB Conciergerie Côte d\'Azur',
      role: 'Fondatrice',
      avatar: '👩‍💼',
      rating: 5,
      text: 'Gérer 25 appartements AirBnB sans stress, c\'est possible grâce à ZiExter ! Ils répondent aux voyageurs 24/7 en français, anglais et italien. Check-in/check-out fluides, clients ravis. Je recommande à 200% !',
      service: 'Externalisation AirBnB'
    },
    {
      name: 'Ahmed Trabelsi',
      company: 'SecuriGuard Tunisie',
      role: 'Directeur Opérations',
      avatar: '👨‍💼',
      rating: 5,
      text: 'Notre centre de télésurveillance est opéré par ZiExter depuis 2 ans. Disponibilité 24/7, gestion d\'alarmes ultra-rapide, dispatching efficace. Zéro incident majeur. Une équipe de professionnels aguerris.',
      service: 'Télésurveillance'
    },
    {
      name: 'Nathalie Dupont',
      company: 'GreenCharge IRVE',
      role: 'Responsable SAV',
      avatar: '👩‍💼',
      rating: 5,
      text: 'ZiExter assure notre hotline pour nos bornes de recharge électrique. Diagnostic à distance, planification interventions, support utilisateurs finaux : tout roule ! Nos clients sont satisfaits et nos techniciens aussi.',
      service: 'Maintenance IRVE'
    },
    {
      name: 'Thomas Bernard',
      company: 'LogiPro ERP',
      role: 'CTO',
      avatar: '👨‍💻',
      rating: 5,
      text: 'Notre BPO de saisie de données et traitement de commandes est géré par ZiExter. Qualité, rapidité, précision : tout est au rendez-vous. Nos délais de traitement ont été réduits de 50%. Merci à toute l\'équipe !',
      service: 'BPO'
    }
  ];

  const stats = [
    { value: '98%', label: 'Satisfaction client' },
    { value: '+500', label: 'Projets réalisés' },
    { value: '+15', label: 'Pays couverts' },
    { value: '4.9/5', label: 'Note moyenne' }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % temoignages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + temoignages.length) % temoignages.length);
  };

  return (
    <>
      <Helmet>
        <title>Avis clients - ZiExter | Témoignages et retours d'expérience</title>
        <meta
          name="description"
          content="Découvrez les avis de nos clients sur nos services de call center, BPO et secrétariat. 98% de satisfaction, +500 projets réalisés."
        />
        <link rel="canonical" href="https://ziexter.com/avis-clients" />
      </Helmet>

      {/* Hero */}
      <section className="page-hero bg-gradient-to-br from-secondary to-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl animate-fade-in-up">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Ils nous font confiance
            </h1>
            <p className="text-xl text-gray-100">
              Découvrez les retours d'expérience de nos clients. Made with 🌶️ piments !
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in-up">
            <h2 className="section-title">Ce que disent nos clients</h2>
            <p className="section-subtitle">
              Des témoignages authentiques de clients satisfaits
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Carousel */}
              <div className="card bg-white p-8 md:p-12 animate-fade-in">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="text-5xl">{temoignages[currentSlide].avatar}</div>
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-xl mb-1">
                      {temoignages[currentSlide].name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">
                      {temoignages[currentSlide].role} chez {temoignages[currentSlide].company}
                    </p>
                    <div className="flex items-center space-x-1">
                      {[...Array(temoignages[currentSlide].rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                    {temoignages[currentSlide].service}
                  </span>
                </div>

                <blockquote className="text-gray-700 text-lg leading-relaxed italic">
                  "{temoignages[currentSlide].text}"
                </blockquote>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-center space-x-4 mt-8">
                <button
                  onClick={prevSlide}
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors shadow-lg"
                  aria-label="Témoignage précédent"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <div className="flex space-x-2">
                  {temoignages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentSlide ? 'bg-primary' : 'bg-gray-300'
                      }`}
                      aria-label={`Aller au témoignage ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextSlide}
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors shadow-lg"
                  aria-label="Témoignage suivant"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in-up">
            <h2 className="section-title">Tous les témoignages</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {temoignages.map((temoignage, index) => (
              <div
                key={index}
                className="card hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-start space-x-3 mb-4">
                  <div className="text-3xl">{temoignage.avatar}</div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{temoignage.name}</h3>
                    <p className="text-xs text-gray-500">{temoignage.role}</p>
                    <p className="text-xs text-gray-600 font-medium">{temoignage.company}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(temoignage.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-sm text-gray-600 italic">"{temoignage.text}"</p>

                <span className="inline-block mt-4 px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                  {temoignage.service}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logos partenaires */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in-up">
            <h2 className="section-title">Ils nous font confiance</h2>
            <p className="section-subtitle">
              TPE, PME, ETI, grandes entreprises de tous secteurs
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="w-32 h-20 bg-gray-200 rounded-lg flex items-center justify-center animate-fade-in-up"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <span className="text-gray-400 text-sm">Logo {i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              À votre tour de rejoindre nos clients satisfaits
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Demandez un devis gratuit et découvrez pourquoi 98% de nos clients nous recommandent.
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

export default AvisClients;

