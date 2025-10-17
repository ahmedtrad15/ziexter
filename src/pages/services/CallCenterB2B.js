import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const CallCenterB2B = () => {
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://ziexter.com/" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://ziexter.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Call Center B2B", "item": "https://ziexter.com/services/call-center-b2b" }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Call Center B2B - ZiExter | Prospection et prise de RDV qualifiés</title>
        <meta name="description" content="Externalisez votre prospection B2B avec ZiExter : prise de rendez-vous qualifiés, qualification de leads, télémarketing. ROI prouvé, +40% de leads en 6 mois." />
        <link rel="canonical" href="https://ziexter.com/services/call-center-b2b" />
        <script type="application/ld+json">{JSON.stringify(jsonLdBreadcrumb)}</script>
      </Helmet>

      <section className="page-hero bg-gradient-to-br from-secondary to-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl animate-fade-in-up">
            <nav className="flex items-center space-x-2 text-sm mb-4 text-gray-200">
              <Link to="/" className="hover:text-white">Accueil</Link>
              <span>/</span>
              <Link to="/services" className="hover:text-white">Services</Link>
              <span>/</span>
              <span className="text-white">Call Center B2B</span>
            </nav>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Call Center B2B
            </h1>
            <p className="text-xl text-gray-100">
              Boostez vos ventes avec notre équipe de téléprospecteurs professionnels.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in-up">
            <h2 className="section-title">Nos services B2B</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Prospection commerciale', desc: 'Appels sortants ciblés, pitch commercial percutant, génération de leads qualifiés.' },
              { title: 'Prise de rendez-vous', desc: 'Qualification téléphonique, prise de RDV pour vos commerciaux, suivi et rappels.' },
              { title: 'Qualification de leads', desc: 'Enrichissement de votre base de données, scoring, identification décisionnaires.' },
              { title: 'Relance clients', desc: 'Suivi post-vente, renouvellement contrats, up-selling, cross-selling.' }
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
              Prêt à booster votre prospection B2B ?
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

export default CallCenterB2B;

