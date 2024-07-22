import { Link } from "react-router-dom";

function PostItem({ post }) {
  const { title, username, time, image, description } = post;

  return (
    <div className="block mb-5">
      <Link to={`/post/${title}`}>
        <h2 className="font-bold text-3xl">{title.toUpperCase()}</h2>
        <p className="text-sm font-medium text-gray-500">
          {username} | <span>{time}</span>
        </p>
        <img src={image} alt={title} className="h-64 w-full object-cover" />
        <p className="font-normal text-gray-600 my-3">{description}</p>
      </Link>
      <Link
        to={`/post/${title}`}
        className="bg-black text-white px-4 py-2 text-lg font-medium"
      >
        Read Full Article
      </Link>
    </div>
  );
}

export default PostItem;
