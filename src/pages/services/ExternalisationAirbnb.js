import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const ExternalisationAirbnb = () => {
  return (
    <>
      <Helmet>
        <title>Externalisation appels AirBnB - ZiExter | Conciergerie locative</title>
        <meta name="description" content="Gérez vos locations AirBnB sans stress : réponses voyageurs 24/7, gestion réservations, check-in/out, support multilingue." />
        <link rel="canonical" href="https://ziexter.com/services/externalisation-appels-airbnb" />
      </Helmet>

      <section className="page-hero bg-gradient-to-br from-secondary to-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl animate-fade-in-up">
            <nav className="flex items-center space-x-2 text-sm mb-4 text-gray-200">
              <Link to="/" className="hover:text-white">Accueil</Link>
              <span>/</span>
              <Link to="/services" className="hover:text-white">Services</Link>
              <span>/</span>
              <span className="text-white">Externalisation AirBnB</span>
            </nav>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Externalisation appels AirBnB
            </h1>
            <p className="text-xl text-gray-100">
              Votre conciergerie locative 24/7, multilingue et professionnelle.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in-up">
            <h2 className="section-title">Ce que nous prenons en charge</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Réponse aux voyageurs 24/7', desc: 'Messagerie AirBnB, WhatsApp, email : réponse rapide en français, anglais, espagnol, italien.' },
              { title: 'Gestion des réservations', desc: 'Confirmation, modifications, annulations, gestion des calendriers multi-plateformes.' },
              { title: 'Check-in / Check-out', desc: 'Envoi des codes d\'accès, instructions d\'arrivée, récupération clés, état des lieux à distance.' },
              { title: 'Support pendant le séjour', desc: 'Assistance voyageurs, dépannage, recommandations locales, gestion incidents.' }
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
              Gérez vos locations sereinement
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

export default ExternalisationAirbnb;

