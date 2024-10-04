import React from "react";

const TypeAliasesAndInterfaces = () => {
  // TypeScript allows types to be defined separately from the variables that use them.
  // Aliases and Interfaces allows types to be easily shared between different variables/objects.

  // Type Aliases
  type CarYear = number;
  type CarType = string;
  type CarModel = string;

  type Car = {
    year: CarYear;
    type: CarType;
    model: CarModel;
  };

  const carYear: CarYear = 2021;
  const carType: CarType = "Sedan";
  const carModel: CarModel = "Toyota";

  const car: Car = {
    year: carYear,
    type: carType,
    model: carModel
  };

  console.log("the value after alies : ", car);

  // Interfaces
  // Interfaces are similar to type aliases, except they only apply to object types.

  interface Rectanlge {
    height: number;
    width: number;
  }

  const rectangle: Rectanlge = {
    height: 10,
    width: 20
  };

  console.log("the value after interface : ", rectangle);

  // Extending Interfaces
  // Interfaces can extend each other's definition.

  interface ColoredRectangle extends Rectanlge {
    color: string;
  }

  const coloredRectangle: ColoredRectangle = {
    height: 10,
    width: 20,
    color: "red"
  };
  console.log("the value after extending interface : ", coloredRectangle);
  return <div></div>;
};

export default TypeAliasesAndInterfaces;
