import React from 'react'
import { Link } from 'react-router-dom';

function CarBlock ({data}) {
    return(
        <>
        {data.map((car,index) => ( 
            <Link to={`/comparison/${car.brand}`} key={index} className='car'>
                <img src={car.img}/>
            </Link>
         ))}
        </>
    );
}

export default CarBlock