import AlertProvider from 'components/providers/AlertProvider';
import MainContent from 'components/pages/MainContent'
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <AlertProvider>
      <Router>
        <MainContent />
      </Router>
    </AlertProvider>
  )
}

export default App;
