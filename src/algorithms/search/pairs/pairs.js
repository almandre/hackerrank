export default function pairs(k, arr) {
    let differences = 0;

    const compare = (a, b) => (a < b) ? -1 : 1;
    arr.sort(compare);

    let i = 1;
    let j = 0;
    while (i < arr.length) {
        const target = arr[i] - arr[j];
        
        if (target > k) {
            j += 1;
        } else {
            if (target === k) {
                differences += 1;
            }

            i += 1;            
        }
    }

    return differences;
}
