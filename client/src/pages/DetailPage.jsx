import { Link } from "react-router-dom";
import BackIcon from "../icons/BackIcon.jsx";

function DetailPage() {
  return (
    <section className="mb-2">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-bold text-3xl">1st post</h2>
          <p className="text-sm font-medium text-gray-500">
            sai | <span>2024-07-20</span>
          </p>
        </div>
        <Link to={"/"}>
          <BackIcon />
        </Link>
      </div>

      <img
        src="https://images.unsplash.com/photo-1721122427140-f3349ab7f25d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D"
        alt="1st post"
        className="h-64 w-full object-cover"
      />
      <p className="font-medium text-gray-700 my-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit Ducimus
        distinctio quod veniam sunt iste nobis officia molestias odio maiore.
      </p>
      <div className="flex items-center justify-end gap-2">
        <Link
          to={"/post-edit/1"}
          className="px-3 py-1 text-lg border-2 border-black bg-black text-white"
        >
          Edit
        </Link>
        <p className="px-3 py-1 text-lg border-2 border-red-600 bg-red-600 text-white">
          Delete
        </p>
      </div>
    </section>
  );
}

export default DetailPage;
