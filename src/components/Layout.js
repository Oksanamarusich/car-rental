import styled from "styled-components";



import { AppBar } from "./AppBar/AppBar.jsx";

import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Loader } from "./Loader/Loader.js";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors.light};
`;

export const Layout = () => {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
