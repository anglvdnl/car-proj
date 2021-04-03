import React from 'react'
import CarBlock from './cBlock'
import bmw from '../files/bmw.png'

function Cat() {

    return(
        <div className='categories'>
            <CarBlock model={bmw} />
            <CarBlock />
            <CarBlock />
            <CarBlock />
            <CarBlock />
            <CarBlock />
            <CarBlock />
            <CarBlock />
            <CarBlock />
            <CarBlock />
            <CarBlock />
            <CarBlock />
        </div>
    )
}

export default Cat