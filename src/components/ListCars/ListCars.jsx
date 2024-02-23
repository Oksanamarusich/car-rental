import Modal from "react-modal";

import { Card } from "../Card/Card";

import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import { selectCars } from "../../redux/cars/selectors";

import { Link } from "react-router-dom";

Modal.setAppElement("#root");
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    backgroundColor: "rgba (18, 20, 23, 0.5)",
  },
};

export const ListCars = () => {
  const cars = useSelector(selectCars);

  const dispatch = useDispatch();

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <ul>
        {cars.map((car) => (
          <li key={car.id}>
            <img src={car.img} width={274} height={268} alt="car" />
            <h3>
              {car.make} <span>{car.model}</span>, {car.year}
            </h3>
            <h3>{car.rentalPrice}</h3>
            <p>{car.address.split(",")[2]}</p>
            <p>{car.address.split(",")[1]}</p>
            <p>{car.rentalCompany}</p>

            <p>{car.type}</p>
            <p>{car.model}</p>
            <p>{car.id}</p>
            <p>{car.functionalities[0]}</p>
            {/* <button type="button" >
              
              heart</button> */}
            <Link to={"/favorites"}>
              <button>heard</button>
            </Link>
            <Modal
              isOpen={modalIsOpen}
              //  onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Car card"
            >
              <Card id={car.id} car={car} />
            </Modal>
            <button type="button" onClick={openModal}>
              Learn more
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
