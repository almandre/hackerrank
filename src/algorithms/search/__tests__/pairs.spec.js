import pairs from '../pairs';

describe('pairs', () => {
    test('Test case 0', () => {
        const k = 2;
        const arr = [1, 5, 3, 4, 2];

        const result = pairs(k, arr);

        expect(result).toBe(3);
    });

    test('Test case 1', () => {
        const k = 1;
        const arr = [
            363374326,
            364147530,
            61825163,
            1073065718,
            1281246024,
            1399469912,
            428047635,
            491595254,
            879792181,
            1069262793
        ];

        const result = pairs(k, arr);

        expect(result).toBe(0);
    });

    test('Test case 2', () => {
        const k = 2;
        const arr = [1, 3, 5, 8, 6, 4, 2];

        const result = pairs(k, arr);

        expect(result).toBe(5);
    });
});
