import { Navigation } from "../Navigation/Navigation";
import { ContainerHeader } from "./AppBar.styled";

export const AppBar = () => {
  return (
    <header>
      <ContainerHeader>
        <Navigation />
      </ContainerHeader>
    </header>
  );
};
