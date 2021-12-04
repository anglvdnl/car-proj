import React from 'react'
import CarBlock from './cBlock'

function Cat ({data, addCar, imgs}){
    return(
        <div className='categories'>
            <CarBlock imgs={imgs} data={data} addCar={addCar} />
        </div>
    )
}

export default Cat