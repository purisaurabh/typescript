import React from "react";

const Touple = () => {
  // Tuple is a fixed-size array with fixed types.
  // A tuple is a typed array with a pre-defined length and types for each index.
  // Tuples are great because they allow each element in the array to be a known type of value.
  //

  let ourTouple: [number, boolean, string];
  ourTouple = [1, true, "John"];
  console.log("touple is : ", ourTouple);

  // in touple there is also option for readonly

  // Named Tuples
  // Named tuples allow us to provide context for our values at each index.

  const graph: [x: number, y: number] = [55.2, 41.3];
  console.log("graph is : ", graph);
  console.log("x is : ", graph[0]);
  console.log("y is : ", graph[1]);

  // Descructuring touple
  const dGraph: [x: number, y: number] = [55.2, 41.3];
  const [x, y] = dGraph;
  console.log("x is : ", x);
  console.log("y is : ", y);

  return <div></div>;
};

export default Touple;
