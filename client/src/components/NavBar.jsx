import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../UserContext";

function NavBar() {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const getUserData = async () => {
    const response = await fetch(`${import.meta.env.VITE_URL}/profile`, {
      credentials: "include",
    });
    const userData = await response.json();
    setUserInfo(userData);
  };

  useEffect(() => {
    getUserData();
  }, []);

  const logout = async () => {
    const response = await fetch(`${import.meta.env.VITE_URL}/logout`, {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
  };

  return (
    <nav className="flex items-center justify-between p-10 2xl:px-96">
      <Link to={"/"} className="font-bold text-3xl uppercase">
        blog.io
      </Link>
      <div className="flex items-center gap-2">
        {userInfo ? (
          <>
            <Link
              to={"/post-create"}
              className="px-3 py-1 font-medium text-lg border-2 border-black bg-black text-white"
            >
              Create Post
            </Link>
            <p
              onClick={logout}
              className="px-3 py-1 font-medium text-lg border-2 border-black cursor-pointer"
            >
              Logout
            </p>
          </>
        ) : (
          <>
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
          </>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
