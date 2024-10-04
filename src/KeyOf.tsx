import React from "react";

const KeyOf = () => {
  interface Person {
    name: string;
    age: number;
  }

  function printPersonKeys(person: Person, property: keyof Person) {
    console.log(`Printing person property ${property}: "${person[property]}"`);
  }

  let person = {
    name: "Rone",
    age: 25
  };

  printPersonKeys(person, "name");

  return <div></div>;
};

export default KeyOf;
