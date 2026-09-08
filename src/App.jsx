import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ClientsPage from './pages/ClientsPage';
import ServicesPage from './pages/ServicesPage';
import CompliancePage from './pages/CompliancePage';
import TrainingPage from './pages/TrainingPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';
import BuyersGuidePage from './pages/BuyersGuidePage';

import { CheckCircle2, X } from 'lucide-react';

function AppContent() {
  const navigate = useNavigate();
  const [toastMessage, setToastMessage] = useState(null);
  const [contactPrefill, setContactPrefill] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 5000);
  };

  const handleOpenContact = (topic = '') => {
    setContactPrefill(topic);
    navigate('/contact');
  };

  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 font-sans selection:bg-brand-500 selection:text-white flex flex-col justify-between relative">
      <ScrollToTop />

      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 max-w-md p-4 rounded-2xl glass-panel border border-brand-500/40 shadow-2xl flex items-start space-x-3 animate-fadeIn">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
          <div className="text-xs text-slate-200 leading-relaxed pr-2">
            {toastMessage}
          </div>
          <button
            onClick={() => setToastMessage(null)}
            className="text-slate-400 hover:text-white shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Global Header & Navbar */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main Multi-Page Routes */}
      <main className="flex-grow">
        <Routes>
          <Route 
            path="/" 
            element={<HomePage onOpenContact={handleOpenContact} />} 
          />
          <Route 
            path="/about" 
            element={<AboutPage onOpenContact={handleOpenContact} />} 
          />
          <Route 
            path="/clients" 
            element={<ClientsPage onOpenContact={handleOpenContact} />} 
          />
          <Route 
            path="/services" 
            element={<ServicesPage onOpenContact={handleOpenContact} />} 
          />
          <Route 
            path="/compliance" 
            element={<CompliancePage onOpenContact={handleOpenContact} />} 
          />
          <Route 
            path="/training" 
            element={<TrainingPage onOpenContact={handleOpenContact} />} 
          />
          <Route 
            path="/careers" 
            element={<CareersPage onOpenContact={handleOpenContact} onToast={showToast} />} 
          />
          <Route 
            path="/contact" 
            element={<ContactPage prefillTopic={contactPrefill} onToast={showToast} />} 
          />
          <Route 
            path="/buyers-guide" 
            element={<BuyersGuidePage onOpenContact={handleOpenContact} />} 
          />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer onOpenContact={handleOpenContact} />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
