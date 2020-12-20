import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Products from '../../../../src/components/Products/index';

describe('Products Component', () => {
  beforeEach(() => {
    render(<Products />);
  });

  test('should render There are no results', () => {
    expect(screen.getByText('There are no results')).toBeInTheDocument();
  });
});
