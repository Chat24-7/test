import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});




/// yususf 2 first commit

// yusuf first commit

// yusuf second commit

// 111111

// 222222