import { ButtonLoadMore } from "./ButtonLoadMore.styled";

export const ButtonloadMore = ({ handleLoadMore }) => {
  return (
    <ButtonLoadMore type="button" onClick={handleLoadMore}>
      Load more
    </ButtonLoadMore>
  );
};
