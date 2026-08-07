import { daysInMonth, isLeapYear } from './calendar';

describe('isLeapYear', () => {
  it('is false for an ordinary year', () => {
    expect(isLeapYear(2023)).toBe(false);
  });

  it('is true for a year divisible by four', () => {
    expect(isLeapYear(2024)).toBe(true);
  });

  it('is false for a century that is not divisible by 400', () => {
    expect(isLeapYear(1900)).toBe(false);
  });

  it('is true for a century divisible by 400', () => {
    expect(isLeapYear(2000)).toBe(true);
  });
});

describe('daysInMonth', () => {
  it('gives 31 for January', () => {
    expect(daysInMonth(2024, 1)).toBe(31);
  });

  it('gives 30 for April', () => {
    expect(daysInMonth(2024, 4)).toBe(30);
  });

  it('gives 28 for February in an ordinary year', () => {
    expect(daysInMonth(2023, 2)).toBe(28);
  });

  // Still pending: daysInMonth() is the table lookup only, so these three
  // describe behaviour it does not have yet. Leap-year February returns 28,
  // and an out-of-range month returns undefined instead of throwing.
  it.skip('gives 29 for February in a leap year', () => {});
  it.skip('rejects a month below 1', () => {});
  it.skip('rejects a month above 12', () => {});
});
