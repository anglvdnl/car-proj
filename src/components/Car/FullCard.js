import React from 'react';
import CompareBlock from './CompareBlock';

function FullCard ({data, cars, clearCars}){
    return(
        <div className='full-card'>
            <button className='reset' onClick={() => clearCars()}>Reset</button>
            {cars.map((cinfo, key) =>(
                <CompareBlock key={key} cinfo={data[cinfo]} />
            ))}
        </div>
        )
}

export default FullCard