import React from 'react';

// Components
import List from './List';

// Tests
import { render } from '../../tests';

const data = [
  {
    description: 'test description',
    id: 1,
    image: 'test.jpg',
    name: 'test 1',
    rating: 2,
  },
  {
    description: 'test description',
    id: 2,
    image: 'test2.jpg',
    name: 'test 2',
    rating: 4,
  },
];

const pagination = {
  currentPage: 2,
  itemCount: 3,
  itemsPerPage: 3,
  totalItems: 8,
  totalPages: 3,
};

describe('List', () => {
  test('Displays List', async () => {
    const { container } = render(<List data={data} pagination={pagination} />);

    expect(container.firstChild).toBeTruthy();
  });
});
