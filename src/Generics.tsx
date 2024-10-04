import React from "react";

const Generics = () => {
  //  Get All Generics Here : https://www.w3schools.com/typescript/typescript_utility_types.php
  // Generics are used to create reusable components that can work with a variety of data types.

  // 1) Functions
  // Generics with functions help make more generalized methods which more accurately represent the types used and returned

  function createPair<S, T>(first: S, second: T): [S, T] {
    return [first, second];
  }
  const pair = createPair<string, number>("first", 2);
  console.log("the value after generics with functions : ", pair);
  console.log("type so pair : ", typeof pair); //object

  // 2) type alias
  // Generics can be used with type aliases to create reusable types.
  type Pair<S> = { value: S };

  // default value : type Pair<S = string> = (value : S)
  const pair1: Pair<string> = { value: "Hello, World!" };
  console.log("the value after generics with type alias : ", pair1);
  return <div></div>;
};

export default Generics;
