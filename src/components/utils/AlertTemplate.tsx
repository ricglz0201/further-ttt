import React from 'react';
import { AlertComponentPropsWithStyle } from 'react-alert';

const AlertTemplate = ({ style, options, message, close }: AlertComponentPropsWithStyle) => (
  <div style={style}>
    {options.type === 'info' && '!'}
    {options.type === 'success' && ':)'}
    {options.type === 'error' && ':('}
    {message}
    <button onClick={close}>X</button>
  </div>
);

export default AlertTemplate;
