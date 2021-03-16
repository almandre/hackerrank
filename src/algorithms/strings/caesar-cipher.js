export default function caesarCipher(s, k) {
    let encrypted = '';

    for (const c of s) {
        let code = c.charCodeAt(0);
        let initial;

        if (c >= 'A' && c <= 'Z') {
            initial = 65;
        } else if (c >= 'a' && c <= 'z') {
            initial = 97
        }

        if (initial) {
            code += k - initial;

            if (code > 25) {
                const spins = Math.floor(code / 26);

                code -= (spins * 26);
            }

            code += initial;
        }

        encrypted += String.fromCharCode(code);
    }

    return encrypted;
}
