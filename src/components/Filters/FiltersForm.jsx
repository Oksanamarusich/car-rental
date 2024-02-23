import { Formik, Form, Field } from 'formik';

export const FiltersForm = () => {
    return <>
     <Formik
            initialValues={{
                carBrand: '',
                price: '',
                carMileage: '',
            }}
            onSubmit={values =>
            console.log(values)}
        >
            <Form>
                <label >Car brand
                    <Field as="select" name="carBrand" placeholder="Enter the text" >
                        <option value="red">Red</option>
                        <option value="red">Red</option>
             
                    </Field>
        </label>
        

                <label >Price/1h
                    <Field as="select" name="price" placeholder="To $" type="number" >
                        <option value="10">10</option>
                        <option value="20">20</option>
                     </Field>
        </label>
       

                <label >Car mileage/km
                     <Field
          
          name="carMileageFrom"
          placeholder="From"
          
                />
                <Field
          
          name="carMileageTo"
          placeholder="To"
          
        />
        </label>
       
        <button type="submit">Search</button>
      </Form>
    </Formik>
    </>
}