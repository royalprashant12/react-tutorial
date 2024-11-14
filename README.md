why we need react js ?
- state manage by (js) ui/ux manage by(dom) to communication between them we need reactjs
- framework (rule follow strictly) , library(normal anywhere you use) react is library
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

In this example:

1. We import the `useState` hook from React.
2. We initialize a state variable `counter` with an initial value of 15 using `useState(15)`.
3. `useState` returns an array with two elements: the current state value and a function to update it. We use array destructuring to assign these to `counter` and `setCounter` respectively.
4. We define two functions, `addValue` and `removeValue`, which use `setCounter` to update the state.
5. In the JSX, we use the `counter` value and attach our functions to button click events.

This creates a simple counter application where you can increment or decrement the counter value, and the UI updates automatically to reflect these changes.

Hooks like `useState` make it easier to manage and update component state, leading to more readable and maintainable React code.
