import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    dispatch(closeMenu());

    console.log(searchParams.get("v"));
  }, [dispatch, searchParams]);
  return (
    <div className="w-[100vw] flex flex-col ">
      <div className="px-5 flex gap-3  m-4">
        <iframe
          className="  rounded-md  "
          width="1200"
          height="700"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <LiveChat />
      </div>

      <CommentContainer />
    </div>
  );
};

export default WatchPage;
