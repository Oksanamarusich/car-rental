import { styled } from "styled-components";

export const ContainerListCars = styled.ul`
  /* padding: 0 125px; */
  display: grid;
  /* grid-template-columns: repeat(4, 274px); */
  grid-template-columns: repeat(auto-fill, minmax(274px, 1fr));
  grid-row-gap: 50px;
  grid-column-gap: 29px;
`;

export const CardContainer = styled.li`
  position: relative;
  /* width:274px;
height:426px; */
`;

export const CarPhoto = styled.img`
  border-radius: 14px;
  margin-bottom: 14px;
`;

export const Title = styled.h3`
  font-family: "Manrope", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${(props) => props.theme.colors.black};
`;
export const Span = styled.span`
  font-family: "Manrope", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${(props) => props.theme.colors.accent};
`;

export const ContainerTitles = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px 12px;
  margin-bottom: 28px;
  width: 274px;
  height: 40px;
`;
export const Text = styled.p`
  position: relative;
  font-family: "Manrope", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: ${(props) => props.theme.colors.gray};

  /* &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 110%;
    transform: translateX(-50%) rotate(90deg);
    width: 16px;
    height: 1px;
    background-color: ${(props) => props.theme.colors.before};
  } */
`;

export const HeartButton = styled.button`
  position: absolute;
  padding: 5px;
  top: 14px;
  left: 230px;
  width: 30px;
  height: 30px;
  border: 0;
  background-color: transparent;
  color: ${(props) => props.theme.colors.light};
`;
