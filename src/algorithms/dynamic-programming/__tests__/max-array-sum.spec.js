import maxSubsetSum from '../max-array-sum';

describe('max-array-sum', () => {
    test('Test case 0', () => {
        const arr = [3, 7, 4, 6, 5];

        const result = maxSubsetSum(arr);

        expect(result).toBe(13);
    });

    test('Test case 1', () => {
        const arr = [2, 1, 5, 8, 4];

        const result = maxSubsetSum(arr);

        expect(result).toBe(11);
    });

    test('Test case 2', () => {
        const arr = [3, 5, -7, 8, 10];

        const result = maxSubsetSum(arr);

        expect(result).toBe(15);
    });
});
