import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

let AUTH_DOMAIN = import.meta.env.VITE_AUTH_DOMAIN
let AUTH_CLIENT_ID=import.meta.env.VITE_AUTH_CLIENT_ID

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
    domain={AUTH_DOMAIN}
    clientId={AUTH_CLIENT_ID}
    authorizationParams={{
      redirect_uri: 'http://localhost:5173',
     }}
    >
    <App />
    </Auth0Provider>
  </React.StrictMode>
);
