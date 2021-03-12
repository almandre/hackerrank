export default function substrCount(n, s) {
    let count = n;

    for (let i = 0; i < n; i++) {
        const target = s[i];

        let diff = -1;
        for (let j = i + 1; j < n; j++) {
            const current = s[j];

            if (target === current) {
                if (diff === -1 || i - diff === diff - j) {
                    count += 1;
                }
            } else if (diff === -1) {
                diff = j;
            } else {
                break;
            }
        }
    }

    return count;
}
