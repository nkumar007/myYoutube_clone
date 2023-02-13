import React from "react";

const Sidebar = () => {
  return (
    <div className="flex text-lg font-medium  flex-col gap-2 justify-center m-4 divide-y divide-slate-700">
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
