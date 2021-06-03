import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

// Common
import { variables } from '../common/variables';

// Styles
import { GlobalStyles } from '../app/AppStyles';

export const AppProviders = ({ children }) => (
  <ThemeProvider theme={variables}>
    <Router>
      <GlobalStyles />
      {children}
    </Router>
  </ThemeProvider>
);
