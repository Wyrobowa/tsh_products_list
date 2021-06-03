// see https://testing-library.com/docs/react-testing-library/setup#custom-render
import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

// Common
import { variables } from '../common/variables';

const Wrapper = ({ children }) => {
  return (
    <ThemeProvider theme={variables}>
      <Router>{children}</Router>
    </ThemeProvider>
  );
};

function customRender(ui, options) {
  return render(ui, { wrapper: options?.wrapper ?? Wrapper, ...options });
}

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
