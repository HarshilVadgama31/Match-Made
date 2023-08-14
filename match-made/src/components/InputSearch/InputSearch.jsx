import React, { useState, useRef, useEffect } from "react";
import "./InputSearch.css";

function InputSearch({ onChangeValue }) {
  const [searchResultOpen, setSearchResultOpen] = useState(false);
  const [results, setResults] = useState([]);
  const [input, setInput] = useState("");
  const inputsearchRef = useRef();

  // Close the inputsearch when clicked outside
  const handleClickOutside = (event) => {
    if (
      inputsearchRef.current &&
      !inputsearchRef.current.contains(event.target)
    ) {
      setSearchResultOpen(false);
      // if (!input) {
      //   setInput("");
      // }
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

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return (
            // value && (To keep suggestion div hidden when input deleted completely)
            user &&
            user.name &&
            user.name.toLowerCase().includes(value.toLowerCase())
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
    setSearchResultOpen(true);
    // console.log(input)
    // onChangeValue(input)
    // value ? setSearchResultOpen(true) : setSearchResultOpen(false); (To keep suggestion div hidden when input deleted completely)
  };

  return (
    <>
      <div ref={inputsearchRef} className=" w-full relative flex">
        <input
          type="text"
          className="flex m-2 w-full bg-bg_light border border-button_light hover:ring-4 hover:ring-button_light text-gray-900 text-lg rounded-lg p-2.5 dark:bg-[#17212e] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:hover:ring-4 dark:hover:ring-button_dark"
          placeholder="Type here"
          value={input}
          onChange={(e) => {
            handleChange(e.target.value);
          }}
        />
        {searchResultOpen && (
          <div className="top-16 w-full m-2 max-h-48 overflow-y-scroll overflow-x-hidden z-10 absolute shadow-md bg-bg_light border border-button_light hover:ring-4 hover:ring-button_light text-gray-900 text-lg rounded-lg p-2.5 dark:bg-[#17212e] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:hover:ring-4 dark:hover:ring-button_dark">
            {results.map((result, id) => {
              return (
                <div
                  tabIndex="0"
                  key={id}
                  className="p-2  hover:rounded-lg hover:bg-button_light dark:hover:bg-button_dark"
                  onClick={() => {
                    setInput(result.name);
                    setSearchResultOpen(false);
                    console.log(result.name);
                    onChangeValue(result.name);
                  }}
                >
                  {result.name}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default InputSearch;
