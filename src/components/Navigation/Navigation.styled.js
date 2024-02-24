import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
margin-right:50px;
font-family: "Manrope", sans-serif;
font-weight: 500;
font-size: 18px;
line-height: 1.5;
color: ${props => props.theme.colors.black};
cursor:pointer;
transition:${props=>props.theme.animation};

&.active{
    color:${props => props.theme.colors.blue};
     text-decoration:underline;
}
`