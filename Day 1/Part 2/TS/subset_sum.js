"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subset_sum = void 0;
function subset_sum(
  S,
  K,
  options = {
    limit: 0,
    unique: false
  }
) {
  const R = [];
  let should_stop = false;
  const find = (
    _index = 0,
    _accumulator = {
      total_left: S.reduce((a, c) => a + c),
      total_sum: 0
    },
    T = []
  ) => {
    if (should_stop || (options.limit !== 0 && T.length >= options.limit)) {
      return;
    }
    const _include = {
      total_left: _accumulator.total_left - S[_index],
      total_sum: _accumulator.total_sum + S[_index]
    };
    const _exclude = {
      total_left: _include.total_left,
      total_sum: _accumulator.total_sum
    };
    if (_include.total_sum === K) {
      R.push([...T, _index]);
      if (options.unique) {
        should_stop = true;
        return;
      }
    }
    if (_index < S.length - 1) {
      find(_index + 1, _include, [...T, _index]);
      find(_index + 1, _exclude, T);
    }
  };
  find();
  return R;
}
exports.subset_sum = subset_sum;
