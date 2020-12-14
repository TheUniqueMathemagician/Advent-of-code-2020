/**
 *
 * @param {Array} Set - input set
 * @param {number} Sum - sum to find
 * @param {boolean} Should find only one entry
 * @param {boolean} Debug - log the debug
 * @returns {Array} Subsets of indexes
 */
module.exports = (S, K, first_entry = false, debug = false) => {
  const time = process.hrtime();
  const R = [];
  let steps = 0;
  let shouldStop = false;

  const find_with_zeros = (
    _index = 0,
    _accumulator = [0, S.reduce((a, c) => a + c)],
    T = []
  ) => {
    steps++;

    let _include = [_accumulator[0] + S[_index], _accumulator[1] - S[_index]];
    let _exclude = [_accumulator[0], _accumulator[1] - S[_index]];

    if (_include[0] === K) {
      R.push([...T, _index]);
      if (first_entry) {
        return true;
      }
    }

    if (shouldStop) {
      return true;
    }

    if (_index < S.length - 1) {
      shouldStop = find_with_zeros(_index + 1, _include, [...T, _index]);
      if (shouldStop) {
        return true;
      }
      shouldStop = find_with_zeros(_index + 1, _exclude, T);
      if (shouldStop) {
        return true;
      }
    }
  };

  const find_without_zeros = (
    _index = 0,
    _accumulator = [0, S.reduce((a, c) => a + c)],
    T = []
  ) => {
    steps++;

    let _include = [_accumulator[0] + S[_index], _accumulator[1] - S[_index]];
    let _exclude = [_accumulator[0], _accumulator[1] - S[_index]];

    if (_include[0] === K) {
      R.push([...T, _index]);
      if (first_entry) {
        return true;
      }
    }

    if (_accumulator[0] === K) {
      return first_entry;
    }

    if (shouldStop) {
      return true;
    }

    if (_index < S.length - 1) {
      if (_include[0] + _include[1] >= K) {
        shouldStop = find_without_zeros(_index + 1, _include, [...T, _index]);
      }
      if (shouldStop) {
        return true;
      }
      if (_exclude[0] + _exclude[1] >= K) {
        shouldStop = find_without_zeros(_index + 1, _exclude, T);
      }
      if (shouldStop) {
        return true;
      }
    }
  };

  if (S.findIndex((e) => e === 0) >= 0) {
    find_with_zeros();
  } else {
    find_without_zeros();
  }

  if (debug) {
    const time_diff = process.hrtime(time);
    console.log(
      "Process took",
      steps,
      "steps in",
      (time_diff[0] + time_diff[1]) * 1e-9,
      "seconds"
    );
  }

  return R;
};
