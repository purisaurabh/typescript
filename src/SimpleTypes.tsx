import React from "react";

/*
  Two way to define types in TypeScript:
  - Explicit Types
  - Implicit Types : guessing the types called the infer in TypeScript
*/

const SimpleTypes = () => {
  let isFetching: boolean = true;
  let age: number = 20;
  let firstName: string = "John";

  console.log("the type of isFetching is: ", typeof isFetching);
  console.log("the type of age is: ", typeof age);
  console.log("the type of firstName is: ", typeof firstName);

  // Unable to Infer
  const json = JSON.parse("55");
  console.log("the type of json is: ", typeof json); // type is number

  // for the above we should have the configure the tsconfig.json file
  // see the w3 school for more information
  return <div></div>;
};

export default SimpleTypes;
