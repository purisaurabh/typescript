import React from "react";

const Functions = () => {
  // TypeScript has a specific syntax for typing function parameters and return values.

  // function type alias
  // Function types can be specified separately from functions with type aliases.

  type Negate = (value: number) => number;
  const negateFunction: Negate = (value) => value * -1;
  console.log("the value after function type alias : ", negateFunction(10));

  // 1) Returned Type
  function getTime(): number {
    return new Date().getTime();
  }
  console.log("the value after returned type : ", getTime());

  // 2) Void Return Type
  // The type void can be used to indicate a function doesn't return any value.

  function printMessage(): void {
    console.log("Hello, World!");
  }
  printMessage();

  // 3) Parameters
  // Function parameters are typed with a similar syntax as variable declarations.

  function add(a: number, b: number): number {
    return a + b;
  }
  console.log("the value after parameters : ", add(1, 2));

  // 4) Optional Parameters
  // By default TypeScript will assume all parameters are required, but they can be explicitly marked as optional.

  function multiply(a: number, b: number, c?: number): number {
    return a * b * (c || 1);
  }
  console.log("the value after optional parameters : ", multiply(2, 3, 2));

  // Default Parameters
  //  For parameters with default values, the default value goes after the type annotation:

  function divide(a: number, b: number = 2): number {
    return a / b;
  }
  console.log("the value after default parameters : ", divide(4));

  // Named Parameters
  // Typing named parameters follows the same pattern as typing normal parameters.

  function subtract({ a, b }: { a: number; b: number }): number {
    return a - b;
  }
  console.log("the value after named parameters : ", subtract({ a: 4, b: 2 }));

  // Rest Parameters
  // Rest parameters can be typed like normal parameters, but the type must be an array as rest parameters are always arrays.
  function addition(a: number, b: number, ...rest: number[]) {
    return a + b + rest.reduce((p, c) => p + c, 0);
  }

  console.log("the value after rest parameters : ", addition(1, 2, 3, 4, 5));

  return <div></div>;
};

export default Functions;
