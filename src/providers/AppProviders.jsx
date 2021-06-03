import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

// Common
import { variables } from '../common/variables';

// Configs
import configureStore from '../configureStore';

// Styles
import { GlobalStyles } from '../app/AppStyles';

const store = configureStore();

export const AppProviders = ({ children }) => (
  <Provider store={store}>
    <ThemeProvider theme={variables}>
      <Router>
        <GlobalStyles />
        {children}
      </Router>
    </ThemeProvider>
  </Provider>
);
