import React from "react";

const Slider = ({ min, max, value, onChange }) => (
  <input
    className="w-full bg-green-600"
    type="range"
    min={min}
    max={max}
    value={value}
    onChange={(event) => onChange(event.target.value)}
  />
);

export default Slider;
