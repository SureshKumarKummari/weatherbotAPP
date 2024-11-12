import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Your main App component
import { GoogleOAuthProvider } from '@react-oauth/google';

const GOOGLE_CLIENT_ID = "276339864893-858o54gr2tkcoihcidh151qjogqvmdj1.apps.googleusercontent.com";

ReactDOM.render(
  <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
    <App />
  </GoogleOAuthProvider>,
  document.getElementById('root')
);
