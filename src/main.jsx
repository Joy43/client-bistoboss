import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {

  RouterProvider,
} from "react-router-dom";
import router from './Routers/router.jsx';
import { HelmetProvider } from 'react-helmet-async';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <HelmetProvider>
  <div className='max-w-7xl gap-3 m-auto ml-auto mr-auto'>
     <RouterProvider router={router} /></div>
  </HelmetProvider>
    
  </React.StrictMode>,
)
