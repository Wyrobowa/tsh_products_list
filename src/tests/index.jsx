// see https://testing-library.com/docs/react-testing-library/setup#custom-render
import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

// Common
import { variables } from '../common/variables';

// Store
import { store } from './testStore';

const Wrapper = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={variables}>
        <Router>{children}</Router>
      </ThemeProvider>
    </Provider>
  );
};

function customRender(ui, options) {
  return render(ui, { wrapper: options?.wrapper ?? Wrapper, ...options });
}

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
