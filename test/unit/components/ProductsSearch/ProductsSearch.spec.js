import React from 'react';
import '@babel/polyfill';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

import ProductsSearch from '../../../../src/components/ProductsSearch/index';

describe('ProductsSearch Component', () => {
  beforeEach(() => {
    render(<ProductsSearch />);
  });

  test('should render Company element', () => {
    expect(screen.getByText('Company')).toBeInTheDocument();
  });

  test('should handle input change', () => {
    const input = screen.getByTestId('input-search').querySelector('input');

    expect(input.value).toBe('');
    fireEvent.change(input, { target: { value: '123456' } });
    expect(input.value).toBe('123456');
    expect(screen.getByText('There are no results')).toBeInTheDocument();
  });
});
