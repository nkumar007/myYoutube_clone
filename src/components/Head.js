import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { toggleTheme } from "../utils/themeSlice";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const toggleThemeHandler = () => {
    dispatch(toggleTheme());
  };
  return (
    <div className="flex justify-between items-center shadow-lg p-3 mb-2">
      <div className="flex gap-4 items-center">
        <img
          className="w-10 cursor-pointer"
          onClick={() => toggleMenuHandler()}
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="
          alt="icon"
        />
        <a href="/">
          <img
            className="w-22 h-16 cursor-pointer"
            src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"
            alt="logo"
          />
        </a>
      </div>
      <div className="flex items-center ">
        <input
          className=" border border-gray-200 px-4 py-2  w-[600px]  rounded-l-full text-lg box-border"
          type="text"
          placeholder="Search"
        />
        <button
          className="p-2 bg-gray-200 border border-gray-200 text-lg
         text-black rounded-r-full cursor-pointer  flex items-center w-22"
        >
          Search
        </button>
      </div>
      <div className="flex items-center gap-2">
        <img
          onClick={() => toggleThemeHandler()}
          className="cursor-pointer w-8"
          src="https://cdn1.iconfinder.com/data/icons/user-interface-16x16-vol-1/16/contrast-circle-512.png"
          alt="dark/light mode"
        />
        <img
          className="cursor-pointer w-10"
          src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
          alt="user logo"
        />
      </div>
    </div>
  );
};

export default Head;
