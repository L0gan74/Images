import React from "react";
import { Link, Outlet } from "react-router-dom";
import style from "./layout.module.css";

const Layout = () => {
  return (
    <>
      <header className={style.header}>
        <nav className={style.nav}>
          <Link to="/">
            Images
          </Link>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Layout;
