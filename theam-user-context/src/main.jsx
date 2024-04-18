import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ThemeProvider } from './component/themecontext.jsx';
import { UserProvider } from './component/userContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </UserProvider>
);
