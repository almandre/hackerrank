function createMagicSquare(n) {
    const magicSquare = new Array(n)
        .fill()
        .map(() => new Array(n).fill(0));

    let i = Math.floor(n / 2);
    let j = n - 1;
 
    for (let num = 1; num <= n * n;) {
        if (i === -1 && j === n) {
            j = n - 2;
            i = 0;
        } else {
            if (j === n) j = 0;
            if (i < 0) i = n - 1;
        }

        if (magicSquare[i][j] !== 0) {
            j -= 2;
            i++;
            continue;
        } else {
            magicSquare[i][j] = num++;
        }

        j++;
        i--;
    }

    return magicSquare;
}

function rotate(magicSquare) {
    const even = magicSquare[0][0];
    magicSquare[0][0] = magicSquare[2][0];
    magicSquare[2][0] = magicSquare[2][2];
    magicSquare[2][2] = magicSquare[0][2];
    magicSquare[0][2] = even;

    const odd = magicSquare[0][1];
    magicSquare[0][1] = magicSquare[1][0];
    magicSquare[1][0] = magicSquare[2][1];
    magicSquare[2][1] = magicSquare[1][2];
    magicSquare[1][2] = odd;
}

export default function formingMagicSquare(s) {
    const magicSquare = createMagicSquare(3);

    const combinations = [];
    for (let i = 1; i < 9; i++) {
        if (i === 5) magicSquare.reverse();

        const combination = [];
        for (const element of magicSquare) {
            combination.push([...element]);
        }
        combinations.push(combination);

        rotate(magicSquare);
    }

    let minimum = Number.POSITIVE_INFINITY;
    for (const combination of combinations) {
        let cost = 0;

        combination.forEach((row, i) => {
            row.forEach((column, j) => {
                cost += Math.abs(combination[i][j] - s[i][j]);
            });
        });

        minimum = Math.min(minimum, cost);
    }

    return minimum;
}
