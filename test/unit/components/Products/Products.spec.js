import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Products from '../../../../src/components/Products/index';

describe('Products Component', () => {
  test('should render There are no results', () => {
    render(<Products />);
    expect(screen.getByText('There are no results')).toBeInTheDocument();
  });

  test('should render Product', () => {
    const producto = {
      id: 1,
      brand: 'Marca1',
      description: "Televisión 54''",
      image: 'www.lider.cl/catalogo/images/catalogo_no_photo.jpg',
      price: 80000,
      finalPrice: 56000,
      discount: { amount: 24000, percentage: 30 },
    };
    const productsList = [producto];

    render(<Products productsList={productsList} />);

    expect(screen.getByText('Marca1')).toBeInTheDocument();
    expect(screen.getByText("Televisión 54''")).toBeInTheDocument();
    expect(screen.getByText('$56000')).toBeInTheDocument();
    expect(screen.getByText('30%')).toBeInTheDocument();
    expect(screen.getByText('$80000')).toBeInTheDocument();
  });
});
