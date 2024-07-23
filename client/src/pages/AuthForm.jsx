import React, { useContext, useState } from "react";
import {
  Navigate,
  redirect,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { UserContext } from "../../UserContext";

function AuthForm() {
  const navigate = useNavigate();

  const { setUserInfo } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [searchParam] = useSearchParams();
  const isLoginMode = searchParam.get("mode") === "login";

  const login = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_URL}/login`, {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (response.ok) {
        navigate("/");
        const userData = await response.json();
        setUserInfo(userData);
      } else {
        // Try to parse the error response as JSON
        let errorData;
        errorData = JSON.parse(response);
        alert(`Register Failed: ${errorData.message || response.statusText}`);
      }
    } catch (error) {
      // Handle network or other errors
      console.error("Error:", error);
      alert("An error occurred during registration. Please try again.");
    }
  };

  const register = async () => {
    const response = await fetch(`${import.meta.env.VITE_URL}/register`, {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      navigate("/auth?mode=login");
    } else {
      alert("Register Failed");
    }
  };

  const formActionHandler = (e) => {
    e.preventDefault();
    if (isLoginMode) {
      login();
    } else {
      register();
    }
  };

  return (
    <section className="w-1/2 mx-auto">
      <h1 className="text-center font-bold text-2xl mb-2">
        {isLoginMode ? "Login" : "Register"} Form
      </h1>
      <form method="POST" onSubmit={formActionHandler}>
        <div className="mb-4">
          <label htmlFor="username" className="font-medium">
            Enter username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            required
            className="block border border-black text-lg p-2 w-full"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="font-medium">
            Enter password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            required
            className="block border border-black text-lg p-2 w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="text-white font-medium text-lg text-center py-4 w-full bg-black">
          {isLoginMode ? "Login" : "Register"} Account
        </button>
      </form>
    </section>
  );
}

export default AuthForm;
