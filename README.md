# MRDev React Utils

A comprehensive collection of reusable React utilities, hooks, components, and helper functions.

## Installation

```bash
npm install mrdev-react-utils
# or
yarn add mrdev-react-utils
```

## Requirements

This package requires React 16.8.0 or higher (for hooks support).

## Usage

```jsx
import { 
  // Hooks
  useBool, useObject, useString, useNumber, useArray, useFlags, useGlobalEvents,
  
  // Components
  Each, EachEntry,
  
  // Utilities
  first, last, pick, capitalize, mergeWith, isFunction, isObject 
} from 'mrdev-react-utils';

function MyComponent() {
  const { state: isOpen, toggle } = useBool({ start: false });
  const items = ['apple', 'banana', 'orange'];
  
  return (
    <div>
      <button onClick={toggle}>Toggle: {isOpen ? 'Open' : 'Closed'}</button>
      
      <h3>Items List</h3>
      <Each 
        of={items}
        if={items.length > 0}
        as={(item, index) => <div key={index}>{item}</div>}
        or="No items available"
      />
      
      <p>First item: {first(items)}</p>
      <p>Last item: {last(items)}</p>
    </div>
  );
}
```

## Available Features

### Hooks

#### State Management Hooks

- **useBool({ start, onTrue, onFalse, onToggle })** - Manage boolean state with callbacks
  - Returns: `{ state, set, on, off, toggle, reset }`

- **useObject({ start, onFieldUpdate, onUpdate, onClear })** - Manage object state
  - Returns: `{ state, set, update, reset, clear }`

- **useString({ start, values, fallback, onUpdate })** - Manage string state with validation
  - Returns: `{ state, values, set, is, reset, clear }`

- **useNumber({ start, zero, end, step, positiveOnly, ... })** - Manage number state with validation
  - Returns: `{ state, zero, step, positive, set, add, sub, reset, clear }`

- **useArray(startState, { onAdd, onRemove, onUpdate, onClear })** - Manage array state
  - Returns: `{ state, set, add, remove, update, reset, clear }`

- **useFlags({ start, onUpdate, onClear })** - Manage object with boolean values
  - Returns: `{ state, set, update, reset, clear, toggle }`

#### Event Hooks

- **useGlobalEvents(instanceName, listeners)** - Manage GlobalState event listeners
  - Returns: The GlobalState instance

### Components

- **Each({ if, of, as, or })** - Utility component for rendering arrays
  ```jsx
  <Each 
    if={array.length > 0}
    of={array}
    as={(item, index) => <li key={index}>{item}</li>}
    or="No items"
  />
  ```

- **EachEntry({ if, of, as, or })** - Utility component for rendering object entries
  ```jsx
  <EachEntry
    if={Object.keys(obj).length > 0}
    of={obj}
    as={([key, value], index) => <div key={key}>{key}: {value}</div>}
    or="Empty object"
  />
  ```

### Utility Functions

#### Array Utilities

- `first(array)`: Returns the first element of an array
- `last(array)`: Returns the last element of an array
- `uniq(array)`: Creates a duplicate-free version of an array
- `take(array, n)`: Takes n elements from the beginning of an array
- `arrIf(condition, item, fallback)`: Conditionally adds items to an array
- `getBy(criteria, array)`: Finds an element in an array by property

#### Object Utilities

- `isNil(value)`: Checks if value is null or undefined
- `pick(object, paths)`: Creates an object with selected properties
- `assign(object, ...sources)`: Assigns properties from source objects
- `mergeWith(object, ...sources, customizer)`: Merges objects with custom function
- `isNonNullObject(value)`: Checks if value is a non-null object
- `objIf(condition, fields, fallback)`: Conditionally includes object properties
- `safeParse(str, fallback)`: Safely parses JSON with fallback

#### Type Checking Utilities

- `isArray(value)`: Checks if value is an array
- `isBoolean(value)`: Checks if value is a boolean
- `isFunction(value)`: Checks if value is a function
- `isObjectLike(value)`: Checks if value is object-like
- `isPlainObject(value)`: Checks if value is a plain object
- `isObject(value)`: Checks if value is an object

#### String Utilities

- `capitalize(string)`: Capitalizes the first character of a string
- `get(object, path, defaultValue)`: Gets value at path of object
- `capitalizeWords(str)`: Capitalizes the first character of each word
- `camelCaseToCapital(string)`: Converts camelCase to Title Case

#### Function Utilities

- `safeCall(callback, fallback)`: Safely calls a function if it exists
- `callOn(key, options, params)`: Calls a function based on a key in options
- `switchOn(key, options, defaultValue)`: Returns a value based on a key in options

#### Object Traversal Utilities

- `onEntries(obj, callback)`: Iterates over object entries
- `mapEntries(obj, callback)`: Maps object entries
- `filterEntries(obj, callback)`: Filters object entries
- `onKeys(obj, callback)`: Iterates over object keys
- `mapKeys(obj, callback)`: Maps object keys
- `filterKeys(obj, callback)`: Filters object keys
- `onValues(obj, callback)`: Iterates over object values
- `mapValues(obj, callback)`: Maps object values
- `filterValues(obj, callback)`: Filters object values
- `transformEntries(obj, mapFn)`: Transforms object entries

### State Management

- **GlobalState** - A powerful state management solution
  - `GlobalState.create(instances)`: Create named state instances
  - `GlobalState.get(name)`: Get a state instance by name
  - Instance methods:
    - `store(entry)`: Store or update state
    - `read(key)`: Read state values
    - `on(event, listener)`: Register event listeners
    - `emit(event, ...args)`: Trigger events
    - `off(event, listener)`: Remove listeners
    - `clear(event)`: Clear all listeners for an event

## Examples

### Using useBool for toggle functionality

```jsx
function ToggleComponent() {
  const { state: isVisible, toggle } = useBool({ start: false });
  
  return (
    <div>
      <button onClick={toggle}>
        {isVisible ? 'Hide Content' : 'Show Content'}
      </button>
      
      {isVisible && <div>This content can be toggled</div>}
    </div>
  );
}
```

### Using GlobalState for application-wide state

```jsx
// Initialize global state
GlobalState.create({
  appState: {
    darkMode: false,
    user: null,
    notifications: []
  }
});

// In a component
function ThemeToggle() {
  const globalState = useGlobalEvents('appState', {
    'darkMode': (prev, current) => console.log(`Theme changed to ${current ? 'dark' : 'light'}`)
  });
  
  const toggleTheme = () => {
    const currentMode = globalState.read('darkMode');
    globalState.store({ darkMode: !currentMode });
  };
  
  return (
    <button onClick={toggleTheme}>
      Toggle Theme
    </button>
  );
}
```

## License

MIT
