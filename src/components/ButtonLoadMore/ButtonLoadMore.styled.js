import { styled } from "styled-components";

export const ButtonLoadMore = styled.button`
  margin: 50px 680px 150px;
  width:79px;
  border: 0;
  background-color: transparent;
  font-family: "Manrope", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: ${(props) => props.theme.colors.accent};
  white-space: nowrap;
  transition: color ${props=>props.theme.animation.cubicBezier};
  &:hover {
color:${props=>props.theme.colors.hover};
  }
`;
