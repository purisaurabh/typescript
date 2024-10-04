import React from "react";

const Enum = () => {
  // An enum is a special "class" that represents a group of constants (unchangeable variables).
  // Enums come in two flavors string and numeric.

  // Numeric Enums - Default
  // By default, enums will initialize the first value to 0 and add 1 to each additional value:

  // fully initialize
  enum CardinalDirections {
    North = 1,
    East = "EAST",
    South = "SOUTH",
    West = "WEST"
  }

  //
  let currentDirection = CardinalDirections.North;
  console.log("current direction is : ", currentDirection);

  // only define
  enum Direction {
    Up,
    Down,
    Left,
    Right
  }

  console.log("object is : ", Direction);
  return <div></div>;
};

export default Enum;
