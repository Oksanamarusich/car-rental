import { ListCars } from "../../components/ListCars/ListCars"
import { FiltersForm } from "../../components/Filters/FiltersForm"

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCars } from "../../redux/cars/operations";

export default function Catalog() {
    
 const dispatch = useDispatch();

     useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);
 
    return <>
    <FiltersForm/>
    <ListCars/>
    </>
}