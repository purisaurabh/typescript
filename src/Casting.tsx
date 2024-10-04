import React from "react";

const Casting = () => {
  // There are times when working with types where it's necessary to override the type of a variable,
  // such as when incorrect types are provided by a library.
  // Casting is the process of overriding a type.

  // 1) Casting with as
  // A straightforward way to cast a variable is using the as keyword,
  // which will directly change the type of the given variable.

  let x: unknown = "Hello, World!";
  console.log("length of x is : ", (x as string).length);

  // 2) Casting with <>
  // Using <> works the same as casting with as

  // 3) Forced Casting
  // Forced casting is when a variable is cast to a type that it isn't compatible with.

  return <div></div>;
};

export default Casting;
