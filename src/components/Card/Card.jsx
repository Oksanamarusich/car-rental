import { ContainerCard } from "./Card.styled";

// import { useSelector } from "react-redux";
// import { selectCars } from "../../redux/cars/selectors";


export const Card = ({ car }, id) => {
    console.log(car)
    const mileage = new Intl.NumberFormat('en-US').format(car.mileage);
    

    // const rentalConditions = car.rentalConditions.split('.');
    // console.log(rentalConditions)

    
  
  return (
    <ContainerCard key={id}>
      <img src={car.img} width={461} height={248} alt="car" />
      <h3>
        {car.make} <span>{car.model}</span>, {car.year}
      </h3>
      <p>{car.adress}</p>
      <p>{car.adress}</p>
      <p>Id:{car.id}</p>
      <p>Year:{car.year}</p>
      <p>Type:{car.type}</p>
      <p>Fuel Consumption:{car.fuelConsumption}</p>
      <p>Engine Size:{car.engineSize}</p>
      <p>{car.description}</p>
      <h3>Accessories and functionalities: </h3>
      <p>{car.accessories[0]}</p>
      <p>{car.accessories[1]}</p>
      <p>{car.accessories[2]}</p>
      <p>{car.functionalities[0]}</p>
      <p>{car.functionalities[1]}</p>
      <p>{car.functionalities[2]}</p>
      <h3>Rental Conditions: </h3>
      <p>{car.rentalConditions.slice(0, 16)}</p>
      <p>{car.rentalConditions.slice(16, 39)}</p>
      <p>{car.rentalConditions.slice(39, 78)} </p>
      <p>Mileage: {mileage}</p>
      <p>Price: {car.rentalPrice}</p>
      <button type="button">Rental car</button>
    </ContainerCard>
  );
};

// export const Card = () => {
//   const cars = useSelector(selectCars);

//     return (<>
//      {cars.map((car) => (
//         <ContainerCard key={car.id}>
//           <img src={car.img} width={461} height={248} alt="car" />
//           <h3>
//             {car.make} <span>{car.model}</span>, {car.year}
//           </h3>
//           <p>{car.adress}</p>
//           <p>{car.adress}</p>
//           <p>Id:{car.id}</p>
//           <p>Year:{car.year}</p>
//           <p>Type:{car.type}</p>
//           <p>Fuel Consumption:{car.fuelConsumption}</p>
//           <p>Engine Size:{car.engineSize}</p>
//           <p>{car.description}</p>
//           <h3>Accessories and functionalities: </h3>
//           <p>{car.accessories[0]}</p>
//           <p>{car.accessories[1]}</p>
//           <p>{car.accessories[2]}</p>
//           <p>{car.functionalities[0]}</p>
//           <p>{car.functionalities[1]}</p>
//           <p>{car.functionalities[2]}</p>
//           <h3>Rental Conditions: </h3>
//           <p>{car.rentalConditions}</p>
//           <p>{car.rentalConditions}</p>
//           <p>{car.rentalConditions} </p>
//           <p>Mileage: {car.mileage}</p>
//               <p>Price: {car.rentalPrice}</p>
//                <button type="button">Rental car</button>
//         </ContainerCard>
//      ))}
//     </>

//   );
// };
