import React from 'react';
import ReactDOM from 'react-dom/client';
import {Router} from './components/routes.jsx';
import { NextUIProvider } from '@nextui-org/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
        <Router/>
    </NextUIProvider>
  </React.StrictMode>
);
