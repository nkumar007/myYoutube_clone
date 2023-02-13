import Sidebar from "./Sidebar";

import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const Body = () => {
  const isLight = useSelector((store) => store.theme.isLight);

  return (
    <div className={`${isLight ? "bg-white" : "bg-black"} flex`}>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
