const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex  items-center bg-slate-300 p-2 rounded-md mb-2">
      <img
        className="cursor-pointer w-8 bg-cover"
        src="https://th.bing.com/th/id/R.6b0022312d41080436c52da571d5c697?rik=Ql6UUNosrWAY0w&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpng-user-icon-icons-logos-emojis-users-2400.png&ehk=8agkVrs8bo9zafVF9Qk4%2bFqv5IwaEZrb8DwX%2ftfJtNc%3d&risl=&pid=ImgRaw&r=0"
        alt="user logo"
      />
      <span className="text-lg font-medium ml-1">{name}</span>
      <span className="ml-4">{message}</span>
    </div>
  );
};

export default ChatMessage;
