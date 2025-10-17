import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const GardiennageSecurite = () => {
  return (
    <>
      <Helmet>
        <title>Gardiennage et Sécurité Privée - ZiExter | Télésurveillance 24/7</title>
        <meta name="description" content="Centre d'appels dédié télésurveillance : gestion alarmes, dispatching interventions, support sécurité 24/7, reporting incidents." />
        <link rel="canonical" href="https://ziexter.com/services/gardiennage-securite-privee" />
      </Helmet>

      <section className="page-hero bg-gradient-to-br from-secondary to-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl animate-fade-in-up">
            <nav className="flex items-center space-x-2 text-sm mb-4 text-gray-200">
              <Link to="/" className="hover:text-white">Accueil</Link>
              <span>/</span>
              <Link to="/services" className="hover:text-white">Services</Link>
              <span>/</span>
              <span className="text-white">Gardiennage et Sécurité</span>
            </nav>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Gardiennage et Sécurité Privée
            </h1>
            <p className="text-xl text-gray-100">
              Centre d'appels dédié à la télésurveillance et à la sécurité privée, disponible 24h/24.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Télésurveillance 24/7', desc: 'Surveillance centrale d\'alarme, réception signaux, vérification images.' },
              { title: 'Gestion d\'alarmes', desc: 'Traitement déclenchements, levée de doute vidéo, contact clients.' },
              { title: 'Dispatching d\'interventions', desc: 'Envoi agents sécurité, coordination rondes, suivi interventions.' },
              { title: 'Centre d\'appels sécurité', desc: 'Hotline clients, assistance technique alarmes, gestion abonnements.' },
              { title: 'Reporting incidents', desc: 'Main courante électronique, rapports d\'intervention, statistiques.' },
              { title: 'Protocoles personnalisés', desc: 'Instructions spécifiques par site, escalade adaptée, contacts dédiés.' }
            ].map((item, i) => (
              <div key={i} className="card hover-lift animate-fade-in-up" style={{ animationDelay: `${i * 50}ms` }}>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in-up">
            <h2 className="section-title">Avantages de notre centre d'appels sécurité</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Disponibilité totale', desc: 'Équipe opérationnelle 24h/24, 365 jours par an, y compris jours fériés.' },
              { title: 'Agents formés', desc: 'Formation spécifique sécurité, gestion stress, protocoles urgence.' },
              { title: 'Réactivité', desc: 'Temps de réponse < 1 minute, escalade immédiate selon urgence.' }
            ].map((item, i) => (
              <div key={i} className="card hover-lift text-center animate-fade-in-up" style={{ animationDelay: `${i * 50}ms` }}>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Externalisez votre centre de télésurveillance
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/devis" className="btn btn-accent btn-lg">Demander un devis</Link>
              <Link to="/rendez-vous" className="btn btn-outline-white btn-lg">Prendre rendez-vous</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GardiennageSecurite;

