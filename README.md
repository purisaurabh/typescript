# TYPESCRIPT

# What is TypeScript?

- TypeScript is a syntactic superset of JavaScript which adds static typing.
- This basically means that TypeScript adds syntax on top of JavaScript, allowing developers to add types.

# Why should I use TypeScript?

- JavaScript is a loosely typed language. It can be difficult to understand what types of data are being passed around in JavaScript.

- In JavaScript, function parameters and variables don't have any information! So developers need to look at documentation, or guess based on the implementation.

- TypeScript allows specifying the types of data being passed around within the code, and has the ability to report errors when the types don't match.

- For example, TypeScript will report an error when passing a string into a function that expects a number. JavaScript will not.

# TypeScript Compiler

- TypeScript is transpiled into JavaScript using a compiler.

# Installing the Compiler

- Within your npm project, run the following command to install the compiler:

```javascript
npm install typescript --save-dev
```

- The compiler is installed in the node_modules directory and can be run with: npx tsc.

```javascript
npx tsc
```

# Configuring the compiler

- The compiler can be configured using a tsconfig.json file.
- You can have TypeScript create tsconfig.json with the recommended settings with:

```javascript
npx tsc --init
```
