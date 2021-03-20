function leastCommonMultiple(a, b) {
    const max = Math.max(a, b);
    const min = Math.min(a, b);

    let result = max;
    while (result % min !== 0) {
        result += max;
    }

    return result;
}

function maximumCommonDivisor(a, b) {
    const max = Math.max(a, b);
    let min = Math.min(a, b);

    let result;
    do {
        result = min;
        min = max % min;
    } while (min);

    return result;
}

export default function getTotalX(a, b) {
    let count = 0;

    let lcm = a.shift();
    for (let i = 0; i < a.length; i++) {
        lcm = leastCommonMultiple(lcm, a[i]);
    }

    let gcd = b.shift();
    for (let i = 0; i < b.length; i++) {
        gcd = maximumCommonDivisor(gcd, b[i]);
    }

    for (let item = lcm; item <= gcd; item++) {
        if (item % lcm === 0 && gcd % item === 0) {
            count += 1;
        }
    }

    return count;
}
