/* global describe, test, expect */
import contacts from '../contacts';

describe('contacts', () => {
    test('Test case 0', () => {
        const queries = [];

        queries.push(['add', 'hack']);
        queries.push(['add', 'hackerrank']);
        queries.push(['find', 'hac']);
        queries.push(['find', 'hak']);

        const partials = contacts(queries);

        expect(partials).toEqual([2, 0]);
    });
});
