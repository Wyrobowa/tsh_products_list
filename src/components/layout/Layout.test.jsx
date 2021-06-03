import React from 'react';

// Components
import Layout from './Layout';

// Tests
import { render } from '../../tests';

describe('Layout', () => {
  test('Displays Layout', async () => {
    const { container } = render(<Layout>Test</Layout>);

    expect(container.firstChild).toBeTruthy();
  });
});
