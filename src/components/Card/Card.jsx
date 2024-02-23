export const Card = () => {
    const cars = useSelector(selectCars);
    const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'
    const rentalConditions = cars.rentalConditions.split('/');
    
    return <div>
        {/* <img src={movie.poster_path
                         ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                         : defaultImg} width={500} alt={movie.title} /> */}
         <img src={cars.img }width={461} height={248} alt="car"/>
        <h3>
                      {s.make} <span>{cars.model}</span>, {cars.year}
          </h3>
        <p>{cars.adress }</p>
        <p>{cars.adress }</p>
        <p>Id:{cars.id }</p>
        <p>Year:{cars.year }</p>
        <p>Type:{cars.type}</p>
        <p>Fuel Consumption:{cars.fuelConsumption }</p>
        <p>Engine Size:{cars.engineSize }</p>
        <p>{cars.description }</p>
        <h3>Accessories and functionalities: </h3>
        <p>{cars.accessories[0]}</p>
<p>{cars.accessories[1]}</p>
<p>{cars.accessories[2]}</p>
<p>{cars.functionalities[0] }</p>
<p>{cars.functionalities[1] }</p>
        <p>{cars.functionalities[2]}</p>
        <h3>Rental Conditions: </h3>
        <p>{cars.rentalConditions }</p>
        <p>{cars.rentalConditions }</p>
        <p>{cars.rentalConditions } </p>
        <p>Mileage: {cars.mileage }</p>
        <p>Price: {cars.rentalPrice }</p>
        <button type="button">Rental car</button>
    </div>
}