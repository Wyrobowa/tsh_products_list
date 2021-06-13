import React from 'react';

// Containers
import Product from './Product';

// Tests
import { render } from '../../tests';

describe('Product', () => {
  test('Displays page header', async () => {
    const { container } = render(<Product />);

    expect(container.firstChild).toBeTruthy();
  });
});
