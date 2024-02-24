import { Formik} from "formik";
import { useSelector, useDispatch } from "react-redux";
// import { getCars } from "../../redux/cars/operations";
import { selectCars } from "../../redux/cars/selectors";
import { changeFilter } from "../../redux/filterSlice";
import { ListCars } from "../ListCars/ListCars";
import { ButtonForm, FiltersContainer, StyledField, StyledFieldFrom, StyledFieldPrice, StyledForm, StyledLabel, StyledOption } from "./Filters.styled";

export const FiltersForm = () => {
  const cars = useSelector(selectCars);
  const dispatch = useDispatch();
  const make = cars.map((car) => car.make);
  console.log(make);

  return (
    <>
    <FiltersContainer>
      <Formik
        initialValues={{
          carBrand: make,
        }}
        onSubmit={(values) => dispatch(changeFilter(values.carBrand, cars))}
        // console.log(values.carBrand)}
        // onSubmit={dispatch(changeFilter(make))}
      >
        <StyledForm>
          <StyledLabel>
            Car brand
            <StyledField as="select" name="carBrand" >
              <option>Enter the text</option>
              {make.map((make, index) => (
                <option key={index} value={make}>
                  {make}
                </option>
              ))}
            </StyledField>
          </StyledLabel>

          <StyledLabel>
            Price/1h
            <StyledFieldPrice as="select" name="price" placeholder="To $" type="number">
              <option value="">To $</option>
              <option value="10">10</option>
            </StyledFieldPrice>
          </StyledLabel>

          {/* <StyledLabel>
            Car mileage/km
            <StyledFieldFrom name="carMileageFrom" placeholder="From" />
            <StyledField name="carMileageTo" placeholder="To" />
          </StyledLabel> */}

          <ButtonForm type="submit">Search</ButtonForm>
        </StyledForm>
      </Formik>
      
      </FiltersContainer>
      <ListCars />
    </>
    
  );
};
