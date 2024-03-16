import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Layout() {
  return (
    <>
      <header className="bg-gray-200 dark:bg-gray-700">
        <Navbar />
      </header>
      <div className="bg-gray-200 dark:bg-gray-700">
        <Outlet />
      </div>
    </>
  );
}
