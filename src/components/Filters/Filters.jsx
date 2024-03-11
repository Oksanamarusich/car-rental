import { useDispatch } from "react-redux";

import { changeFilter, resetFilter } from "../../redux/filters/filterSlice";

import {
  ButtonForm,
  FiltersContainer,
  StyledForm,
  StyledLabel,
  StyledOption,
  StyledSelect,
} from "./Filters.styled";
import { useState } from "react";
import { clearCars } from "../../redux/cars/carsSlice";

export const Filters = () => {
  const dispatch = useDispatch();
  const [selectedMake, setSelectedMake] = useState("");

  const makes = [
    "Buick",
    "Volvo",
    "HUMMER",
    "Subaru",
    "Mitsubishi",
    "Nissan",
    "Lincoln",
    "GMC",
    "Hyundai",
    "MINI",
    "Bentley",
    "Mercedes-Benz",
    "Aston Martin",
    "Pontiac",
    "Lamborghini",
    "Audi",
    "BMW",
    "Chevrolet",
    "Chrysler",
    "Kia",
    "Land",
  ];

  const handleSubmit = (evt) => {
    evt.preventDefault();

    dispatch(changeFilter(selectedMake));
  };

  const handleChange = (evt) => {
    setSelectedMake(evt.target.value);
  };

  const handleReset = () => {
    setSelectedMake("");
    dispatch(resetFilter());
    dispatch(clearCars());
  };

  return (
    <FiltersContainer>
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel>
          Car brands
          <StyledSelect value={selectedMake} onChange={handleChange}>
            <StyledOption value="">All</StyledOption>
            {makes.map((make) => (
              <StyledOption key={make} value={make}>
                {make}
              </StyledOption>
            ))}
          </StyledSelect>
        </StyledLabel>

        <ButtonForm type="submit">Search</ButtonForm>
        <ButtonForm type="reset" onClick={handleReset}>
          Reset
        </ButtonForm>
      </StyledForm>
    </FiltersContainer>
  );
};
