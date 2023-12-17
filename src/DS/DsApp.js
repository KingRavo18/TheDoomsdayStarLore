import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import History from './DsHistory';
import ObserverPage from './DsObservers';
import UniondiMap from './DsWorldMap';
import Void from './DsVoid';

function DsApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<History />} />
        <Route path="/observers" element={<ObserverPage />} />
        <Route path="/worldMap" element={<UniondiMap />} />
        <Route path="/void" element={<Void />} />
      </Routes>
    </Router>
  );
}

export default DsApp;