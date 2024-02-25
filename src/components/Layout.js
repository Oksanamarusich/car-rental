import styled from "styled-components";

import {AppBar} from "./AppBar/AppBar.jsx"

import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
padding:0 125px;
  /* padding: 0 128px 150px 128px; */
  background-color: ${(props) => props.theme.colors.light};
`;

export const Layout = () => {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={"LOADING PAGE..."}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
