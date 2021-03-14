import substrCount from '../special-palindrome-again';

describe('special-palindrome-again', () => {
    test('Test case 0', () => {
        const n = 5;
        const s = 'asasd';

        const result = substrCount(n, s);

        expect(result).toBe(7);
    });

    test('Test case 1', () => {
        const n = 7;
        const s = 'abcbaba';

        const result = substrCount(n, s);

        expect(result).toBe(10);
    });

    test('Test case 2', () => {
        const n = 4;
        const s = 'aaaaa';

        const result = substrCount(n, s);

        expect(result).toBe(10);
    });
});
