# jest_testing
examples of how to use the jest testing framework
 
## This repo demonstrates the following watchers:

### TRUTHY/FALSY WATCHERS
not: reverse whatever matcher follows it
toBeFalsy: matches anything that an if statement treats as true.
toBeTruthy: matches anything that an if statement treats as true.
toBeDefined: matches that a given variable exisits.

### SPECIFIC WATCHERS
toBe: matches only between primitive types. for more complex to be matching use toEqual.
toBeNull: matches only null.
toBeUndefined: matches only undefined.
toBeDefined: matches anything other then undefined.
toEqual: matches anything that references the same thing (like an object).

### COMPARISON WATCHERS
toBeLessThan: matches only values less then the parameter.
toBeLessThanOrEqual: matches values less than or equal to the param.
toBeGreaterThan: matches only values greater than the parameter.
toBeGreaterThanOrEqual: matches only values greater than or equal to.

### REGEX WATCHERS
toMatch: matches a regular expression

### ARRAYS
toContain: matches that a certain value is in a array.


## Additionally repo demonstrates running lifecycle methods with tests.

### Before and after each test
```javascript
const initDatabase = () => console.log('database initalized');
const closeDatabase = () => console.log('database closed');
beforeEach(() => initDatabase());
afterEach(() => closeDatabase());
```

### once before and once after running every test has been run
```javascript
beforeAll(() => initDatabase());
afterAll(() => closeDatabase());
```

### before and after only certain tests
```javascript
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
```
each test with in the describe method will have the nameCheck() function run before the test itself.




