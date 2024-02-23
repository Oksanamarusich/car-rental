import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCars } from "../../redux/cars/operations";
import { selectCars } from "../../redux/cars/selectors";

export const ListCars = () => {
  const cars = useSelector(selectCars);
  console.log("SELECTOR", cars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  return (
    <>
      <ul>
        {cars.map((car) => (
          <li key={car.id}>
            <img src={car.img} width={274} height={268} alt="car" />
            <h3>
              {car.make} <span>{car.model}</span>, {car.year}
            </h3>
            <h3>{car.rentalPrice}</h3>
            <p>{car.address}</p>
            <p>{car.address}</p>
            <p>{car.rentalCompany}</p>

            <p>{car.type}</p>
            <p>{car.model}</p>
            <p>{car.id}</p>
            <p>{car.functionalities[0]}</p>
            <button type="button"> heart</button>
          </li>
        ))}
      </ul>
      <button type="button" onClick={() => dispatch(getCars())}>
        Learn more
      </button>
    </>
  );
};
