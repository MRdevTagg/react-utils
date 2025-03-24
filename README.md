# React Utils

A collection of reusable React utilities, hooks, and components.

## Installation

```bash
npm install mrdev-react-utils
# or
yarn add mrdev-react-utils
```

## Usage

```jsx
import { useWindowSize, Button } from 'mrdev-react-utils';
import { first, last, pick } from 'mrdev-react-utils';

function MyComponent() {
  const { width, height } = useWindowSize();
  const items = ['apple', 'banana', 'orange'];
  
  return (
    <div>
      <p>Window size: {width}x{height}</p>
      <p>First item: {first(items)}</p>
      <p>Last item: {last(items)}</p>
      <Button>Click me</Button>
    </div>
  );
}
```

## Requirements

This package requires React 16.8.0 or higher (for hooks support).

## Available Utilities

### Array Utilities
- `first(array)`: Returns the first element of an array
- `last(array)`: Returns the last element of an array
- `uniq(array)`: Creates a duplicate-free version of an array
- `take(array, n)`: Creates a slice of array with n elements taken from the beginning

### Object Utilities
- `isNil(value)`: Checks if value is null or undefined
- `pick(object, paths)`: Creates an object composed of picked object properties
- `assign(object, ...sources)`: Assigns own enumerable properties of source objects to the destination object
