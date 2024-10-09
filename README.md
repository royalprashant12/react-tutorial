
# React Development Guide

## day 1: Setting Up React Projects

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

### day 2: Vite (Faster Alternative)
```bash
npm create vite@latest
```

## Video 2: React Basics

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

```
