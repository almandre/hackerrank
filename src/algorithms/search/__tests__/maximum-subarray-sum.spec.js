import maximumSum from '../maximum-subarray-sum';

describe('maximum-subarray-sum', () => {
    test('Test case 0', () => {
        const moduleDivisor = 7;
        const arr = [3, 3, 9, 9, 5];

        const result = maximumSum(arr, moduleDivisor);

        expect(result).toBe(6);
    });

    test('Test case 1', () => {
        const moduleDivisor = 2;
        const arr = [1, 2, 3];

        const result = maximumSum(arr, moduleDivisor);

        expect(result).toBe(1);
    });

    test('Test case 2', () => {
        const moduleDivisor = 5;
        const arr = [1, 5, 9];

        const result = maximumSum(arr, moduleDivisor);

        expect(result).toBe(4);
    });
});
