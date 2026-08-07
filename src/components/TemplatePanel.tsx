'use client';

import { useState } from 'react';
import { isLeapYear } from '../calendar';

export function TemplatePanel() {
  const [year, setYear] = useState('2024');

  function summary(): string {
    const y = Number(year);
    if (Number.isNaN(y)) return 'Enter a year';
    return isLeapYear(y) ? 'Leap year' : 'Ordinary year';
  }

  return (
    <section>
      <label htmlFor="year">Year</label>
      <input id="year" value={year} onChange={(e) => setYear(e.target.value)} />
      <p role="status">{summary()}</p>
    </section>
  );
}
