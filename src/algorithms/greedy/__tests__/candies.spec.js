import candies from '../candies';

describe('candies', () => {
    test('Test case 0', () => {
        const n = 3;
        const arr = [1, 2, 2];

        const result = candies(n, arr);

        expect(result).toBe(4);
    });

    test('Test case 1', () => {
        const n = 10;
        const arr = [2, 4, 2, 6, 1, 7, 8, 9, 2, 1];

        const result = candies(n, arr);

        expect(result).toBe(19);
    });

    test('Test case 2', () => {
        const n = 8;
        const arr = [2, 4, 3, 5, 2, 6, 4, 5];

        const result = candies(n, arr);

        expect(result).toBe(12);
    });
});
