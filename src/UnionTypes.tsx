import React from "react";

const UnionTypes = () => {
  // Union types are used when a value can be more than a single type.
  // Such as when a property would be string or number.

  //  1) Union | (OR)

  function printCode(code: string | number) {
    console.log("type of code : ", typeof code);
    console.log("the value after union : ", code);
  }
  printCode("123");
  printCode(123);
  return <div></div>;
};

export default UnionTypes;
