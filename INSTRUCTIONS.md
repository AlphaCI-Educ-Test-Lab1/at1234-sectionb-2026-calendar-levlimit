# Calendar

Work out how many days are in a given month of a given year. Short to describe and full of special cases: thirty days for some months, thirty-one for others, and February depending on a leap-year rule that is not simply "every four years".

## What you are given

Your code goes in `src/`. Every function listed below is
already there with the right name and the right signature, and every one of
them throws "not implemented" until you replace that line with real code.
None of the exercise is written for you.

Their tests are in your repository too, marked PENDING. They are a task
list: implement a function, remove the pending marker above its test, and it
starts running.

One test does already pass — a smoke test that only proves your project
builds and the pipeline runs. It is not part of the exercise, and it is the
reason your first push is green before you have written anything.

## What to build

1. **`isLeapYear`** — True when the year divides by 4, EXCEPT that century years are not leap years unless they also divide by 400. So 2024 is a leap year, 1900 is not, and 2000 is.
2. **`daysInMonth`** — The number of days in that month, 1 for January through 12 for December. February is 29 in a leap year and 28 otherwise. A month outside 1-12 is not a month: throw rather than guessing.

## Running the tests

```
npm test
```

Run this before every push. The pipeline runs the same tests on the same
code, so anything failing here will fail there — and finding it locally
costs you seconds instead of minutes.

## How this is marked

Pushing runs seven checks on your code. Four of them carry marks:

| Stage | What it asks |
|---|---|
| ② Lint | Is your code styled consistently? |
| ③ Code Quality | Is it well built — not too repetitive, not too tangled? |
| ④ Public Tests | Do the tests in your repository pass, and how much of your code do they run? |
| ⑤ Hidden Tests | Do your teacher's tests pass? You cannot read these. |

The hidden tests are the reason to solve the PROBLEM rather than the visible
tests. They cover the same functions, including edge cases the visible tests
do not — an empty input, a zero, a value at a boundary. Read the task
descriptions above carefully; the edge cases are named in them.

Your mark is not shown in the pipeline. Your teacher releases marks for the
class once they have reviewed the runs.

## Worth knowing

- The three leap-year cases (2024, 1900, 2000) each exercise a different branch of the rule. Test all three.
- This project is marked partly on how much of your code the tests run. A branch you never test is a branch you never checked.

## If you get stuck

Read the failing test first — it names the behaviour it expected. Then read
the task description above for that function. If both make sense and the
code still does not, that is the right moment to ask your teacher.
