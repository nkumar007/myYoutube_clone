import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const buttons = [
    "All",
    "Mixes",
    "Music",
    "Live",
    "Computers",
    "Tamil Cinema",
    "New to you",
  ];
  return (
    <ul className="flex">
      {buttons.map((button) => (
        <li
          key={button}
          className=" border-2 br-black py-1 px-3 rounded-md m-2 cursor-pointer"
        >
          <Button name={button} />
        </li>
      ))}
    </ul>
  );
};

export default ButtonList;
