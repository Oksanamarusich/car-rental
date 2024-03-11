import {
  CarPhoto,
  ContainerTitles,
  Span,
  Text,
  Title,
} from "../CardsList/CardsList.styled";
import {
  ButtonCard,
  ContainerCard,
  ContainerRentalConditions,
  ContainerText,
  DescriptionText,
  RentalConditions,
  TextBox,
  TextContainer,
  TitleAcessories,
} from "./Card.styled";

export const Card = ({ car, id }) => {
  const mileage = new Intl.NumberFormat("en-US").format(car.mileage);

  const handleCall = () => {
    window.location.href = "tel:+380730000000";
  };

  return (
    <ContainerCard key={id}>
      <CarPhoto src={car.img} width={461} height={248} alt="car" />
      <ContainerTitles>
        <Title>
          {car.make} <Span>{car.model}</Span>, {car.year}
        </Title>
      </ContainerTitles>

      <ContainerText>
        <Text>{car.address.split(",")[1]}</Text>
        <Text>{car.address.split(",")[0]}</Text>
        <Text>Id:{car.id}</Text>
        <Text>Year:{car.year}</Text>
        <Text>Type:{car.type}</Text>
      </ContainerText>
      <TextBox>
        <Text>Fuel Consumption:{car.fuelConsumption}</Text>
        <Text>Engine Size:{car.engineSize}</Text>
      </TextBox>

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

      <ButtonCard type="button" onClick={handleCall}>
        Rental car
      </ButtonCard>
    </ContainerCard>
  );
};

