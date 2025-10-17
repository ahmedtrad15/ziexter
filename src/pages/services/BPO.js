import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const BPO = () => {
  return (
    <>
      <Helmet>
        <title>BPO (Business Process Outsourcing) - ZiExter | Externalisation back-office</title>
        <meta name="description" content="Externalisez vos processus avec ZiExter : saisie de données, traitement commandes, gestion administrative, back-office complet." />
        <link rel="canonical" href="https://ziexter.com/services/bpo" />
      </Helmet>

      <section className="page-hero bg-gradient-to-br from-secondary to-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl animate-fade-in-up">
            <nav className="flex items-center space-x-2 text-sm mb-4 text-gray-200">
              <Link to="/" className="hover:text-white">Accueil</Link>
              <span>/</span>
              <Link to="/services" className="hover:text-white">Services</Link>
              <span>/</span>
              <span className="text-white">BPO</span>
            </nav>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              BPO - Business Process Outsourcing
            </h1>
            <p className="text-xl text-gray-100">
              Externalisez vos tâches répétitives et concentrez-vous sur votre cœur de métier.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Saisie de données', desc: 'Data entry, numérisation documents, enrichissement base de données, contrôle qualité.' },
              { title: 'Traitement de commandes', desc: 'Saisie commandes, vérification, suivi expéditions, gestion retours.' },
              { title: 'Gestion administrative', desc: 'Facturation, relances, classement, archivage, mise à jour fichiers.' },
              { title: 'Back-office comptable', desc: 'Saisie comptable, rapprochements bancaires, suivi règlements.' },
              { title: 'Gestion RH', desc: 'Saisie bulletins paie, gestion congés, suivi absences, onboarding.' },
              { title: 'E-commerce', desc: 'Mise à jour catalogues, modération avis, gestion stocks, support marchands.' }
            ].map((item, i) => (
              <div key={i} className="card hover-lift animate-fade-in-up" style={{ animationDelay: `${i * 50}ms` }}>
                <h3 className="font-semibold mb-2">{item.title}</h3>
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
              Prêt à optimiser vos processus ?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/devis" className="btn btn-accent btn-lg">Demander un devis</Link>
              <Link to="/contact" className="btn btn-outline-white btn-lg">Nous contacter</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BPO;

