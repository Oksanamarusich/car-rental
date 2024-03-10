import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ListCars } from "../../components/ListCars/ListCars";

import { Section } from "../../components/Section.styled";
import { selectFavorites } from "../../redux/favorites/selectorsFavorites";
import { SpanFavorites, Text } from "./Favorites.styled";

export default function Favorites() {
  const favorites = useSelector(selectFavorites);

  return (
    <main>
      <Section>
        <h1 hidden>Favorites page</h1>
        {favorites.length ? (
          <ListCars cars={favorites} />
        ) : (
          <div>
            <Text>There are no favorite cars here yet.</Text>
            <Text>
              To add a car, go to the{" "}
              <Link to="/catalog">
                <SpanFavorites>Catalog</SpanFavorites>
              </Link>{" "}
              .
            </Text>
          </div>
        )}
      </Section>
    </main>
  );
}
