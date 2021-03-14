function count(target, source) {
    let total = 0;

    while (target.length) {
        const letter = target[0];
        const position = source.indexOf(letter);

        target = target.slice(1);

        if (position === -1) {
            total += 1;
        } else {
            source = source.slice(0, position) + source.slice(position + 1);
        }
    }

    return total;
}

function makingAnagrams(s1, s2) {
    return count(s1, s2) + count(s2, s1);
}

export default makingAnagrams;
