const { DateTime } = require('luxon');

const durationUntil = require('./durationUntil');

describe('durationUntil', () => {
  test('same day', () => {
    const start = DateTime.local(2020, 1, 1);
    const end = DateTime.local(2020, 1, 1);

    const { duration, humanReadableDuration } = durationUntil(start, end);
    expect(duration == 0).toBeTruthy();
    expect(humanReadableDuration).toMatchSnapshot();
  });

  test('day in the future', () => {
    const start = DateTime.local(2020, 1, 1);
    const end = DateTime.local(2020, 2, 1);

    const { duration, humanReadableDuration } = durationUntil(start, end);
    expect(duration > 0).toBeTruthy();
    expect(humanReadableDuration).toMatchSnapshot();
  });

  test('day in the past', () => {
    const start = DateTime.local(2020, 1, 1);
    const end = DateTime.local(2019, 1, 1);

    const { duration, humanReadableDuration } = durationUntil(start, end);
    expect(duration < 0).toBeTruthy();
    expect(humanReadableDuration).toMatchSnapshot();
  });
});
