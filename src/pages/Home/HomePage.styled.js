import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import background from "../../img/car-5476918_1280.jpg";

export const SectionHero = styled.section`
 margin-bottom: 54px;
  padding: 100px 0;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 90vh;
`;



export const Title = styled.h1`
  display: block;
  margin-right: auto;
  margin-left: auto;
  text-align: center;

  font-family: "Manrope", sans-serif;
  font-weight: 600;
  font-size: 50px;
  line-height: 1.5;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.light};
`;


export const Text = styled.p`
  margin-bottom: 30px;
  font-family: "Manrope", sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.5;
  color: ${(props) => props.theme.colors.black};
`;
export const ContainerLink = styled.button`
  margin-bottom: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 200px;
  height: 48px;
  border-radius: 12px;
  border: 0;
  padding: 8px 24px;
  background-color: ${(props) => props.theme.colors.accent};
  &:hover {
    background-color: ${(props) => props.theme.colors.hover};
  }
  color: ${(props) => props.theme.colors.light};
`;
export const Link = styled(NavLink)`
  font-family: "Manrope", sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
`;
