import formingMagicSquare from '../forming-magic-square';

describe('forming-magic-square', () => {
    test('Test case 0', () => {
        const square = [
            [5, 3, 4],
            [1, 5, 8],
            [6, 4, 2]
        ];

        const result = formingMagicSquare(square);

        expect(result).toBe(7);
    });

    test('Test case 1', () => {
        const square = [
            [4, 9, 2],
            [3, 5, 7],
            [8, 1, 5]
        ];

        const result = formingMagicSquare(square);

        expect(result).toBe(1);
    });

    test('Test case 2', () => {
        const square = [
            [4, 8, 2],
            [4, 5, 7],
            [6, 1, 6]
        ];

        const result = formingMagicSquare(square);

        expect(result).toBe(4);
    });
});
