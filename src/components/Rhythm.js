import React from "react";

const range = (from, to) => {
  if (from > to) {
    return [];
  }
  const xs = new Array(to - from + 1);
  for (let i = 0; i < xs.length; i++) {
    xs[i] = from + i;
  }
  return xs;
};

const Rhythm = ({ count, size }) => {
  const Circle = ({ active }) => (
    <div
      className={`h-8 w-8 rounded-full ${
        active ? "bg-blue-900" : "bg-gray-300"
      }`}
    />
  );

  return (
    <div className="flex justify-around">
      {range(0, size - 1).map((i) => (
        <Circle key={i} active={count === i} />
      ))}
    </div>
  );
};

export default Rhythm;
