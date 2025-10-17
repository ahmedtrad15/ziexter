import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqCategories = [
    {
      category: 'Général',
      questions: [
        {
          question: 'Qu\'est-ce que ZiExter ?',
          answer: 'ZiExter est une société tunisienne spécialisée dans l\'externalisation de services : call center, service client, BPO, secrétariat virtuel et médical. Basés à Ksibet El Mediouni, nous servons des clients dans plus de 15 pays avec une équipe multilingue et passionnée. Made with 🌶️ piments en Tunisie !'
        },
        {
          question: 'Où êtes-vous situés ?',
          answer: 'Nous sommes basés à Ksibet El Mediouni, en Tunisie. Cette position géographique nous permet de servir efficacement nos clients francophones, anglophones et arabophones, avec un fuseau horaire compatible avec l\'Europe et l\'Afrique.'
        },
        {
          question: 'Quels sont vos horaires de disponibilité ?',
          answer: 'Nous proposons une disponibilité 24h/24, 7j/7. Que vous ayez besoin d\'une permanence téléphonique en horaires de bureau (8h-18h) ou d\'une couverture totale week-ends et jours fériés inclus, nous adaptons nos équipes à vos besoins.'
        },
        {
          question: 'Quelles langues parlez-vous ?',
          answer: 'Notre équipe maîtrise plus de 8 langues : français, anglais, arabe, espagnol, allemand, italien, néerlandais et portugais. Nous recrutons et formons en permanence des agents multilingues pour répondre aux besoins internationaux de nos clients.'
        }
      ]
    },
    {
      category: 'Services',
      questions: [
        {
          question: 'Quels services proposez-vous ?',
          answer: 'Nous proposons une gamme complète : service client multicanal, call center B2B, call center pour centres de formation, externalisation AirBnB, BPO, support IT, maintenance IRVE, answering service (secrétariat téléphonique virtuel 24/7), gestion des réseaux sociaux, secrétariat médical, gestion de tickets, et télésurveillance/sécurité privée.'
        },
        {
          question: 'Puis-je externaliser uniquement une partie de mon service client ?',
          answer: 'Absolument ! Nous sommes totalement flexibles. Vous pouvez externaliser uniquement les pics d\'activité, les horaires de nuit et week-ends, ou un canal spécifique (téléphone, email, chat). Nous nous adaptons à votre organisation.'
        },
        {
          question: 'Travaillez-vous avec des TPE/PME ou uniquement des grandes entreprises ?',
          answer: 'Nous travaillons avec tous types d\'entreprises : TPE, PME, ETI et grandes entreprises. Nos solutions sont modulables et s\'adaptent à votre taille et votre budget. Que vous ayez besoin de 2 agents ou 50, nous avons une solution pour vous.'
        },
        {
          question: 'Proposez-vous du support technique IT ?',
          answer: 'Oui, nous avons une expertise en support technique pour intégrateurs informatiques, installateurs de bornes IRVE, éditeurs de logiciels, etc. Nos agents sont formés à la résolution d\'incidents niveau 1 et 2, avec possibilité d\'escalade vers vos équipes techniques.'
        }
      ]
    },
    {
      category: 'Tarifs et contrats',
      questions: [
        {
          question: 'Comment sont calculés vos tarifs ?',
          answer: 'Nos tarifs dépendent de plusieurs facteurs : service demandé, volume d\'appels/tickets, langues requises, horaires de couverture, complexité des scripts. Nous proposons des formules au nombre d\'appels, à l\'heure, ou au forfait mensuel. Demandez un devis personnalisé pour une estimation précise.'
        },
        {
          question: 'Quelle est la durée minimale d\'engagement ?',
          answer: 'Nous proposons généralement des contrats de 3 à 12 mois, avec possibilité de renouvellement tacite. Des formules plus courtes sont envisageables pour les projets ponctuels (événements, lancements produits, campagnes saisonnières). Contactez-nous pour étudier votre cas.'
        },
        {
          question: 'Y a-t-il des frais de mise en service ?',
          answer: 'Les frais de mise en service varient selon la complexité de votre projet : formation des agents, paramétrage CRM, création de scripts, intégration d\'outils. Nous incluons souvent ces frais dans le premier mois ou les lissons sur la durée du contrat. Tout est détaillé dans votre devis.'
        },
        {
          question: 'Proposez-vous une période d\'essai ?',
          answer: 'Oui, nous pouvons démarrer par une phase pilote de 1 à 2 mois pour tester nos services sans engagement long terme. Cela vous permet de valider la qualité de notre prestation avant de vous engager sur la durée.'
        }
      ]
    },
    {
      category: 'Qualité et sécurité',
      questions: [
        {
          question: 'Comment garantissez-vous la qualité du service ?',
          answer: 'Nous appliquons une démarche qualité rigoureuse : formation continue de nos agents, écoutes et audits réguliers, indicateurs de performance (KPI) suivis en temps réel, satisfaction client mesurée, et amélioration continue. Notre taux de satisfaction client est de 98%.'
        },
        {
          question: 'Mes données sont-elles sécurisées ?',
          answer: 'Oui, nous sommes compatibles RGPD et ISO 27001. Vos données et celles de vos clients sont hébergées sur des serveurs sécurisés, accessibles uniquement par les agents habilités. Nous signons systématiquement des accords de confidentialité (NDA) avec nos clients.'
        },
        {
          question: 'Comment se passe la formation de vos agents ?',
          answer: 'Avant chaque nouveau projet, nos agents suivent une formation complète : présentation de votre entreprise, connaissance produit/service, apprentissage de vos process, utilisation de vos outils (CRM, ticketing). Nous prévoyons également des sessions de recyclage régulières.'
        },
        {
          question: 'Puis-je suivre l\'activité en temps réel ?',
          answer: 'Oui, nous mettons à disposition un tableau de bord en temps réel avec tous vos indicateurs clés : nombre d\'appels traités, temps moyen de traitement, satisfaction client, tickets ouverts/fermés, etc. Vous recevez également des rapports hebdomadaires et mensuels détaillés.'
        }
      ]
    },
    {
      category: 'Mise en place',
      questions: [
        {
          question: 'Combien de temps faut-il pour démarrer ?',
          answer: 'Le délai de mise en service dépend de la complexité de votre projet. Pour un service standard (accueil téléphonique, prise de RDV), comptez 2 à 3 semaines. Pour un projet plus complexe (BPO, intégration CRM custom), prévoyez 4 à 6 semaines. Nous pouvons accélérer en cas d\'urgence.'
        },
        {
          question: 'Dois-je fournir mes propres outils (CRM, téléphonie) ?',
          answer: 'Nous pouvons utiliser vos outils existants (CRM, téléphonie, ticketing) ou vous proposer nos solutions intégrées. Si vous n\'avez pas d\'infrastructure, nous mettons à disposition nos plateformes Zendesk, Salesforce, Five9, etc. Tout dépend de vos besoins et contraintes.'
        },
        {
          question: 'Comment se passe l\'intégration avec mes systèmes existants ?',
          answer: 'Notre équipe technique analyse vos systèmes (CRM, ERP, téléphonie) et met en place les connecteurs nécessaires (API, webhooks, fichiers plats). Nous testons l\'intégration en environnement de préproduction avant le lancement en production.'
        },
        {
          question: 'Qui sera mon interlocuteur au quotidien ?',
          answer: 'Vous aurez un chef de projet dédié, votre point de contact unique. Il supervise votre compte, coordonne les équipes, vous transmet les reportings, et assure le suivi qualité. Vous aurez également accès à un support technique et un responsable d\'exploitation selon vos besoins.'
        }
      ]
    },
    {
      category: 'Technique',
      questions: [
        {
          question: 'Quels CRM et logiciels utilisez-vous ?',
          answer: 'Nous maîtrisons les principaux outils du marché : Salesforce, Zendesk, Freshdesk, HubSpot, Zoho, Intercom, Monday.com, ServiceNow, Jira, Microsoft Dynamics, etc. Si vous utilisez un outil spécifique, nous formons nos agents à son utilisation.'
        },
        {
          question: 'Proposez-vous des solutions de téléphonie cloud ?',
          answer: 'Oui, nous travaillons avec des solutions de téléphonie cloud (VoIP) comme Five9, Aircall, RingCentral, 3CX. Vous pouvez également conserver votre propre solution et nous y connecter via SIP ou API.'
        },
        {
          question: 'Gérez-vous les canaux digitaux (email, chat, réseaux sociaux) ?',
          answer: 'Absolument. Nous assurons une gestion multicanal : téléphone, email, chat en direct, Facebook Messenger, Instagram DM, WhatsApp Business, Twitter/X, LinkedIn. Tous les canaux sont centralisés dans un seul outil pour une vue client unifiée.'
        }
      ]
    }
  ];

  const toggleQuestion = (categoryIndex, questionIndex) => {
    const index = `${categoryIndex}-${questionIndex}`;
    setOpenIndex(openIndex === index ? null : index);
  };

  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqCategories.flatMap((category, catIndex) => 
      category.questions.map((q, qIndex) => ({
        "@type": "Question",
        "name": q.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": q.answer
        }
      }))
    )
  };

  return (
    <>
      <Helmet>
        <title>FAQ - ZiExter | Questions fréquentes sur nos services</title>
        <meta
          name="description"
          content="Trouvez des réponses à vos questions sur nos services de call center, BPO et externalisation : tarifs, qualité, sécurité, mise en place."
        />
        <link rel="canonical" href="https://ziexter.com/faq" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLdSchema)}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="page-hero bg-gradient-to-br from-secondary to-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl animate-fade-in-up">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Foire aux questions
            </h1>
            <p className="text-xl text-gray-100">
              Toutes les réponses à vos questions sur nos services, tarifs, et processus.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="animate-fade-in-up" style={{ animationDelay: `${categoryIndex * 100}ms` }}>
                <h2 className="font-heading text-2xl font-bold mb-6 text-primary">
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((item, questionIndex) => {
                    const index = `${categoryIndex}-${questionIndex}`;
                    const isOpen = openIndex === index;

                    return (
                      <div
                        key={questionIndex}
                        className="card hover-lift transition-all"
                      >
                        <button
                          onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                          className="w-full text-left flex items-start justify-between gap-4 group"
                          aria-expanded={isOpen}
                        >
                          <span className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                            {item.question}
                          </span>
                          <svg
                            className={`w-6 h-6 text-primary flex-shrink-0 transition-transform ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>

                        {isOpen && (
                          <div className="mt-4 pt-4 border-t animate-fade-in">
                            <p className="text-gray-600">{item.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-3xl text-center">
          <div className="animate-fade-in-up">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="font-heading text-3xl font-bold mb-4">
              Vous ne trouvez pas votre réponse ?
            </h2>
            <p className="text-gray-600 mb-8">
              Notre équipe est disponible pour répondre à toutes vos questions spécifiques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Contactez-nous
              </Link>
              <Link to="/rendez-vous" className="btn btn-outline btn-lg">
                Prendre rendez-vous
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;

