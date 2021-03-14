import minTime from '../minimum-time-required';

describe('minimum-time-required', () => {
    test('Test case 0', () => {
        const machines = [2, 3];
        const goal = 5;

        const result = minTime(machines, goal);

        expect(result).toBe(6);
    });

    test('Test case 1', () => {
        const machines = [1, 3, 4];
        const goal = 10;

        const result = minTime(machines, goal);

        expect(result).toBe(7);
    });

    test('Test case 2', () => {
        const machines = [4, 5, 6];
        const goal = 12;

        const result = minTime(machines, goal);

        expect(result).toBe(20);
    });
});
