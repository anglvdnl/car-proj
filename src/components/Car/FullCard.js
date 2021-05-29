import React from 'react';
import { useParams } from 'react-router-dom'

function FullCard ({data}){
    const { brand } = useParams();

    return(
        <div className='full-card'>
            <h1>{data.brand}</h1>
        </div>
    )
}

export default FullCard