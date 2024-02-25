import { CarPhoto, Span, Text, Title } from "../ListCars/ListCars.styled";
import {
  ButtonCard,
  ButtonClose,
  ContainerCard,
  ContainerRentalConditions,
  ContainerText,
  DescriptionText,
  RentalConditions,
  TextContainer,
  TitleAcessories,
} from "./Card.styled";
import { IoMdClose } from "react-icons/io";

export const Card = ({ car ,id, closeModal}) => {
  const mileage = new Intl.NumberFormat("en-US").format(car.mileage);

  const handleCall = () => {
    window.location.href = 'tel:+380730000000';
  }

  return (
    <ContainerCard key={id}>
      <CarPhoto src={car.img} width={461} height={248} alt="car" />
      <Title>
        {car.make} <Span>{car.model}</Span>, {car.year}
      </Title>
      <ContainerText>
        <Text>{car.adress}</Text>
        <Text>{car.adress}</Text>
        <Text>Id:{car.id}</Text>
        <Text>Year:{car.year}</Text>
        <Text>Type:{car.type}</Text>
        <Text>Fuel Consumption:{car.fuelConsumption}</Text>
        <Text>Engine Size:{car.engineSize}</Text>
      </ContainerText>

      <DescriptionText>{car.description}</DescriptionText>
      <TitleAcessories>Accessories and functionalities: </TitleAcessories>
      <TextContainer>
        <Text>{car.accessories[0]}</Text>
        <Text>{car.accessories[1]}</Text>
        <Text>{car.accessories[2]}</Text>
        <Text>{car.functionalities[0]}</Text>
        <Text>{car.functionalities[1]}</Text>
        <Text>{car.functionalities[2]}</Text>
      </TextContainer>

      <TitleAcessories>Rental Conditions: </TitleAcessories>
      <ContainerRentalConditions>
        <RentalConditions>{car.rentalConditions.slice(0, 16)}</RentalConditions>
        <RentalConditions>
          {car.rentalConditions.slice(16, 39)}
        </RentalConditions>
        <RentalConditions>
          {car.rentalConditions.slice(39, 78)}{" "}
        </RentalConditions>
        <RentalConditions>Mileage: {mileage}</RentalConditions>
        <RentalConditions>Price: {car.rentalPrice}</RentalConditions>
      </ContainerRentalConditions>

      <ButtonCard type="button" onClick={handleCall}>Rental car</ButtonCard>
      <ButtonClose type="button" onClick={closeModal}>
        <IoMdClose />
      </ButtonClose>
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
