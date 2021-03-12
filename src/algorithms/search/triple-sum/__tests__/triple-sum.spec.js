import triplets from '../triple-sum';

describe('triple-sum', () => {
    test('Test case 0', () => {
        const a = [1, 3, 5];
        const b = [2, 3];
        const c = [1, 2, 3];

        const result = triplets(a, b, c);

        expect(result).toBe(8);
    });

    test('Test case 1', () => {
        const a = [1, 3, 5, 7];
        const b = [5, 7, 9]
        const c = [7, 9, 11, 13];

        const result = triplets(a, b, c);

        expect(result).toBe(12);
    });
});
