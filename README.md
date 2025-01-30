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
## Day 6
# React Router and Data Fetching Guide

## Table of Contents
1. [React Router DOM Installation](#react-router-dom-installation)
2. [Fetching API on Hover](#fetching-api-on-hover)
3. [React Router Basics](#react-router-basics)
4. [useLoader Hook](#useloader-hook)
5. [useParams Hook](#useparams-hook)
6. [Fetch API](#fetch-api)

## React Router DOM Installation

React Router is a standard library for routing in React applications. It enables navigation among views in a React application, allowing for a single-page app experience.

### Installation

To install React Router DOM, run the following command in your project directory:

```bash
npm install react-router-dom
```

## Fetching API on Hover

Fetching data when a user hovers over an element can improve performance by loading data only when needed.

### Example: Custom Hook for Hover Fetching

```jsx
import { useState, useCallback } from 'react';

function useHoverFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    if (data) return; // Don't fetch if we already have data
    setIsLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Network response was not ok');
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, [url, data]);

  return { data, isLoading, error, fetchData };
}

// Usage in a component
function HoverFetchComponent({ url }) {
  const { data, isLoading, error, fetchData } = useHoverFetch(url);

  return (
    <div onMouseEnter={fetchData}>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && <p>Data: {JSON.stringify(data)}</p>}
    </div>
  );
}
```

## React Router Basics

React Router allows you to handle routing in your React application, creating a single-page application experience.

### Basic Setup

```jsx
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/users">Users</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
```

## useLoader Hook

React Router v6 introduced the concept of loaders, which are functions that load data for a route before it renders. While there isn't a built-in `useLoader` hook, we can create a custom hook that mimics this functionality.

### Custom useLoader Hook

```jsx
import { useState, useEffect } from 'react';

function useLoader(loadingFunction) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        setIsLoading(true);
        const result = await loadingFunction();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }

    load();
  }, [loadingFunction]);

  return { data, isLoading, error };
}

// Usage
function UserComponent({ userId }) {
  const loadUser = async () => {
    const response = await fetch(`https://api.example.com/users/${userId}`);
    if (!response.ok) throw new Error('Failed to fetch user');
    return response.json();
  };

  const { data: user, isLoading, error } = useLoader(loadUser);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!user) return null;

  return <div>User: {user.name}</div>;
}
```

## useParams Hook

The `useParams` hook allows you to access URL parameters in your React components.

### Syntax and Usage

```jsx
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { userId } = useParams();

  return <div>User Profile for user {userId}</div>;
}

// In your router setup
<Route path="/users/:userId" element={<UserProfile />} />
```

## Fetch API

The Fetch API provides a powerful and flexible feature for making network requests.

### Basic Usage

```javascript
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });
```

### Using Fetch with Async/Await

```javascript
async function getAllUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("E: ", error);
  }
}

// getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error))

// promise.all
```


prop drilling:
context api
steps:
first create context folder
make UserContext.js inside that file
 ``` javascripts
import React from 'react'

const UserContext = React.createContext()

export default UserContext
```
2nd step we need to make ucontext provider

``` javascript
import React from 'react'
import UserContext from './UserContext'

const ContextProvider = ({ children }) => {
    const [user, setUser] = React.useState(null)

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
    

export default ContextProvider
```