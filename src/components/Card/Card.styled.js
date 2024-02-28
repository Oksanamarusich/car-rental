import styled from "styled-components";

export const ContainerCard = styled.div`
  position: relative;
  padding: 40px;
  border-radius: 24px;
width: 541px;
height: 100%;
  background-color: ${(props) => props.theme.colors.light};
  
`;

export const ContainerText = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 4px;
  width: 272px;
  height: 18px;
  overflow:hidden;
`;

export const TextBox = styled.div`
display:flex;
gap:12px;
margin-bottom:14px;
height: 18px;
overflow:hidden;
`

export const DescriptionText = styled.p`
  margin-bottom: 24px;
  font-family: "Manrope", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.42857;
  color: ${(props) => props.theme.colors.black};
`;
export const TitleAcessories = styled.h3`
  margin-bottom: 8px;
  font-family: "Manrope", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.42857;
  color: ${(props) => props.theme.colors.black};
`;
export const TextContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px 12px;
  margin-bottom: 24px;
  width: 461px;
  height: 40px;
  
`;

export const RentalConditions = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: #363535;
`;

export const ContainerRentalConditions = styled.div`
  margin-bottom: 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 22px 15px;
`;
export const ButtonCard = styled.button`
  border-radius: 12px;
  padding: 12px 50px;
  width: 168px;
  height: 44px;
  border: 0;
  background-color: ${(props) => props.theme.colors.accent};
  font-family: "Manrope", sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.42857;
  color: ${(props) => props.theme.colors.light};
  white-space: nowrap;
  transition: background-color ${(props) => props.theme.animation.cubicBezier};
  &:hover {
    background-color: ${(props) => props.theme.colors.hover};
  }
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 10px;
  left: 500px;
  border: 0;
  background-color: transparent;
`;
