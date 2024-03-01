import { useDispatch } from "react-redux";

import { changeFilter } from "../../redux/filters/filterSlice";

import {
  ButtonForm,
  FiltersContainer,
  StyledForm,
  StyledLabel,
  StyledOption,
  StyledSelect,
} from "./Filters.styled";
import { useState } from "react";

export const Filters = () => {
  const dispatch = useDispatch();
  const [selectedMake, setSelectedMake] = useState("All");

  const makes = [
    "All",
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

  return (
    <FiltersContainer>
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel>
          Car brands
          <StyledSelect value={selectedMake} onChange={handleChange}>
            <StyledOption value=""></StyledOption>
            {makes.map((make) => (
              <StyledOption key={make} value={make}>
                {make}
              </StyledOption>
            ))}
          </StyledSelect>
        </StyledLabel>

        <ButtonForm type="submit">Search</ButtonForm>
      </StyledForm>
    </FiltersContainer>
  );
};
