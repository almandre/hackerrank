export default function dynamicArray(n, queries) {
    const finds = [];
    const seqList = [];
    let lastAnswer = 0;

    queries.forEach(query => {
       const [type, x, y] = query;
       const index = (x ^ lastAnswer) % n;
       const sequence = seqList[index];

       if (type === 1) {
            if (sequence) {
                sequence.push(y);
            } else {
                seqList[index] = [y];
            }
       }
       else if (type === 2) {
            const i = y % sequence.length;

            lastAnswer = sequence[i];

            finds.push(lastAnswer);
       }
    });

    return finds;
}
