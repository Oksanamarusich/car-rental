// import { useEffect } from "react";

import Modal from 'react-modal';

import { Card } from '../Card/Card';

import { useSelector, useDispatch } from "react-redux";
import { getCars } from "../../redux/cars/operations";
import { selectCars } from "../../redux/cars/selectors";
import { useState } from 'react';


Modal.setAppElement('#root');
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    backgroundColor:'rgba(0,0,0,0.5)',
  }
};

export const ListCars = () => {
  const cars = useSelector(selectCars);
  console.log("SELECTOR", cars);
  const dispatch = useDispatch();

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

   function closeModal() {
    setIsOpen(false);
  }

  // useEffect(() => {
  //   dispatch(getCars());
  // }, [dispatch]);

  return (
    <>
      <ul>
        {cars.map(car => (
          <li key={car.id} onClick = {openModal}>
            <img src={car.img} width={274} height={268} alt="car" />
            <h3>
              {car.make} <span>{car.model}</span>, {car.year}
            </h3>
            <h3>{car.rentalPrice}</h3>
            <p>{car.address}</p>
            <p>{car.address}</p>
            <p>{car.rentalCompany}</p>

            <p>{car.type}</p>
            <p>{car.model}</p>
            <p>{car.id}</p>
            <p>{car.functionalities[0]}</p>
            <button type="button"> heart</button>
          </li>
        ))}
      </ul>
       <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel=" Modal card"
      >
<Card/>
      </Modal>
      <button type="button" onClick={() => dispatch(getCars())}>
        Learn more
      </button>
    </>
  );
};
