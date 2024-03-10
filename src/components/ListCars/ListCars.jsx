import { useSelector } from "react-redux";

import { selectVisibleCars } from "../../redux/cars/selectors";
import { ContainerListCars } from "./ListCars.styled";

import { CardsList } from "../CardsList/CardsList";

export const ListCars = ({cars}) => {
  // const cars = useSelector(selectVisibleCars);

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
