import React from 'react'
import CarBlock from './cBlock'

function Cat ({data}){
    return(
        <div className='categories'>
            <CarBlock data={data} />
        </div>
    )
}

export default Cat