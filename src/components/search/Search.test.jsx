import React from 'react';

// Components
import Search from './Search';

// Tests
import { render } from '../../tests';

describe('Search', () => {
  test('Displays search', async () => {
    const { container } = render(
      <Search />,
    );

    expect(container.firstChild).toBeTruthy();
  });
});
