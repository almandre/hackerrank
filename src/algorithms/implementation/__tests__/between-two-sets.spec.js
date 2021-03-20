import getTotalX from '../between-two-sets';

describe('between-two-sets', () => {
    test('Test case 0', () => {
        const a = [2, 4];
        const b = [16, 32, 96];

        const result = getTotalX(a, b);

        expect(result).toBe(3);
    });

    test('Test case 1', () => {
        const a = [3, 4];
        const b = [24, 48];

        const result = getTotalX(a, b);

        expect(result).toBe(2);
    });
});
