import styled from "styled-components";



import { AppBar } from "./AppBar/AppBar.jsx";

import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Loader } from "./Loader/Loader.js";

export const Container = styled.div`
 
  margin: 0 auto;
   width: 100%;
   height:100%;
  background-color: ${(props) => props.theme.colors.light};
`;

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
    </>
  );
};
