import React from 'react';

// Containers
import { Products } from './Products';

// Tests
import { render } from '../../tests';

describe('Products', () => {
  test('Displays page header', async () => {
    const { container } = render(<Products />);

    expect(container.firstChild).toBeTruthy();
  });
});
