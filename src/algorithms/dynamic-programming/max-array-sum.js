export default function maxSubsetSum(arr) {
    if (arr.lenght === 1) { return 0; }

    let maximum = 0;
    let previous = 0;

    for (const item of arr) {
        const temp = maximum;

        maximum = Math.max(maximum, item + previous);
        previous = temp;
    }

    return maximum;
}
