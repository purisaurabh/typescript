import React from "react";

const ObjectTypes = () => {
  // TypeScript has a specific syntax for typing objects.
  type Car = { type: string; model: string; year: number };

  const car: Car = {
    type: "car",
    model: "Toyota",
    year: 2021
  };

  console.log("car is : ", car);
  console.log("car type is : ", car.type);
  console.log("car model is : ", car.model);
  console.log("car year is : ", car.year);

  const second_car: Car = {
    type: "bike",
    model: "bmw",
    year: 2022
  };

  console.log("second car is : ", second_car);

  const Optional: { type: string; mileage?: number } = {
    type: "car"
    // mileage: 0
  };
  Optional.mileage = 100;
  console.log("Optional is : ", Optional);

  // Index Signature
  // Index signatures can be used for objects without a defined list of properties.
  const nameAgeGroup: { [index: string]: number } = {};
  nameAgeGroup.Jack = 25;
  nameAgeGroup["Jane"] = 30;
  // both are same above

  return <div></div>;
};

export default ObjectTypes;
