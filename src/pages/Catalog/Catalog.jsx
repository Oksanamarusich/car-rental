import { ListCars } from "../../components/ListCars/ListCars";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCars } from "../../redux/cars/operations";
import { ButtonloadMore } from "../../components/ButtonLoadMore/ButtonLoadMore";
import { FiltersForm } from "../../components/Filters/FiltersForm";
import { changeFilter } from "../../redux/filters/filterSlice";
import { selectFilter, selectVisibleCars } from "../../redux/cars/selectors";

export default function Catalog() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  return (
    <>
      <FiltersForm />
      <ListCars />
      <ButtonloadMore />
    </>
  );
}
