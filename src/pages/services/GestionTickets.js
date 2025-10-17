import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const GestionTickets = () => {
  return (
    <>
      <Helmet>
        <title>Gestion des Tickets - ZiExter | Traitement tickets support</title>
        <meta name="description" content="Gestion complète de vos tickets support : traitement, catégorisation, escalade, suivi résolution. Zendesk, Freshdesk, Jira..." />
        <link rel="canonical" href="https://ziexter.com/services/gestion-des-tickets" />
      </Helmet>

      <section className="page-hero bg-gradient-to-br from-secondary to-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl animate-fade-in-up">
            <nav className="flex items-center space-x-2 text-sm mb-4 text-gray-200">
              <Link to="/" className="hover:text-white">Accueil</Link>
              <span>/</span>
              <Link to="/services" className="hover:text-white">Services</Link>
              <span>/</span>
              <span className="text-white">Gestion des Tickets</span>
            </nav>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Gestion des Tickets
            </h1>
            <p className="text-xl text-gray-100">
              Traitement professionnel de vos tickets support, de l'ouverture à la résolution complète.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Traitement de tickets', desc: 'Réponse rapide, résolution niveau 1 et 2, qualification.' },
              { title: 'Catégorisation', desc: 'Classification par type, priorité, département concerné.' },
              { title: 'Escalade intelligente', desc: 'Transfert niveau 3, notification experts, SLA respectés.' },
              { title: 'Suivi jusqu\'à résolution', desc: 'Relances proactives, mises à jour clients, clôture confirmée.' },
              { title: 'Multicanal', desc: 'Email, chat, téléphone, formulaire web : tous canaux centralisés.' },
              { title: 'Reporting détaillé', desc: 'KPI temps de réponse, taux de résolution, satisfaction client.' },
              { title: 'Outils supportés', desc: 'Zendesk, Freshdesk, Jira, ServiceNow, Monday.com, HubSpot...' },
              { title: 'Base de connaissance', desc: 'Création FAQ, documentation solutions, amélioration continue.' }
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
              Optimisez votre gestion de tickets
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

export default GestionTickets;

