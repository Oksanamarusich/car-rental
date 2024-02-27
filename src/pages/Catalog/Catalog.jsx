import { ListCars } from "../../components/ListCars/ListCars";


import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCars } from "../../redux/cars/operations";
import { ButtonloadMore } from "../../components/ButtonLoadMore/ButtonLoadMore";

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
      <ButtonloadMore />
    </>
  );
}
