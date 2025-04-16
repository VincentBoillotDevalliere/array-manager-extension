// Test Case 1: Basic array with different data types
const basicArray = [1, 'string', true, null, undefined];

// Test Case 2: Array with string containing commas (original issue)
const stringsWithCommasArray = ['a,b', 'c', 'd,e,f', 'g'];

// Test Case 3: Array with JSON objects
const jsonObjectsArray = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Doe', age: 40 }
];

// Test Case 4: Nested arrays
const nestedArrays = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Test Case 5: Mixed array with nested structures
const mixedArray = [
    'string',
    { key: 'value' },
    [1, 2, 3],
    function () { return 'function'; },
    /regex/
];

// Test Case 6: Array with template strings
const templateStringsArray = [
    `template with ${1 + 2}`,
    `multiple 
    lines`,
    `contains a comma, inside`
];

// Test Case 7: Array with quoted strings that have brackets
const quotedBracketsArray = [
    "string with [brackets]",
    'another with {braces}',
    `and backticks with [array] and {object}`
];

// Test Case 8: Array with spread operator
const arrayWithSpread = [
    ...basicArray,
    ...nestedArrays[0]
];

// Test Case 9: Array with trailing comma
const trailingCommaArray = [
    'item1',
    'item2',
    'item3',
];

// Test Case 10: Array with comments between elements
const arrayWithComments = [
    'item1',
    // Comment between elements
    'item2',
    /* Multi-line
       comment */
    'item3'
];

// Test Case 11: One-liner with complex content
const oneLinerComplex = ['simple', { complex: 'object' }, [1, 2, ['nested', 'array']], 'string with "quotes"'];

// Test Case 12: Array with sparse entries
const sparseArray = [
    'first',
    ,
    ,
    'fourth'
];

// Test Case 13: Array with function expressions
const functionArray = [
    function () { console.log('function 1'); },
    () => console.log('arrow function'),
    function complexFunction() {
        const innerArray = [1, 2, 3];
        return innerArray;
    }
];

// Test Case 14: Extremely large array
const largeArray = Array(1000).fill().map((_, i) => `item ${i}`);

// Test Case 15: Array with escaped characters in strings
const escapedCharsArray = [
    'escaped quotes \"inside\"',
    'escaped comma\, should be one element',
    'escaped brackets \[ and \]'
];