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
import { ModalCard } from "../Modal/Modal";
import { Card } from "../Card/Card";
import { addFavorites } from "../../redux/favorites/favoritesSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorites } from "../../redux/favorites/selectorsFavorites";

export const CardsList = ({ car }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [toggleHeart, setToggleHeart] = useState(false);

  const favorites = useSelector(selectFavorites);

  const isFavorites = favorites.some((favorite) => favorite.id === car.id);

  const dispatch = useDispatch();

  function openModal() {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    setIsOpen(false);
    document.body.style.overflow = "";
  }

  const handleFavoritesToggle = () => {
    setToggleHeart(!toggleHeart);
    dispatch(addFavorites(car));
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
        {isFavorites ? (
          <IoHeartSharp color="#3470FF" />
        ) : (
          <IoHeartOutline size="18px" />
        )}
      </HeartButton>

      <ModalCard
        onClose={closeModal}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <Card key={car.id} id={car.id} car={car} />
      </ModalCard>
      <Button type="button" onClick={openModal}>
        Learn more
      </Button>
    </CardContainer>
  );
};
