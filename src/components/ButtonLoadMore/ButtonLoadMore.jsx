import { useDispatch, useSelector } from "react-redux";
import { onNextPage } from "../../redux/cars/carsSlice";

import { getCars } from "../../redux/cars/operations";
import {  selectPage } from "../../redux/cars/selectors";
import { ButtonLoadMore } from "./ButtonLoadMore.styled";

export const ButtonloadMore = () => {
  
   const page = useSelector(selectPage);
   console.log(page)
  const dispatch = useDispatch();

  
  const handleLoadMore = () => {
   
    dispatch(onNextPage());
    // dispatch(getCars(page));

    // dispatch(getCars(page));
  };

  return (
    <ButtonLoadMore type="button" onClick={handleLoadMore}>
      Load more
    </ButtonLoadMore>
  );
};
