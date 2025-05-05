# Array Size Extension

<img src="https://raw.githubusercontent.com/VincentBoillotDevalliere/array-manager-extension/master/assets/icon.png" alt="Array Size Extension Logo" width="128" height="128">

## Never Lose Track of Your Array Sizes Again

Array Size Extension provides intuitive inlay hints that display the size of arrays right in your JavaScript and TypeScript code. This makes it easier to understand and manage your code without having to manually count array elements.

<img src="https://raw.githubusercontent.com/VincentBoillotDevalliere/array-manager-extension/master/assets/demo-screenshot.png" alt="Demo Screenshot" width="700">

## Features

- **Real-time Array Size Display**: See the size of arrays directly in your code as inlay hints
- **Support for Complex Array Types**: Works with arrays containing strings with commas, nested arrays, objects, and more
- **JavaScript & TypeScript Support**: Fully compatible with both languages
- **Lightweight & Performance-Optimized**: Minimal impact on your coding experience

## How It Works

The extension analyzes your JavaScript and TypeScript code to identify array literals and displays their size directly in your editor. For example:

```javascript
const simpleArray = [1, 2, 3, 4, 5]; // Shows "Size: 5"
const complexArray = ['a,b', { name: 'test' }, [1, 2]]; // Shows "Size: 3"
```

## Working With Complex Arrays

Array Size Extension intelligently handles complex scenarios:

- **Strings with commas**: `['a,b', 'c,d']` is correctly counted as 2 elements
- **Nested arrays**: The extension counts top-level elements
- **Object literals**: Objects in arrays are counted as single elements
- **Comments**: Comments inside arrays are ignored for counting

## Installation

1. Open VS Code
2. Go to Extensions (or press `Ctrl+Shift+X`)
3. Search for "Array Size Extension"
4. Click Install

## Usage

The extension activates automatically when you open JavaScript or TypeScript files. You'll immediately see the size hints at the end of array declarations.

## Feedback & Contributions

- [Report an Issue](https://github.com/VincentBoillotDevalliere/array-size-extension/issues)
- [Request a Feature](https://github.com/VincentBoillotDevalliere/array-size-extension/issues)
- [Contribute](https://github.com/VincentBoillotDevalliere/array-size-extension)

## Buy Me a Coffee
If you appreciate the extension and would like to support its development, feel free to [buy me a coffee](https://buymeacoffee.com/vincentboillotdevalliere)! Your support helps keep the project alive and improving. ☕💖


## License

This extension is licensed under the [MIT License](LICENSE).

## Credits

Created by [Vincent Devalliere](https://github.com/VincentBoillotDevalliere)