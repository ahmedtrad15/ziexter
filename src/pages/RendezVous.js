import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const RendezVous = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    entreprise: '',
    sujet: '',
    date: '',
    heure: '',
    message: '',
    honeypot: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const sujets = [
    'Découverte de nos services',
    'Demande de devis personnalisé',
    'Questions techniques',
    'Partenariat commercial',
    'Recrutement / Carrières',
    'Autre'
  ];

  const creneauxHoraires = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00'
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

    if (!formData.sujet) newErrors.sujet = 'Veuillez sélectionner un sujet';
    if (!formData.date) newErrors.date = 'Veuillez choisir une date';
    if (!formData.heure) newErrors.heure = 'Veuillez choisir un horaire';

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
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
        sujet: '',
        date: '',
        heure: '',
        message: '',
        honeypot: ''
      });
    }, 1500);
  };

  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const getMaxDate = () => {
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 3);
    return maxDate.toISOString().split('T')[0];
  };

  return (
    <>
      <Helmet>
        <title>Prendre rendez-vous - ZiExter | Consultation gratuite</title>
        <meta
          name="description"
          content="Prenez rendez-vous avec nos experts pour discuter de vos besoins en call center et BPO. Consultation gratuite et sans engagement."
        />
        <link rel="canonical" href="https://ziexter.com/rendez-vous" />
      </Helmet>

      {/* Hero */}
      <section className="page-hero bg-gradient-to-br from-secondary to-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl animate-fade-in-up">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Prendre rendez-vous
            </h1>
            <p className="text-xl text-gray-100">
              Réservez un créneau avec nos experts pour discuter de votre projet en toute simplicité.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Info */}
            <div className="animate-fade-in-up">
              <h2 className="font-heading text-3xl font-bold mb-6">
                Pourquoi prendre rendez-vous ?
              </h2>
              <p className="text-gray-600 mb-8">
                Un échange de 30 minutes pour comprendre vos besoins, vous présenter nos solutions et répondre à toutes vos questions.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Flexibilité totale</h3>
                    <p className="text-gray-600 text-sm">
                      Choisissez le créneau qui vous convient le mieux. Possibilité d'annuler ou reporter facilement.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Conseils personnalisés</h3>
                    <p className="text-gray-600 text-sm">
                      Un expert dédié analyse votre situation et vous propose les solutions les plus adaptées.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Sans engagement</h3>
                    <p className="text-gray-600 text-sm">
                      Consultation 100% gratuite. Aucune obligation d'achat, aucune pression commerciale.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Par téléphone ou visio</h3>
                    <p className="text-gray-600 text-sm">
                      Choisissez le format qui vous convient : appel téléphonique ou vidéoconférence (Zoom, Teams, Google Meet).
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h3 className="font-semibold mb-3">Ce que nous aborderons :</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Analyse de vos besoins et contraintes
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Présentation de nos services et méthodologie
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Estimation budgétaire et délais
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Réponses à toutes vos questions
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Prochaines étapes et plan d'action
                  </li>
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="animate-fade-in-up animation-delay-100">
              <div className="card">
                {submitSuccess ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="font-heading text-2xl font-bold mb-4">Rendez-vous confirmé !</h3>
                    <p className="text-gray-600 mb-6">
                      Votre rendez-vous est bien enregistré. Vous recevrez un email de confirmation avec le lien de connexion et les coordonnées de votre interlocuteur.
                    </p>
                    <p className="text-sm text-gray-500 mb-6">
                      Un rappel vous sera envoyé 24h avant le rendez-vous.
                    </p>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="btn btn-primary"
                    >
                      Prendre un autre rendez-vous
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
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
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
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

                    <div>
                      <label htmlFor="entreprise" className="block text-sm font-medium text-gray-700 mb-2">
                        Entreprise
                      </label>
                      <input
                        type="text"
                        id="entreprise"
                        name="entreprise"
                        value={formData.entreprise}
                        onChange={handleChange}
                        className="input"
                        placeholder="Nom de votre entreprise"
                      />
                    </div>

                    <div>
                      <label htmlFor="sujet" className="block text-sm font-medium text-gray-700 mb-2">
                        Sujet de l'entretien *
                      </label>
                      <select
                        id="sujet"
                        name="sujet"
                        value={formData.sujet}
                        onChange={handleChange}
                        className={`input ${errors.sujet ? 'border-red-500' : ''}`}
                      >
                        <option value="">Sélectionnez un sujet</option>
                        {sujets.map((sujet, index) => (
                          <option key={index} value={sujet}>{sujet}</option>
                        ))}
                      </select>
                      {errors.sujet && <p className="mt-1 text-sm text-red-600">{errors.sujet}</p>}
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                          Date souhaitée *
                        </label>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          min={getTodayDate()}
                          max={getMaxDate()}
                          className={`input ${errors.date ? 'border-red-500' : ''}`}
                        />
                        {errors.date && <p className="mt-1 text-sm text-red-600">{errors.date}</p>}
                      </div>

                      <div>
                        <label htmlFor="heure" className="block text-sm font-medium text-gray-700 mb-2">
                          Horaire souhaité *
                        </label>
                        <select
                          id="heure"
                          name="heure"
                          value={formData.heure}
                          onChange={handleChange}
                          className={`input ${errors.heure ? 'border-red-500' : ''}`}
                        >
                          <option value="">Choisir un créneau</option>
                          {creneauxHoraires.map((creneau, index) => (
                            <option key={index} value={creneau}>{creneau}</option>
                          ))}
                        </select>
                        {errors.heure && <p className="mt-1 text-sm text-red-600">{errors.heure}</p>}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message (optionnel)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="input"
                        placeholder="Précisez vos attentes pour ce rendez-vous..."
                      />
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

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary w-full"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Réservation en cours...
                        </span>
                      ) : (
                        'Confirmer le rendez-vous'
                      )}
                    </button>

                    <p className="text-sm text-gray-500 text-center">
                      * Champs obligatoires • Durée : 30 minutes
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RendezVous;

