import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const NousRejoindre = () => {
  const avantages = [
    {
      title: 'Formation continue',
      description: 'Développez vos compétences avec des formations régulières : techniques de communication, outils CRM, langues étrangères.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      )
    },
    {
      title: 'Évolution de carrière',
      description: 'Passez de téléconseiller à superviseur, formateur, chef de projet ou responsable d\'opérations. Nous valorisons les talents internes.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      )
    },
    {
      title: 'Ambiance conviviale',
      description: 'Rejoignez une équipe passionnée, soudée et bienveillante. Made with 🌶️ piments, on ne plaisante pas !',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      )
    },
    {
      title: 'Horaires flexibles',
      description: 'Temps plein, temps partiel, shift de jour ou de nuit : nous adaptons les plannings à vos contraintes personnelles.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      )
    },
    {
      title: 'Rémunération attractive',
      description: 'Salaire compétitif + primes de performance + avantages sociaux. Vos efforts sont reconnus et récompensés.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      )
    },
    {
      title: 'Environnement moderne',
      description: 'Bureaux climatisés, équipements informatiques récents, espaces de pause confortables.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      )
    }
  ];

  const postes = [
    {
      title: 'Téléconseiller(ère) Service Client',
      type: 'CDI / CDD',
      location: 'Ksibet El Mediouni, Tunisie',
      description: 'Répondre aux appels entrants, traiter les demandes clients, gérer les réclamations avec professionnalisme.',
      requirements: ['Excellent relationnel', 'Français courant (à l\'oral et à l\'écrit)', 'Capacité d\'écoute et d\'empathie', 'Maîtrise de l\'outil informatique']
    },
    {
      title: 'Téléprospecteur(trice) B2B',
      type: 'CDI',
      location: 'Ksibet El Mediouni, Tunisie',
      description: 'Prospecter des entreprises, qualifier des leads, prendre des rendez-vous commerciaux.',
      requirements: ['Aisance téléphonique', 'Esprit de conquête', 'Français et/ou anglais', 'Expérience en prospection B2B appréciée']
    },
    {
      title: 'Superviseur(e) Call Center',
      type: 'CDI',
      location: 'Ksibet El Mediouni, Tunisie',
      description: 'Encadrer une équipe de téléconseillers, assurer le suivi des KPI, former et coacher les agents.',
      requirements: ['Expérience en management', 'Leadership et pédagogie', 'Maîtrise des outils CRM', 'Français et anglais courants']
    },
    {
      title: 'Agent BPO (Back-Office)',
      type: 'CDI / CDD',
      location: 'Ksibet El Mediouni, Tunisie',
      description: 'Saisie de données, traitement de commandes, gestion administrative, traitement de documents.',
      requirements: ['Rigueur et précision', 'Rapidité de frappe', 'Maîtrise d\'Excel', 'Français lu et écrit']
    },
    {
      title: 'Secrétaire Médicale',
      type: 'CDI',
      location: 'Ksibet El Mediouni, Tunisie',
      description: 'Prise de rendez-vous patients, gestion d\'agenda médical, rappels, permanence téléphonique.',
      requirements: ['Connaissance du vocabulaire médical', 'Excellente élocution', 'Sens du service', 'Discrétion et confidentialité']
    },
    {
      title: 'Formateur(trice) Call Center',
      type: 'CDI',
      location: 'Ksibet El Mediouni, Tunisie',
      description: 'Former les nouveaux agents, élaborer des supports pédagogiques, animer des sessions de recyclage.',
      requirements: ['Expérience en call center (minimum 3 ans)', 'Capacités pédagogiques', 'Excellente communication', 'Maîtrise des techniques de vente/service client']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Nous rejoindre - ZiExter | Offres d'emploi Call Center Tunisie</title>
        <meta
          name="description"
          content="Rejoignez ZiExter ! Recrutement de téléconseillers, superviseurs, agents BPO à Ksibet El Mediouni. Formation, évolution, ambiance conviviale."
        />
        <link rel="canonical" href="https://ziexter.com/nous-rejoindre" />
      </Helmet>

      {/* Hero */}
      <section className="page-hero bg-gradient-to-br from-secondary to-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl animate-fade-in-up">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Rejoignez l'aventure ZiExter
            </h1>
            <p className="text-xl text-gray-100">
              Nous recherchons des talents passionnés pour faire grandir notre équipe. Made with 🌶️ piments !
            </p>
          </div>
        </div>
      </section>

      {/* Pourquoi nous rejoindre */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in-up">
            <h2 className="section-title">Pourquoi rejoindre ZiExter ?</h2>
            <p className="section-subtitle">
              Des opportunités de carrière dans un environnement stimulant et bienveillant
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {avantages.map((avantage, index) => (
              <div
                key={index}
                className="card hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {avantage.icon}
                  </svg>
                </div>
                <h3 className="font-heading font-semibold text-lg mb-3">{avantage.title}</h3>
                <p className="text-gray-600 text-sm">{avantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Postes disponibles */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in-up">
            <h2 className="section-title">Postes disponibles</h2>
            <p className="section-subtitle">
              Découvrez nos offres d'emploi et postulez en quelques clics
            </p>
          </div>

          <div className="space-y-6 max-w-5xl mx-auto">
            {postes.map((poste, index) => (
              <div
                key={index}
                className="card hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-heading font-bold text-xl text-gray-900">{poste.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary/10 text-primary">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        {poste.type}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-accent/10 text-accent">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {poste.location}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{poste.description}</p>
                    <div>
                      <p className="font-semibold text-sm mb-2">Profil recherché :</p>
                      <ul className="space-y-1">
                        {poste.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-600">
                            <svg className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="lg:w-48 flex-shrink-0">
                    <Link
                      to="/contact"
                      className="btn btn-primary w-full"
                    >
                      Postuler
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processus de recrutement */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in-up">
            <h2 className="section-title">Notre processus de recrutement</h2>
            <p className="section-subtitle">
              Un parcours simple et transparent en 4 étapes
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center animate-fade-in-up">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold mb-2">Candidature</h3>
              <p className="text-sm text-gray-600">
                Envoyez votre CV et lettre de motivation via notre formulaire de contact.
              </p>
            </div>

            <div className="text-center animate-fade-in-up animation-delay-100">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold mb-2">Présélection</h3>
              <p className="text-sm text-gray-600">
                Notre équipe RH étudie votre profil et vous recontacte sous 72h.
              </p>
            </div>

            <div className="text-center animate-fade-in-up animation-delay-200">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold mb-2">Entretien</h3>
              <p className="text-sm text-gray-600">
                Entretien RH + test de compétences (langue, logique, mise en situation).
              </p>
            </div>

            <div className="text-center animate-fade-in-up animation-delay-300">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="font-semibold mb-2">Intégration</h3>
              <p className="text-sm text-gray-600">
                Formation complète, accompagnement personnalisé, bienvenue dans l'équipe !
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Candidature spontanée */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Vous ne trouvez pas votre poste idéal ?
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Envoyez-nous une candidature spontanée. Nous sommes toujours à la recherche de nouveaux talents !
            </p>
            <Link to="/contact" className="btn btn-accent btn-lg">
              Envoyer ma candidature
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default NousRejoindre;

