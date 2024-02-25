import { useDispatch, useSelector } from "react-redux";
import { getCars } from "../../redux/cars/operations";
import {  selectPage } from "../../redux/cars/selectors";
import { ButtonLoadMore } from "./ButtonLoadMore.styled";

export const ButtonloadMore = () => {
  const page = useSelector(selectPage);
  console.log(page);
  const dispatch = useDispatch();
  
    const handleLoadMore = () => {
    dispatch(getCars());
  };

  return (
    <ButtonLoadMore type="button" onClick={handleLoadMore}>
      Load more
    </ButtonLoadMore>
  );
};
