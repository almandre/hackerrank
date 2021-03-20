function getCandies(target, source, last) {
    if (target > source) {
        return last + 1;
    }

    return 0;
}

export default function candies(n, arr) {
    const left = [];
    const right = [];

    let candies;
    for (let i = 0; i < n; i++) {
        candies = getCandies(arr[i], arr[i - 1], left[i - 1]);
        left.push(candies);

        candies = getCandies(arr[n - 1 - i], arr[n - i], right[0]);
        right.unshift(candies);
    }

    let minimum = n;

    for (let i = 0; i < n; i++) {
        minimum += Math.max(left[i], right[i]);
    }

    return minimum;
}
