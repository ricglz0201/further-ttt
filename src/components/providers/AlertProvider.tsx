import React from 'react';
import { AlertProviderProps, Provider, positions } from 'react-alert';
import AlertTemplate from 'components/utils/AlertTemplate';

interface Props {
  children: React.ReactElement;
}

const options: AlertProviderProps = {
  template: AlertTemplate,
  position: positions.BOTTOM_RIGHT,
  timeout: 3000,
}

const AlertProvider = ({ children }: Props) => (
  <Provider {...options}>
    {children}
  </Provider>
);

export default AlertProvider;
