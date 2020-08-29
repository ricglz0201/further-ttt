import React from 'react';
import PVPGame from 'components/pages/PVPGame'
import AlertProvider from 'components/providers/AlertProvider';

function App() {
  return (
    <AlertProvider>
      <PVPGame />
    </AlertProvider>
  )
}

export default App;
