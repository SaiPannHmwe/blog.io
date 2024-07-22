import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

function Main() {
  return (
    <div>
      <NavBar />
      <section className="p-10 2xl:px-96">
        <Outlet />
      </section>
    </div>
  );
}

export default Main;
