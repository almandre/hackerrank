import whatFlavors from '../ice-cream-parlor';

describe('what-flavors', () => {
    test('Test case 0', () => {
        const money = 4;
        const cost = [1, 4, 5, 3, 2];

        const result = whatFlavors(cost, money);

        expect(result).toEqual([1, 4]);
    });

    test('Test case 1', () => {
        const money = 4;
        const cost = [2, 2, 4, 3];

        const result = whatFlavors(cost, money);

        expect(result).toEqual([1, 2]);
    });

    test('Test case 2', () => {
        const money = 5;
        const cost = [1, 2, 3, 5, 6];

        const result = whatFlavors(cost, money);

        expect(result).toEqual([2, 3]);
    });

    test('Test case 3', () => {
        const money = 8;
        const cost = [4, 3, 2, 5, 7];

        const result = whatFlavors(cost, money);

        expect(result).toEqual([2, 4]);
    });

    test('Test case 4', () => {
        const money = 12;
        const cost = [7, 2, 5, 4, 11];

        const result = whatFlavors(cost, money);

        expect(result).toEqual([1, 3]);
    });
});
