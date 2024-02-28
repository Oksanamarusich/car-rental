import { styled } from "styled-components";
import { Field } from "formik";

export const FiltersContainer = styled.div`
  padding: 0 125px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  width: 100%;
  height: 74px;
`;
export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-right: 18px;
  font-family: "Manrope", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  color: ${(props) => props.theme.colors.brown};
  gap: 8px;
`;

export const StyledSelect = styled.select`
  outline: transparent;
  outline-offset: -1px;
  border-radius: 14px;
  padding:14px 18px; 
  width: 224px;
  height: 48px;
  border: 0;
  background: ${(props) => props.theme.colors.input};
  font-family: "Manrope", sans-serif;
font-weight: 500;
font-size: 18px;
line-height: 1.11111;
color: ${props=>props.theme.colors.black};
  &:active {
    border: 0;
  }
`;
export const StyledOption = styled.option`
border-radius: 14px;
  font-family: "Manrope", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  color: rgba(18, 20, 23, 0.2);
  overflow:scroll;
`;

export const StyledFieldTo = styled(Field)`
  outline: transparent;
  outline-offset: -1px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  border-radius: 14px 0 0 14px;
  width: 160px;
  height: 48px;

  border: 0;
  background: ${(props) => props.theme.colors.input};
  &:active {
    border: 0;
  }
`;

export const StyledFieldPrice = styled(Field)`
  outline: transparent;
  outline-offset: -1px;
  border-radius: 14px;
  padding: 14px 18px;
  width: 125px;
  height: 48px;

  border: 0;
  background: ${(props) => props.theme.colors.input};
  &:active {
    border: 0;
  }
`;


export const ButtonForm = styled.button`
  margin-top: 26px;
  border-radius: 12px;
  padding: 14px 44px;
  width: 136px;
  height: 48px;
  background-color: ${(props) => props.theme.colors.accent};
  border: 0;
  font-family: "Manrope", sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.42857;
  color: ${(props) => props.theme.colors.light};
  transition:background-color ${props=>props.theme.animation.cubicBezier};
  &:hover {
background-color:${props => props.theme.colors.hover};
  };
`;

export const StyledForm = styled.form`
  display: flex;
`;
