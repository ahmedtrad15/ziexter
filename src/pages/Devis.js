import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const Devis = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    entreprise: '',
    secteur: '',
    service: '',
    volumeAppels: '',
    langues: [],
    disponibilite: '',
    budget: '',
    description: '',
    honeypot: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const services = [
    'Service Client',
    'Call Center B2B',
    'Call Center pour Centres de Formation',
    'Externalisation appels AirBnB',
    'BPO',
    'Intégrateur Informatique',
    'Maintenance IRVE',
    'Answering Service',
    'Réseaux sociaux',
    'Secrétariat Médical',
    'Gestion des tickets',
    'Gardiennage et Sécurité',
    'Autre'
  ];

  const languesOptions = [
    'Français',
    'Anglais',
    'Arabe',
    'Espagnol',
    'Allemand',
    'Italien',
    'Néerlandais',
    'Portugais'
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.nom.trim()) newErrors.nom = 'Le nom est requis';
    if (!formData.prenom.trim()) newErrors.prenom = 'Le prénom est requis';
    
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email invalide';
    }

    if (!formData.telephone.trim()) {
      newErrors.telephone = 'Le téléphone est requis';
    } else if (!/^[+]?[\d\s()-]{10,}$/.test(formData.telephone)) {
      newErrors.telephone = 'Numéro de téléphone invalide';
    }

    if (!formData.entreprise.trim()) newErrors.entreprise = 'Le nom de l\'entreprise est requis';
    if (!formData.service) newErrors.service = 'Veuillez sélectionner un service';
    if (formData.langues.length === 0) newErrors.langues = 'Veuillez sélectionner au moins une langue';

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleLangueChange = (langue) => {
    setFormData(prev => {
      const langues = prev.langues.includes(langue)
        ? prev.langues.filter(l => l !== langue)
        : [...prev.langues, langue];
      return { ...prev, langues };
    });
    if (errors.langues) {
      setErrors(prev => ({ ...prev, langues: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot check
    if (formData.honeypot) {
      return;
    }

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        entreprise: '',
        secteur: '',
        service: '',
        volumeAppels: '',
        langues: [],
        disponibilite: '',
        budget: '',
        description: '',
        honeypot: ''
      });
    }, 1500);
  };

  return (
    <>
      <Helmet>
        <title>Demander un devis - ZiExter | Devis gratuit Call Center & BPO</title>
        <meta
          name="description"
          content="Demandez un devis gratuit pour vos besoins en call center, BPO et externalisation. Réponse rapide et personnalisée."
        />
        <link rel="canonical" href="https://ziexter.com/devis" />
      </Helmet>

      {/* Hero */}
      <section className="page-hero bg-gradient-to-br from-secondary to-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl animate-fade-in-up">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Demandez un devis gratuit
            </h1>
            <p className="text-xl text-gray-100">
              Remplissez le formulaire et recevez une proposition personnalisée sous 24h.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="animate-fade-in-up">
            {submitSuccess ? (
              <div className="card text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4">Demande de devis envoyée !</h3>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  Merci pour votre confiance. Notre équipe commerciale analysera votre demande et vous contactera sous 24h avec une proposition personnalisée.
                </p>
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="btn btn-primary"
                >
                  Faire une nouvelle demande
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card">
                <div className="space-y-8">
                  {/* Informations personnelles */}
                  <div>
                    <h3 className="font-heading text-xl font-semibold mb-4 flex items-center">
                      <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm mr-3">1</span>
                      Informations personnelles
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">
                          Nom *
                        </label>
                        <input
                          type="text"
                          id="nom"
                          name="nom"
                          value={formData.nom}
                          onChange={handleChange}
                          className={`input ${errors.nom ? 'border-red-500' : ''}`}
                          placeholder="Votre nom"
                        />
                        {errors.nom && <p className="mt-1 text-sm text-red-600">{errors.nom}</p>}
                      </div>

                      <div>
                        <label htmlFor="prenom" className="block text-sm font-medium text-gray-700 mb-2">
                          Prénom *
                        </label>
                        <input
                          type="text"
                          id="prenom"
                          name="prenom"
                          value={formData.prenom}
                          onChange={handleChange}
                          className={`input ${errors.prenom ? 'border-red-500' : ''}`}
                          placeholder="Votre prénom"
                        />
                        {errors.prenom && <p className="mt-1 text-sm text-red-600">{errors.prenom}</p>}
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email professionnel *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`input ${errors.email ? 'border-red-500' : ''}`}
                          placeholder="votre@email.com"
                        />
                        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                      </div>

                      <div>
                        <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-2">
                          Téléphone *
                        </label>
                        <input
                          type="tel"
                          id="telephone"
                          name="telephone"
                          value={formData.telephone}
                          onChange={handleChange}
                          className={`input ${errors.telephone ? 'border-red-500' : ''}`}
                          placeholder="+33 X XX XX XX XX"
                        />
                        {errors.telephone && <p className="mt-1 text-sm text-red-600">{errors.telephone}</p>}
                      </div>
                    </div>
                  </div>

                  {/* Informations entreprise */}
                  <div className="border-t pt-8">
                    <h3 className="font-heading text-xl font-semibold mb-4 flex items-center">
                      <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm mr-3">2</span>
                      Informations sur votre entreprise
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="entreprise" className="block text-sm font-medium text-gray-700 mb-2">
                          Nom de l'entreprise *
                        </label>
                        <input
                          type="text"
                          id="entreprise"
                          name="entreprise"
                          value={formData.entreprise}
                          onChange={handleChange}
                          className={`input ${errors.entreprise ? 'border-red-500' : ''}`}
                          placeholder="Nom de votre entreprise"
                        />
                        {errors.entreprise && <p className="mt-1 text-sm text-red-600">{errors.entreprise}</p>}
                      </div>

                      <div>
                        <label htmlFor="secteur" className="block text-sm font-medium text-gray-700 mb-2">
                          Secteur d'activité
                        </label>
                        <input
                          type="text"
                          id="secteur"
                          name="secteur"
                          value={formData.secteur}
                          onChange={handleChange}
                          className="input"
                          placeholder="Ex: E-commerce, Santé, Formation..."
                        />
                      </div>
                    </div>
                  </div>

                  {/* Détails du projet */}
                  <div className="border-t pt-8">
                    <h3 className="font-heading text-xl font-semibold mb-4 flex items-center">
                      <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm mr-3">3</span>
                      Détails de votre projet
                    </h3>
                    <div className="space-y-6">
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                          Service souhaité *
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className={`input ${errors.service ? 'border-red-500' : ''}`}
                        >
                          <option value="">Sélectionnez un service</option>
                          {services.map((service, index) => (
                            <option key={index} value={service}>{service}</option>
                          ))}
                        </select>
                        {errors.service && <p className="mt-1 text-sm text-red-600">{errors.service}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          Langues requises *
                        </label>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          {languesOptions.map((langue, index) => (
                            <label key={index} className="flex items-center space-x-2 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={formData.langues.includes(langue)}
                                onChange={() => handleLangueChange(langue)}
                                className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                              />
                              <span className="text-sm text-gray-700">{langue}</span>
                            </label>
                          ))}
                        </div>
                        {errors.langues && <p className="mt-1 text-sm text-red-600">{errors.langues}</p>}
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="volumeAppels" className="block text-sm font-medium text-gray-700 mb-2">
                            Volume d'appels estimé (par jour)
                          </label>
                          <input
                            type="text"
                            id="volumeAppels"
                            name="volumeAppels"
                            value={formData.volumeAppels}
                            onChange={handleChange}
                            className="input"
                            placeholder="Ex: 50-100 appels/jour"
                          />
                        </div>

                        <div>
                          <label htmlFor="disponibilite" className="block text-sm font-medium text-gray-700 mb-2">
                            Disponibilité souhaitée
                          </label>
                          <select
                            id="disponibilite"
                            name="disponibilite"
                            value={formData.disponibilite}
                            onChange={handleChange}
                            className="input"
                          >
                            <option value="">Sélectionnez</option>
                            <option value="8h-18h">8h-18h (heures bureau)</option>
                            <option value="8h-20h">8h-20h (horaires étendus)</option>
                            <option value="24/7">24h/24, 7j/7</option>
                            <option value="personnalisé">Horaires personnalisés</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                          Budget mensuel estimé
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="input"
                        >
                          <option value="">Sélectionnez une fourchette</option>
                          <option value="<1000">Moins de 1 000 €</option>
                          <option value="1000-2500">1 000 € - 2 500 €</option>
                          <option value="2500-5000">2 500 € - 5 000 €</option>
                          <option value="5000-10000">5 000 € - 10 000 €</option>
                          <option value=">10000">Plus de 10 000 €</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                          Description de votre besoin
                        </label>
                        <textarea
                          id="description"
                          name="description"
                          value={formData.description}
                          onChange={handleChange}
                          rows={5}
                          className="input"
                          placeholder="Décrivez vos besoins, contraintes, objectifs..."
                        />
                      </div>
                    </div>
                  </div>

                  {/* Honeypot */}
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleChange}
                    className="hidden"
                    tabIndex="-1"
                    autoComplete="off"
                  />

                  <div className="border-t pt-8">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary w-full btn-lg"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Envoi en cours...
                        </span>
                      ) : (
                        'Envoyer ma demande de devis'
                      )}
                    </button>

                    <p className="text-sm text-gray-500 text-center mt-4">
                      * Champs obligatoires • Réponse sous 24h • Gratuit et sans engagement
                    </p>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Reassurance */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4 animate-fade-in-up">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Réponse rapide</h3>
                <p className="text-sm text-gray-600">
                  Notre équipe vous contacte sous 24h avec une proposition détaillée et personnalisée.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 animate-fade-in-up animation-delay-100">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Sans engagement</h3>
                <p className="text-sm text-gray-600">
                  Demande de devis 100% gratuite. Aucun engagement ni frais cachés.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 animate-fade-in-up animation-delay-200">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Données sécurisées</h3>
                <p className="text-sm text-gray-600">
                  Vos informations sont protégées et ne seront jamais partagées avec des tiers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Devis;

