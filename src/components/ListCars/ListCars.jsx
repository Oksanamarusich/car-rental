import { ContainerListCars } from "./ListCars.styled";

import { CardsList } from "../CardsList/CardsList";

export const ListCars = ({ cars }) => {
  return (
    <>
      <ContainerListCars>
        {cars.map((car, index) => (
          <CardsList key={index} car={car} />
        ))}
      </ContainerListCars>
    </>
  );
};
