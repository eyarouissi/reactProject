import React, { useState } from "react";

export function questionToggle({
  backgroundcolor,
  state="Notchecked",
  className = "",
  defaultChecked = false,
  name = "",
  onChange = () => {},
  icon,
  ...newProps
}) {
  const [checked, setChecked] = useState(false);
  let finalClass = `${className} relative w-10 h-5 flex select-none cursor-pointer`;
  let togglerClass =
    "h-5 w-5 border-2 absolute z-10 rounded-full bg-white transition-transform duration-300 ease-in-out flex justify-center items-center";
  let backgroundClass =
    "absolute left-0 top-0 h-full w-full bg-gray-100 rounded-full";
  if (checked) {
    backgroundClass += backgroundcolor ;
    togglerClass += " transform translate-x-full border-blue-500";
    state="checked"
    
  } else {
    backgroundClass += " bg-gray-300";
    togglerClass += " border-gray-300";
  }
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        name={name}
        defaultChecked={defaultChecked}
        onChange={onChange}
        className="hidden"
      />
      <label
        className={finalClass}
        htmlFor={name}
        onClick={() => {
          
          setChecked(!checked);
        }}
        {...newProps}
      >
        <span className={backgroundClass} />
        <span className={togglerClass}>
          {icon &&
            React.cloneElement(icon, {
              className: "text-xs text-gray-800",
            })}
        </span>
      </label>
    </div>
  );
}
