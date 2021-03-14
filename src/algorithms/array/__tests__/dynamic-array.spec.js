import dynamicArray from '../dynamic-array';

describe('dynamic-array', () => {
    test('Test case 0', () => {
        const n = 2;
        const queries = [
            [1, 0, 5],
            [1, 1, 7],
            [1, 0, 3],
            [2, 1, 0],
            [2, 1, 1],
        ];

        const result = dynamicArray(n, queries);

        expect(result).toEqual([7, 3]);
    });
});
