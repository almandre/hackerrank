const memo = {};

function getWays(target, coins, start = 0) {
    if (target === 0) {
        return 1;
    }

    if (target < 0) {
        return 0;
    }

    let count = 0;

    for (let i = start; i < coins.length; i++) {
        const coin = coins[i];
        const change = target - coin;
        const key = `${coin}:${change}`;

        let ways;
        if (key in memo) {
            ways = memo[key];
        } else {
            ways = getWays(change, coins, i);
            memo[key] = ways;
        }

        count += ways;
    }

    return count;
}

export default getWays;
