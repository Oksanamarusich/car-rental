import { styled } from "styled-components";

export const Text = styled.p`
  margin-bottom: 30px;
  font-family: "Manrope", sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.5;
  color: ${(props) => props.theme.colors.black};
`;

export const SpanFavorites = styled.span`
  font-family: "Manrope", sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.5;
  color: ${(props) => props.theme.colors.accent};
  cursor: pointer;

  text-decoration: underline;
`;
