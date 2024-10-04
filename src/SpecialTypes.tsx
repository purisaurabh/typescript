import React from "react";

const SpecialTypes = () => {
  // 'any' is a type that disables type checking and effectively allows all types to be used.

  let u = true;
  console.log("the type of u is: ", typeof u);
  // if u == 1 the it gives error

  // if we use any
  let a: any = 1;
  a = true; // it gives no error
  console.log("the type of a is: ", typeof a);

  // unknown is a type-safe counterpart of any. Anything is assignable to unknown, but unknown isn’t assignable to anything but itself and any without a type assertion or a control flow based narrowing.
  let b: unknown = 30;
  console.log("the type of b is: ", typeof b);

  // never is a type that represents the type of values that never occur. For instance, never is the return type for a function expression that always throws an exception or one that never returns.

  // undefined and null are two other special types in TypeScript. By default, null and undefined are subtypes of all other types. That means you can assign null and undefined to something like number.

  return <div></div>;
};

export default SpecialTypes;
