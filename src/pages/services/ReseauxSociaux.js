import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const ReseauxSociaux = () => {
  return (
    <>
      <Helmet>
        <title>Gestion Réseaux Sociaux - ZiExter | Community Management externalisé</title>
        <meta name="description" content="Modération commentaires, réponses messages privés, community management, e-réputation. Facebook, Instagram, Twitter/X, LinkedIn." />
        <link rel="canonical" href="https://ziexter.com/services/reseaux-sociaux" />
      </Helmet>

      <section className="page-hero bg-gradient-to-br from-secondary to-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl animate-fade-in-up">
            <nav className="flex items-center space-x-2 text-sm mb-4 text-gray-200">
              <Link to="/" className="hover:text-white">Accueil</Link>
              <span>/</span>
              <Link to="/services" className="hover:text-white">Services</Link>
              <span>/</span>
              <span className="text-white">Réseaux Sociaux</span>
            </nav>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Gestion Réseaux Sociaux
            </h1>
            <p className="text-xl text-gray-100">
              Community management et modération pour protéger et développer votre e-réputation.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Modération de commentaires', desc: 'Surveillance 24/7, suppression spam, réponse commentaires, signalement abus.' },
              { title: 'Réponses messages privés', desc: 'Facebook Messenger, Instagram DM, Twitter/X, LinkedIn : réponse rapide et personnalisée.' },
              { title: 'Community management', desc: 'Animation communauté, engagement followers, gestion crises, customer care social.' },
              { title: 'E-réputation', desc: 'Veille mentions, gestion avis négatifs, valorisation avis positifs, reporting sentiment.' }
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
              Protégez et valorisez votre image sur les réseaux
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

export default ReseauxSociaux;

