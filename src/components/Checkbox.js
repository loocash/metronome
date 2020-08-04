import React from "react";
import { CheckSVG } from "../utils";

const Checkbox = ({ label = "", checked, onChange }) => {
  const handleChange = () => onChange(!checked);

  return (
    <div className="text-blue-900 flex justify-center flex-wrap">
      {label && (
        <div className="text-center text-xs font-bold mb-1">{label}</div>
      )}
      <div
        onClick={handleChange}
        className={`h-10 w-10 border-blue-900 cursor-pointer select-none ${
          checked ? "border-2 bg-blue-100" : "border"
        }`}
      >
        {checked && <CheckSVG />}
      </div>
    </div>
  );
};

export default Checkbox;
