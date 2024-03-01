import Modal from "react-modal";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { useState } from "react";
import {
  Box,
  CardContainer,
  CarPhoto,
  Container,
  ContainerTitles,
  HeartButton,
  Span,
  Text,
  Title,
} from "./CardsList.styled";

import { Button } from "../Button.styled";


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
    overflow: "auto",
  },
  overlay: {
    backgroundColor: "rgba(18, 20, 23, 0.3)",
  },
};

export const CardsList = ({ car }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [toggleHeart, setToggleHeart] = useState(false);
  
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleFavoritesToggle = () => {
    console.log("click");
    //  dispatch(getCarId());
     setToggleHeart(!toggleHeart);
  };
  return (
    <CardContainer key={car.id}>
      <CarPhoto src={car.img} width={274} height={268} alt={car.make} />

      <ContainerTitles>
        <Title>
          {car.make} <Span>{car.model}</Span>, {car.year}
        </Title>
        <Title>{car.rentalPrice}</Title>
      </ContainerTitles>
      <Box>
        <Text>{car.address.split(",")[1]}</Text>
        <Text>{car.address.split(",")[2]}</Text>
        <Text>{car.rentalCompany}</Text>
        <Text>{car.make}</Text>{" "}
      </Box>
      <Container>
        <Text>{car.model}</Text>
        <Text>{car.id}</Text>
        <Text>{car.functionalities[0]}</Text>
      </Container>

      <HeartButton key={car.id} id={car.id} onClick={handleFavoritesToggle}>
        {toggleHeart ? (
          <IoHeartSharp color="#3470FF" />
        ) : (
          <IoHeartOutline size="18px" />
        )}
      </HeartButton>

      <Modal
        isOpen={modalIsOpen}
        //  onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Car card"
      >
        {/* <Card key={car.id} id={car.id} car={car} closeModal={closeModal} /> */}
      </Modal>
      <Button type="button" onClick={openModal}>
        Learn more
      </Button>
    </CardContainer>
  );
};
