import { FaArrowRightLong } from "react-icons/fa6";

import { ContainerLink, Link, Main, Text, Title } from "./HomePage.styled";

export default function HomePage() {
  return (
    <Main>
      <Title>Rental car</Title>
      <Text>
        Get the freedom to explore Ukraine with Car Rental - your reliable
        partner for smooth and affordable travel. Discover enchanting landscapes
        and vibrant cities with our reliable car rental services. From the
        bustling streets of Kyiv to the scenic beauty of Ukraine, we offer
        top-notch car rental solutions in Ukraine. Enjoy the convenience of
        short-term or long-term car rental to make your trip to Ukraine
        unforgettable and stress-free. Rent a car in Kyiv and beyond, and let
        Car Rental become your gateway to adventure.
      </Text>

      <Text>
        We are proud of the growing preference of both Ukrainians and guests of
        our daily, monthly and long-term car rental services.
      </Text>
      
        <Link to={"/catalog"}>
          <ContainerLink>Choose a car <FaArrowRightLong /></ContainerLink>
          
        </Link>
    
    </Main>
  );
}
