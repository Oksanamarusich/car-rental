import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/favorites/selectorsFavorites";
import { CardsList } from "../CardsList/CardsList";
import { ContainerListCars } from "../ListCars/ListCars.styled";

export const Listfavorites = () => {
  const favorites = useSelector(selectFavorites);
  return (
    <>
      <ContainerListCars>
        {favorites.map((favorite) => (
          <CardsList key={favorite.id} car={favorite} />
        ))}
      </ContainerListCars>
    </>
  );
};
