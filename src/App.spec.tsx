import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { App } from './App';

describe('App', () => {
  it('renders the project heading', () => {
    render(<App />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'at1234-sectionb-2026-calendar-levlimit',
    );
  });

  it('mounts the panel', () => {
    render(<App />);

    expect(screen.getByLabelText('Year')).toBeInTheDocument();
    expect(screen.getByRole('status')).toBeInTheDocument();
  });
});
