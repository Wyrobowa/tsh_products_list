import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// Configs
import configureStore from './configureStore';

// Containers
import { App } from './app/App';

// Providers
import { AppProviders } from './providers/AppProviders';

// ServiceWorker
import * as serviceWorker from './serviceWorker';

const store = configureStore();

render(
  <Provider store={store}>
    <AppProviders>
      <App />
    </AppProviders>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
