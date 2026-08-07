// These were pending until isLeapYear() existed, because the panel calls it
// and rendering threw. isLeapYear() is implemented now, so the panel renders
// and these are real tests.
//
// The panel does not touch daysInMonth(), so nothing here waits on it.

// jest.setup.ts loads these matchers at runtime, but it sits outside
// tsconfig's `include: ["src"]`, so tsc never sees the type augmentation and
// `npm run build` fails on toHaveTextContent. Importing it here puts it in
// the program.
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TemplatePanel } from './TemplatePanel';

describe('TemplatePanel', () => {
  it('reports a leap year', () => {
    render(<TemplatePanel />);

    expect(screen.getByRole('status')).toHaveTextContent('Leap year');
  });

  it('reports an ordinary year', async () => {
    const user = userEvent.setup();
    render(<TemplatePanel />);

    await user.clear(screen.getByLabelText('Year'));
    await user.type(screen.getByLabelText('Year'), '2023');

    expect(screen.getByRole('status')).toHaveTextContent('Ordinary year');
  });

  it('asks for a year when the input is not one', async () => {
    const user = userEvent.setup();
    render(<TemplatePanel />);

    await user.clear(screen.getByLabelText('Year'));
    await user.type(screen.getByLabelText('Year'), 'abc');

    expect(screen.getByRole('status')).toHaveTextContent('Enter a year');
  });
});
