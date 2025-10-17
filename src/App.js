import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';

// Main pages
import Accueil from './pages/Accueil';
import QuiSommesNous from './pages/QuiSommesNous';
import Services from './pages/Services';
import Tarifs from './pages/Tarifs';
import FAQ from './pages/FAQ';
import NousRejoindre from './pages/NousRejoindre';
import AvisClients from './pages/AvisClients';
import Contact from './pages/Contact';
import Devis from './pages/Devis';
import RendezVous from './pages/RendezVous';

// Service subpages
import ServiceClient from './pages/services/ServiceClient';
import CallCenterB2B from './pages/services/CallCenterB2B';
import CallCenterCentresFormation from './pages/services/CallCenterCentresFormation';
import ExternalisationAirbnb from './pages/services/ExternalisationAirbnb';
import BPO from './pages/services/BPO';
import IntegrateurInformatique from './pages/services/IntegrateurInformatique';
import MaintenanceIRVE from './pages/services/MaintenanceIRVE';
import AnsweringService from './pages/services/AnsweringService';
import ReseauxSociaux from './pages/services/ReseauxSociaux';
import SecretariatMedical from './pages/services/SecretariatMedical';
import GestionTickets from './pages/services/GestionTickets';
import GardiennageSecurite from './pages/services/GardiennageSecurite';

function App() {
  return (
    <>
      <CustomCursor />
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-20">
          <Routes>
            {/* Main pages */}
            <Route path="/" element={<Accueil />} />
            <Route path="/qui-sommes-nous" element={<QuiSommesNous />} />
            <Route path="/services" element={<Services />} />
            <Route path="/tarifs" element={<Tarifs />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/nous-rejoindre" element={<NousRejoindre />} />
            <Route path="/avis-clients" element={<AvisClients />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/devis" element={<Devis />} />
            <Route path="/rendez-vous" element={<RendezVous />} />

            {/* Service subpages */}
            <Route path="/services/service-client" element={<ServiceClient />} />
            <Route path="/services/call-center-b2b" element={<CallCenterB2B />} />
            <Route path="/services/call-center-centres-de-formation" element={<CallCenterCentresFormation />} />
            <Route path="/services/externalisation-appels-airbnb" element={<ExternalisationAirbnb />} />
            <Route path="/services/bpo" element={<BPO />} />
            <Route path="/services/integrateur-informatique" element={<IntegrateurInformatique />} />
            <Route path="/services/irve-maintenance-gestion" element={<MaintenanceIRVE />} />
            <Route path="/services/answering-service" element={<AnsweringService />} />
            <Route path="/services/reseaux-sociaux" element={<ReseauxSociaux />} />
            <Route path="/services/secretariat-medical" element={<SecretariatMedical />} />
            <Route path="/services/gestion-des-tickets" element={<GestionTickets />} />
            <Route path="/services/gardiennage-securite-privee" element={<GardiennageSecurite />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
