import React from "react";

const Classes = () => {
  // TypeScript adds types and visibility modifiers to JavaScript classes.

  // Members Types
  // The members of a class (properties & methods) are typed using type annotations, similar to variables.
  // The type annotations go after the member name, separated by a colon.

  class Rectanglea {
    name: string = "";
  }

  const rec = new Rectanglea();
  rec.name = "John";

  console.log("the value after member types : ", rec.name);

  // Members: Visibility
  //public - (default) allows access to the class member from anywhere
  //private - only allows access to the class member from within the class
  //protected - allows access to the class member from itself and any classes that inherit it, which is covered in the inheritance section below

  class Person {
    private name: string = "";
    public constructor(name: string) {
      this.name = name;
    }

    public getName(): string {
      return this.name;
    }
  }

  const person = new Person("John");
  console.log("the value after member visibility : ", person.getName());

  //Parameter Properties
  // TypeScript provides a convenient way to define class members in the constructor, by adding a visibility modifiers to the parameter.
  //   class Person {
  //     // name is a private member variable
  //     public constructor(private name: string) {}

  //     public getName(): string {
  //       return this.name;
  //     }
  //   }

  //   const person = new Person("Jane");
  //   console.log(person.getName());

  // Readonly Properties
  // Similar to arrays, the readonly keyword can prevent class members from being changed.

  // Inheritance: Implements
  // Interfaces (covered here) can be used to define the type a class must follow through the implements keyword.

  interface Shape {
    getArea: () => number;
  }

  class Rectangle implements Shape {
    public constructor(
      protected readonly width: number,
      protected readonly height: number
    ) {}

    public getArea(): number {
      return this.width * this.height;
    }
  }

  const rectangle = new Rectangle(10, 20);
  console.log("the value of area is :  ", rectangle.getArea());

  return <div></div>;
};

export default Classes;
