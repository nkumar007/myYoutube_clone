import React, { useState } from "react";

function AutoComplete() {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([
    "Apple",
    "Banana",
    "Cherry",
    "Durian",
  ]);

  function handleInputChange(event) {
    const inputValue = event.target.value;
    setInputValue(inputValue);
  }

  function handleSuggestionClick(suggestion) {
    setInputValue(suggestion);
  }

  return (
    <div className="relative">
      <input
        className="border border-gray-400 rounded-md p-2 pl-8 w-full"
        type="text"
        placeholder="Search fruits..."
        value={inputValue}
        onChange={handleInputChange}
      />
      {inputValue.length > 0 && (
        <ul className="absolute left-0 mt-1 w-full bg-white rounded-md border border-gray-300 shadow-lg z-10">
          {suggestions
            .filter((suggestion) =>
              suggestion.toLowerCase().startsWith(inputValue.toLowerCase())
            )
            .map((suggestion) => (
              <li
                key={suggestion}
                className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}

export default AutoComplete;
