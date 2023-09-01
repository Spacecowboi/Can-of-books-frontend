import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-7k7i2wqvjpy65v7p.us.auth0.com"
    clientId="7E2HPeuQz5NxJJjy9GQQ3UfTTjA1DvVi"
    authorizationParams={{
      redirect_url: window.location.origin,
     }}
    >
    <App />
    </Auth0Provider>
  </React.StrictMode>
);
