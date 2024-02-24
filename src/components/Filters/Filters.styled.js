import { styled } from "styled-components";
import { Field, Form } from "formik";

export const FiltersContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
margin-bottom:50px;
width: 859px;
height: 74px;
`;
export const StyledLabel = styled.label`
display:flex;
flex-direction:column;
margin-right:18px;
font-family: "Manrope", sans-serif;
font-weight: 500;
font-size: 14px;
line-height: 1.28571;
color:${props => props.theme.colors.brown};
gap:8px;
`;

export const StyledField = styled(Field)`
 outline: transparent;
  outline-offset: -1px;
border-radius: 14px;
padding: 14px 89px 14px 18px;
width: 224px;
height: 48px;
border:0;
background: ${props => props.theme.colors.input};
 &:active {
    border:0;
 }
`;

export const StyledFieldTo = styled(Field)`
 outline: transparent;
  outline-offset: -1px;
border-right: 1px solid rgba(138, 138, 137, 0.2);
border-radius: 14px 0 0 14px;
width: 160px;
height: 48px;


border:0;
background: ${props => props.theme.colors.input};
 &:active {
    border:0;
 }
`;

export const StyledFieldPrice = styled(Field)`
 outline: transparent;
  outline-offset: -1px;
border-radius: 14px;
padding: 14px 18px;
width: 125px;
height: 48px;

border:0;
background: ${props => props.theme.colors.input};
 &:active {
    border:0;
 }
`;

// export const StyledFieldFrom = styled(Field)`
// outline: transparent;
//   outline-offset: -1px;
//  border-radius: 0 14px 14px 0;
// width: 160px;
// height: 48px;
// border:0;
// background: ${props => props.theme.colors.input};
//  &:active {
//     border:0;
//  }
// `;

export const ButtonForm = styled.button`
margin-top:26px;
border-radius: 12px;
padding: 14px 44px;
width: 136px;
height: 48px;
background-color:${props => props.theme.colors.blue};
border:0;
font-family: "Manrope", sans-serif;
font-weight: 600;
font-size: 14px;
line-height: 1.42857;
color: ${props=>props.theme.colors.light};

`

export const StyledForm = styled(Form)`
display:flex;
`


