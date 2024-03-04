import { ListCars } from "../../components/ListCars/ListCars";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCars } from "../../redux/cars/operations";
import { ButtonloadMore } from "../../components/ButtonLoadMore/ButtonLoadMore";
import { Filters } from "../../components/Filters/Filters";
import { selectCars } from "../../redux/cars/selectors";
import { Section } from "../../components/Section.styled";

export default function Catalog() {
  const cars = useSelector(selectCars);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const handleLoadMore = () => {
    setPage((prevState) => prevState + 1);
  };

  useEffect(() => {
    dispatch(getCars(page));
  }, [dispatch, page]);

  return (
    <main>
      <Section>
        <h1 hidden>Catalog page</h1>
        <Filters />
      </Section>
      <Section>
        <ListCars />
        {cars.length >= 12 && (
          <ButtonloadMore handleLoadMore={handleLoadMore} />
        )}
      </Section>
    </main>
  );
}
