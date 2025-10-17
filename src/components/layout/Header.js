import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: 'Service Client', path: '/services/service-client' },
    { name: 'Call Center B2B', path: '/services/call-center-b2b' },
    { name: 'Call Center pour Centres de Formation', path: '/services/call-center-centres-de-formation' },
    { name: 'Externalisation appels AirBnB', path: '/services/externalisation-appels-airbnb' },
    { name: 'BPO', path: '/services/bpo' },
    { name: 'Intégrateur Informatique', path: '/services/integrateur-informatique' },
    { name: 'Maintenance & Gestion pour installateurs de bornes IRVE', path: '/services/irve-maintenance-gestion' },
    { name: 'Answering Service (Secrétariat Téléphonique Virtuel)', path: '/services/answering-service' },
    { name: 'Réseaux sociaux', path: '/services/reseaux-sociaux' },
    { name: 'Secrétariat Médical', path: '/services/secretariat-medical' },
    { name: 'Gestion des tickets', path: '/services/gestion-des-tickets' },
    { name: 'Gardiennage et Sécurité Privée', path: '/services/gardiennage-securite-privee' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-3' : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <nav className="container-custom" aria-label="Navigation principale">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" aria-label="Retour à l'accueil">
            <div className="bg-secondary p-2 rounded-lg">
              <img src="/logo.png" alt="ZiExter Logo" className="h-10 w-auto" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-medium transition-colors hover:text-primary ${
                  isActive ? 'text-primary' : 'text-gray-700'
                }`
              }
            >
              Accueil
            </NavLink>

            <NavLink
              to="/qui-sommes-nous"
              className={({ isActive }) =>
                `font-medium transition-colors hover:text-primary ${
                  isActive ? 'text-primary' : 'text-gray-700'
                }`
              }
            >
              Qui sommes-nous
            </NavLink>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className="font-medium text-gray-700 hover:text-primary transition-colors flex items-center space-x-1"
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
              >
                <span>Services</span>
                <svg
                  className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-100 py-4 animate-fade-in-down">
                  <div className="max-h-96 overflow-y-auto">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to={service.path}
                        className="block px-6 py-3 text-sm text-gray-700 hover:bg-primary-light hover:bg-opacity-10 hover:text-primary transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <NavLink
              to="/tarifs"
              className={({ isActive }) =>
                `font-medium transition-colors hover:text-primary ${
                  isActive ? 'text-primary' : 'text-gray-700'
                }`
              }
            >
              Tarifs
            </NavLink>

            <NavLink
              to="/faq"
              className={({ isActive }) =>
                `font-medium transition-colors hover:text-primary ${
                  isActive ? 'text-primary' : 'text-gray-700'
                }`
              }
            >
              FAQ
            </NavLink>

            <NavLink
              to="/nous-rejoindre"
              className={({ isActive }) =>
                `font-medium transition-colors hover:text-primary ${
                  isActive ? 'text-primary' : 'text-gray-700'
                }`
              }
            >
              Nous rejoindre
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `font-medium transition-colors hover:text-primary ${
                  isActive ? 'text-primary' : 'text-gray-700'
                }`
              }
            >
              Contact
            </NavLink>

            <Link to="/devis" className="btn btn-primary">
              Demandez un devis
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-fade-in-down">
            <div className="flex flex-col space-y-3">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg transition-colors ${
                    isActive ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100'
                  }`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Accueil
              </NavLink>

              <NavLink
                to="/qui-sommes-nous"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg transition-colors ${
                    isActive ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100'
                  }`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Qui sommes-nous
              </NavLink>

              {/* Mobile Services */}
              <div>
                <button
                  className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors flex items-center justify-between"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  <span>Services</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isServicesOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to={service.path}
                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <NavLink
                to="/tarifs"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg transition-colors ${
                    isActive ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100'
                  }`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Tarifs
              </NavLink>

              <NavLink
                to="/faq"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg transition-colors ${
                    isActive ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100'
                  }`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </NavLink>

              <NavLink
                to="/nous-rejoindre"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg transition-colors ${
                    isActive ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100'
                  }`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Nous rejoindre
              </NavLink>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg transition-colors ${
                    isActive ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100'
                  }`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </NavLink>

              <Link
                to="/devis"
                className="btn btn-primary w-full text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Demandez un devis
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

