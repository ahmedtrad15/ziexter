import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const AnsweringService = () => {
  return (
    <>
      <Helmet>
        <title>Answering Service - ZiExter | Secrétariat téléphonique virtuel 24/7</title>
        <meta name="description" content="Permanence téléphonique 24/7 : réception appels, filtrage, prise de messages, transfert intelligent. Votre secrétariat virtuel." />
        <link rel="canonical" href="https://ziexter.com/services/answering-service" />
      </Helmet>

      <section className="page-hero bg-gradient-to-br from-secondary to-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl animate-fade-in-up">
            <nav className="flex items-center space-x-2 text-sm mb-4 text-gray-200">
              <Link to="/" className="hover:text-white">Accueil</Link>
              <span>/</span>
              <Link to="/services" className="hover:text-white">Services</Link>
              <span>/</span>
              <span className="text-white">Answering Service</span>
            </nav>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Answering Service
            </h1>
            <p className="text-xl text-gray-100">
              Votre secrétariat téléphonique virtuel, disponible 24h/24, 7j/7.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Réception d\'appels 24/7', desc: 'Accueil téléphonique permanent, même la nuit et week-ends.' },
              { title: 'Filtrage d\'appels', desc: 'Qualification appelants, transfert prioritaire, blocage spam.' },
              { title: 'Prise de messages', desc: 'Messages détaillés par email/SMS, enregistrement audio si besoin.' },
              { title: 'Transfert intelligent', desc: 'Transfert selon urgence, disponibilité, horaires personnalisés.' },
              { title: 'Prise de RDV', desc: 'Accès votre agenda, réservation créneaux, confirmations automatiques.' },
              { title: 'Information produits', desc: 'Scripts personnalisés, FAQ, orientation vers ressources.' },
              { title: 'Gestion urgences', desc: 'Protocole sur-mesure, escalade immédiate, astreinte technique.' },
              { title: 'Multilinguisme', desc: 'Français, anglais, arabe, espagnol... 8+ langues disponibles.' }
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
              Ne manquez plus jamais un appel important
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

export default AnsweringService;

