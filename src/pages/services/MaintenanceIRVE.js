import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const MaintenanceIRVE = () => {
  return (
    <>
      <Helmet>
        <title>Maintenance IRVE - ZiExter | Hotline bornes de recharge électrique</title>
        <meta name="description" content="Hotline technique pour installateurs de bornes IRVE : diagnostic, planification interventions, support utilisateurs finaux 24/7." />
        <link rel="canonical" href="https://ziexter.com/services/irve-maintenance-gestion" />
      </Helmet>

      <section className="page-hero bg-gradient-to-br from-secondary to-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl animate-fade-in-up">
            <nav className="flex items-center space-x-2 text-sm mb-4 text-gray-200">
              <Link to="/" className="hover:text-white">Accueil</Link>
              <span>/</span>
              <Link to="/services" className="hover:text-white">Services</Link>
              <span>/</span>
              <span className="text-white">Maintenance IRVE</span>
            </nav>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Maintenance & Gestion IRVE
            </h1>
            <p className="text-xl text-gray-100">
              Hotline dédiée aux installateurs et opérateurs de bornes de recharge électrique.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Hotline technique 24/7', desc: 'Support utilisateurs finaux, diagnostic à distance, résolution pannes.' },
              { title: 'Planification interventions', desc: 'Dispatching techniciens, gestion planning, suivi interventions.' },
              { title: 'Gestion des incidents', desc: 'Ticketing, escalade, reporting, KPI temps de résolution.' },
              { title: 'Support utilisateurs finaux', desc: 'Aide à la recharge, dépannage carte RFID, facturation.' },
              { title: 'Gestion abonnements', desc: 'Souscription, modification, résiliation, facturation récurrente.' },
              { title: 'Reporting opérateur', desc: 'Dashboards temps réel, statistiques utilisation, maintenances préventives.' }
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
              Optimisez la gestion de vos bornes IRVE
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

export default MaintenanceIRVE;

