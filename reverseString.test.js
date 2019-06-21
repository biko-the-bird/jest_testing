const stringFuncs = require('./reverseString');

test('reverseString function exists', () => {
    expect(stringFuncs.reverseString).toBeDefined();
})

test('string reverses', () => {
    expect(stringFuncs.reverseString('alice')).toEqual('ecila');
})

test('string reverses with uppercase', () => {
    expect(stringFuncs.reverseStringUpFirst('Alice')).toEqual('Ecila');
})