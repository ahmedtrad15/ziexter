import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const IntegrateurInformatique = () => {
  return (
    <>
      <Helmet>
        <title>Support IT Intégrateur Informatique - ZiExter | Hotline technique</title>
        <meta name="description" content="Hotline IT, support technique, gestion incidents, assistance utilisateurs. Niveau 1 et 2, escalade, ticketing." />
        <link rel="canonical" href="https://ziexter.com/services/integrateur-informatique" />
      </Helmet>

      <section className="page-hero bg-gradient-to-br from-secondary to-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl animate-fade-in-up">
            <nav className="flex items-center space-x-2 text-sm mb-4 text-gray-200">
              <Link to="/" className="hover:text-white">Accueil</Link>
              <span>/</span>
              <Link to="/services" className="hover:text-white">Services</Link>
              <span>/</span>
              <span className="text-white">Intégrateur Informatique</span>
            </nav>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Support IT - Intégrateur Informatique
            </h1>
            <p className="text-xl text-gray-100">
              Hotline technique professionnelle pour vos clients et utilisateurs.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Hotline technique niveau 1 et 2', desc: 'Diagnostic à distance, résolution incidents, reset mot de passe, configuration basique.' },
              { title: 'Gestion des incidents', desc: 'Création et suivi tickets, catégorisation, escalade niveau 3, reporting.' },
              { title: 'Assistance utilisateurs', desc: 'Formation utilisation logiciels, accompagnement onboarding, support quotidien.' },
              { title: 'Support SaaS', desc: 'Assistance éditeurs logiciels, gestion abonnements, bugs reporting, feature requests.' }
            ].map((item, i) => (
              <div key={i} className="card hover-lift animate-fade-in-up" style={{ animationDelay: `${i * 50}ms` }}>
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
              Externalisez votre hotline IT
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

export default IntegrateurInformatique;

