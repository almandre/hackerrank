import climbingLeaderboard from '../climbing-the-leaderboard';

describe('climbing-the-leaderboard', () => {
    test('Test case 0', () => {
        const scores = [100, 100, 50, 40, 40, 20, 10];
        const games = [5, 25, 50, 120];

        const result = climbingLeaderboard(scores, games);

        expect(result).toEqual([6, 4, 2, 1]);
    });

    test('Test case 1', () => {
        const scores = [100, 90, 90, 80, 75, 60];
        const games = [50, 65, 77, 90, 102];

        const result = climbingLeaderboard(scores, games);

        expect(result).toEqual([6, 5, 4, 2, 1]);
    });
});
