// Every function below is yours to write. Each one throws until you implement
// it, and its test is marked pending in
// calendar.spec.ts — remove the pending marker as you go.
//
// Read INSTRUCTIONS.md first: it says what this project is and what each
// function has to do, including the edge cases you are marked on.

/** Given: days per month, January first. February is the special case. */
const DAYS_PER_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export function isLeapYear(year: number): boolean {
  if (year % 400 === 0) return true;
  if (year % 100 === 0) return false;
  return year % 4 === 0;
}

/**
 * How many days are in this month? `month` is 1-12.
 *
 * Reject a month outside 1-12 with "Month must be between 1 and 12", use
 * isLeapYear for February, and DAYS_PER_MONTH for the rest.
 */
export function daysInMonth(year: number, month: number): number {
  // PARTIAL: the table lookup only. Two behaviours from the brief are still
  // missing, and each is deliberately left for the next pass:
  //   1. February is 29 in a leap year -- this returns 28 for every year.
  //   2. A month outside 1-12 must throw "Month must be between 1 and 12" --
  //      this returns undefined at runtime instead.
  return DAYS_PER_MONTH[month - 1];
}
