const { makePairs } = require('../transformarMatrizProfunda');

describe('makePairs', () => {
  describe('makePairs', () => {
    it('should return a deep array for a simple object', () => {
      expect(makePairs({ a: 1, b: 2 })).toEqual([
        ['a', 1],
        ['b', 2],
      ]);
    });

    it('should return a deep array for a nested object', () => {
      expect(makePairs({ a: 1, b: { c: 3, d: 4 } })).toEqual([
        ['a', 1],
        [
          'b',
          [
            ['c', 3],
            ['d', 4],
          ],
        ],
      ]);
    });

    it('should return an empty array for an empty object', () => {
      expect(makePairs({})).toEqual([]);
    });

    it('should return the same value for non-object input', () => {
      expect(makePairs(null)).toEqual(null);
      expect(makePairs(123)).toEqual(123);
      expect(makePairs('string')).toEqual('string');
    });
  });
});
