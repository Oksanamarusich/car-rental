import { styled } from "styled-components";

export const CardContainer = styled.li`
  position: relative;
 width: 274px;
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
  margin-bottom: 28px;
  gap: 12px;
  width: 251px;
  height: 18px;
  overflow:hidden;
`;
export const Text = styled.p`
  position: relative;
  font-family: "Manrope", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: ${(props) => props.theme.colors.gray};
  white-space:nowrap:

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
export const Box = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 4px;
  width: 272px;
  height: 18px;
  overflow:hidden;
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
