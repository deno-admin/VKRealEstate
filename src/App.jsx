import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { SearchPage } from './pages/SearchPage';
import { AboutPage } from './pages/AboutPage';
import { PropertyDetailModal } from './components/PropertyDetailModal';
import { ScheduleModal } from './components/ScheduleModal';

export function App() {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [contactSubject, setContactSubject] = useState('Private Advisory Consultation');

  const handleOpenContact = (subject = 'Private Advisory Consultation') => {
    setContactSubject(subject);
    setContactModalOpen(true);
  };

  return (
    <div className="app-root">
      {/* 1. Global Navigation Bar */}
      <Header onOpenContact={handleOpenContact} />

      {/* 2. Client-Side Page Routes */}
      <main>
        <Routes>
          <Route 
            path="/" 
            element={
              <HomePage 
                onSelectProperty={setSelectedProperty} 
                onOpenContact={handleOpenContact} 
              />
            } 
          />
          <Route 
            path="/search" 
            element={
              <SearchPage 
                onSelectProperty={setSelectedProperty} 
              />
            } 
          />
          <Route 
            path="/about" 
            element={
              <AboutPage 
                onOpenContact={handleOpenContact} 
              />
            } 
          />
        </Routes>
      </main>

      {/* 3. Global Footer */}
      <Footer onOpenContact={handleOpenContact} />

      {/* 4. Property Detail Inspection Modal */}
      {selectedProperty && (
        <PropertyDetailModal 
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
          onOpenContact={handleOpenContact}
        />
      )}

      {/* 5. Consultation & Site Visit Booking Modal */}
      <ScheduleModal 
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        initialSubject={contactSubject}
      />
    </div>
  );
}

export default App;
