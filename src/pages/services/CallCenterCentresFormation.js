import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const CallCenterCentresFormation = () => {
  return (
    <>
      <Helmet>
        <title>Call Center pour Centres de Formation - ZiExter</title>
        <meta name="description" content="Externalisez votre accueil et gestion administrative avec ZiExter : prise de RDV, inscriptions, suivi formations, relances, plannings." />
        <link rel="canonical" href="https://ziexter.com/services/call-center-centres-de-formation" />
      </Helmet>

      <section className="page-hero bg-gradient-to-br from-secondary to-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl animate-fade-in-up">
            <nav className="flex items-center space-x-2 text-sm mb-4 text-gray-200">
              <Link to="/" className="hover:text-white">Accueil</Link>
              <span>/</span>
              <Link to="/services" className="hover:text-white">Services</Link>
              <span>/</span>
              <span className="text-white">Call Center pour Centres de Formation</span>
            </nav>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Call Center pour Centres de Formation
            </h1>
            <p className="text-xl text-gray-100">
              Simplifiez la gestion administrative de votre organisme de formation.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Prise de rendez-vous et inscriptions',
              'Suivi des formations et plannings',
              'Relances et confirmations',
              'Information sur les programmes',
              'Gestion des financements CPF/OPCO',
              'Support pédagogique et technique'
            ].map((item, i) => (
              <div key={i} className="card hover-lift animate-fade-in-up" style={{ animationDelay: `${i * 50}ms` }}>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Facilitez la gestion de votre centre de formation
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

export default CallCenterCentresFormation;

