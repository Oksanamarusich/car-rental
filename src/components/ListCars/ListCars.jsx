import Modal from "react-modal";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";

import { Card } from "../Card/Card";

import {  useSelector } from "react-redux";
import { useState } from "react";
import {  selectVisibleCars } from "../../redux/cars/selectors";
import {
  CarPhoto,
  Container,
  ContainerListCars,
  CardContainer,
  ContainerTitles,
  HeartButton,
  Span,
  Text,
  Title,
} from "./ListCars.styled";
import { Button } from "../Button.styled";
import { ButtonloadMore } from "../ButtonLoadMore/ButtonLoadMore";


Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0",
    borderRadius: "24px",
  },
  overlay: {
    backgroundColor: "rgba(18, 20, 23, 0.3)",
  },
};

export const ListCars = () => {
  const cars = useSelector(selectVisibleCars);
  console.log(cars);
  // const dispatch = useDispatch();

  const [modalIsOpen, setIsOpen] = useState(false);
  const [toggleHeart, setToggleHeart] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleFavoritesToggle = ({id}) => {
     console.log(id)
    // dispatch(toggleFavorite({ carId }));
    setToggleHeart(!toggleHeart);
  };

  return (
    <>
      <ContainerListCars>
        {cars.map((car) => (
          <CardContainer key={car.id}>
            <CarPhoto src={car.img} width={274} height={268} alt="car" />

            <ContainerTitles>
              <Title>
                {car.make} <Span>{car.model}</Span>, {car.year}
              </Title>
              <Title>{car.rentalPrice}</Title>
            </ContainerTitles>
            <Container>
              <Text>{car.address.split(",")[2]}</Text>
              <Text>{car.address.split(",")[1]}</Text>
              <Text>{car.rentalCompany}</Text>

              <Text>{car.type}</Text>
              <Text>{car.model}</Text>
              <Text>{car.id}</Text>
              <Text>{car.functionalities[0]}</Text>
            </Container>

            <HeartButton key={car.id} id={car.id}onClick={handleFavoritesToggle}>
              {toggleHeart ? (
                <IoHeartSharp color="#3470FF" />
              ) : (
                <IoHeartOutline size="18px"  />
              )}
            </HeartButton>

            <Modal
              isOpen={modalIsOpen}
              //  onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Car card"
            >
              <Card key={car.id} id={car.id} car={car} closeModal={closeModal} />
            </Modal>
            <Button type="button" onClick={openModal}>
              Learn more
            </Button>
          </CardContainer>
        ))}
        <ButtonloadMore />
      </ContainerListCars>
    </>
  );
};
