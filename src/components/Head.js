import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { toggleMenu } from "../utils/appSlice";
import { toggleTheme } from "../utils/themeSlice";
import { useState, useEffect } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import Search from "../assets/search.png";
import SearchSmall from "../assets/searchSmall.png";
import { cacheResults } from "../utils/searchSlice";
import { searchedFor } from "../utils/resultsSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const toggleThemeHandler = () => {
    dispatch(toggleTheme());
  };

  const queryClickHandler = () => {
    if (searchQuery === "") return null;
    dispatch(searchedFor(searchQuery));
  };

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setShowSuggestions(searchCache[searchQuery]);
      } else {
        fetchData();
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const fetchData = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    //updating the cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  return (
    <div className="flex justify-between items-center shadow-lg p-3 mb-2 ">
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
      <div className="flex flex-col relative">
        <div className="flex items-center ">
          <input
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            value={searchQuery}
            onChange={handleChange}
            className=" border border-gray-200 px-4 py-2  w-[600px]  rounded-l-full text-lg box-border "
            type="text"
            placeholder="Search"
          />
          <button
            className="p-2 bg-gray-200 border border-gray-200 text-lg
         text-black rounded-r-full cursor-pointer  flex items-center w-22"
            title="search"
            onClick={() => queryClickHandler()}
          >
            <img src={Search} alt="searchIcon" className="bg-cover w-[63%]" />
          </button>
        </div>

        {showSuggestions && (
          <ul className="w-[90%] absolute top-[48px] z-[1] bg-white  rounded-lg border border-gray-100 unorder">
            {suggestions.map((suggestion, index) => (
              <li
                className="flex gap-1 hover:bg-gray-100 p-2 text-lg items-center cursor-pointer"
                key={index}
                onClick={() => queryClickHandler()}
              >
                <img
                  src={SearchSmall}
                  alt="searchIcon"
                  className="bg-cover w-6 h-6"
                />
                {suggestion}
              </li>
            ))}
          </ul>
        )}
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
