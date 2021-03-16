import caesarCipher from '../caesar-cipher';

describe('caesar-cipher', () => {
    test('Test case 0', () => {
        const str = 'middle-Outz';
        const rotation = 2;

        const result = caesarCipher(str, rotation);

        expect(result).toBe('okffng-Qwvb');
    });

    test('Test case 1', () => {
        const str = 'Always-Look-on-the-Bright-Side-of-Life';
        const rotation = 5;

        const result = caesarCipher(str, rotation);

        expect(result).toBe('Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj');
    });

    test('Test case 2', () => {
        const str = 'www.abc.xy';
        const rotation = 87;

        const result = caesarCipher(str, rotation);

        expect(result).toBe('fff.jkl.gh');
    });
});
