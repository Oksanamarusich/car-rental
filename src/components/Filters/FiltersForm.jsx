
import { useSelector, useDispatch } from "react-redux";

import { selectCars, selectFilter } from "../../redux/cars/selectors";
import { changeFilter } from "../../redux/filters/filterSlice";

import {
  ButtonForm,
  FiltersContainer,
  StyledForm,
  StyledLabel,
  StyledOption,
  StyledSelect,
} from "./Filters.styled";

export const FiltersForm = () => {
  const cars = useSelector(selectCars);
  const carBrand = useSelector(selectFilter);
  const dispatch = useDispatch();
  // const filteredCars = cars.filter(car => car.make === carBrand);
  // console.log(filteredCars)

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(carBrand);
    dispatch(changeFilter(carBrand));
  };

  const handleChange = (evt) => {
    console.log(evt.target.value);
    const selectedCarBrand = evt.target.value;
     dispatch(changeFilter(selectedCarBrand));
  };

  return (
    <FiltersContainer>
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel>
          Car brands
          <StyledSelect value={carBrand} onChange={handleChange}>
            <StyledOption value="">Select car</StyledOption>
            {cars.map((car, index) => (
              <StyledOption key={index} value={car.make}>
                {car.make}
              </StyledOption>
            ))}
          </StyledSelect>
        </StyledLabel>

        <ButtonForm type="submit">Search</ButtonForm>
      </StyledForm>
    </FiltersContainer>
  )
}
  