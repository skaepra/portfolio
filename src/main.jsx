import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import  './index.css';



const rootElement = document.getElementById('root');

if (rootElement) {
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter >  
      <Layout/>    
    </BrowserRouter>
  </React.StrictMode>,
)
}