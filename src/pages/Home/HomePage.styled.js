import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const Main = styled.main``;

export const Title = styled.h1`
  margin-bottom: 30px;
  font-family: "Manrope", sans-serif;
  font-weight: 600;
  font-size: 35px;
  line-height: 1.5;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.blue};
`;

export const Text = styled.p`
  margin-bottom: 30px;
  font-family: "Manrope", sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.5;
  color: ${(props) => props.theme.colors.black};
`;
export const ContainerLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 200px;
  height: 48px;
  border-radius: 12px;
  padding: 8px 24px;
  background-color: ${(props) => props.theme.colors.blue};
`;
export const Link = styled(NavLink)`
  font-family: "Manrope", sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  color: ${(props) => props.theme.colors.light};
`;
