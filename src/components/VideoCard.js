import { Link } from "react-router-dom";

const VideoCard = ({ info }) => {
  console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;
  const { viewCount } = statistics;
  const publishedDate = new Date(publishedAt);
  const formattedViewCount = Number(viewCount).toLocaleString();

  return (
    <Link to="watch">
      <div className="m-2 p-4 w-72 rounded-md hover hover:shadow-lg ">
        <img src={thumbnails.medium.url} alt="" className="bg-cover " />
        <span className="text-lg font-medium">{channelTitle}</span>
        <div className="flex gap-2 items-center">
          <span>{formattedViewCount}views</span>
          <span>{publishedDate.getDay()}days ago </span>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;