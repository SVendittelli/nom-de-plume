const { DateTime } = require('luxon');

/**
 * Create a human readable duration between two dates.
 *
 * @param {DateTime} start the start date
 * @param {DateTime} end the end date
 */
function durationUntil(start, end) {
  // Calculate the number of days left, rounded up, then rescale it to its largest representation
  const duration = end.diff(start).rescale();

  const humanReadableDuration = duration.toHuman({
    signDisplay: 'never',
  });

  return { duration, humanReadableDuration };
}

module.exports = durationUntil;
