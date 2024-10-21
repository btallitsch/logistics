import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Logistics = React.lazy(() => import('./pages/Logistics'));

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Suspense fallback={<div>Loading...</div>}>
            <Logistics />
          </Suspense>
        } />
      </Routes>
    </Router>
  );
};

export default App;
