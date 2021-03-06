import React from 'react';
import { render } from 'react-dom';

// Containers
import { App } from './app/App';

// Providers
import { AppProviders } from './providers/AppProviders';

// ServiceWorker
import * as serviceWorker from './serviceWorker';

render(
  <AppProviders>
    <App />
  </AppProviders>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
