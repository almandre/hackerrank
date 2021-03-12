import { mergeSort } from '@almandre/algorithms-and-data-structures';

export default function triplets(a, b, c) {
    a = mergeSort(a);
    b = mergeSort(b);
    c = mergeSort(c);

    let count = 0;
    let j = 0;
    let k = 0;

    for (let i = 0; i < b.length; i++) {
        while (j < a.length && b[i] >= a[j]) {
            j += 1;
        }

        while (k < c.length && b[i] >= c[k]) {
            k += 1;
        }

        count += j * k;
    }

    return count;
}
