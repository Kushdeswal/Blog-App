import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId="194550284262-uce5kg48e0vaju5eofqhrorvkeg888i9.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>;
    </BrowserRouter>
  </React.StrictMode>
);


