import { ListCars } from "../../components/ListCars/ListCars";


import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCars } from "../../redux/cars/operations";

export default function Catalog() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCars());
    getCars();
  }, [dispatch]);

  return (
    <>
      {/* <FiltersForm /> */}
      <ListCars />
    </>
  );
}
