import { Stack } from '@almandre/algorithms-and-data-structures';

export default function climbingLeaderboard(scores, games) {
    const rank = new Stack();

    for (const score of scores) {
        if (score !== rank.peek) {
            rank.push(score);
        }
    }

    const result = []
    for (const game of games) {
        while(game >= rank.peek) {
            rank.pop();
        }

        result.push(rank.length + 1);
    }

    return result;
}
