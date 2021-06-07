import React from 'react';

// Components
import Pagination from './Pagination';

// Tests
import { render } from '../../tests';

const data = {
  currentPage: 2,
  itemCount: 3,
  itemsPerPage: 3,
  totalItems: 8,
  totalPages: 3,
};

describe('Pagination', () => {
  test('Displays filters', async () => {
    const { container } = render(
      <Pagination data={data} />,
    );

    expect(container.firstChild).toBeTruthy();
  });
});
