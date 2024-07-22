import { useEffect } from "react";
import { Link } from "react-router-dom";

function NavBar() {

  // const getUserData = async () => {
  //   const response = await fetch(`${import.meta.env.VITE_URL}/profile`, {
  //     credentials: "include",
  //   });

  //   const userData = await response.json();
  //   console.log(userData);
  // };

  // useEffect(() => {
  //   getUserData();
  // }, []);

  return (
    <nav className="flex items-center justify-between p-10 2xl:px-96">
      <Link to={"/"} className="font-bold text-3xl uppercase">
        blog.io
      </Link>
      <div className="flex items-center gap-2">
        <Link
          to={"/auth?mode=login"}
          className="px-3 py-1 font-medium text-lg border-2 border-black"
        >
          login
        </Link>
        <Link
          to={"/auth?mode=register"}
          className="px-3 py-1 font-medium text-lg border-2 border-black bg-black text-white"
        >
          register
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
