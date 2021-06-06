import React from 'react';

// Components
import Rating from './Rating';

// Tests
import { render } from '../../tests';

describe('Rating', () => {
  test('Displays rating', async () => {
    const { container } = render(
      <Rating rate={3} />,
    );

    expect(container.firstChild).toBeTruthy();
  });
});
