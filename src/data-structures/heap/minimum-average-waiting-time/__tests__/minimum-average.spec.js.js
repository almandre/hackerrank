/* global describe, test, expect */
import minimumAverage from '../minimum-average';

describe('minimumAverage', () => {
    test('Test case 0', () => {
        const customers = [];

        customers.push([0, 3]);
        customers.push([1, 9]);
        customers.push([2, 6]);

        const result = minimumAverage(customers);

        expect(result).toBe(9);
    });

    test('Test case 1', () => {
        const customers = [];

        customers.push([0, 3]);
        customers.push([1, 9]);
        customers.push([2, 5]);

        const result = minimumAverage(customers);

        expect(result).toBe(8);
    });
});
