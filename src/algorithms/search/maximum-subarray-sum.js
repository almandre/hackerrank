import { TreeSet } from '@almandre/algorithms-and-data-structures';

function mod(target, source, m) {
    return (target + source) % m;
}

export default function maximumSum(a, m) {
    let limit = m - 1;
    let maximum = 0;
    let prefix = 0;

    const sums = new TreeSet(0);

    for (let i = 0; i < a.length; i++) {
        prefix = mod(prefix, a[i] % m, m);

        if (prefix > maximum) {
            maximum = prefix;
        }

        const ceil = sums.ceiling(prefix + 1);
        if (ceil) {
            const calc = mod(prefix - ceil, m, m);

            if (calc > maximum) {
                maximum = calc;
            }
        }

        if (maximum === limit) {
            break;
        }

        sums.add(prefix);
    }

    return maximum;
}
