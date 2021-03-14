import makingAnagrams from '../making-anagrams';

describe('making-anagrams', () => {
    test('Test case 0', () => {
        const s1 = 'cde';
        const s2 = 'abc';

        const result = makingAnagrams(s1, s2);

        expect(result).toBe(4);
    });

    test('Test case 1', () => {
        const s1 = 'absdjkvuahdakejfnfauhdsaavasdlkj';
        const s2 = 'djfladfhiawasdkjvalskufhafablsdkashlahdfa';

        const result = makingAnagrams(s1, s2);

        expect(result).toBe(19);
    });
});
