import React from "react";
import { LeftSVG, RightSVG } from "../utils";

const Btn = ({ onClick, children, disabled = false }) => (
  <button
    disabled={disabled}
    className={`h-8 w-8 ${disabled ? "text-gray-400" : ""}`}
    onClick={onClick}
  >
    <span>{children}</span>
  </button>
);

const IntegerInput = ({ min, max, value, onChange, label }) => {
  const handleIncrement = () => onChange(value + 1);
  const handleDecrement = () => onChange(value - 1);

  return (
    <div className="text-blue-900">
      {label && (
        <div className="text-center text-xs font-bold tracking-widest">
          {label}
        </div>
      )}
      <div className="flex items-center justify-between text-2xl">
        <Btn disabled={min >= value} onClick={handleDecrement}>
          <LeftSVG />
        </Btn>
        {value}
        <Btn disabled={max <= value} onClick={handleIncrement}>
          <RightSVG />
        </Btn>
      </div>
    </div>
  );
};

export default IntegerInput;
