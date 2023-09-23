import React from 'react'
import ReactDOM from 'react-dom/client';
import router from './components/routes.jsx';
import { RouterProvider } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';
//import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <main className=''>
        <RouterProvider router={router} />
      </main>
    </NextUIProvider>
  </React.StrictMode>,
)
