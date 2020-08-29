import React from 'react';
import { Provider as AlertProvider } from 'react-alert';
import PVPGame from 'components/pages/PVPGame'
import AlertTemplate from 'components/utils/AlertTemplate';

function App() {
  return (
    <AlertProvider template={AlertTemplate}>
      <PVPGame />
    </AlertProvider>
  )
}

export default App;
