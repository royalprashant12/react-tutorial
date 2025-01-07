why we need react js ?
- state manage by (js) ui/ux manage by(dom) to communication between them we need reactjs
- framework (rule follow strictly) , library(normal anywhere you use) react is library
- react make single page appliction
# React Development Guide

## Day 1: Setting Up React Projects

### Bundlers
Vite, Parcel (Bundlers): Used to keep all React files in one place

### React Ecosystem
- React: For web development
- React Native: For mobile app development
- React DOM: For websites

### Package Management
- npm (Node Package Manager): Helps install libraries
- npx (Node Package Executor): Used to run packages without installation

### Method 1: create-react-app
```bash
# Create a new React app
npm create-react-app 01basicreact

# Start the development server
npm run start 

# Build JavaScript files for production
npm run build
```

Notes:
- create-react-app is a software tool for React projects
- It can be time-consuming and bulky

Reference: [React Documentation](https://react.dev/learn/start-a-new-react-project)

### Day 2: Vite (Faster Alternative)
```bash
npm create vite@latest
```

## Day 2: React Basics

1. JavaScript: Needs to be injected into HTML/CSS
2. Single Page Application: All files stored in index.html
3. React DOM: Creates its own DOM, updates actual DOM when completed
4. JSX: Renders HTML elements using JavaScript
5. App: A function that returns HTML
6. File Linking:
   - Vite: JS files linked normally in index.html
   - React: JS files specified in package.json
7. Multiple JSX: Create and export any number of JSX files
8. Single Element Return: JSX can only return one root element
9. Fragments: Use `<> </>` to group multiple elements

## Day 3: React Concepts: Variable Declaration and Hooks

### 1. Variable Declaration in React Components

In React, you can declare variables within your component functions. These variables can then be used in the JSX returned by the component.

Here's an example:

```jsx
function ExampleComponent() {
  const a = 20; // Variable declaration

  return (
    <h1>Evaluated expression: {a}</h1>
  );
}
```

In this example, we declare a constant `a` with a value of 20. We then use this variable within the JSX, enclosed in curly braces `{}`. React will evaluate this expression and render the result.

### 2. Hooks in React

Hooks help in changing the UI and are used with the help of the useState function.

#### useState Hook

One of the most commonly used hooks is `useState`. It allows you to add state to functional components.

Here's an example of how to use the `useState` hook:

```jsx
import { useState } from 'react';

function CounterApp() {
  const [counter, setCounter] = useState(15);

  const addValue = () => {
    setCounter(counter + 1);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Counter Adder</h1>
      <button onClick={addValue}>Add value {counter}</button>
      <button onClick={removeValue}>Remove value {counter}</button>
      <p>Footer: {counter}</p>
    </>
  );
}

export default CounterApp;
```


# React Basics and Advanced Concepts

## Day 4

### Tailwind CSS & Props
- **Tailwind CSS**: [Tailwind Documentation](https://tailwindcss.com/)
- **Dev UI**: [Dev UI Components](https://devui.io/)

### React Basic Snippet
```jsx
import React from 'react';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <h1>Hello React!</h1>
      <Counter />
    </div>
  );
}

export default App;
```

### `useState` Hook
- **Description**: 
  - The `useState` hook allows you to add state to functional components. 
  - It triggers re-renders when the state changes.

- **Example**:
```jsx
import React, { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(15);

  const addValue = () => setCounter(counter + 1);
  const removeValue = () => setCounter(counter - 1);

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={addValue}>Increment</button>
      <button onClick={removeValue}>Decrement</button>
    </div>
  );
}

export default Counter;
```

### `useCallback` Hook
- **Description**:
  - The `useCallback` hook is used for memoizing functions.
  - It prevents unnecessary re-creations of functions, improving performance.

- **Syntax**:
```jsx
const memoizedCallback = useCallback(fn, dependencies);
```

- **Example**: Password Generator
```jsx
import React, { useState, useCallback } from 'react';

function PasswordGenerator() {
  const [password, setPassword] = useState('');

  const generatePassword = useCallback(() => {
    const newPassword = Math.random().toString(36).slice(-8);
    setPassword(newPassword);
  }, []);

  return (
    <div>
      <h2>Password: {password}</h2>
      <button onClick={generatePassword}>Generate Password</button>
    </div>
  );
}

export default PasswordGenerator;
```

### `useEffect` Hook
- **Description**:
  - The `useEffect` hook allows you to perform side effects in functional components.
  - It can re-run when dependencies change.

- **Syntax**:
```jsx
useEffect(() => {
  // Side effect logic here
}, [dependencies]);
```

- **Example**:
```jsx
import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setSeconds(s => s + 1), 1000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return <h2>Timer: {seconds}s</h2>;
}

export default Timer;
```

### `useRef` Hook
- **Description**:
  - The `useRef` hook creates a mutable reference that persists across renders.

- **Syntax**:
```jsx
const refContainer = useRef(initialValue);
```

- **Example**:
```jsx
import React, { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default FocusInput;
```

## Day 5

### Custom Hooks
- **Description**:
  - Custom hooks are functions that allow you to reuse logic in multiple components.
  - They can return values, arrays, or functions.

- **Example**: Fetching Currency Data
```jsx
import { useState, useEffect } from 'react';

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
      .then((res) => res.json()) // Convert response to JSON
      .then((res) => setData(res[currency])); // Access specific currency data
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
```
