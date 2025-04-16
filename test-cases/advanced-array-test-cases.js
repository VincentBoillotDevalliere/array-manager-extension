// Test Case 1: Arrays with destructuring assignments
let [a, b, c] = [1, 2, 3];
const [first, ...rest] = ['first', 'second', 'third', 'fourth'];

// Test Case 2: Array declared across multiple lines with complex formatting
const multiLineArray = [
    1,
    2,
    /* Large comment block
     * that spans multiple
     * lines inside the array
     */
    3,
    // Inline comment
    4,
    `string with
  line breaks and [brackets] inside`,
    5
];

// Test Case 3: Array with computed property expressions
const computedArray = [
    Math.random() > 0.5 ? 'yes' : 'no',
    new Date().getFullYear(),
    `Today is ${new Date().toLocaleDateString()}`,
    (function () { return 'IIFE result'; })()
];

// Test Case 4: Array with method calls that return arrays
const methodArray = [
    [1, 2, 3].map(x => x * 2),
    'test'.split(''),
    Array.from({ length: 5 }, (_, i) => i + 1)
];

// Test Case 5: Arrays within template literals
const tplLiteral = `This template has an array: ${['a', 'b', 'c']} inside it`;
const nestedTplLiteral = `Nested ${`arrays ${[1, 2, [3, 4]]}`} in templates`;

// Test Case 6: Arrays within object literals
const objWithArrays = {
    simple: [1, 2, 3],
    complex: [{ nested: true }, [4, 5, 6]],
    ["computed" + "Key"]: ['value', ['nested', 'array']]
};

// Test Case 7: Array patterns in regexes and strings
const regexPattern = /\[(.+?)\]/g;
const stringWithArrayPattern = "This [1, 2, 3] looks like an array but is a string";

// Test Case 8: Array with complex member expressions
const membersArray = [
    Math.PI,
    String.prototype.trim,
    Array.prototype.slice.call(['a', 'b', 'c'], 1)
];

// Test Case 9: Mixed use of square brackets (array literals vs. property access)
const mixedBrackets = [
    objWithArrays.simple[0],
    multiLineArray[2],
    [1, 2, 3][0]
];

// Test Case 10: Array with nullish coalescing and optional chaining
const modernArray = [
    null ?? 'default',
    undefined ?? 'default',
    objWithArrays?.notExisting?.[0] ?? 'fallback'
];

// Test Case 11: Challenge with balanced brackets but tricky patterns
const trickyArray = [
    ']not[closing',
    '[not]opening',
    'both]open[and]closed[',
    '"[quoted]"',
    "[].sort(() => Math.random() - 0.5)"
];

// Test Case 12: Single-element arrays with tricky content
const singleElementArrays = [
    [','],
    ['[object Object]'],
    ['[1,2,3]'],
    ['{key: "value"}']
];

// Test Case 13: Arrays with non-identifier property names
const weirdPropertyNames = {
    "x-y-z": ['a', 'b', 'c'],
    123: ['d', 'e', 'f'],
    [Symbol('key')]: ['g', 'h', 'i']
};

// Test Case 14: Array constructed with various methods rather than literals
const constructedArrays = {
    fromArgs: Array.of(1, 2, 3),
    fromIterable: Array.from("abc"),
    fromLength: new Array(5),
    fromSpread: [...'abcde']
};

// Test Case 15: Arrays within JSX-like syntax (even though this is JavaScript)
const jsxLikeContent = {
    render: () => (
        `<div>
      <ul>
        {["item1", "item2", "item3"].map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>`
    )
};