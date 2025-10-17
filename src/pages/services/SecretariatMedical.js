import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const SecretariatMedical = () => {
  return (
    <>
      <Helmet>
        <title>Secrétariat Médical - ZiExter | Permanence téléphonique médicale</title>
        <meta name="description" content="Secrétariat médical externalisé : gestion agenda, prise de RDV patients, rappels, permanence téléphonique médicale 24/7." />
        <link rel="canonical" href="https://ziexter.com/services/secretariat-medical" />
      </Helmet>

      <section className="page-hero bg-gradient-to-br from-secondary to-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl animate-fade-in-up">
            <nav className="flex items-center space-x-2 text-sm mb-4 text-gray-200">
              <Link to="/" className="hover:text-white">Accueil</Link>
              <span>/</span>
              <Link to="/services" className="hover:text-white">Services</Link>
              <span>/</span>
              <span className="text-white">Secrétariat Médical</span>
            </nav>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Secrétariat Médical
            </h1>
            <p className="text-xl text-gray-100">
              Externalisez votre secrétariat médical et concentrez-vous sur vos patients.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Prise de rendez-vous patients', desc: 'Gestion d\'agenda médical, réservation créneaux, modification, annulation.' },
              { title: 'Rappels automatiques', desc: 'SMS/email de confirmation, rappels J-1, réduction du taux de no-show.' },
              { title: 'Permanence téléphonique', desc: 'Réception appels patients, filtrage urgences, prise de messages.' },
              { title: 'Gestion dossiers patients', desc: 'Mise à jour informations, vérification mutuelles, pré-remplissage.' },
              { title: 'Facturation & tiers-payant', desc: 'Gestion feuilles de soins, tiers-payant, relances impayés.' },
              { title: 'Conformité RGPD', desc: 'Sécurité données santé, confidentialité totale, hébergement agréé HDS.' }
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
              Optimisez la gestion de votre cabinet médical
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

export default SecretariatMedical;

