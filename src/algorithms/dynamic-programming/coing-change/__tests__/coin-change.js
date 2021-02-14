import getWays from '../coin-change';

describe('coin-change', () => {
    test('Test case 0', () => {
        const target = 4;
        const coins = [1, 2, 3];

        const result = getWays(target, coins);

        expect(result).toBe(4);
    });

    test('Test case 1', () => {
        const target = 10;
        const coins = [2, 5, 3, 6];

        const result = getWays(target, coins);

        expect(result).toBe(5);
    });
});
