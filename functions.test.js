const functions = require('./functions');

//we can run a lifecycle method before or after each test
//beforeEach(() => initDatabase());
//afterEach(() => closeDatabase());

//we can also run a function before or after all or our tests are run
//beforeAll(() => initDatabase());
//afterAll(() => closeDatabase());

//const initDatabase = () => console.log('database initalized');
//const closeDatabase = () => console.log('database closed');
const nameCheck = () => console.log("checking name..");


//descibe allows us to run a function
//before or after specific tests
describe('checking names', () => {
    beforeEach( () => nameCheck());

    test('User is jeff', () => {
        const user = 'jeff';
        expect(user).toBe('jeff');
    })
    test('User is karen', () => {
        const user = 'karen';
        expect(user).toBe('karen');
    })
})

test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2,2)).toBe(4);
});
test('Subtract 2- 1 to equal 1', () => {
    expect(functions.subtract(2,1)).toBe(1);
})
test('adds 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2,2)).not.toBe(5);
})
test('should be null', () => {
    expect(functions.isNull()).toBeNull();
})
test('should be falsy', () => {
    expect(functions.checkValue(undefined)).toBeFalsy();
})

//to be matches a primitive type not a reference. for that 
//we need toEqual
test('user should be kyle ozymandius object', () => {
    expect(functions.createUser()).toEqual({firstName: 'kyle', lastName: 'ozymandius'});
})

test('should be under 1600', () => {
    expect(functions.checkLoad([800, 700])).toBeLessThan(1600);
});
test('should be greater than or equal to 1600', () => {
    expect(functions.checkLoad([800, 900])).toBeGreaterThan(1600);
});
test('there is no I in team', () => {
    expect('team').not.toMatch(/I/i);
})

test('Admin should be in usernames', () => {
    usernames = ['admin', 'alice', 'mad hatter'];
    expect(usernames).toContain('admin');
})

//then promise
test('user fetch name to be Clementine Bauch', () => {
    expect.assertions(1);
    return functions.fetchUser()
        .then(data => {
            expect(data.name).toEqual('Clementine Bauch');
        })
})

//async
test('user fetch name to be Clementine Bauch', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Clementine Bauch');
        
})


/*
Matchers for truthy & falsy values
not: reverse whatever matcher follows it
toBeNull: matches only null.
toBeUndefined: matches only undefined.
toBeDefined: matches anything other then undefined.
toBeFalsy: matches anything that an if statement treats as true.
toBeTruthy: matches anything that an if statement treats as true.
toEqual: matches anything that references the same thing (like an object).
toBeDefined: matches that a given variable exisits.

COMPARISON MATCHERS
toBeLessThan: matches only values less then the parameter.
toBeLessThanOrEqual: matches values less than or equal to the param.
toBeGreaterThan: matches only values greater than the parameter.
toBeGreaterThanOrEqual: matches only values greater than or equal to.

REGEX
toMatch: matches a regular expression

ARRAYS
toContain: matches that a certain value is in a array.
*/