import React from 'react';

// Components
import EmptyList from './ListItem';

// Tests
import { render } from '../../tests';

const item = {
  description: 'test description',
  id: 2,
  image: 'test2.jpg',
  name: 'test 2',
  rating: 4,
};

describe('ListItem', () => {
  test('Displays ListItem', async () => {
    const { container } = render(<EmptyList item={item} />);

    expect(container.firstChild).toBeTruthy();
  });
});
