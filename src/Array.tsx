import React from "react";

const Array = () => {
  // TypeScript has a specific syntax for typing arrays.

  const names: string[] = [];
  names.push("John");

  // readonly array prevent the array from being modified
  const readonlyNames: readonly string[] = ["John"];
  // readonlyNames.push("Doe"); // Error
  console.log("the readonlyNames is: ", readonlyNames);
  return <div></div>;
};

export default Array;
