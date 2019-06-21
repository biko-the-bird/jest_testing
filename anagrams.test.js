const isAnagram = require('./anagrams');

test('isAnagram function exists', () => {
    expect(typeof isAnagram).toEqual('function');
})

test('desserts isAnagram of stressed', () => {
    expect(isAnagram('stressed', 'desserts')).toBeTruthy();
});

test('Dormitory  isAnagram of dirty room**', () => {
    expect(isAnagram('Dormitory', 'dirty room**')).toBeTruthy();
})

test('hello  is not Anagram of mundo', () => {
    expect(isAnagram('hello', 'mundo')).toBeFalsy();
})