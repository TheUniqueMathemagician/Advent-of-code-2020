interface Options {
  readonly limit: number;
  readonly unique: boolean;
}

interface Node {
  readonly total_left: number;
  readonly total_sum: number;
}

/**
 * @param {Array} Set - input set
 * @param {number} Sum - sum to find
 * @param {boolean} Should find only one entry
 * @param {boolean} Debug - log the debug
 * @returns {Array} Subsets of indexes
 */
export function subset_sum(
  S: Array<number>,
  K: number,
  options: Options = {
    limit: 0,
    unique: false
  }
): Array<Array<number>> {
  const R: Array<Array<number>> = [];
  let should_stop: boolean = false;

  const find = (
    _index: number = 0,
    _accumulator: Node = {
      total_left: S.reduce((a: number, c: number) => a + c),
      total_sum: 0
    },
    T: Array<number> = []
  ): void => {
    if (should_stop || (options.limit !== 0 && T.length >= options.limit)) {
      return;
    }

    const _include: Node = {
      total_left: _accumulator.total_left - S[_index],
      total_sum: _accumulator.total_sum + S[_index]
    };
    const _exclude: Node = {
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
