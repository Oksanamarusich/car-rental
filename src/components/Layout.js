import styled from "styled-components";

import { AppBar } from "./AppBar/AppBar.jsx";

import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Loader } from "./Loader/Loader.js";

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
