import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio projects', () => {
  render(<App />);

  expect(screen.getByText(/portafolio de proyectos/i)).toBeDefined();
  expect(screen.getByText(/audio transcriber ai/i)).toBeDefined();
  expect(screen.getByText(/panoramic studio/i)).toBeDefined();
  expect(screen.getByText(/exo market/i)).toBeDefined();
  expect(screen.getByText(/álbum de fotos de sofía/i)).toBeDefined();
});
