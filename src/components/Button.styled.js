import { styled } from "styled-components";

export const Button = styled.button`
  border: 0;
  border-radius: 12px;
  padding: 12px 99px;
  width: 100%;
  height: 44px;
  background-color: ${(props) => props.theme.colors.accent};
  font-family: "Manrope", sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.42857;
  color: ${(props) => props.theme.colors.light};
  white-space: nowrap;
  transition: color ${(props) => props.theme.animation.cubicBezier};
  &:hover {
    background-color: ${(props) => props.theme.colors.hover};
  }
  &:active{
    
  }
`;
