import { Formik, Form, Field } from "formik";
import { useSelector } from "react-redux";
import { selectCars } from "../../redux/cars/selectors";

export const FiltersForm = () => {
  const cars = useSelector(selectCars);

  const make = cars.map((car) => car.make);

//   const handleSubmit = (event) => {
//       event.preventDefault();
      
//     };
    
  return (
    <>
      <Formik
        initialValues={{
          carMake: make,
          //   price: "",
          //   carMileage: "",
        }}
        onSubmit={(values) => console.log(values.carMake)}
      >
        <Form>
          <label>
            Car brand
            <Field as="select" name="carMake" placeholder="Enter the text">
              {make.map((make, index) => (
                <option key={index} value={make}>
                  {make}
                </option>
              ))}
            </Field>
          </label>

          {/* <label>
            Price/1h
            <Field as="select" name="price" placeholder="To $" type="number">
              <option value="10">10</option>
              <option value="20">20</option>
            </Field>
          </label>

          <label>
            Car mileage/km
            <Field name="carMileageFrom" placeholder="From" />
            <Field name="carMileageTo" placeholder="To" />
          </label> */}

          <button type="submit">Search</button>
        </Form>
      </Formik>
    </>
  );
};
