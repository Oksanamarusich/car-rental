import styled from 'styled-components';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding:50px 128px;
  /* background-color:  ${props => props.theme.colors.dark}; */
`;

export const Layout = () => {
    return <Container>
        <AppBar />
        <Suspense fallback={'LOADING PAGE...'}>
        <Outlet />
     </Suspense>

    </Container>
}