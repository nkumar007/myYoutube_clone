import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div
      className={`h-[400px] w-[200px] flex shadow-lg py-3 px-6 text-lg font-medium  
    flex-col gap-2 justify-center m-x4 divide-y divide-slate-700 `}
    >
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>subscriptions</li>
        <li>Originals</li>
        <li>Youtube Music</li>
      </ul>
      <ul>
        <li>Library</li>
        <li>History</li>
        <li>Your Videos</li>
        <li>Watch Later</li>
        <li>Liked Videos</li>
        <li>Show more</li>
      </ul>
    </div>
  );
};

export default Sidebar;
