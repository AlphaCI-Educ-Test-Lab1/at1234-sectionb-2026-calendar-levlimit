import { isLeapYear } from './calendar';

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

// Pending until you implement daysInMonth().
it.skip('gives 31 for January', () => {});
it.skip('gives 30 for April', () => {});
it.skip('gives 28 for February in an ordinary year', () => {});
it.skip('gives 29 for February in a leap year', () => {});
it.skip('rejects a month below 1', () => {});
it.skip('rejects a month above 12', () => {});
