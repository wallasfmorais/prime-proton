import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './Header';

it('should render Header', () => {
  const { getByText } = render(<Header />);
  expect(getByText('Header')).toBeInTheDocument();
});
