import { useSelector } from "react-redux";

import { selectCars } from "../../redux/cars/selectors";
import { ContainerListCars } from "./ListCars.styled";

import { CardsList } from "../CardsList/CardsList";

export const ListCars = () => {
  const cars = useSelector(selectCars);
  console.log(cars);

  return (
    <>
     
      <ContainerListCars>
         {cars.map((car) => (
           <CardsList key={car.id} car={car} />
           ))}
        </ContainerListCars>
      
    </>
  );
};
