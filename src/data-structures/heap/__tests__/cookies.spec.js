/* global describe, test, expect */
import cookies from '../cookies';

describe('cookies', () => {
    test('Test case 0', () => {
        const k = 7;
        const array = [1, 2, 3, 9, 10, 12];

        const operations = cookies(k, array);

        expect(operations).toBe(2);
    });
});
