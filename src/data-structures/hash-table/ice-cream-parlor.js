export default function whatFlavors(cost, money) {
    const buckets = new Map();
    const flavors = [];

    for (let i = 0; i < cost.length; i++) {
        if (cost[i] < money) {
            const pair = money - cost[i];

            if (buckets.has(pair)) {
                const pairIndex = buckets.get(pair);
                flavors.push(pairIndex);
                flavors.push(i + 1);

                break;
            }

            buckets.set(cost[i], i + 1);
        }
    }

    return flavors.sort();
}
