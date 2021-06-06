import React from 'react';

// Components
import Filters from './Filters';

// Tests
import { render } from '../../tests';

describe('Filters', () => {
  test('Displays filters', async () => {
    const { container } = render(
      <Filters />,
    );

    expect(container.firstChild).toBeTruthy();
  });
});
