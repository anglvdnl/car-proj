import React from 'react';
import FullCard from '../Car/FullCard'

function Comparison({data,cars, models, clearCars}) {
    return(
        <div className='comp-wrapper'>
            <FullCard clearCars={clearCars} cars={cars} data={data} />
        </div>
    );
}

export default Comparison