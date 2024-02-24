import { ListCars } from "../../components/ListCars/ListCars"
import { FiltersForm } from "../../components/Filters/FiltersForm"

import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCars } from "../../redux/cars/operations";
// import { selectCars, selectIsFavorites } from "../../redux/cars/selectors";

export default function Catalog() {
    // const cars = useSelector(selectCars);
    // console.log(cars)
    // const isFavorites = useSelector(selectIsFavorites);
    const dispatch = useDispatch();
    
    // const handleFavoritesClick = (id) => {
    //     // const carId = cars.map(car => car.id);
    //     // console.log(carId)
    //     // isFavorites: true;
    //     // addToFavorites(car);
    //     console.log(id)
    // }

     useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);
 
    return <>
    <FiltersForm/>
        
    </>
}