import React from "react";
import { useState, useEffect, useRef } from "react";
import list from "../AgeList.json";

function Dropdown({onChangeValue}) {
  const [isOpen, setIsOpen] = useState(false);
  const [defaultValue, setDefaultValue] = useState(18);
  const dropdownRef = useRef();

  // Close the dropdown when clicked outside
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  // Attach event listener when the component mounts
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div ref={dropdownRef} className="relative w-20">
        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          data-dropdown-trigger="hover"
          className="ml-4 w-full text-bg_dark bg-button_light hover:bg-bg_light hover:border-2 hover:border-button_light focus:bg-bg_light focus:border-2 focus:border-button_light font-semibold rounded-lg text-lg px-4 py-2.5 text-center inline-flex items-center justify-around dark:text-bg_light dark:bg-button_dark dark:hover:bg-card_dark dark:hover:border-2 dark:hover:border-button_dark"
          type="button"
          onClick={(e) => {
            setIsOpen((prev) => !prev);
            onChangeValue(e)
          }}
          value={defaultValue}
        >
          {defaultValue}
          {!isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              className="w-6 fill-bg_dark dark:fill-bg_light"
            >
              <path d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              className="w-6 fill-bg_dark dark:fill-bg_light"
            >
              <path d="M11.9997 10.8284L7.04996 15.7782L5.63574 14.364L11.9997 8L18.3637 14.364L16.9495 15.7782L11.9997 10.8284Z"></path>
            </svg>
          )}
        </button>
        {isOpen && (
          <div
            id="dropdown"
            className="ml-4 flex flex-col w-full top-12 absolute z-10 float-left bg-button_light divide-y divide-bg_light rounded-lg items-center dark:bg-gray-800 dark:divide-button_dark dark:text-bg_light"
          >
            {list.map((item, i) => (
              <ul
                className="py-2 text-sm text-gray-800 dark:text-bg_light"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <button
                    className="block"
                    key={i}
                    value={item.age}
                    onClick={(e) => {
                      setDefaultValue(e.target.value);
                      setIsOpen((prev) => !prev);
                      onChangeValue(e)
                    }}
                  >
                    {item.age}
                  </button>
                </li>
              </ul>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Dropdown;
