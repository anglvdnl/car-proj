import React from 'react'

function CarBlock ({data, addCar, imgs}) {
    return(
        <>
        {imgs.map((carimg,index) => ( 
            <div key={index} className='car' onClick={() => addCar(index)}> 
                <img alt='' src={carimg.img}/>
            </div>
         ))}
        </>
    );
}

export default CarBlock